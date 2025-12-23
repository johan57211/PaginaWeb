// Script para marcar la página activa en la navegación
document.addEventListener('DOMContentLoaded', function() {
    // Obtenemos la ruta actual (ejemplo: "/contacto")
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.indice-lista li a');
    
    // Remover todas las clases active
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Agregar active solo a la página actual
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        
        // Verificamos si la ruta actual termina con el href del enlace 
        // o si ambos coinciden en la raíz (página principal)
        if (currentPath === linkHref || 
            (currentPath === '/' && linkHref.includes('home')) ||
            (linkHref !== '/' && currentPath.endsWith(linkHref))) {
            link.classList.add('active');
        }
    });

    // --- NUEVA LÓGICA PARA NAVEGACIÓN FIJA (STICKY) ---
    const nav = document.querySelector('.nav');
    const header = document.querySelector('header');
    
    // Guardamos la posición original del nav
    const stickyPos = nav.offsetTop;

    window.onscroll = function() {
        if (window.pageYOffset > stickyPos) {
            nav.classList.add("sticky");
            // Añadimos un padding al header para que el contenido no "salte"
            header.style.paddingBottom = nav.offsetHeight + "px";
        } else {
            nav.classList.remove("sticky");
            header.style.paddingBottom = "0px";
        }
    };
});