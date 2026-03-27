// Carregar perfil ativo do localStorage
document.addEventListener('DOMContentLoaded', function() {
    const perfilAtivo = JSON.parse(localStorage.getItem('perfilAtivo'));

    if (!perfilAtivo) return;

    const pathImagem = perfilAtivo.imagem.startsWith('http')
        ? perfilAtivo.imagem
        : (perfilAtivo.imagem.startsWith('/') ? '.' : '../') + perfilAtivo.imagem;

    const nomeElement = document.querySelector('.kids-link');
    if (nomeElement) {
        nomeElement.textContent = perfilAtivo.nome;
        nomeElement.href = '#';
    }

    const imageElement = document.querySelector('.profile-icon');
    if (imageElement) {
        imageElement.src = pathImagem;
        imageElement.alt = perfilAtivo.nome;
    }

    const selectedImg = document.getElementById('perfilSelecionadoImg');
    const selectedName = document.getElementById('perfilSelecionadoNome');
    if (selectedImg) {
        selectedImg.src = pathImagem;
        selectedImg.alt = perfilAtivo.nome;
    }
    if (selectedName) {
        selectedName.textContent = perfilAtivo.nome;
    }
});