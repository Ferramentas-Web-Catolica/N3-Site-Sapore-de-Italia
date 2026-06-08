document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".menu-btn");

  buttons.forEach(button => {
    button.addEventListener("click", () => {

      buttons.forEach(btn => btn.classList.remove("active"));

      button.classList.add("active");

      const categoriaSelecionada = button.getAttribute("data-category");
      console.log(`Filtrando por: ${categoriaSelecionada}`);
      

    });
  });
});