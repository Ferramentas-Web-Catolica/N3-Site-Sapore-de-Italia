// Componente Card do Prato
// Card avulso de um prato (modelo reutilizável). Como o componente do Andrey
// estava vazio, ele segue o mesmo visual dos cards do cardápio.
// Como usar:
//   <link rel="stylesheet" href="componente-card-prato/componente-card-prato.css">
//   <script src="componente-card-prato/componente-card-prato.js"></script>

(function () {
    var script = document.currentScript;

    // Dados do prato em destaque (troque aqui pra mostrar outro prato)
    var prato = {
        nome: "Penne al Pomodoro",
        descricao: "Penne ao molho de tomate pelado, alho, pimenta calabresa e sálvia.",
        preco: "R$ 56,30"
    };

    var html = `
        <div class="card-prato">
            <!-- Círculo que representa a foto do prato -->
            <div class="card-prato-foto"></div>
            <div class="card-prato-info">
                <h3>${prato.nome}</h3>
                <p>${prato.descricao}</p>
            </div>
            <span class="card-prato-preco">${prato.preco}</span>
        </div>
    `;

    script.insertAdjacentHTML('beforebegin', html);
})();
