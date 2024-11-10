//funcionalidad_general_de_barra_de_busqueda
const episodiosDeStreamers = {
    "Soy Pan": [
        {titulo: "Episodio 1 - Supervivencia", descripcion: "El primer episodio donde los jugadores se enfrentan a la supervivencia."},
        {titulo: "Episodio 2 - La batalla final", descripcion: "Una batalla épica que decide quién será el ganador."},
        {titulo: "Episodio 3 - La gran traición", descripcion: "Un giro inesperado que cambia el curso del juego."}
    ],
    "Crystal Molly": [
        {titulo: "Episodio 1 - Introducción", descripcion: "Bienvenida y primera mirada al juego."},
        {titulo: "Episodio 2 - Los juegos comienzan", descripcion: "Las primeras pruebas comienzan para los jugadores."}
    ],
    "Rociodta": [
        {titulo: "Episodio 1 - Exploración", descripcion: "Exploración y descubrimiento de las primeras trampas."},
        {titulo: "Episodio 2 - Trampas y estrategias", descripcion: "Cómo evitar las trampas y usar estrategias inteligentes."}
    ],
    "Rociodta1": [
        {titulo: "Episodio 1 - Exploración", descripcion: "Exploración y descubrimiento de las primeras trampas."},
        {titulo: "Episodio 2 - Trampas y estrategias", descripcion: "Cómo evitar las trampas y usar estrategias inteligentes."}
    ],
    "Rociodta2": [
        {titulo: "Episodio 1 - Exploración", descripcion: "Exploración y descubrimiento de las primeras trampas."},
        {titulo: "Episodio 2 - Trampas y estrategias", descripcion: "Cómo evitar las trampas y usar estrategias inteligentes."}
    ],
    "Rociodta3": [
        {titulo: "Episodio 1 - Exploración", descripcion: "Exploración y descubrimiento de las primeras trampas."},
        {titulo: "Episodio 2 - Trampas y estrategias", descripcion: "Cómo evitar las trampas y usar estrategias inteligentes."}
    ]
};
//funcionalidad_de_barra_de_busqueda_registrar_nombre_del_streamers
let streamersRegistrados = [];
function buscarStreamer() {
    const input = document.getElementById("busqueda-streamer").value.trim().toLowerCase();
    const contenedorEpisodios = document.getElementById("episodios-streamer");
    const contenedorStreamers = document.getElementById("registro-streamers");
    contenedorEpisodios.innerHTML = "";
    const streamer = Object.keys(episodiosDeStreamers).find(nombre =>
        nombre.toLowerCase().includes(input)
    );
    if (streamer) {
        if (!streamersRegistrados.includes(streamer)) {
            streamersRegistrados.push(streamer);
            mostrarStreamersRegistrados();
        }
        //funcionalidad_contenido_de_crystal molly
        const episodios = episodiosDeStreamers[streamer];
        if (streamer.toLowerCase() === "crystal molly") {
            const estructuraHTML = `
                <div class="categoria_parte_17">
                    <img src="imagen_4.jpg" alt="Imagen descriptiva" class="categoria_imagen_parte_17">
                    <div class="contener_boton">
                        <button class="boton_entrar_parte_17">Entrar</button>
                    </div>
                </div>
            `;
            contenedorEpisodios.innerHTML = estructuraHTML;
        } else {
            const contenedorEpisodiosHTML = `
                <div class="streamer-info">
                    <h2>Episodios de ${streamer}</h2>
                    <p>Estos son los episodios disponibles de ${streamer}. ¡Disfrútalos!</p>
                </div>
                <div class="episodios-container">
                    ${episodios.map(episodio => `
                        <div class="episodio-card">
                            <h3>${episodio.titulo}</h3>
                            <p>${episodio.descripcion}</p>
                            <button class="ver-episodio-btn">Ver Episodio</button>
                        </div>
                    `).join('')}
                </div>
            `;
            contenedorEpisodios.innerHTML = contenedorEpisodiosHTML;
        }
    } else {
        contenedorEpisodios.innerHTML = `
            <div class="no-encontrado">
                <p>Streamer no encontrado o no tiene episodios disponibles.</p>
            </div>
        `;
    }
}
//funcionalidad_de_barra_de_busqueda_historial_de_busqueda
function mostrarStreamersRegistrados() {
    const contenedorStreamers = document.getElementById("registro-streamers");
    contenedorStreamers.innerHTML = "";
    streamersRegistrados.forEach(streamer => {
        const divStreamer = document.createElement("div");
        divStreamer.classList.add("streamer-registrado");
        divStreamer.textContent = streamer;
        contenedorStreamers.appendChild(divStreamer);
    });
}
//funcionalidad_de_borrador_de_historial_de_busqueda_de_la_barra_de_busqueda
function borrarBusqueda() {
    streamersRegistrados = [];
    mostrarStreamersRegistrados();
}
//funcionalidad_general_de_anuncio_de_squid_craft_games_3
//funcionalidad_trailer_de_los_squid_craft_games_3
document.addEventListener('DOMContentLoaded', function() {
    const videoPlayer = document.getElementById('videoPlayer');
    const videoTitle = document.getElementById('video-title');
    const playlist = [
        {
            src: "squid_craft_games_3_trailer_parte_1.mp4",
            title: "Squid Craft Games 3 - trailer"
        },
        {
            src: "squid_craft_games_3_trailer_parte_2.mp4",
            title: "Squid Craft Games 3 - trailer"
        },
        {
            src: "squid_craft_games_3_trailer_parte_3.mp4",
            title: "Squid Craft Games 3 - trailer"
        }
    ];
    let currentVideoIndex = 0;
    function loadVideo(index) {
        if (index < playlist.length) {
            videoPlayer.src = playlist[index].src;
            videoTitle.textContent = playlist[index].title;
            videoPlayer.play();
        }
    }
    function playNextVideo() {
        currentVideoIndex++;
        if (currentVideoIndex >= playlist.length) {
            currentVideoIndex = 0;
        }
        loadVideo(currentVideoIndex);
    }
    videoPlayer.addEventListener('ended', playNextVideo);
    loadVideo(currentVideoIndex);
    document.querySelectorAll('.video-thumb video').forEach((thumb, index) => {
        thumb.addEventListener('click', () => {
            currentVideoIndex = index;
            loadVideo(currentVideoIndex);
        });
    });
});
//funcionalidad_participantes_carrusel
document.addEventListener('DOMContentLoaded', function() {
    const categories = document.querySelectorAll('.category');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const carousel = document.querySelector('.carousel');
    const categoryWidth = categories[0].offsetWidth + 30; // Ancho de las categorías + margen
    let currentIndex = 0;

    // Verifica si prevBtn y nextBtn existen
    if (prevBtn && nextBtn) {
        // Función para actualizar la categoría activa (también se desplaza)
        function updateCategory() {
            // Actualiza la clase activa
            categories.forEach((category, index) => {
                category.classList.remove('active');
                if (index === currentIndex) {
                    category.classList.add('active');
                }
            });

            // Mueve el carrusel
            carousel.style.transform = `translateX(-${currentIndex * categoryWidth}px)`;
        }

        // Evento para el botón "Anterior"
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex === 0) ? categories.length - 1 : currentIndex - 1;
            updateCategory();
        });

        // Evento para el botón "Siguiente"
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex === categories.length - 1) ? 0 : currentIndex + 1;
            updateCategory();
        });

        // Inicializa la primera categoría como activa
        updateCategory();
    } else {
        console.error('No se pudo encontrar el botón anterior o siguiente.');
    }
});
