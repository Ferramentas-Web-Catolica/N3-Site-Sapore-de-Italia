// Componente Banner
// Injeta a imagem do banner com o botão RESERVAR por cima.
// Como usar:
//   <link rel="stylesheet" href="componente-banner/componente-banner.css">
//   <script src="componente-banner/componente-banner.js"></script>

(function () {
    var script = document.currentScript;

    // Pasta deste JS, pra achar a imagem mesmo sendo usado de outra pasta
    var pasta = script.src.substring(0, script.src.lastIndexOf('/') + 1);

    var html = `
        <section class="banner">
            <!-- Imagem de fundo (o nome "Sapore d'Italia" já vem na arte) -->
            <img src="${pasta}img/banner.png" alt="Sapore d'Italia" class="banner-img">

            <!-- Botão de reserva por cima da imagem -->
            <a href="reserva.html" class="banner-botao">RESERVAR</a>
        </section>
    `;

    script.insertAdjacentHTML('beforebegin', html);
})();
