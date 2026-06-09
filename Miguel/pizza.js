const pizzas = [
    {
        nome: "Margherita",
        descricao: "Molho de tomate artesanal, muçarela de búfala, manjericão e azeite.",
        preco: "R$ 56,30",
        imagem: "./img/Pizzas/Margherita.jpg"
    },

    {
        nome: "Calabrese",
        descricao: "Molho de tomate, muçarela, linguiça calabresa fatiada e cebola roxa.",
        preco: "R$ 26,30",
        imagem: "./img/Pizzas/Calabrese.jpg"
    },

    {
        nome: "Quattro Formaggi",
        descricao: "Combinação de muçarela, gorgonzola, parmesão e queijo provolone.",
        preco: "R$ 66,30",
        imagem: "./img/Pizzas/Quattro Formaggi.jpg"
    },

    {
        nome: "Prosciutto e Funghi",
        descricao: "Molho de tomate, muçarela, presunto cozido e cogumelos frescos de Paris.",
        preco: "R$ 96,30",
        imagem: "./img/Pizzas/Prosciutto e Funghi.jpg"
    },

    {
        nome: "Diavola",
        descricao: "Molho de tomate, muçarela, salame picante italiano e pimenta calabresa.",
        preco: "R$ 46,30",
        imagem: "./img/Pizzas/Diavola.jpg"
    },

    {
        nome: "Vegetariana",
        descricao: "Molho de tomate, muçarela, pimentões, abobrinha grelhada e azeitonas.",
        preco: "R$ 56,30",
        imagem: "./img/Pizzas/Vegetariana.jpg"
    }
];

const lista = document.getElementById("lista-pizzas");

pizzas.forEach(item => {
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