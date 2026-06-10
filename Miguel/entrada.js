// Array que armazena todos os pratos da categoria Entradas
const entradas = [

    // Cada objeto representa um prato
    {
        nome: "Bruschetta al Pomodoro", 
        descricao: "Pão italiano tostado, tomates frescos, alho, manjericão e azeite extra virgem.", 
        preco: "R$ 56,30", 
        imagem: "./img/Entradas/Bruschetta.jpg" 
    },
    {
        nome: "Focaccia com Alecrim",
        descricao: "Massa assada aromatizada com alecrim fresco, sal grosso e azeite de oliva.",
        preco: "R$ 26,30",
        imagem: "./img/Entradas/Focaccia.jpg"
    },
    {
        nome: "Carpaccio di Manzo",
        descricao: "Lâminas de filé mignon cru, rúcula, lascas de parmesão e molho de alcaparras.",
        preco: "R$ 66,30",
        imagem: "./img/Entradas/Carpaccio.jpg"
    },
    {
        nome: "Arancini Siciliani",
        descricao: "Bolinhos de risoto recheados com ragu de carne, ervilhas e muçarela.",
        preco: "R$ 96,30",
        imagem: "./img/Entradas/Arancini Siciliani.jpg"
    },
    {
        nome: "Insalata Caprese",
        descricao: "Tomate caqui, muçarela de búfala fresca, manjericão e redução de balsâmico.",
        preco: "R$ 46,30",
        imagem: "./img/Entradas/Insalata Caprese.jpg"
    },
    {
        nome: "Provoleta Grelhada",
        descricao: "Queijo provolone derretido na chapa com tomate seco e orégano.",
        preco: "R$ 56,30",
        imagem: "./img/Entradas/Provoleta Grelhada.jpg"
    }
];

// Procura no HTML o elemento com id="lista-entradas"
const lista = document.getElementById("lista-entradas");

// Percorre todos os itens do array entradas
entradas.forEach(item => {
    // Cria uma nova div para representar um card
    const card = document.createElement("div");
    // Adiciona a classe "card" para aplicar o CSS correspondente
    card.className = "card";
    // Insere o conteúdo HTML dentro da div criada
    card.innerHTML = `
        <!-- Imagem do prato -->
        <img class="imagem-prato" src="${item.imagem}" alt="${item.nome}">

        <!-- Área de informações -->
        <div class="info">
            <!-- Nome do prato -->
            <h2>${item.nome}</h2>
            <!-- Descrição do prato -->
            <p>${item.descricao}</p>
        </div>
        <!-- Área do preço -->
        <div class="preco">
            ${item.preco}
        </div>
    `;
    // Adiciona o card criado dentro do container principal
    lista.appendChild(card);
});