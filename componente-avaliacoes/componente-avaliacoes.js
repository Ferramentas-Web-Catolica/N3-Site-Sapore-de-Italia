// Componente Avaliacoes
// Carrossel horizontal com os depoimentos dos clientes.
// Como usar:
//   <link rel="stylesheet" href="componente-avaliacoes/componente-avaliacoes.css">
//   <script src="componente-avaliacoes/componente-avaliacoes.js"></script>

(function () {
    var script = document.currentScript;

    // Injeta a faixa verde e o container (vazio) do carrossel
    var html = `
        <section class="container-avaliacoes">
            <div class="carrossel-avaliacoes" id="carrossel-avaliacoes"></div>
            <!-- Dica visual de que dá pra arrastar/rolar os cards -->
            <p class="aval-dica">‹ arraste para o lado para ver mais ›</p>
        </section>
    `;
    script.insertAdjacentHTML('beforebegin', html);

    // Dados das avaliações
    var avaliacoes = [
        { nome: "Mariana Silva", estrelas: "★★★★★", comentario: "“Comida muito boa, mas poucas opções de vinho”", data: "21/12/2025" },
        { nome: "Marcos Alex",   estrelas: "★★★★★", comentario: "“Ambiente agradável e comida impecável.”",       data: "11/10/2025" },
        { nome: "Sandro Souza",  estrelas: "★★★★★", comentario: "“Sabor autêntico, parece Itália de verdade.”",    data: "10/10/2025" },
        { nome: "Henrique Dony", estrelas: "★★★☆☆", comentario: "“Atendimento ruim e pratos medianos.”",           data: "21/10/2025" },
        { nome: "Alex Pedro",    estrelas: "★★★★★", comentario: "“Parmesão e molho impecáveis, voltarei!”",         data: "01/04/2025" },
        { nome: "José Silva",    estrelas: "★★★★★", comentario: "“É um lugar bom, muito romântico.”",               data: "18/09/2025" },
        { nome: "Maria Clara",   estrelas: "★★★★★", comentario: "“Muito bom, voltarei com certeza”",                data: "06/05/2025" },
        { nome: "Roberto Abreu", estrelas: "★★★★★", comentario: "“O Penne al Pomodoro é maravilhoso”",              data: "20/10/2025" }
    ];

    // Monta um card por avaliação
    var container = document.getElementById('carrossel-avaliacoes');
    avaliacoes.forEach(function (item) {
        var card = document.createElement('div');
        card.classList.add('card-avaliacao');
        card.innerHTML = `
            <h3 class="nome-cliente">${item.nome}</h3>
            <div class="estrelas">${item.estrelas}</div>
            <p class="comentario">${item.comentario}</p>
            <span class="data-avaliacao">${item.data}</span>
        `;
        container.appendChild(card);
    });

    // Permite rolar o carrossel arrastando com o mouse (clicar e puxar)
    var arrastando = false;
    var posInicial = 0;
    var rolagemInicial = 0;

    container.addEventListener('mousedown', function (e) {
        arrastando = true;
        container.classList.add('puxando');
        posInicial = e.pageX - container.offsetLeft;
        rolagemInicial = container.scrollLeft;
    });

    container.addEventListener('mouseleave', function () {
        arrastando = false;
        container.classList.remove('puxando');
    });

    container.addEventListener('mouseup', function () {
        arrastando = false;
        container.classList.remove('puxando');
    });

    container.addEventListener('mousemove', function (e) {
        if (!arrastando) return;          // só rola se o mouse estiver pressionado
        e.preventDefault();
        var pos = e.pageX - container.offsetLeft;
        container.scrollLeft = rolagemInicial - (pos - posInicial);
    });
})();
