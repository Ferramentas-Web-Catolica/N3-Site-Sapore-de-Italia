// Componente Seleção Menu
// Faixa verde com os botões das categorias. Cada botão é um link que leva
// à página daquela categoria, e o botão da página atual fica destacado.
// Como usar:
//   <link rel="stylesheet" href="selecao-menu/selecao-menu.css">
//   <script src="selecao-menu/selecao-menu.js"></script>

(function () {
    var script = document.currentScript;

    var html = `
        <section class="menu-selecao">
            <h2 class="menu-selecao-titulo">CONHEÇA NOSSO MENU COMPLETO</h2>
            <div class="menu-selecao-botoes">
                <a class="menu-btn" href="entradas.html" data-pagina="entradas.html">ENTRADAS</a>
                <a class="menu-btn" href="massas.html"   data-pagina="massas.html">MASSAS</a>
                <a class="menu-btn" href="pizzas.html"   data-pagina="pizzas.html">PIZZAS</a>
                <a class="menu-btn" href="doces.html"    data-pagina="doces.html">DOCES</a>
            </div>
        </section>
    `;
    script.insertAdjacentHTML('beforebegin', html);

    // Pega o nome do arquivo da página atual (ex: "entradas.html")
    var paginaAtual = location.pathname.split('/').pop();

    // Destaca o botão da categoria que está aberta no momento
    var botoes = document.querySelectorAll('.menu-btn');
    botoes.forEach(function (botao) {
        if (botao.dataset.pagina === paginaAtual) {
            botao.classList.add('active');
        }
    });
})();
