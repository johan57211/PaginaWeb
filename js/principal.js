
    // ============================================
    // CARRUSEL DE PERSONAJES
    // ============================================
    
    const track = document.querySelector('.carousel-track');
    const cards = document.querySelectorAll('.personaje-card');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    const indicators = document.querySelectorAll('.indicator');
    let currentIndex = 0;
    let autoplayInterval;

    // Función para actualizar el carrusel
    function updateCarousel(index) {
        // Remover clase active de todas las cards e indicadores
        cards.forEach(card => card.classList.remove('active'));
        indicators.forEach(ind => ind.classList.remove('active'));
        
        // Agregar clase active a la card actual
        cards[index].classList.add('active');
        indicators[index].classList.add('active');
        
        // Mover el track
        const offset = -index * 100;
        track.style.transform = `translateX(${offset}%)`;
        
        currentIndex = index;
    }

    // Función para ir al siguiente slide
    function nextSlide() {
        const nextIndex = (currentIndex + 1) % cards.length;
        updateCarousel(nextIndex);
    }

    // Función para ir al slide anterior
    function prevSlide() {
        const prevIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateCarousel(prevIndex);
    }

    // Event listeners para botones de navegación
    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetAutoplay();
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetAutoplay();
    });

    // Event listeners para indicadores
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            updateCarousel(index);
            resetAutoplay();
        });
    });

    // Funciones de autoplay
    function startAutoplay() {
        autoplayInterval = setInterval(nextSlide, 4000); // Cambia cada 4 segundos
    }

    function stopAutoplay() {
        clearInterval(autoplayInterval);
    }

    function resetAutoplay() {
        stopAutoplay();
        startAutoplay();
    }

    // Pausar autoplay al hacer hover sobre el carrusel
    const carouselSection = document.querySelector('.carousel-section');
    if (carouselSection) {
        carouselSection.addEventListener('mouseenter', stopAutoplay);
        carouselSection.addEventListener('mouseleave', startAutoplay);
    }

    // Iniciar autoplay
    startAutoplay();