import { categories } from './data.js';
import { createCarousel } from './components/Carousel.js';

document.addEventListener('DOMContentLoaded', () => {
    const perfilAtivo = JSON.parse(localStorage.getItem('perfilAtivo'));

    if (perfilAtivo && perfilAtivo.nome && perfilAtivo.imagem) {
        const kidsLink = document.querySelector('.kids-link');
        const profileIcon = document.querySelector('.profile-icon');
        const selectedImg = document.getElementById('perfilSelecionadoImg');
        const selectedName = document.getElementById('perfilSelecionadoNome');

        const pathImagem = perfilAtivo.imagem.startsWith('http')
            ? perfilAtivo.imagem
            : (perfilAtivo.imagem.startsWith('/') ? '.' : '../') + perfilAtivo.imagem;

        if (kidsLink) kidsLink.textContent = perfilAtivo.nome;
        if (profileIcon) profileIcon.src = pathImagem;
        if (selectedImg) selectedImg.src = pathImagem;
        if (selectedName) selectedName.textContent = perfilAtivo.nome;
    }

    const container = document.getElementById('main-content');
    
    if (container) {
        categories.forEach(category => {
            const carousel = createCarousel(category);
            container.appendChild(carousel);
        });
    }
});
