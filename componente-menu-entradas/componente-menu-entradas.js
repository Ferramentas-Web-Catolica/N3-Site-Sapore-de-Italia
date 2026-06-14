// Componente Menu Entradas
// Lista os pratos da categoria Entradas em cards.
// Como usar:
//   <link rel="stylesheet" href="componente-menu-entradas/componente-menu-entradas.css">
//   <script src="componente-menu-entradas/componente-menu-entradas.js"></script>

(function () {
    var script = document.currentScript;

    // Pasta deste JS, pra achar as imagens de qualquer página
    var pasta = script.src.substring(0, script.src.lastIndexOf('/') + 1);

    // Injeta a seção com o título e o container (vazio) dos cards.
    // O id="entradas" é o alvo da rolagem dos botões do Seleção Menu.
    var html = `
        <section class="menu-categoria" id="entradas">
            <div class="lista-pratos" id="lista-entradas"></div>
        </section>
    `;
    script.insertAdjacentHTML('beforebegin', html);

    // Dados dos pratos
    var pratos = [
        { nome: "Bruschetta al Pomodoro", descricao: "Pão italiano tostado, tomates frescos, alho, manjericão e azeite extra virgem.", preco: "R$ 56,30", imagem: "bruschetta.jpg" },
        { nome: "Focaccia com Alecrim",   descricao: "Massa assada aromatizada com alecrim fresco, sal grosso e azeite de oliva.",       preco: "R$ 26,30", imagem: "focaccia.jpg" },
        { nome: "Carpaccio di Manzo",     descricao: "Lâminas de filé mignon cru, rúcula, lascas de parmesão e molho de alcaparras.",     preco: "R$ 66,30", imagem: "carpaccio.jpg" },
        { nome: "Arancini Siciliani",     descricao: "Bolinhos de risoto recheados com ragu de carne, ervilhas e muçarela.",             preco: "R$ 96,30", imagem: "arancini-siciliani.jpg" },
        { nome: "Insalata Caprese",       descricao: "Tomate caqui, muçarela de búfala fresca, manjericão e redução de balsâmico.",       preco: "R$ 46,30", imagem: "insalata-caprese.jpg" },
        { nome: "Provoleta Grelhada",     descricao: "Queijo provolone derretido na chapa com tomate seco e orégano.",                    preco: "R$ 56,30", imagem: "provoleta-grelhada.jpg" }
    ];

    // Monta um card pra cada prato
    var lista = document.getElementById('lista-entradas');
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
