// Componente Menu Doces
// Lista os pratos da categoria Doces em cards.
// Como usar:
//   <link rel="stylesheet" href="componente-menu-doces/componente-menu-doces.css">
//   <script src="componente-menu-doces/componente-menu-doces.js"></script>

(function () {
    var script = document.currentScript;

    // Pasta deste JS, pra achar as imagens de qualquer página
    var pasta = script.src.substring(0, script.src.lastIndexOf('/') + 1);

    // id="doces" é o alvo da rolagem dos botões do Seleção Menu
    var html = `
        <section class="menu-categoria" id="doces">
            <div class="lista-pratos" id="lista-doces"></div>
        </section>
    `;
    script.insertAdjacentHTML('beforebegin', html);

    var pratos = [
        { nome: "Tiramisù",             descricao: "Savoiardi, café espresso, mascarpone, ovos, açúcar, cacau em pó e licor de café.",     preco: "R$ 56,30", imagem: "tiramisu.jpg" },
        { nome: "Panna Cotta",          descricao: "Creme de leite, açúcar, baunilha e gelatina, com calda de frutas vermelhas.",          preco: "R$ 26,30", imagem: "panna-cotta.jpg" },
        { nome: "Cannoli Siciliani",    descricao: "Massa crocante recheada com creme de ricota doce e gotas de chocolate.",               preco: "R$ 66,30", imagem: "cannoli-siciliani.jpg" },
        { nome: "Gelato Artigianale",   descricao: "Seleção de sorvetes artesanais italianos (sabores clássicos da casa).",               preco: "R$ 96,30", imagem: "gelato-artigianale.jpg" },
        { nome: "Affogato al Caffè",    descricao: "Gelato de baunilha servido com uma dose quente de café espresso.",                    preco: "R$ 46,30", imagem: "affogato-al-caffe.jpg" },
        { nome: "Mousse de Chocolate",  descricao: "Mousse aerada de chocolate meio amargo com amêndoas tostadas.",                       preco: "R$ 56,30", imagem: "mousse-de-chocolate.jpg" }
    ];

    var lista = document.getElementById('lista-doces');
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
