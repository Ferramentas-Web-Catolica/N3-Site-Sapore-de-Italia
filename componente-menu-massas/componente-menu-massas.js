// Componente Menu Massas
// Lista os pratos da categoria Massas em cards.
// Como usar:
//   <link rel="stylesheet" href="menu-massas/menu-massas.css">
//   <script src="menu-massas/menu-massas.js"></script>

(function () {
    var script = document.currentScript;

    // Pasta deste JS, pra achar as imagens de qualquer página
    var pasta = script.src.substring(0, script.src.lastIndexOf('/') + 1);

    // id="massas" é o alvo da rolagem dos botões do Seleção Menu
    var html = `
        <section class="menu-categoria" id="massas">
            <div class="lista-pratos" id="lista-massas"></div>
        </section>
    `;
    script.insertAdjacentHTML('beforebegin', html);

    var pratos = [
        { nome: "Spaghetti alla Carbonara", descricao: "Massa com ovos frescos, guanciale crocante, queijo pecorino e pimenta-do-reino.", preco: "R$ 56,30", imagem: "spaghetti-alla-carbonara.jpg" },
        { nome: "Lasagna alla Bolognese",   descricao: "Camadas de massa fresca, ragu de carne bovina, molho bechamel e parmesão.",        preco: "R$ 26,30", imagem: "lasagna-alla-bolognese.jpg" },
        { nome: "Ravioli di Ricotta",       descricao: "Massa recheada com ricota e espinafre ao molho de manteiga e sálvia.",              preco: "R$ 66,30", imagem: "ravioli-di-ricotta.jpg" },
        { nome: "Gnocchi al Pesto",         descricao: "Nhoque de batata artesanal com molho de manjericão, pinoli e azeite.",             preco: "R$ 96,30", imagem: "gnocchi-al-pesto.jpg" },
        { nome: "Fettuccine Alfredo",       descricao: "Massa longa servida com molho cremoso de manteiga e queijo parmesão.",             preco: "R$ 46,30", imagem: "fettuccine-alfredo.jpg" },
        { nome: "Penne al Pomodoro",        descricao: "Penne ao molho de tomate pelado, alho, pimenta calabresa e sálvia.",               preco: "R$ 56,30", imagem: "penne-al-pomodoro.jpg" }
    ];

    var lista = document.getElementById('lista-massas');
    pratos.forEach(function (item) {
        var card = document.createElement('div');
        card.classList.add('card-prato-menu');
        card.innerHTML = `
            <img class="prato-img" src="${pasta}img/${item.imagem}" alt="${item.nome}">
            <div class="prato-info">
                <h3>${item.nome}</h3>
                <p>${item.descricao}</p>
            </div>
            <span class="prato-preco">${item.preco}</span>
        `;
        lista.appendChild(card);
    });
})();
