/* Seleciona o elemento do formulário HTML usando o ID 'reservaForm' */
const form = document.getElementById("reservaForm");

/* Seleciona o botão de confirmação usando o ID 'btnReserva' */
const btn = document.getElementById("btnReserva");

/* Adiciona um ouvinte para interceptar o momento em que o formulário for enviado (submit) */
form.addEventListener("submit", (e) => {

    /* Impede o comportamento padrão do HTML (evita que a página recarregue ao enviar) */
    e.preventDefault();

    /* Adiciona a classe CSS 'reservando' para iniciar a animação de carregamento no botão */
    btn.classList.add("reservando");

    /* Altera o texto visível do botão para indicar que a operação está acontecendo */
    btn.textContent = "PROCESSANDO...";

    /* Cria uma pausa temporária (temporizador) antes de executar as próximas linhas */
    setTimeout(() => {

        /* Remove a classe de carregamento 'reservando' após o tempo terminar */
        btn.classList.remove("reservando");

        /* Adiciona a classe CSS 'reservado' que muda a cor do botão para o estado verde de sucesso */
        btn.classList.add("reservado");

        /* Altera o texto do botão para confirmar ao usuário que deu tudo certo */
        btn.textContent = "✓ RESERVADO!";

    }, 1500); /* Define o tempo de espera da pausa em milissegundos (1500ms = 1.5 segundos) */

});