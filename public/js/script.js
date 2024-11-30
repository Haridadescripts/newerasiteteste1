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

document.addEventListener('DOMContentLoaded', function() {
    // Menu Mobile
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');

    menuBtn?.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
            }
        });
    });

    // Scroll suave para o topo
    document.querySelector('.page-top').addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Parallax effect na grid de mangá
    window.addEventListener('scroll', function() {
        const mangaGrid = document.querySelector('.manga-grid');
        const scrolled = window.pageYOffset;
        mangaGrid.style.transform = `translateY(${scrolled * 0.5}px)`;
    });

    // Animação do texto da galeria
    const galleryText = document.querySelector('.gallery-text h1');
    galleryText.style.opacity = '0';
    galleryText.style.transform = 'translateY(50px)';

    setTimeout(() => {
        galleryText.style.transition = 'all 1s ease';
        galleryText.style.opacity = '1';
        galleryText.style.transform = 'translateY(0)';
    }, 500);
});

document.addEventListener('DOMContentLoaded', function() {
    // Inicialização do Swiper
    const mainCarousel = new Swiper('.main-carousel', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        on: {
            slideChange: function() {
                const activeSlide = this.slides[this.activeIndex];
                const carouselText = activeSlide.querySelector('.carousel-text');
                
                if (carouselText) {
                    carouselText.style.opacity = '0';
                    carouselText.style.transform = 'translate(-50%, -40%)';
                    
                    setTimeout(() => {
                        carouselText.style.opacity = '1';
                        carouselText.style.transform = 'translate(-50%, -50%)';
                    }, 300);
                }
            }
        }
    });

    // Scroll suave para o topo
    document.querySelector('.page-top').addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Controle do autoplay no hover
    const swiperContainer = document.querySelector('.main-carousel');
    swiperContainer.addEventListener('mouseenter', () => {
        mainCarousel.autoplay.stop();
    });
    swiperContainer.addEventListener('mouseleave', () => {
        mainCarousel.autoplay.start();
    });
});