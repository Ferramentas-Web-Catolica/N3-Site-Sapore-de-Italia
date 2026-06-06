
(function () {
    var script = document.currentScript;
    var pasta = script.src.substring(0, script.src.lastIndexOf('/') + 1);

    var html = `
        <header class="header">
            <div class="header-top">
                <img src="${pasta}logosapore.png" alt="Sapore D'Italia" class="header-logo-icon">

                <a href="#" class="header-logo">Sapore D'Italia</a>

                <button class="hamburguer" onclick="abrirMenu()">
                    <span class="hamburguer-linha"></span>
                    <span class="hamburguer-linha"></span>
                    <span class="hamburguer-linha"></span>
                </button>
            </div>

            <nav class="header-nav">
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">MENU</a></li>
                    <li><a href="#">RESERVAS</a></li>
                    <li><a href="#">CONTATO</a></li>
                </ul>
            </nav>
        </header>

        <nav class="menu-mobile" id="menu-mobile">
            <ul>
                <li><a href="#">HOME</a></li>
                <li><a href="#">MENU</a></li>
                <li><a href="#">RESERVA</a></li>
                <li><a href="#">CONTATO</a></li>
            </ul>
        </nav>
    `;

    script.insertAdjacentHTML('beforebegin', html);
})();