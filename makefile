CC = gcc
CFLAGS = -Wall -O2
TARGET = server

# Detecta o sistema operacional para linkar as bibliotecas corretas
ifeq ($(OS),Windows_NT)
    LIBS = -lws2_32
    EXT = .exe
    CLEAN_CMD = del $(TARGET)$(EXT)
else
    LIBS = 
    EXT = 
    CLEAN_CMD = rm -f $(TARGET)$(EXT)
endif

build:
	$(CC) server.c -o $(TARGET)$(EXT) $(CFLAGS) $(LIBS)

run: build
	./$(TARGET)$(EXT)

clean:
	$(CLEAN_CMD)

