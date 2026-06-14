// Componente Michelin
// Card verde com as 3 estrelas e o texto da experiência Michelin.
// Como usar:
//   <link rel="stylesheet" href="componente-michelin/componente-michelin.css">
//   <script src="componente-michelin/componente-michelin.js"></script>

(function () {
    var script = document.currentScript;

    // Pasta deste JS, pra achar o SVG da estrela de qualquer página
    var pasta = script.src.substring(0, script.src.lastIndexOf('/') + 1);

    var html = `
        <section class="michelin-card">
            <!-- As 3 estrelas Michelin (mesmo SVG repetido) -->
            <div class="michelin-stars">
                <img src="${pasta}img/estrela.svg" class="star-icon" alt="Estrela Michelin">
                <img src="${pasta}img/estrela.svg" class="star-icon" alt="Estrela Michelin">
                <img src="${pasta}img/estrela.svg" class="star-icon" alt="Estrela Michelin">
            </div>

            <h3 class="michelin-subtitle">Experiência Michelin</h3>
            <p class="michelin-text">Único restaurante Italiano com 3 estrelas Michelin do México</p>
        </section>
    `;

    script.insertAdjacentHTML('beforebegin', html);
})();
