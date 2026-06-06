// Componente Footer
// Esse arquivo "injeta" o HTML do footer na página quando importado via <script>
// Para Utilizar:
//   <link rel="stylesheet" href="footer.css">
//   <script src="footer.js"></script>

(function () {
    // Referência do próprio <script> que está executando
    var script = document.currentScript;

    // HTML do footer dentro de uma template string (crase)
    var html = `
        <footer class="footer">
            <div class="footer-container">

                <!-- Coluna 1: Localização -->
                <div class="footer-item">
                    <svg class="footer-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <h3>LOCALIZAÇÃO</h3>
                    <p>Colonia Valle 638 - Juárez,<br>México.</p>
                </div>

                <!-- Coluna 2: Redes sociais -->
                <div class="footer-item">
                    <svg class="footer-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5"/>
                        <circle cx="12" cy="12" r="4"/>
                        <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
                    </svg>
                    <h3>SIGA-NOS</h3>
                    <p>@SaporedItalia___</p>
                </div>

                <!-- Coluna 3: Horário -->
                <div class="footer-item">
                    <svg class="footer-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                    </svg>
                    <h3>FUNCIONAMENTO</h3>
                    <p>Seg à Dom<br>19h às 23:30</p>
                </div>

            </div>

            <!-- Linha de copyright na parte de baixo -->
            <p class="footer-copy">&copy; 2026 por Sapore D'Italia, todos os direitos reservados. Nenhuma parte deste SITE pode ser reproduzida ou transmitida.</p>
        </footer>
    `;

    // Insere o HTML do footer no lugar onde o <script src="footer.js"> está
    script.insertAdjacentHTML('beforebegin', html);
})();