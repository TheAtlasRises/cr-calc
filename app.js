// Base de dados de todas as disciplinas extraídas da Estrutura Curricular
const ALL_COURSES = [
    // 1º Nível
    { code: "DEEQ0109", name: "INTRODUÇÃO À ENGENHARIA QUÍMICA", credits: 4 }, //[span_0](start_span)[span_0](end_span)
    { code: "DEMA0339", name: "CÁLCULO 1", credits: 6 }, //[span_1](start_span)[span_1](end_span)
    { code: "DEMA0340", name: "CÁLCULO VETORIAL E GEOMETRIA ANALÍTICA", credits: 4 }, //[span_2](start_span)[span_2](end_span)
    { code: "DEPB0137", name: "METODOLOGIA DO TRABALHO CIENTÍFICO E TECNOLÓGICO", credits: 3 }, //[span_3](start_span)[span_3](end_span)
    { code: "DEQU0053", name: "QUÍMICA GERAL I (EQ)", credits: 4 }, //[span_4](start_span)[span_4](end_span)
    { code: "DEQU0102", name: "QUÍMICA GERAL EXPERIMENTAL (EQ)", credits: 1 }, //[span_5](start_span)[span_5](end_span)
    { code: "DLER0876", name: "PORTUGUÊS INSTRUMENTAL (EQ)", credits: 3 }, //[span_6](start_span)[span_6](end_span)

    // 2º Nível
    { code: "DDET0141", name: "DESENHO TÉCNICO", credits: 3 }, //[span_7](start_span)[span_7](end_span)
    { code: "DEEQ0106", name: "UNIDADE CURRICULAR DE EXTENSÃO I", credits: 0 }, //[span_8](start_span)[span_8](end_span)
    { code: "DEEQ0110", name: "PRINCÍPIOS E CÁLCULOS DA ENGENHARIA QUÍMICA", credits: 4 }, //[span_9](start_span)[span_9](end_span)
    { code: "DEFI0247", name: "FÍSICA EXPERIMENTAL 1", credits: 1 }, //[span_10](start_span)[span_10](end_span)
    { code: "DEFI0254", name: "FÍSICA I", credits: 4 }, //[span_11](start_span)[span_11](end_span)
    { code: "DEMA0347", name: "CÁLCULO II", credits: 4 }, //[span_12](start_span)[span_12](end_span)
    { code: "DEQU0162", name: "QUÍMICA INORGÂNICA", credits: 4 }, //[span_13](start_span)[span_13](end_span)

    // 3º Nível
    { code: "DEEQ0114", name: "ESTÁTICA E MECÂNICA DOS MATERIAIS", credits: 4 }, //[span_14](start_span)[span_14](end_span)
    { code: "DEIN0010", name: "INTRODUÇÃO A COMPUTAÇÃO (MA/QM/QI/EQ)", credits: 3 }, //[span_15](start_span)[span_15](end_span)
    { code: "DEMA0338", name: "CÁLCULO III", credits: 4 }, //[span_16](start_span)[span_16](end_span)
    { code: "DEQU0079", name: "FÍSICO-QUÍMICA I (QM/QI)", credits: 3 }, //[span_17](start_span)[span_17](end_span)
    { code: "DEQU0179", name: "QUÍMICA ORGÂNICA", credits: 6 }, //[span_18](start_span)[span_18](end_span)
    { code: "DETE0237", name: "QUÍMICA ANALÍTICA (EQ)", credits: 4 }, //[span_19](start_span)[span_19](end_span)
    { code: "DETE0238", name: "QUÍMICA ANALÍTICA EXPERIMENTAL (EQ)", credits: 1 }, //[span_20](start_span)[span_20](end_span)

    // 4º Nível
    { code: "DEEQ0107", name: "UNIDADE CURRICULAR DE EXTENSÃO II", credits: 0 }, //[span_21](start_span)[span_21](end_span)
    { code: "DEEQ0111", name: "MATEMÁTICA APLICADA À ENGENHARIA QUÍMICA", credits: 6 }, //[span_22](start_span)[span_22](end_span)
    { code: "DEEQ0112", name: "TERMODINÂMICA APLICADA À ENGENHARIA QUÍMICA I", credits: 4 }, //[span_23](start_span)[span_23](end_span)
    { code: "DEEQ0113", name: "FENÔMENOS DE TRANSPORTE I", credits: 5 }, //[span_24](start_span)[span_24](end_span)
    { code: "DEFI0255", name: "FÍSICA III", credits: 4 }, //[span_25](start_span)[span_25](end_span)
    { code: "DEQU0178", name: "QUÍMICA ORGÂNICA EXPERIMENTAL", credits: 1 }, //[span_26](start_span)[span_26](end_span)

    // 5º Nível
    { code: "CCCT0094", name: "ADMINISTRAÇÃO E ECONOMIA", credits: 4 }, //[span_27](start_span)[span_27](end_span)
    { code: "DCON0003", name: "ECONOMIA", credits: 4 }, //[span_28](start_span)[span_28](end_span)
    { code: "DCON0117", name: "ECONOMIA (CP)", credits: 4 }, //[span_29](start_span)[span_29](end_span)
    { code: "DCON0142", name: "FUNDAMENTOS DE ECONOMIA (CO)", credits: 4 }, //[span_30](start_span)[span_30](end_span)
    { code: "DCON0144", name: "INTRODUÇÃO A ECONOMIA (DG)", credits: 3 }, //[span_31](start_span)[span_31](end_span)
    { code: "DCON0153", name: "INTRODUÇÃO À ECONOMIA", credits: 4 }, //[span_32](start_span)[span_32](end_span)
    { code: "DCON0157", name: "INTRODUÇÃO À ECONOMIA", credits: 4 }, //[span_33](start_span)[span_33](end_span)
    { code: "DCON0199", name: "INTRODUÇÃO À ECONOMIA", credits: 4 }, //[span_34](start_span)[span_34](end_span)
    { code: "DECC0018", name: "INTRODUÇÃO A ADMINISTRAÇÃO", credits: 4 }, //[span_35](start_span)[span_35](end_span)
    { code: "DECC0035", name: "INTRODUÇÃO A ADMINISTRAÇÃO (TU)", credits: 4 }, //[span_36](start_span)[span_36](end_span)
    { code: "DECC0110", name: "ADMINISTRAÇÃO, ORG. E PLANEJ. EMPRESARIAL (EE/EQ)", credits: 4 }, //[span_37](start_span)[span_37](end_span)
    { code: "DECC0119", name: "INTRODUÇÃO À ADMINISTRAÇÃO (AD)", credits: 4 }, //[span_38](start_span)[span_38](end_span)
    { code: "DECC0224", name: "INTRODUÇÃO A ADMINISTRAÇÃO", credits: 3 }, //[span_39](start_span)[span_39](end_span)
    { code: "DECC0255", name: "INTRODUÇÃO À ADMINISTRAÇÃO", credits: 4 }, //[span_40](start_span)[span_40](end_span)
    { code: "DEEE0235", name: "ELETRICIDADE APLICADA (EQ)", credits: 4 }, //[span_41](start_span)[span_41](end_span)
    { code: "DEEQ0115", name: "TERMODINÂMICA APLICADA À ENGENHARIA QUÍMICA II", credits: 4 }, //[span_42](start_span)[span_42](end_span)
    { code: "DEEQ0116", name: "FENÔMENOS DE TRANSPORTE II", credits: 4 }, //[span_43](start_span)[span_43](end_span)
    { code: "DEEQ0117", name: "OPERAÇÕES UNITÁRIAS I", credits: 4 }, //[span_44](start_span)[span_44](end_span)
    { code: "DEEQ0118", name: "MÉTODOS NUMÉRICOS APLICADOS À ENGENHARIA QUÍMICA", credits: 3 }, //[span_45](start_span)[span_45](end_span)
    { code: "DEEQ0119", name: "INTEGRADORA ENGENHARIA QUÍMICA I", credits: 1 }, //[span_46](start_span)[span_46](end_span)

    // 6º Nível
    { code: "DEEQ0120", name: "LABORATÓRIO DE ENGENHARIA QUÍMICA I", credits: 2 }, //[span_47](start_span)[span_47](end_span)
    { code: "DEEQ0121", name: "FENÔMENOS DE TRANSPORTE III", credits: 4 }, //[span_48](start_span)[span_48](end_span)
    { code: "DEEQ0122", name: "OPERAÇÕES UNITÁRIAS II", credits: 4 }, //[span_49](start_span)[span_49](end_span)
    { code: "DEEQ0123", name: "CINÉTICA QUÍMICA APLICADA À ENGENHARIA QUÍMICA", credits: 4 }, //[span_50](start_span)[span_50](end_span)
    { code: "DEEQ0124", name: "UNIDADE CURRICULAR DE EXTENSÃO III", credits: 0 }, //[span_51](start_span)[span_51](end_span)
    { code: "DEMA0343", name: "ESTATÍSTICA E PROBABILIDADE", credits: 4 }, //[span_52](start_span)[span_52](end_span)
    { code: "DPSI0132", name: "RELAÇÕES INTERPESSOAIS", credits: 3 }, //[span_53](start_span)[span_53](end_span)

    // 7º Nível
    { code: "DEEQ0125", name: "CIÊNCIA DOS MATERIAIS", credits: 4 }, //[span_54](start_span)[span_54](end_span)
    { code: "DEEQ0126", name: "LABORATÓRIO DE ENGENHARIA QUÍMICA II", credits: 2 }, //[span_55](start_span)[span_55](end_span)
    { code: "DEEQ0127", name: "BIOENGENHARIA I", credits: 4 }, //[span_56](start_span)[span_56](end_span)
    { code: "DEEQ0128", name: "INSTRUMENTAÇÃO E CONTROLE DE PROCESSOS QUÍMICOS", credits: 5 }, //[span_57](start_span)[span_57](end_span)
    { code: "DEEQ0129", name: "CÁLCULO DE REATORES QUÍMICOS", credits: 4 }, //[span_58](start_span)[span_58](end_span)
    { code: "DEEQ0130", name: "OPERAÇÕES UNITÁRIAS III", credits: 3 }, //[span_59](start_span)[span_59](end_span)

    // 8º Nível
    { code: "DEEQ0131", name: "ANÁLISE TÉCNICO-ECONÔMICA DE PROCESSOS QUÍMICOS", credits: 4 }, //[span_60](start_span)[span_60](end_span)
    { code: "DEEQ0132", name: "LABORATÓRIO DE ENGENHARIA QUÍMICA III", credits: 2 }, //[span_61](start_span)[span_61](end_span)
    { code: "DEEQ0133", name: "MODELAGEM E SIMULAÇÃO DE PROCESSOS QUÍMICOS", credits: 3 }, //[span_62](start_span)[span_62](end_span)
    { code: "DEEQ0134", name: "BIOENGENHARIA II", credits: 4 }, //[span_63](start_span)[span_63](end_span)
    { code: "DEEQ0135", name: "CORROSÃO E DEGRADAÇÃO DE MATERIAIS", credits: 3 }, //[span_64](start_span)[span_64](end_span)
    { code: "DEEQ0136", name: "INTEGRADORA ENGENHARIA QUÍMICA II", credits: 3 }, //[span_65](start_span)[span_65](end_span)
    { code: "DEEQ0137", name: "CONTROLE DE QUALIDADE", credits: 4 }, //[span_66](start_span)[span_66](end_span)

    // 9º Nível (Optativas e Obrigatórias de final de curso)
    { code: "CCCT0034", name: "EMPREENDEDORISMO E INOVAÇÃO (CT)", credits: 4 }, //[span_67](start_span)[span_67](end_span)
    { code: "CCCT0110", name: "PRÁTICAS DE LEITURA E ESCRITA EM INGLÊS", credits: 4 }, //[span_68](start_span)[span_68](end_span)
    { code: "DEEQ0144", name: "BIOTECNOLOGIA NA INDÚSTRIA DE ALIMENTOS", credits: 3 }, //[span_69](start_span)[span_69](end_span)
    { code: "DEEQ0145", name: "EMBALAGEM DE ALIMENTOS", credits: 3 }, //[span_70](start_span)[span_70](end_span)
    { code: "DEEQ0146", name: "QUALIDADE E SEGURANÇA DE ALIMENTOS", credits: 3 }, //[span_71](start_span)[span_71](end_span)
    { code: "DEEQ0147", name: "TÓPICOS EM BIOQUÍMICA E MICROBIOLOGIA", credits: 3 }, //[span_72](start_span)[span_72](end_span)
    { code: "DEEQ0148", name: "TÓPICOS ESPECIAIS EM ALIMENTOS E BIOPRODUTOS", credits: 3 }, //[span_73](start_span)[span_73](end_span)
    { code: "DEEQ0149", name: "INTRODUÇÃO A BIORREFINARIA", credits: 3 }, //[span_74](start_span)[span_74](end_span)
    { code: "DEEQ0150", name: "PETRÓLEO: FUNDAMENTOS E PERSPECTIVAS", credits: 3 }, //[span_75](start_span)[span_75](end_span)
    { code: "DEEQ0151", name: "PROCESSOS DE TRANSFORMAÇÃO TERMOQUÍMICA", credits: 3 }, //[span_76](start_span)[span_76](end_span)
    { code: "DEEQ0152", name: "TECNOLOGIAS DE PRODUÇÃO DE ÁLCOOL E AÇÚCAR", credits: 3 }, //[span_77](start_span)[span_77](end_span)
    { code: "DEEQ0153", name: "TECNOLOGIAS E PRÁTICAS DE ENERGIA EFICIENTE NOS SISTEMAS DE REFRIGERAÇÃO", credits: 3 }, //[span_78](start_span)[span_78](end_span)
    { code: "DEEQ0154", name: "TÓPICOS ESPECIAIS EM ENERGIA E MEIO AMBIENTE", credits: 3 }, //[span_79](start_span)[span_79](end_span)
    { code: "DEEQ0155", name: "TRATAMENTO DE ÁGUA", credits: 3 }, //[span_80](start_span)[span_80](end_span)
    { code: "DEEQ0156", name: "ENGENHARIA DE MATERIAIS POLIMÉRICOS AVANÇADOS", credits: 3 }, //[span_81](start_span)[span_81](end_span)
    { code: "DEEQ0157", name: "MATERIAIS CERÂMICOS", credits: 3 }, //[span_82](start_span)[span_82](end_span)
    { code: "DEEQ0158", name: "METALURGIA EXTRATIVA E SIDERURGIA", credits: 3 }, //[span_83](start_span)[span_83](end_span)
    { code: "DEEQ0159", name: "TÓPICOS ESPECIAIS EM MATERIAIS", credits: 3 }, //[span_84](start_span)[span_84](end_span)
    { code: "DEEQ0160", name: "MÉTODOS NUMÉRICOS AVANÇADOS", credits: 3 }, //[span_85](start_span)[span_85](end_span)
    { code: "DEEQ0161", name: "TÓPICOS EM SIMULAÇÃO DE PROCESSOS QUÍMICOS", credits: 3 }, //[span_86](start_span)[span_86](end_span)
    { code: "DEEQ0162", name: "OTIMIZAÇÃO DE PROCESSOS QUÍMICOS E BIOQUÍMICOS", credits: 3 }, //[span_87](start_span)[span_87](end_span)
    { code: "DEEQ0163", name: "MODELAGEM DE PROCESSOS A ALTA PRESSÃO", credits: 3 }, //[span_88](start_span)[span_88](end_span)
    { code: "DEEQ0164", name: "TÓPICOS ESPECIAIS EM MODELAGEM E SIMULAÇÃO", credits: 3 }, //[span_89](start_span)[span_89](end_span)
    { code: "DEEQ0165", name: "PLANEJAMENTO DE EXPERIMENTOS", credits: 3 }, //[span_90](start_span)[span_90](end_span)
    { code: "DEEQ0166", name: "SEGURANÇA DE PROCESSOS E PREVENÇÃO DE PERDAS", credits: 3 }, //[span_91](start_span)[span_91](end_span)
    { code: "DEEQ0167", name: "PROPRIEDADES FÍSICAS E TÉRMICAS EM ALIMENTOS E BIOMATERIAIS", credits: 3 }, //[span_92](start_span)[span_92](end_span)
    { code: "DEEQ0168", name: "TÓPICOS EM BIOTECNOLOGIA", credits: 3 }, //[span_93](start_span)[span_93](end_span)
    { code: "DEEQ0169", name: "MICROBIOLOGIA INDUSTRIAL", credits: 3 }, //[span_94](start_span)[span_94](end_span)
    { code: "DEEQ0170", name: "TÓPICOS EM ENGENHARIA QUÍMICA", credits: 3 }, //[span_95](start_span)[span_95](end_span)
    { code: "DEQU0001", name: "CROMATOGRAFIA", credits: 2 }, //[span_96](start_span)[span_96](end_span)
    { code: "DEQU0165", name: "MECANISMO DE REAÇÕES ORGÂNICAS", credits: 4 }, //[span_97](start_span)[span_97](end_span)
    { code: "DETE0219", name: "FUNDAMENTOS DA INDÚSTRIA DO PETRÓLEO, GÁS NATURAL E BIOCOMBUSTÍVEL", credits: 4 }, //[span_98](start_span)[span_98](end_span)
    { code: "DETE0232", name: "QUÍMICA VERDE E SUAS TECNOLOGIAS", credits: 3 }, //[span_99](start_span)[span_99](end_span)
    { code: "DLER0543", name: "LIBRAS", credits: 4 }, //[span_100](start_span)[span_100](end_span)
    { code: "DSOC0359", name: "RELAÇÕES ÉTNICO-RACIAIS E CULTURA AFRO-BRASILEIRA E INDÍGENA", credits: 3 }, //[span_101](start_span)[span_101](end_span)
    { code: "DEEQ0138", name: "INTEGRADORA ENGENHARIA QUÍMICA III", credits: 3 }, //[span_102](start_span)[span_102](end_span)
    { code: "DEEQ0139", name: "LABORATÓRIO DE ENGENHARIA QUÍMICA IV", credits: 2 }, //[span_103](start_span)[span_103](end_span)
    { code: "DEEQ0140", name: "TRABALHO DE CONCLUSÃO DE CURSO I", credits: 4 }, //[span_104](start_span)[span_104](end_span)
    { code: "DEEQ0141", name: "TRABALHO DE CONCLUSÃO DE CURSO", credits: 0 }, //[span_105](start_span)[span_105](end_span)

    // 10º Nível
    { code: "DEEQ0142", name: "ATIVIDADES COMPLEMENTARES", credits: 0 }, //[span_106](start_span)[span_106](end_span)
    { code: "DEEQ0143", name: "ESTÁGIO OBRIGATÓRIO", credits: 0 } //[span_107](start_span)[span_107](end_span)
];

