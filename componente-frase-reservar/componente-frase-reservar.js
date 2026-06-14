// Componente Frase Reservar
// Faixa bege com a pergunta de incentivo à reserva.
// Como usar:
//   <link rel="stylesheet" href="componente-frase-reservar/componente-frase-reservar.css">
//   <script src="componente-frase-reservar/componente-frase-reservar.js"></script>

(function () {
    var script = document.currentScript;

    var html = `
        <section class="frase-reservar">
            <p>AINDA EM DÚVIDA PARA RESERVAR?</p>
        </section>
    `;

    script.insertAdjacentHTML('beforebegin', html);
})();
