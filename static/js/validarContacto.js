// Validación simplificada del formulario de contacto
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    const campos = {
        nombre: document.getElementById('nombre'),
        email: document.getElementById('email'),
        asunto: document.getElementById('asunto'),
        mensaje: document.getElementById('mensaje')
    };

    // Reglas de validación
    const reglas = {
        nombre: {
            requerido: true,
            minLength: 3,
            patron: /^[a-záéíóúñA-ZÁÉÍÓÚÑ\s]+$/,
            mensajes: {
                requerido: 'El nombre es obligatorio',
                minLength: 'Mínimo 3 caracteres',
                patron: 'Solo se permiten letras'
            }
        },
        email: {
            requerido: true,
            patron: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            mensajes: {
                requerido: 'El email es obligatorio',
                patron: 'Email inválido'
            }
        },
        asunto: {
            requerido: true,
            mensajes: { requerido: 'Selecciona un asunto' }
        },
        mensaje: {
            requerido: true,
            minLength: 10,
            maxLength: 1000,
            mensajes: {
                requerido: 'El mensaje es obligatorio',
                minLength: 'Mínimo 10 caracteres',
                maxLength: 'Máximo 1000 caracteres'
            }
        }
    };

    // Validar campo
    function validar(campo, valor) {
        const regla = reglas[campo];
        valor = valor.trim();

        if (regla.requerido && !valor) return regla.mensajes.requerido;
        if (regla.minLength && valor.length < regla.minLength) return regla.mensajes.minLength;
        if (regla.maxLength && valor.length > regla.maxLength) return regla.mensajes.maxLength;
        if (regla.patron && !regla.patron.test(valor)) return regla.mensajes.patron;
        
        return null;
    }

    // Mostrar/ocultar error
    function toggleError(elemento, mensaje) {
        const error = elemento.parentElement.querySelector('.error-message');
        if (error) error.remove();

        if (mensaje) {
            const div = document.createElement('div');
            div.className = 'error-message';
            div.textContent = mensaje;
            div.style.cssText = 'color:#ff4444;font-size:0.85rem;margin-top:5px;animation:fadeIn 0.3s';
            elemento.parentElement.appendChild(div);
            elemento.style.borderColor = '#ff4444';
        } else {
            elemento.style.borderColor = 'rgba(255,255,255,0.2)';
        }
    }

    // Contador de caracteres
    campos.mensaje.addEventListener('input', function() {
        let contador = this.parentElement.querySelector('.char-counter');
        if (!contador) {
            contador = document.createElement('div');
            contador.className = 'char-counter';
            contador.style.cssText = 'color:#a0a0a0;font-size:0.85rem;margin-top:5px;text-align:right';
            this.parentElement.appendChild(contador);
        }
        contador.textContent = `${this.value.length}/1000`;
    });

    // Validación en tiempo real
    Object.keys(campos).forEach(key => {
        campos[key].addEventListener('blur', function() {
            toggleError(this, validar(key, this.value));
        });
        
        campos[key].addEventListener('input', function() {
            if (this.parentElement.querySelector('.error-message')) {
                toggleError(this, validar(key, this.value));
            }
        });
    });

    // Envío del formulario
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let hayErrores = false;
        Object.keys(campos).forEach(key => {
            const error = validar(key, campos[key].value);
            if (error) {
                toggleError(campos[key], error);
                hayErrores = true;
            }
        });

        if (hayErrores) {
            document.querySelector('.error-message')?.parentElement.scrollIntoView({ 
                behavior: 'smooth', block: 'center' 
            });
            return;
        }

        // Mensaje de éxito
        const overlay = document.createElement('div');
        overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.8);display:flex;align-items:center;justify-content:center;z-index:10000';
        
        overlay.innerHTML = `
            <div style="background:linear-gradient(135deg,rgba(26,26,30,0.95),rgba(17,16,16,0.95));padding:40px;border-radius:20px;border:2px solid rgba(255,255,255,0.3);text-align:center;max-width:500px;box-shadow:0 20px 60px rgba(255,255,255,0.3)">
                <div style="font-size:4rem;margin-bottom:20px">✓</div>
                <h2 style="color:#fff;font-size:2rem;margin-bottom:15px">¡Mensaje Enviado!</h2>
                <p style="color:#b0b0b0;font-size:1.1rem;line-height:1.6">Gracias por contactarnos. Te responderemos en 24-48 horas.</p>
            </div>
        `;
        
        document.body.appendChild(overlay);
        
        // Animaciones
        if (!document.getElementById('validacion-styles')) {
            const style = document.createElement('style');
            style.id = 'validacion-styles';
            style.textContent = '@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{from{opacity:1}to{opacity:0}}@keyframes slideUp{from{opacity:0;transform:translateY(30px)}to{opacity:1';
            document.head.appendChild(style);
        }

        overlay.addEventListener('click', () => {
            overlay.style.animation = 'fadeOut 0.3s';
            setTimeout(() => overlay.remove(), 300);
        });

        setTimeout(() => {
            form.reset();
            campos.mensaje.parentElement.querySelector('.char-counter')?.remove();
            overlay.style.animation = 'fadeOut 0.3s';
            setTimeout(() => overlay.remove(), 300);
        }, 3000);
    });
});