let userData = { semesters: [] };
let currentSemesterIndex = 0;

// Navegação do Side Panel
function nav(pageId) {
    document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(pageId).style.display = 'block';
    document.getElementById('btn-' + pageId).classList.add('active');
    if(pageId === 'resultados') calculateCR();
    if(pageId === 'gerenciar') renderSemestersGrid();
}

async function init() {
    // Busca dados no cache do servidor C
    try {
        const response = await fetch('/api/data');
        if (response.ok) {
            userData = await response.json();
        }
    } catch (e) { console.log("Servidor local não iniciado ou sem dados anteriores."); }
    
    if (userData.semesters.length === 0) {
        userData.semesters.push({ name: "Meu Primeiro Semestre", courses: [] });
    }
    
    populateCourseSelect();
    populateCourseTable();
    renderCurrentSemester();
}

async function saveData() {
    await fetch('/api/data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
    });
}

function populateCourseSelect() {
    const select = document.getElementById('course-select');
    ALL_COURSES.forEach(c => {
        let opt = document.createElement('option');
        opt.value = c.code;
        opt.textContent = `${c.name} (${c.credits}cr)`;
        select.appendChild(opt);
    });
}

function populateCourseTable() {
    const tbody = document.querySelector('#course-table tbody');
    ALL_COURSES.forEach(c => {
        tbody.innerHTML += `<tr><td>${c.code}</td><td>${c.name}</td><td>${c.credits}</td></tr>`;
    });
}

