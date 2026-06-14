// Componente Contato
// Caixa vermelha "Contate-nos" com os ícones das redes sociais.
// Como usar:
//   <link rel="stylesheet" href="componente-contato/componente-contato.css">
//   <script src="componente-contato/componente-contato.js"></script>

(function () {
    var script = document.currentScript;

    // Pasta deste JS, pra achar os ícones de qualquer página
    var pasta = script.src.substring(0, script.src.lastIndexOf('/') + 1);

    var html = `
        <section class="contato">
            <h2 class="contato-titulo">CONTATE-NOS</h2>
            <div class="contato-icones">
                <a class="contato-icone" href="https://www.instagram.com/saporeditalia___?igsh=MWcxMTl6bWttNHE4dg==" target="_blank">
                    <img src="${pasta}img/facebook.png" alt="Facebook">
                </a>
                <a class="contato-icone" href="https://www.instagram.com/saporeditalia___?igsh=MWcxMTl6bWttNHE4dg==" target="_blank">
                    <img src="${pasta}img/instagram.png" alt="Instagram">
                </a>
                <a class="contato-icone" href="https://www.instagram.com/saporeditalia___?igsh=MWcxMTl6bWttNHE4dg==" target="_blank">
                    <img src="${pasta}img/whatsapp.png" alt="WhatsApp">
                </a>
            </div>
        </section>
    `;

    script.insertAdjacentHTML('beforebegin', html);
})();
