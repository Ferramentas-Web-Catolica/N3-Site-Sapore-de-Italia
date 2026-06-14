// Componente Header
// Injeta o HTML do cabeçalho na página no ponto onde o <script> for colocado.
// Como usar:
//   <link rel="stylesheet" href="componente-header/componente-header.css">
//   <link rel="stylesheet" href="componente-menu-hamburguer/componente-menu-hamburguer.css">
//   <script src="componente-header/componente-header.js"></script>
//   <script src="componente-menu-hamburguer/componente-menu-hamburguer.js"></script>

(function () {
    // Pega o próprio <script> que está rodando
    var script = document.currentScript;

    // Descobre a pasta deste JS pra montar o caminho da logo corretamente,
    // mesmo quando o header for usado a partir de uma página em outra pasta
    var pasta = script.src.substring(0, script.src.lastIndexOf('/') + 1);

    // HTML do header dentro de uma template string (crase) pra quebrar linha
    var html = `
        <header class="header">
            <div class="header-top">
                <!-- Logo (lado esquerdo) -->
                <img src="${pasta}logosapore.png" alt="Sapore D'Italia" class="header-logo-icon">

                <!-- Nome do restaurante (centralizado) -->
                <a href="index.html" class="header-logo">Sapore D'Italia</a>

                <!-- Botão hambúrguer (só aparece no mobile) -->
                <!-- onclick chama abrirMenu() que está em menu-hamburguer.js -->
                <button class="hamburguer" onclick="abrirMenu()">
                    <span class="hamburguer-linha"></span>
                    <span class="hamburguer-linha"></span>
                    <span class="hamburguer-linha"></span>
                </button>
            </div>

            <!-- Menu de navegação do desktop -->
            <nav class="header-nav">
                <ul>
                    <li><a href="index.html">HOME</a></li>
                    <li><a href="entradas.html">MENU</a></li>
                    <li><a href="reserva.html">RESERVAS</a></li>
                    <li><a href="contato.html">CONTATO</a></li>
                </ul>
            </nav>
        </header>

        <!-- Menu mobile (aparece quando clica no hambúrguer) -->
        <nav class="menu-mobile" id="menu-mobile">
            <ul>
                <li><a href="index.html">HOME</a></li>
                <li><a href="entradas.html">MENU</a></li>
                <li><a href="reserva.html">RESERVA</a></li>
                <li><a href="contato.html">CONTATO</a></li>
            </ul>
        </nav>
    `;

    // Insere o HTML logo ANTES do <script>, ou seja, no lugar onde ele foi colocado
    script.insertAdjacentHTML('beforebegin', html);
})();
