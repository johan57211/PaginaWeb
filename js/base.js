// Script para marcar la página activa en la navegación
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'PaginaPrincipal.html';
    const navLinks = document.querySelectorAll('.indice-lista li a');
    
    // Remover todas las clases active
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Agregar active solo a la página actual
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || 
            (currentPage === '' && linkPage === 'PaginaPrincipal.html') ||
            (currentPage === 'PaginaPrincipal.html' && linkPage === 'PaginaPrincipal.html')) {
            link.classList.add('active');
        }
    });
});