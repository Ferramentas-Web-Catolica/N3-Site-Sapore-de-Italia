// Componente Header
// Esse arquivo "injeta" o HTML do header na página quando importado via <script>
// Para utilizar:
//   <link rel="stylesheet" href="header.css">
//   <link rel="stylesheet" href="menu-hamburguer.css">
//   <script src="header.js"></script>
//   <script src="menu-hamburguer.js"></script>

(function () {
    // Pega a referência do próprio <script> que está rodando
    var script = document.currentScript;

    // Descobre em qual pasta esse JS está, pra montar o caminho da logo corretamente
    // mesmo quando o componente for usado em páginas de outras pastas
    var pasta = script.src.substring(0, script.src.lastIndexOf('/') + 1);

    var html = `
        <header class="header">
            <div class="header-top">
                <!-- Logo (imagem da esquerda) -->
                <img src="${pasta}logosapore.png" alt="Sapore D'Italia" class="header-logo-icon">

                <!-- Nome do restaurante (centralizado) -->
                <a href="#" class="header-logo">Sapore D'Italia</a>

                <!-- Botão hambúrguer (só aparece no mobile) -->
                <!-- onclick chama a função abrirMenu() que está em menu-hamburguer.js -->
                <button class="hamburguer" onclick="abrirMenu()">
                    <span class="hamburguer-linha"></span>
                    <span class="hamburguer-linha"></span>
                    <span class="hamburguer-linha"></span>
                </button>
            </div>

            <!-- Menu de navegação que aparece no desktop -->
            <nav class="header-nav">
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">MENU</a></li>
                    <li><a href="#">RESERVAS</a></li>
                    <li><a href="#">CONTATO</a></li>
                </ul>
            </nav>
        </header>

        <!-- Menu mobile (aparece quando clica no hambúrguer) -->
        <nav class="menu-mobile" id="menu-mobile">
            <ul>
                <li><a href="#">HOME</a></li>
                <li><a href="#">MENU</a></li>
                <li><a href="#">RESERVA</a></li>
                <li><a href="#">CONTATO</a></li>
            </ul>
        </nav>
    `;

    // insertAdjacentHTML('beforebegin', ...) insere o HTML logo antes do <script>
    // ou seja, o header aparece exatamente no lugar onde você colocou o <script src="header.js">
    script.insertAdjacentHTML('beforebegin', html);
})();