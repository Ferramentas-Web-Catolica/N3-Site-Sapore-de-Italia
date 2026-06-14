// Abre e fecha o menu mobile quando clica no hambúrguer.
// É chamada pelo onclick do botão hambúrguer que está no header.js

function abrirMenu() {
    // Pega o <nav> do menu mobile pelo id
    var menu = document.getElementById("menu-mobile");

    // toggle adiciona a classe "aberto" se não tiver, e remove se já tiver.
    // A classe "aberto" tem display:block no CSS, então mostra/esconde o menu
    menu.classList.toggle("aberto");
}
