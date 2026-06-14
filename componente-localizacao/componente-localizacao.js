// Componente Localização
// Caixa vermelha com endereço, mapa do Google e horário de funcionamento.
// Os ícones (pino e relógio) são SVG inline, sem depender de biblioteca externa.
// Como usar:
//   <link rel="stylesheet" href="localizacao/localizacao.css">
//   <script src="localizacao/localizacao.js"></script>

(function () {
    var script = document.currentScript;

    var html = `
        <section class="localizacao">
            <h2 class="localizacao-titulo">VENHA NOS VISITAR</h2>

            <!-- Ícone de pino (localização) -->
            <svg class="localizacao-icone" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
            </svg>

            <p class="localizacao-endereco">
                Avenida Colonia del Valle 636, Col del Valle Centro,
                Benito Juárez, 03100 Ciudad de México, CDMX, México
            </p>

            <!-- Mapa incorporado do Google Maps -->
            <div class="localizacao-mapa">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10644.941149657863!2d-99.16843732712682!3d19.38841028904741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff0b5b7a0c4d%3A0xbbcbbf9e6a3c54b6!2sSapore%20d%20Italia!5e0!3m2!1spt-BR!2sbr!4v1781014026086!5m2!1spt-BR!2sbr"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>

            <!-- Ícone de relógio (horário) -->
            <svg class="localizacao-icone" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
            </svg>

            <h3 class="localizacao-subtitulo">HORÁRIO DE FUNCIONAMENTO</h3>
            <p class="localizacao-horario">Seg à Dom<br>19h às 23:30h</p>
        </section>
    `;

    script.insertAdjacentHTML('beforebegin', html);
})();
