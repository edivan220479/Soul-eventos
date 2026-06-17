document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.getElementById('navLinks');

    // Abre e fecha o menu mobile ao clicar no ícone de barras
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Alterna o ícone entre barras e "X" caso queira um efeito visual
        const icon = mobileMenu.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });

    // Fecha o menu automaticamente quando o usuário clica em algum link
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenu.querySelector('i').classList.remove('fa-xmark');
                mobileMenu.querySelector('i').classList.add('fa-bars');
            }
        });
    });
});