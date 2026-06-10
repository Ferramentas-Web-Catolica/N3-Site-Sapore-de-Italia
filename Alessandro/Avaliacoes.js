// Componente Avaliacoes
// Como usar nas paginas:
//   <link rel="stylesheet" href="Avaliacoes.css">
//   <script src="Avaliacoes.js"></script>
 
(function () {
    var script = document.currentScript;
 
    // HTML do componente (estrutura do carrossel)
    var html = `
        <section class="container-avaliacoes-geral">
            <div class="carrossel-wrapper" id="carrossel-conteudo"></div>
        </section>
    `;
    script.insertAdjacentHTML('beforebegin', html);
 
    // Dados das avaliacoes
    var avaliacoesData = [
        { nome: "Mariana Silva",  estrelas: "★★★★★", comentario: "“comida muito boa, mas poucas opções de vinho”",            data: "21/12/2025" },
        { nome: "Marcos Alex",    estrelas: "★★★★★", comentario: "“Ambiente agradável e comida impecável.”",                  data: "11/10/2025" },
        { nome: "Sandro Souza",   estrelas: "★★★★★", comentario: "“Sabor autêntico, parece Itália de verdade.”",              data: "10/10/2025" },
        { nome: "Henrique Dony",  estrelas: "★★★☆☆", comentario: "“Atendimento ruins e pratos medianos.”",                    data: "21/10/2025" },
        { nome: "Alex Pedro",     estrelas: "★★★★★", comentario: "“Parmessão e molho impecáveis, voltarei com certeza”",      data: "01/04/2025" },
        { nome: "José Silva",     estrelas: "★★★★★", comentario: "“É um lugar bom, muito romântico.”",                        data: "18/09/2025" },
        { nome: "Maria Clara",    estrelas: "★★★★★", comentario: "“Muito bom, voltarei com certeza”",                         data: "06/05/2025" },
        { nome: "Roberto Abreu",  estrelas: "★★★★★", comentario: "“O Penne ao Pomodoro é maravilhoso”",                       data: "20/10/2025" }
    ];
 
    // Constroi e exibe os cards
    var container = document.getElementById('carrossel-conteudo');
    avaliacoesData.forEach(function (item) {
        var card = document.createElement('div');
        card.classList.add('card-testemunho');
        card.innerHTML = `
            <h3 class="nome-cliente">${item.nome}</h3>
            <div class="estrelas-video">${item.estrelas}</div>
            <p class="comentario">${item.comentario}</p>
            <span class="data-avaliacao">${item.data}</span>
        `;
        container.appendChild(card);
    });
 
    // Interacoes de arraste e rolagem
    var isDown = false;
    var startX = 0;
    var scrollLeft = 0;
 
    // Rolar com a rodinha do mouse
    container.addEventListener('wheel', function (e) {
        if (e.deltaY !== 0) {
            e.preventDefault();
            container.scrollLeft += e.deltaY * 1.5;
        }
    });
 
    // Clicar e arrastar
    container.addEventListener('mousedown', function (e) {
        isDown = true;
        container.classList.add('arrastando');
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    });
 
    container.addEventListener('mouseleave', function () {
        isDown = false;
        container.classList.remove('arrastando');
    });
 
    container.addEventListener('mouseup', function () {
        isDown = false;
        container.classList.remove('arrastando');
    });
 
    container.addEventListener('mousemove', function (e) {
        if (!isDown) return;
        e.preventDefault();
        var x = e.pageX - container.offsetLeft;
        var walk = (x - startX) * 2;
        container.scrollLeft = scrollLeft - walk;
    });
})();