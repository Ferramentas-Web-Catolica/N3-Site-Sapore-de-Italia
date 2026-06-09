const doces = [
    {
        nome: "Tiramisù",
        descricao: "Savoiardi, café espresso, mascarpone, ovos, açúcar, cacau em pó e licor de café.",
        preco: "R$ 56,30",
        imagem: "./img/Doces/Tiramisù.jpg"
    },

    {
        nome: "Panna Cotta",
        descricao: "Creme de leite, açúcar, baunilha e gelatina, finalizado com calda de frutas vermelhas.",
        preco: "R$ 26,30",
        imagem: "./img/Doces/Panna Cotta.jpg"
    },

    {
        nome: "Cannoli Siciliani",
        descricao: "Massa crocante recheada com creme de ricota doce e gotas de chocolate.",
        preco: "R$ 66,30",
        imagem: "./img/Doces/Cannoli Siciliani.jpg"
    },

    {
        nome: "Gelato Artigianale",
        descricao: "Seleção de sorvetes artesanais italianos (sabores clássicos da casa).",
        preco: "R$ 96,30",
        imagem: "./img/Doces/Gelato Artigianale.jpg"
    },

    {
        nome: "Affogato al Caffè",
        descricao: "Gelato de baunilha servido com uma dose quente de café espresso.",
        preco: "R$ 46,30",
        imagem: "./img/Doces/Affogato al Caffè.jpg"
    },

    {
        nome: "Mousse de Chocolate",
        descricao: "Mousse aerada de chocolate meio amargo com amêndoas tostadas.",
        preco: "R$ 56,30",
        imagem: "./img/Doces/Mousse de Chocolate.jpg"
    }
];

const lista = document.getElementById("lista-doces");

doces.forEach(item => {
    lista.innerHTML += `
        <div class="card">
            <img src="${item.imagem}" alt="${item.nome}">

            <div class="info">
                <h2>${item.nome}</h2>
                <p>${item.descricao}</p>
            </div>

            <div class="preco">${item.preco}</div>
        </div>
    `;
});