#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/stat.h>

#ifdef _WIN32
    #include <winsock2.h>
    #include <ws2tcpip.h>
    #pragma comment(lib, "ws2_32.lib")
#else
    #include <sys/socket.h>
    #include <netinet/in.h>
    #include <unistd.h>
    #include <fcntl.h>
#endif

#define PORT 8080
#define BUFFER_SIZE 65536

void send_response(int client_socket, const char *header, const char *body, int body_len) {
    send(client_socket, header, strlen(header), 0);
    if (body && body_len > 0) {
        send(client_socket, body, body_len, 0);
    }
}

void serve_file(int client_socket, const char *filepath, const char *content_type) {
    FILE *file = fopen(filepath, "rb");
    if (!file) {
        const char *not_found = "HTTP/1.1 404 Not Found\r\nContent-Length: 0\r\n\r\n";
        send_response(client_socket, not_found, NULL, 0);
        return;
    }
    fseek(file, 0, SEEK_END);
    long fsize = ftell(file);
    fseek(file, 0, SEEK_SET);
    char *buffer = malloc(fsize);
    fread(buffer, 1, fsize, file);
    fclose(file);

    char header[256];
    snprintf(header, sizeof(header), "HTTP/1.1 200 OK\r\nContent-Type: %s\r\nContent-Length: %ld\r\n\r\n", content_type, fsize);
    send_response(client_socket, header, buffer, fsize);
    free(buffer);
}

int main() {
#ifdef _WIN32
    WSADATA wsa;
    WSAStartup(MAKEWORD(2,2), &wsa);
#endif

    int server_fd;
    struct sockaddr_in address;
    
    server_fd = socket(AF_INET, SOCK_STREAM, 0);
    int opt = 1;
    setsockopt(server_fd, SOL_SOCKET, SO_REUSEADDR, (char *)&opt, sizeof(opt));

    address.sin_family = AF_INET;
    address.sin_addr.s_addr = INADDR_ANY;
    address.sin_port = htons(PORT);

    bind(server_fd, (struct sockaddr *)&address, sizeof(address));
    listen(server_fd, 10);
    printf("Servidor rodando em http://localhost:%d\n", PORT);

    while (1) {
        int client_socket = accept(server_fd, NULL, NULL);
        char buffer[BUFFER_SIZE] = {0};
        recv(client_socket, buffer, BUFFER_SIZE - 1, 0);

        if (strncmp(buffer, "GET / ", 6) == 0) {
            serve_file(client_socket, "index.html", "text/html");
        } else if (strncmp(buffer, "GET /style.css", 14) == 0) {
            serve_file(client_socket, "style.css", "text/css");
        } else if (strncmp(buffer, "GET /app.js", 11) == 0) {
            serve_file(client_socket, "app.js", "application/javascript");
        } else if (strncmp(buffer, "GET /api/data", 13) == 0) {
            FILE *f = fopen("database.json", "r");
            if (f) {
                fclose(f);
                serve_file(client_socket, "database.json", "application/json");
            } else {
                const char *empty_json = "{\"semesters\":[]}";
                char header[256];
                snprintf(header, sizeof(header), "HTTP/1.1 200 OK\r\nContent-Type: application/json\r\nContent-Length: %zu\r\n\r\n", strlen(empty_json));
                send_response(client_socket, header, empty_json, strlen(empty_json));
            }
        } else if (strncmp(buffer, "POST /api/data", 14) == 0) {
            char *body = strstr(buffer, "\r\n\r\n");
            if (body) {
                body += 4;
                FILE *f = fopen("database.json", "w");
                fputs(body, f);
                fclose(f);
                const char *ok = "HTTP/1.1 200 OK\r\nContent-Length: 2\r\n\r\nOK";
                send_response(client_socket, ok, NULL, 0);
            }
        } else {
            const char *not_found = "HTTP/1.1 404 Not Found\r\n\r\n";
            send_response(client_socket, not_found, NULL, 0);
        }
#ifdef _WIN32
        closesocket(client_socket);
#else
        close(client_socket);
#endif
    }
    return 0;
}
