/**
 * GUIAS.JS - JavaScript específico para la página de Guías de Jefes
 * Este archivo contiene funcionalidades exclusivas de la página GuiasJefe.html
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // Animación de entrada para las cards de jefes
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.6s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar todas las tarjetas de jefes
    document.querySelectorAll('.boss-card').forEach(card => {
        card.style.opacity = '0';
        observer.observe(card);
    });

    // Interactividad del botón "Ver Guía"
    document.querySelectorAll('.btn-primary').forEach(btn => {
        btn.addEventListener('click', function() {
            const bossName = this.closest('.boss-card').querySelector('.boss-name').textContent;
            alert(`Abriendo guía detallada de ${bossName}...`);
            // Aquí podrías implementar una modal o redirección a una página de guía específica
        });
    });

    // Interactividad del botón "Video"
    document.querySelectorAll('.btn-secondary').forEach(btn => {
        btn.addEventListener('click', function() {
            const bossName = this.closest('.boss-card').querySelector('.boss-name').textContent;
            alert(`Reproduciendo video tutorial de ${bossName}...`);
            // Aquí podrías abrir un reproductor de video o enlazar a YouTube
        });
    });

});

