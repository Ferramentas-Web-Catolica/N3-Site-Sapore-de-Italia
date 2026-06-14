// Componente Menu Pizzas
// Lista os pratos da categoria Pizzas em cards.
// Como usar:
//   <link rel="stylesheet" href="menu-pizzas/menu-pizzas.css">
//   <script src="menu-pizzas/menu-pizzas.js"></script>

(function () {
    var script = document.currentScript;

    // Pasta deste JS, pra achar as imagens de qualquer página
    var pasta = script.src.substring(0, script.src.lastIndexOf('/') + 1);

    // id="pizzas" é o alvo da rolagem dos botões do Seleção Menu
    var html = `
        <section class="menu-categoria" id="pizzas">
            <div class="lista-pratos" id="lista-pizzas"></div>
        </section>
    `;
    script.insertAdjacentHTML('beforebegin', html);

    var pratos = [
        { nome: "Margherita",          descricao: "Molho de tomate artesanal, muçarela de búfala, manjericão e azeite.",            preco: "R$ 56,30", imagem: "margherita.jpg" },
        { nome: "Calabrese",           descricao: "Molho de tomate, muçarela, linguiça calabresa fatiada e cebola roxa.",           preco: "R$ 26,30", imagem: "calabrese.jpg" },
        { nome: "Quattro Formaggi",    descricao: "Combinação de muçarela, gorgonzola, parmesão e queijo provolone.",               preco: "R$ 66,30", imagem: "quattro-formaggi.jpg" },
        { nome: "Prosciutto e Funghi", descricao: "Molho de tomate, muçarela, presunto cozido e cogumelos frescos de Paris.",       preco: "R$ 96,30", imagem: "prosciutto-e-funghi.jpg" },
        { nome: "Diavola",             descricao: "Molho de tomate, muçarela, salame picante italiano e pimenta calabresa.",        preco: "R$ 46,30", imagem: "diavola.jpg" },
        { nome: "Vegetariana",         descricao: "Molho de tomate, muçarela, pimentões, abobrinha grelhada e azeitonas.",          preco: "R$ 56,30", imagem: "vegetariana.jpg" }
    ];

    var lista = document.getElementById('lista-pizzas');
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
