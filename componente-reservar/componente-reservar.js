// Componente Reservar (chamada de ação)
// Card verde com a frase e o botão RESERVAR.
// Como usar:
//   <link rel="stylesheet" href="componente-reservar/componente-reservar.css">
//   <script src="componente-reservar/componente-reservar.js"></script>

(function () {
    var script = document.currentScript;

    var html = `
        <section class="cta-reserva">
            <p class="cta-texto">GARANTA SUA RESERVA AGORA MESMO!</p>
            <a href="reserva.html" class="cta-botao">RESERVAR</a>
        </section>
    `;

    script.insertAdjacentHTML('beforebegin', html);
})();
