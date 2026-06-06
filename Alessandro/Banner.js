// 1. CONFIGURAÇÃO DOS DADOS DO BANNER (Facilita mudar a foto ou o texto do botão)
const bannerConfig = {
    caminhoImagem: "Imagens/Imagembanner.png",
    textoBotao: "Reservar"
};

// 2. FUNÇÃO QUE CONSTRÓI E EXPÕE O COMPONENTE NA TELA
function renderizarBanner() {
    const bannerContainer = document.getElementById('banner-dinamico');

    // Injeta a estrutura mantendo rigidamente as classes do seu HTML original
    bannerContainer.innerHTML = `
        <img src="${bannerConfig.caminhoImagem}" alt="Banner Sapore d'Italia" class="Banner">
        <button class="reservar">${bannerConfig.textoBotao}</button>
    `;
}

// EXECUÇÃO: Roda a função assim que a página é carregada
renderizarBanner();