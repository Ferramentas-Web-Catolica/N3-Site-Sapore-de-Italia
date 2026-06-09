const entradas = [
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

const lista = document.getElementById("lista-entradas");

entradas.forEach(item => {

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <img class="imagem-prato" src="${item.imagem}" alt="${item.nome}">

        <div class="info">
            <h2>${item.nome}</h2>
            <p>${item.descricao}</p>
        </div>

        <div class="preco">
            ${item.preco}
        </div>
    `;

    lista.appendChild(card);
});