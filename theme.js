const themeToggle = document.getElementById('themeToggle');

const setMode = (mode) => {
    document.body.classList.toggle('light-mode', mode === 'light');
    themeToggle.textContent = mode === 'light' ? '🌙' : '☀️';
    localStorage.setItem('netflixTheme', mode);
};

const setImagesVisible = (visible) => {
    document.querySelectorAll('.perfil img').forEach(img => {
        img.classList.toggle('hidden', !visible);
    });
    localStorage.setItem('netflixImagesVisible', visible ? '1' : '0');
};

const currentTheme = localStorage.getItem('netflixTheme') || 'dark';
setMode(currentTheme);

const currentImagesVisible = localStorage.getItem('netflixImagesVisible');
setImagesVisible(currentImagesVisible === null ? true : currentImagesVisible === '1');

themeToggle.addEventListener('click', () => {
    const nextMode = document.body.classList.contains('light-mode') ? 'dark' : 'light';
    setMode(nextMode);

    // Mantém as imagens sempre visíveis ao trocar de tema.
    setImagesVisible(true);
});