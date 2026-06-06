// 1. OBJETO COM OS DADOS DAS AVALIAÇÕES (Seu "banco de dados" local)
const avaliacoesData = [
    {
        nome: "Mariana Silva",
        estrelas: "★★★★★",
        comentario: "“comida muito boa, mas poucas opções de vinho”",
        data: "21/12/2025"
    },
    {
        nome: "Marcos Alex",
        estrelas: "★★★★★",
        comentario: "“Ambiente agradável e comida impecável.”",
        data: "11/10/2025"
    },
    {
        nome: "Sandro Souza",
        estrelas: "★★★★★",
        comentario: "“Sabor autêntico, parece Itália de verdade.”",
        data: "10/10/2025"
    },
    {
        nome: "Henrique Dony",
        estrelas: "★★★☆☆",
        comentario: "“Atendimento ruins e pratos medianos.”",
        data: "21/10/2025"
    },
    {
        nome: "Alex Pedro",
        estrelas: "★★★★★",
        comentario: "“Parmessão e molho impecáveis, voltarei com certeza”",
        data: "01/04/2025"
    },
    {
        nome: "José Silva",
        estrelas: "★★★★★",
        comentario: "“É um lugar bom, muito romântico.”",
        data: "18/09/2025"
    },
    {
        nome: "Maria Clara",
        estrelas: "★★★★★",
        comentario: "“Muito bom, voltarei com certeza”",
        data: "06/05/2025"
    },
    {
        nome: "Roberto Abreu",
        estrelas: "★★★★★",
        comentario: "“O Penne ao Pomodoro é maravilhoso”",
        data: "20/10/2025"
    }
    
];

// 2. FUNÇÃO QUE CONSTRÓI E EXPÕE OS COMPONENTES NA TELA
function renderizarComponentes() {
    const carrosselContainer = document.getElementById('carrossel-conteudo');

    avaliacoesData.forEach(item => {
        // Cria a div principal do card
        const card = document.createElement('div');
        card.classList.add('card-testemunho');

        // Cria a estrutura interna usando os dados do array
        card.innerHTML = `
            <h3 class="nome-cliente">${item.nome}</h3>
            <div class="estrelas-video">${item.estrelas}</div>
            <p class="comentario">${item.comentario}</p>
            <span class="data-avaliacao">${item.data}</span>
        `;

        // Coloca o card dentro do container do carrossel
        carrosselContainer.appendChild(card);
    });
}

// 3. INTERAÇÕES DE ARRASTE E ROLAGEM DO SEU CODIGO ORIGINAL
function inicializarInteracoes() {
    const carrossel = document.querySelector('.carrossel-wrapper');
    let isDown = false;
    let startX;
    let scrollLeft;

    // --- ROLAR COM A RODINHA DO MOUSE ---
    carrossel.addEventListener('wheel', (e) => {
        if (e.deltaY !== 0) {
            e.preventDefault();
            carrossel.scrollLeft += e.deltaY * 1.5; 
        }
    });

    // --- CLICAR E ARRASTAR COM A SETA DO MOUSE ---
    carrossel.addEventListener('mousedown', (e) => {
        isDown = true;
        carrossel.classList.add('arrastando');
        startX = e.pageX - carrossel.offsetLeft;
        scrollLeft = carrossel.scrollLeft;
    });

    carrossel.addEventListener('mouseleave', () => {
        isDown = false;
        carrossel.classList.remove('arrastando');
    });

    carrossel.addEventListener('mouseup', () => {
        isDown = false;
        carrossel.classList.remove('arrastando');
    });

    carrossel.addEventListener('mousemove', (e) => {
        if (!isDown) return; 
        e.preventDefault();
        const x = e.pageX - carrossel.offsetLeft;
        const walk = (x - startX) * 2; 
        carrossel.scrollLeft = scrollLeft - walk;
    });
}

// EXECUÇÃO DO SCRIPT
// Primeiro criamos os cards, depois ativamos os listeners do carrossel neles.
renderizarComponentes();
inicializarInteracoes();