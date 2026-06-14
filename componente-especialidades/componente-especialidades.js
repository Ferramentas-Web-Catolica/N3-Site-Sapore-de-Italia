// Componente Especialidades
// Painel vinho com os pratos em destaque (3 cards).
// Como usar:
//   <link rel="stylesheet" href="especialidades/especialidades.css">
//   <script src="especialidades/especialidades.js"></script>

(function () {
    var script = document.currentScript;

    // Pasta deste JS, pra achar as imagens de qualquer página
    var pasta = script.src.substring(0, script.src.lastIndexOf('/') + 1);

    // Injeta o painel com o título e o container (vazio) dos cards
    var html = `
        <section class="container-especialidades">
            <h2 class="titulo-especialidades">Especialidades Sapore D'Italia</h2>
            <div class="grid-especialidades" id="grid-especialidades"></div>
        </section>
    `;
    script.insertAdjacentHTML('beforebegin', html);

    // Dados dos pratos em destaque
    var pratos = [
        { nome: "Penne al Pomodoro",         imagem: pasta + "img/penne.png" },
        { nome: "Spaghetti alla Carbonara",  imagem: pasta + "img/carbonara.png" },
        { nome: "Lasagna alla Bolognese",    imagem: pasta + "img/lasanha.png" }
    ];

    // Monta um card pra cada prato
    var grid = document.getElementById('grid-especialidades');
    pratos.forEach(function (prato) {
        var card = document.createElement('div');
        card.classList.add('card-especialidade');
        card.innerHTML = `
            <div class="moldura-img">
                <img src="${prato.imagem}" alt="${prato.nome}">
            </div>
            <h3>${prato.nome}</h3>
        `;
        grid.appendChild(card);
    });
})();
