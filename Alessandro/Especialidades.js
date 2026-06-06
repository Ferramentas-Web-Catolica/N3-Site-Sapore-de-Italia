// 1. OBJETO COM OS DADOS DAS ESPECIALIDADES (Seu "cardápio" dinâmico)
const pratosData = [
    {
        nome: "Penne al Pomodoro",
        imagem: "Imagens/especialidadepenne.png"
    },
    {
        nome: "Spaghetti alla Carbonara",
        imagem: "Imagens/especialidademacarrao.png"
    },
    {
        nome: "Lasagna alla Bolognese",
        imagem: "Imagens/especialidadelasanha.png"
    }
];

// 2. FUNÇÃO QUE CONSTRÓI E EXPÕE OS COMPONENTES NA TELA
function renderizarEspecialidades() {
    const gridContainer = document.getElementById('grid-conteudo');

    pratosData.forEach(prato => {
        // Cria a div principal do card do prato
        const card = document.createElement('div');
        card.classList.add('card-prato');

        // Monta a estrutura interna exatamente igual ao seu HTML original
        card.innerHTML = `
            <div class="moldura-img">
                <img src="${prato.imagem}" alt="${prato.nome}">
            </div>
            <h3>${prato.nome}</h3>
        `;

        // Coloca o card criado dentro da nossa grid de conteúdo
        gridContainer.appendChild(card);
    });
}

// EXECUÇÃO DO SCRIPT
// Constrói os pratos assim que a página é carregada
renderizarEspecialidades();