const massas = [
    {
        nome: "Spaghetti alla Carbonara",
        descricao: "Massa com ovos frescos, guanciale crocante, queijo pecorino e pimenta-do-reino.",
        preco: "R$ 56,30",
        imagem: "./img/Massas/Spaghetti alla Carbonara.jpg"
    },

    {
        nome: "Lasagna alla Bolognese",
        descricao: "Camadas de massa fresca, ragu de carne bovina, molho bechamel e parmesão.",
        preco: "R$ 26,30",
        imagem: "./img/Massas/Lasagna alla Bolognese.jpg"
    },

    {
        nome: "Ravioli di Ricotta",
        descricao: "Massa recheada com ricota e espinafre ao molho de manteiga e sálvia.",
        preco: "R$ 66,30",
        imagem: "./img/Massas/Ravioli di Ricotta.jpg"
    },

    {
        nome: "Gnocchi al Pesto",
        descricao: "Nhoque de batata artesanal com molho de manjericão, pinoli e azeite.",
        preco: "R$ 96,30",
        imagem: "./img/Massas/Gnocchi al Pesto.jpg"
    },

    {
        nome: "Fettuccine Alfredo",
        descricao: "Massa longa servida com molho cremoso de manteiga e queijo parmesão.",
        preco: "R$ 46,30",
        imagem: "./img/Massas/Fettuccine Alfredo.jpg"
    },

    {
        nome: "Penne al Pomodoro",
        descricao: "Penne ao molho de tomate pelado, alho, pimenta calabresa e sálvia.",
        preco: "R$ 56,30",
        imagem: "./img/Massas/Penne al Pomodoro.jpg"
    }
];

const lista = document.getElementById("lista-massas");

massas.forEach(item => {
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