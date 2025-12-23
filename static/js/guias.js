// Datos de los jefes
const bossData = {
    'false-knight': {
        name: 'False Knight',
        image: 'static/img/FalsoCaballero.png',
        difficulty: 'Fácil',
        difficultyClass: 'difficulty-easy',
        location: 'Forgotten Crossroads - En una gran arena en la sección central de la zona.',
        reward: 'Geo (200) y acceso a la City Crest.',
        strategy: 'El False Knight es relativamente predecible. Mantén la distancia cuando salta y golpea el suelo, ya que esto crea ondas de choque. Ataca después de que complete sus ataques. En la segunda fase, se vuelve más agresivo con ataques más rápidos.',
        tips: [
            'Evita estar directamente debajo de él cuando salta',
            'Usa el Vengeful Spirit cuando esté aturdido',
            'Mantén la calma y aprende sus patrones de ataque',
            'La segunda fase es más rápida pero sigue siendo predecible',
            'Puedes curar cuando esté lejos después de sus ataques'
        ],
        charms: ['Quick Focus', 'Stalwart Shell', 'Soul Catcher', 'Shaman Stone']
    },
    'hornet': {
        name: 'Hornet Protector',
        image: 'static/img/Hornet.png',
        difficulty: 'Medio',
        difficultyClass: 'difficulty-medium',
        location: 'Greenpath - Al final del área, en una arena circular.',
        reward: 'Mothwing Cloak (habilidad de dash).',
        strategy: 'Hornet es rápida y ágil. Observa cuándo lanza su aguja y esquívala. Cuando arroja su aguja en línea recta, es un buen momento para atacar. Ten cuidado con su ataque de carga diagonal.',
        tips: [
            'Mantén la distancia y observa sus patrones',
            'Ataca cuando recupere su aguja',
            'Usa el dash lateral para esquivar sus ataques',
            'Ten cuidado con su trampa de hilo en el suelo',
            'Curar solo cuando esté lejos o después de su ataque especial'
        ],
        charms: ['Quick Slash', 'Mark of Pride', 'Soul Catcher', 'Grubsong']
    },
    'mantis-lords': {
        name: 'Mantis Lords',
        image: 'static/img/mantis.png',
        difficulty: 'Difícil',
        difficultyClass: 'difficulty-hard',
        location: 'Mantis Village - Al fondo del pueblo, pasando por los guerreros mantis.',
        reward: 'Marca de Respeto y acceso a Deepnest a través del pueblo.',
        strategy: 'Este es un combate de prueba honorable. Primero enfrentas a una, luego a dos simultáneamente. Aprende sus patrones: ataques desde las paredes, lanzamiento de cuchillas y ataques de carga. Usa las paredes para esquivar.',
        tips: [
            'Enfoca en esquivar primero, atacar después',
            'Salta cuando lancen cuchillas desde las paredes',
            'Usa el dash para esquivar ataques de carga',
            'Mantén el centro de la arena cuando pelees contra dos',
            'Este combate es sobre timing perfecto, no hay atajos',
            'Curar es muy arriesgado, hazlo solo en momentos seguros'
        ],
        charms: ['Quick Slash', 'Mark of Pride', 'Sharp Shadow', 'Dashmaster']
    },
    'watcher-knights': {
        name: 'Watcher Knights',
        image: 'static/img/guardianes.png',
        difficulty: 'Difícil',
        difficultyClass: 'difficulty-hard',
        location: "Watcher's Spire (City of Tears) - En la aguja del vigía, guardando a Lurien.",
        reward: 'Acceso al Dreamer Lurien.',
        strategy: 'Peleas contra 2 caballeros simultáneamente de un total de 6. Usa el Shade Cloak para atravesarlos cuando ruedan. Mantente en movimiento constante y ataca cuando estén recuperándose.',
        tips: [
            'IMPORTANTE: Puedes reducir a 5 caballeros rompiendo un candelabro antes',
            'Usa Shade Cloak para atravesar sus ataques de rodadura',
            'Mantente en el aire cuando sea posible',
            'Enfoca a uno hasta matarlo antes de dividir tu atención',
            'Los hechizos son muy efectivos en este combate',
            'Curar solo cuando ambos estén lejos'
        ],
        charms: ['Quick Slash', 'Shaman Stone', 'Soul Eater', 'Sharp Shadow']
    },
    'hollow-knight': {
        name: 'The Hollow Knight',
        image: 'static/img/hollowKnight.png',
        difficulty: 'Difícil',
        difficultyClass: 'difficulty-hard',
        location: 'Temple of the Black Egg - Después de derrotar a los tres Dreamers.',
        reward: 'Final del juego básico.',
        strategy: 'El jefe final tiene múltiples ataques: saltos con ondas de choque, embestidas, puñaladas y zarcillos oscuros. En la fase final, se daña a sí mismo. Mantén la distancia y ataca en los momentos seguros.',
        tips: [
            'Los zarcillos del suelo son predecibles, observa dónde aparecen',
            'Usa el Shade Cloak para atravesar sus embestidas',
            'Cuando se apuñale a sí mismo, puedes curar',
            'Los hechizos son efectivos cuando está en el aire',
            'Necesitas paciencia, es un combate largo',
            'Si Hornet aparece, puedes obtener el final verdadero con Dream Nail'
        ],
        charms: ['Quick Slash', 'Mark of Pride', 'Shaman Stone', 'Soul Eater']
    },
    'radiance': {
        name: 'Radiance',
        image: 'static/img/radiance.png',
        difficulty: 'Extremo',
        difficultyClass: 'difficulty-extreme',
        location: 'Dream Realm - Usa Dream Nail en The Hollow Knight cuando Hornet lo sujete.',
        reward: 'Verdadero final del juego.',
        strategy: 'El jefe más difícil. Tiene 5 fases con diferentes plataformas y ataques. Rayos de luz, lanzas desde todas direcciones y ataques de esfera. Usa doble salto y dash constantemente para esquivar.',
        tips: [
            'REQUIERE: Void Heart charm para acceder',
            'Memoriza los patrones de cada fase',
            'Las lanzas tienen pequeños espacios seguros',
            'Usa Shade Cloak para atravesar las lanzas si es necesario',
            'En la fase final, solo sube las plataformas esquivando rayos',
            'Los hechizos son tu mejor opción para daño rápido',
            'Este combate es sobre dominio perfecto del movimiento'
        ],
        charms: ['Shaman Stone', 'Soul Eater', 'Quick Slash', 'Mark of Pride']
    },
    'grimm': {
        name: 'Grimm',
        image: 'static/img/grimm.png',
        difficulty: 'Difícil',
        difficultyClass: 'difficulty-hard',
        location: 'Grimm Troupe Tent - Después de recolectar suficientes Nightmare Flames.',
        reward: 'Acceso a Nightmare King Grimm y progreso en el DLC.',
        strategy: 'Grimm tiene ataques muy coreografiados: bolas de fuego, embestida de murciélagos, lluvia de fuego y barrido. Cada ataque tiene una animación clara que lo precede. Aprende los patrones y ataca en los momentos seguros.',
        tips: [
            'Cada ataque tiene una animación de inicio clara',
            'Usa dash para esquivar la embestida de murciélagos',
            'La lluvia de fuego se esquiva moviéndose horizontalmente',
            'Posiciónate debajo de él cuando lance bolas de fuego',
            'Es un "baile", aprende los pasos y síguelos',
            'Los hechizos funcionan bien cuando está en animaciones largas'
        ],
        charms: ['Sharp Shadow', 'Dashmaster', 'Quick Slash', 'Grubsong']
    },
    'nightmare-grimm': {
        name: 'Nightmare King Grimm',
        image: 'static/img/pesadillaGrimm.png',
        difficulty: 'Extremo',
        difficultyClass: 'difficulty-extreme',
        location: 'Grimm Troupe Tent - Después de derrotar a Grimm normal.',
        reward: 'Unbreakable Charm (si completas el ritual).',
        strategy: 'Versión extremadamente difícil de Grimm. Todos sus ataques son más rápidos y tiene nuevos patrones. Requiere memorización perfecta y ejecución impecable. Es considerado uno de los jefes más difíciles del juego.',
        tips: [
            'Requiere perfección absoluta en timing y movimiento',
            'Memoriza cada patrón, no hay improvisación',
            'El ataque de llamas desde arriba requiere posicionamiento preciso',
            'Sharp Shadow es casi esencial',
            'Practica en Godhome hasta dominarlo',
            'No intentes curar a menos que sea 100% seguro',
            'Este combate separa a los jugadores casuales de los maestros'
        ],
        charms: ['Sharp Shadow', 'Dashmaster', 'Quick Slash', 'Strength']
    },
    'nosk': {
        name: 'Nosk',
        image: 'static/img/nosk.png',
        difficulty: 'Medio',
        difficultyClass: 'difficulty-medium',
        location: 'Deepnest - En su guarida después de seguir a tu clon.',
        reward: 'Pale Ore y acceso a una máscara shard.',
        strategy: 'Nosk es un mimico que toma tu forma. Ataca desde el techo y escupe bolas infectadas. Mantente en el centro de la plataforma y ataca cuando baje. Sus ataques son predecibles una vez que aprendes el patrón.',
        tips: [
            'Mantente en la plataforma central',
            'Ataca hacia arriba cuando esté en el techo',
            'Las bolas infectadas se pueden destruir con tu nail',
            'Usa doble salto para esquivar cuando cargue horizontalmente',
            'Es más fácil de lo que parece visualmente',
            'Curar cuando esté en el techo lejos de ti'
        ],
        charms: ['Quick Slash', 'Mark of Pride', 'Soul Catcher', 'Shaman Stone']
    },
    'traitor-lord': {
        name: 'Traitor Lord',
        image: 'static/img/lordtraitor.png',
        difficulty: 'Difícil',
        difficultyClass: 'difficulty-hard',
        location: "Queen's Gardens - En el área de los mantis traidores.",
        reward: 'Acceso a la White Lady y progreso del juego.',
        strategy: 'Versión más grande y fuerte de los mantis lords. Ataques similares pero con más daño y velocidad. La arena es más pequeña. Mantén el movimiento constante y usa las paredes para esquivar.',
        tips: [
            'Muy similar a Mantis Lords pero más agresivo',
            'Usa Sharp Shadow para atravesarlo y hacer daño',
            'Los ataques desde las paredes son más rápidos',
            'Mantente en movimiento constante',
            'Puedes conseguir ayuda de Cloth si completaste su quest',
            'Los hechizos son efectivos cuando está recuperándose'
        ],
        charms: ['Sharp Shadow', 'Quick Slash', 'Mark of Pride', 'Dashmaster']
    },
    'collector': {
        name: 'The Collector',
        image: 'static/img/collecionista.png',
        difficulty: 'Medio',
        difficultyClass: 'difficulty-medium',
        location: 'Tower of Love (Kingdom\'s Edge) - Requiere Love Key de Queen\'s Gardens.',
        reward: 'Grub Map que muestra la ubicación de todos los Grubs.',
        strategy: 'El Collector es impredecible y ágil. Salta erraticamente por la arena e invoca enemigos rompiendo frascos. NO saltes mucho, mantente en el suelo. El Collector no te da SOUL al golpearlo, solo los enemigos invocados.',
        tips: [
            'NO SALTES - mantente en el suelo y esquiva caminando',
            'El Collector NO da SOUL, solo obtén SOUL de los enemigos',
            'Prioriza matar a los Primal Aspids primero (los que vuelan)',
            'Usa hechizos para limpiar grupos de enemigos rápido',
            'Posiciónate cerca de los frascos antes que caigan para matar enemigos instantáneamente',
            'Cyclone Slash es muy efectivo si lo tienes',
            'Curar cuando el Collector esté en el techo lanzando frascos'
        ],
        charms: ['Shaman Stone', 'Soul Eater', 'Quick Slash', 'Grubsong']
    },
    'zote': {
        name: 'Grey Prince Zote',
        image: 'static/img/zote.png',
        difficulty: 'Difícil',
        difficultyClass: 'difficulty-hard',
        location: 'Dirtmouth - Usa Dream Nail en Zote durmiendo después de salvarlo en Deepnest.',
        reward: 'Ninguna excepto completación. Se vuelve más difícil cada vez que lo derrotas.',
        strategy: 'Versión de ensueño de Zote con ataques aleatorios y caóticos. Invoca enemigos voladores, hace ataques de carga impredecibles y saltos. Es más difícil que el Zote real por su aleatoriedad.',
        tips: [
            'Es completamente opcional y no da recompensas útiles',
            'Los ataques son semi-aleatorios, dificulta el aprendizaje de patrones',
            'Cada victoria lo hace MÁS difícil (hasta 10 veces)',
            'Mata primero a los enemigos voladores que invoca',
            'Mantén la distancia y usa hechizos cuando sea posible',
            'Si lo encuentras muy frustrante, simplemente no lo hagas',
            'Es más un desafío de paciencia que de habilidad'
        ],
        charms: ['Quick Slash', 'Shaman Stone', 'Soul Eater', 'Mark of Pride']
    }
};

