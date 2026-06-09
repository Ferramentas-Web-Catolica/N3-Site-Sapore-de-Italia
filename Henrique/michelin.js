(function () {
    // Referência do próprio <script> que está executando
    var script = document.currentScript;


    var html = `
<body>
    <div class="michelin-card">
        <div class="michelin-stars">
            <img src="imagem/Vector.svg" class="star-icon" alt="Estrela Michelin">
            <img src="imagem/Vector.svg" class="star-icon" alt="Estrela Michelin">
            <img src="imagem/Vector.svg" class="star-icon" alt="Estrela Michelin">
        </div>

        <h3 class="michelin-subtitle">Experiência Michelin</h3>
        <p class="michelin-text">Único restaurante Italiano com 3 estrelas Michelin do México</p>
    </div>
</body>

    `
    script.insertAdjacentHTML('beforebegin', html);
})();