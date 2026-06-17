document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenu = document.getElementById('closeMenu');
    const navLinks = document.getElementById('navLinks');

    // Abre o menu lateral ao clicar no ícone de barras
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.add('active');
    });

    // Fecha o menu lateral ao clicar no botão X
    closeMenu.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });

    // Fecha o menu automaticamente quando o usuário clica em uma das opções
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
});