// Elementos del DOM
const modal = document.getElementById('guideModal');
const modalClose = document.querySelector('.modal-close');
const bossCards = document.querySelectorAll('.boss-card');

// Función para abrir el modal
function openModal(bossKey) {
    const boss = bossData[bossKey];
    if (!boss) return;

    // Llenar información del modal
    document.getElementById('modalBossImage').src = boss.image;
    document.getElementById('modalBossImage').alt = boss.name;
    document.getElementById('modalBossName').textContent = boss.name;
    
    const difficultyElement = document.getElementById('modalBossDifficulty');
    difficultyElement.textContent = boss.difficulty;
    difficultyElement.className = `boss-difficulty ${boss.difficultyClass}`;
    
    document.getElementById('modalLocation').textContent = boss.location;
    document.getElementById('modalReward').textContent = boss.reward;
    document.getElementById('modalStrategy').textContent = boss.strategy;
    
    // Llenar tips
    const tipsContainer = document.getElementById('modalTips');
    tipsContainer.innerHTML = '';
    boss.tips.forEach(tip => {
        const li = document.createElement('li');
        li.textContent = tip;
        tipsContainer.appendChild(li);
    });
    
    // Llenar charms
    const charmsContainer = document.getElementById('modalCharms');
    charmsContainer.innerHTML = '';
    boss.charms.forEach(charm => {
        const charmTag = document.createElement('span');
        charmTag.className = 'charm-tag';
        charmTag.textContent = charm;
        charmsContainer.appendChild(charmTag);
    });
    
    // Mostrar modal
    modal.classList.add('show');
    modal.style.display = 'flex';
}

// Función para cerrar el modal
function closeModal() {
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

// Event listeners
bossCards.forEach(card => {
    const guideButton = card.querySelector('.btn-guide');
    const bossKey = card.getAttribute('data-boss');
    
    guideButton.addEventListener('click', (e) => {
        e.stopPropagation();
        openModal(bossKey);
    });
});

modalClose.addEventListener('click', closeModal);

// Cerrar modal al hacer clic fuera
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Cerrar modal con la tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
        closeModal();
    }
});

// Botones de video (abrir en YouTube)
const videoButtons = document.querySelectorAll('.btn-video');
videoButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        const card = button.closest('.boss-card');
        const bossName = card.querySelector('.boss-name').textContent;
        const searchQuery = `hollow knight ${bossName} guide`;
        window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(searchQuery)}`, '_blank');
    });
});