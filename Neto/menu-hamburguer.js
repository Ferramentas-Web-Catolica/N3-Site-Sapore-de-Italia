// Função que abre e fecha o menu mobile quando clica no hambúrguer
// É chamada pelo onclick do botão hambúrguer no header.js

function abrirMenu() {
    // Pega o elemento <nav> do menu mobile pelo seu id
    var menu = document.getElementById("menu-mobile");

    // toggle adiciona a classe "aberto" se não tiver, e remove se já tiver
    // A classe "aberto" tem display:block no CSS, então mostra/esconde o menu
    menu.classList.toggle("aberto");
}