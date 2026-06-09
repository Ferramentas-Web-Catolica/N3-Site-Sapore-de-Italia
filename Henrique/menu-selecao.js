
/* Aguarda o carregamento completo do HTML (DOM) para iniciar a execução do script com segurança */
document.addEventListener("DOMContentLoaded", () => {
  /* Procura e armazena todos os botões que possuem a classe '.menu-btn' em uma lista */
  const buttons = document.querySelectorAll(".menu-btn");

  /* Percorre cada um dos botões encontrados para aplicar as configurações individualmente */
  buttons.forEach(button => {
    /* Adiciona um evento que detecta o clique do usuário neste botão específico */
    button.addEventListener("click", () => {

      /* Faz uma varredura em todos os botões da lista para remover a classe 'active' de qualquer um deles */
      buttons.forEach(btn => btn.classList.remove("active"));

      /* Adiciona a classe 'active' exclusivamente no botão que acabou de ser clicado */
      button.classList.add("active");

      /* Captura o valor do atributo customizado 'data-category' do botão clicado */
      const categoriaSelecionada = button.getAttribute("data-category");
      /* Exibe no console do navegador a categoria que foi selecionada pelo clique */
      console.log(`Filtrando por: ${categoriaSelecionada}`);
      

    });
  });
});