function addCourseToSemester() {
    const select = document.getElementById('course-select');
    const p1 = parseFloat(document.getElementById('p1').value) || 0;
    const p2 = parseFloat(document.getElementById('p2').value) || 0;
    const p3 = parseFloat(document.getElementById('p3').value) || 0;
    
    if(!select.value) return alert("Selecione uma matéria.");

    const courseObj = ALL_COURSES.find(c => c.code === select.value);
    
    // A nota da disciplina é a soma das 3 provas dividida por 3
    const finalGrade = (p1 + p2 + p3) / 3.0;

    userData.semesters[currentSemesterIndex].courses.push({
        code: courseObj.code,
        name: courseObj.name,
        credits: courseObj.credits,
        grade: finalGrade,
        p1: p1, p2: p2, p3: p3
    });

    saveData();
    renderCurrentSemester();
    
    // Limpar campos
    document.getElementById('p1').value = '';
    document.getElementById('p2').value = '';
    document.getElementById('p3').value = '';
}

function renderCurrentSemester() {
    const ul = document.getElementById('current-semester-list');
    ul.innerHTML = '';
    const courses = userData.semesters[currentSemesterIndex].courses;
    
    courses.forEach((c, idx) => {
        ul.innerHTML += `<li class="course-item">
            <div><strong>${c.name}</strong> (${c.credits}cr) <br> Nota Final: ${c.grade.toFixed(2)}</div>
            <button onclick="removeCourse(${idx})" class="danger-btn">Remover</button>
        </li>`;
    });
}

