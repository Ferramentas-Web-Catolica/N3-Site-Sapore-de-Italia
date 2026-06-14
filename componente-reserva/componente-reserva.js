// Componente Reserva
// Formulário "Reserve sua mesa" com validação simples.
// Como usar:
//   <link rel="stylesheet" href="componente-reserva/componente-reserva.css">
//   <script src="componente-reserva/componente-reserva.js"></script>

(function () {
    var script = document.currentScript;

    var html = `
        <section class="reserva">
            <form class="reserva-form" id="reserva-form">
                <h2 class="reserva-titulo">RESERVE SUA MESA</h2>

                <label>Nome:
                    <input type="text" name="nome" required>
                </label>

                <label>Email:
                    <input type="email" name="email" required>
                </label>

                <label>Telefone:
                    <input type="tel" name="telefone" required>
                </label>

                <label>Data e Horário:
                    <input type="text" name="data" required>
                </label>

                <label>Quantas pessoas:
                    <input type="number" name="pessoas" min="1" required>
                </label>

                <button type="submit" class="reserva-botao">CONFIRMAR RESERVA</button>

                <!-- Mensagem que aparece quando a reserva é enviada -->
                <p class="reserva-sucesso" id="reserva-sucesso"></p>
            </form>
        </section>
    `;
    script.insertAdjacentHTML('beforebegin', html);

    // Trata o envio do formulário
    var form = document.getElementById('reserva-form');
    var sucesso = document.getElementById('reserva-sucesso');

    form.addEventListener('submit', function (e) {
        e.preventDefault();              // impede o recarregamento da página

        // pega o nome digitado pra montar a mensagem
        var nome = form.nome.value;
        sucesso.textContent = 'Reserva confirmada! Obrigado, ' + nome + '. Em breve entraremos em contato.';
        form.reset();                    // limpa os campos
    });
})();
