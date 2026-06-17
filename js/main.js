// js/script.js
document.addEventListener('DOMContentLoaded', () => {
    const botaoAbrir = document.getElementById('mobileMenu');
    const botaoFechar = document.getElementById('closeMenu');
    const menuLateral = document.getElementById('navLinks');

    // Abre o menu lateral ao clicar no ícone de barras (☰)
    if (botaoAbrir && menuLateral) {
        botaoAbrir.addEventListener('click', (e) => {
            e.preventDefault();
            menuLateral.classList.add('active');
        });
    }

    // Fecha o menu lateral ao clicar no botão X (✕)
    if (botaoFechar && menuLateral) {
        botaoFechar.addEventListener('click', (e) => {
            e.preventDefault();
            menuLateral.classList.remove('active');
        });
    }

    // Fecha o menu automaticamente quando o usuário clica em qualquer link
    const linksDoMenu = document.querySelectorAll('.nav-links a');
    linksDoMenu.forEach(link => {
        link.addEventListener('click', () => {
            if (menuLateral) {
                menuLateral.classList.remove('active');
            }
        });
    });
});