function removeCourse(idx) {
    userData.semesters[currentSemesterIndex].courses.splice(idx, 1);
    saveData();
    renderCurrentSemester();
}

function createNewSemester() {
    const name = document.getElementById('new-semester-name').value || `Semestre ${userData.semesters.length + 1}`;
    userData.semesters.push({ name: name, courses: [] });
    saveData();
    renderSemestersGrid();
}

function selectSemester(idx) {
    currentSemesterIndex = idx;
    nav('atual');
    renderCurrentSemester();
}

function renderSemestersGrid() {
    const grid = document.getElementById('semesters-list');
    grid.innerHTML = '';
    userData.semesters.forEach((sem, idx) => {
        grid.innerHTML += `<div class="card" style="border-left: 4px solid var(--primary);">
            <h3>${sem.name}</h3>
            <p>${sem.courses.length} matérias cadastradas</p>
            <br>
            <button onclick="selectSemester(${idx})" class="action-btn">Editar este Semestre</button>
        </div>`;
    });
}

function calculateCR() {
    let totalWeighted = 0;
    let totalCredits = 0;
    const statsContainer = document.getElementById('stats-container');
    statsContainer.innerHTML = '<h3>Detalhes das Disciplinas</h3>';

    // Cálculo varrendo todos os semestres baseando-se na fórmula provida
    userData.semesters.forEach(sem => {
        sem.courses.forEach(c => {
            // Ignora disciplinas com 0 créditos no cálculo final do CR
            if (c.credits > 0) {
                totalWeighted += (c.grade * c.credits); // Somatório(Nota * Créditos)[span_108](start_span)[span_108](end_span)
                totalCredits += c.credits;             // Somatório(Créditos Totais)[span_109](start_span)[span_109](end_span)
            }
            
            statsContainer.innerHTML += `<p><strong>${c.name}:</strong> Média ${(c.grade).toFixed(2)} | Status: <span style="color:${c.grade >= 7 ? 'green' : 'red'}">${c.grade >= 7 ? 'Aprovado' : 'Abaixo da Média'}</span></p><hr style="margin: 10px 0; border:0; border-top:1px solid #eee;">`;
        });
    });

    // O CR é a divisão[span_110](start_span)[span_110](end_span)
    const cr = totalCredits > 0 ? (totalWeighted / totalCredits) : 0; 
    document.getElementById('cr-display').innerText = cr.toFixed(4);
}

window.onload = init;

