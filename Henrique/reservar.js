const form = document.getElementById("reservaForm");
const btn = document.getElementById("btnReserva");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    btn.classList.add("reservando");

    btn.textContent = "PROCESSANDO...";

    setTimeout(() => {

        btn.classList.remove("reservando");

        btn.classList.add("reservado");

        btn.textContent = "✓ RESERVADO!";

    }, 1500);

});