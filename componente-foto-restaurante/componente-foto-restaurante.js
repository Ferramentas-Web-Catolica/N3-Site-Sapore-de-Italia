// Componente Foto Restaurante
// Mostra a foto da fachada/ambiente do restaurante.
// Como usar:
//   <link rel="stylesheet" href="foto-restaurante/foto-restaurante.css">
//   <script src="foto-restaurante/foto-restaurante.js"></script>

(function () {
    var script = document.currentScript;

    // Pasta deste JS, pra achar a imagem de qualquer página
    var pasta = script.src.substring(0, script.src.lastIndexOf('/') + 1);

    var html = `
        <section class="foto-restaurante">
            <img src="${pasta}img/restaurante.png" alt="Restaurante Sapore D'Italia">
        </section>
    `;

    script.insertAdjacentHTML('beforebegin', html);
})();
