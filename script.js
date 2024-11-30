const mainSlider = new Swiper('.main-slider', {
    loop: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// Adiciona efeito de scroll suave para os links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Adiciona classe active ao menu quando scrollar
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Manipulação do dropdown no mobile
document.addEventListener('DOMContentLoaded', function() {
    const dropdownTrigger = document.querySelector('.dropdown-trigger');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    // Função para verificar se é dispositivo móvel
    const isMobile = () => window.innerWidth <= 768;

    dropdownTrigger.addEventListener('click', function(e) {
        if (isMobile()) {
            e.preventDefault();
            dropdownMenu.classList.toggle('active');
        }
    });

    // Fechar dropdown ao clicar fora
    document.addEventListener('click', function(e) {
        if (isMobile() && !e.target.closest('.dropdown')) {
            dropdownMenu.classList.remove('active');
        }
    });

    // Ajustar comportamento ao redimensionar a janela
    window.addEventListener('resize', function() {
        if (!isMobile()) {
            dropdownMenu.classList.remove('active');
        }
    });
}); 