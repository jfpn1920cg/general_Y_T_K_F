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

// Arreglo para guardar los streamers registrados
let streamersRegistrados = [];

function buscarStreamer() {
    const input = document.getElementById("busqueda-streamer").value.trim().toLowerCase();
    const contenedorEpisodios = document.getElementById("episodios-streamer");
    const contenedorStreamers = document.getElementById("registro-streamers");

    contenedorEpisodios.innerHTML = "";

    // Verificar si el nombre del streamer existe en los datos
    const streamer = Object.keys(episodiosDeStreamers).find(nombre =>
        nombre.toLowerCase().includes(input)
    );

    if (streamer) {
        // Si el streamer no está en el arreglo de streamers registrados, agregarlo
        if (!streamersRegistrados.includes(streamer)) {
            streamersRegistrados.push(streamer);
            mostrarStreamersRegistrados();
        }

        const episodios = episodiosDeStreamers[streamer];
        
        // Estructura HTML para "Crystal Molly"
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
            // Estructura para otros streamers
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

function mostrarStreamersRegistrados() {
    const contenedorStreamers = document.getElementById("registro-streamers");

    // Limpiar los registros anteriores
    contenedorStreamers.innerHTML = "";

    // Mostrar los streamers registrados
    streamersRegistrados.forEach(streamer => {
        const divStreamer = document.createElement("div");
        divStreamer.classList.add("streamer-registrado");
        divStreamer.textContent = streamer;
        contenedorStreamers.appendChild(divStreamer);
    });
}

function borrarBusqueda() {
    // Limpiar los registros de streamers
    streamersRegistrados = [];
    mostrarStreamersRegistrados();
}
// Aseguramos que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function() {
    // Obtenemos el reproductor de video y el título del video
    const videoPlayer = document.getElementById('videoPlayer');
    const videoTitle = document.getElementById('video-title');

    // Lista de reproducción con los videos y sus títulos
    const playlist = [
        {
            src: "squid_craft_games_3_trailer_parte_1.mp4",
            title: "Squid Craft Games 3 - Parte 1"
        },
        {
            src: "squid_craft_games_3_trailer_parte_2.mp4",
            title: "Squid Craft Games 3 - Parte 2"
        },
        {
            src: "squid_craft_games_3_trailer_parte_3.mp4",
            title: "Squid Craft Games 3 - Parte 3"
        }
    ];

    // Índice del video actual
    let currentVideoIndex = 0;

    // Función para cargar y reproducir un video de la lista de reproducción
    function loadVideo(index) {
        if (index < playlist.length) {
            videoPlayer.src = playlist[index].src;
            videoTitle.textContent = playlist[index].title;
            videoPlayer.play();
        }
    }

    // Función para reproducir el siguiente video en la lista
    function playNextVideo() {
        currentVideoIndex++;
        if (currentVideoIndex >= playlist.length) {
            currentVideoIndex = 0; // Reinicia la lista de reproducción si llega al final
        }
        loadVideo(currentVideoIndex);
    }

    // Cuando el video actual termine, reproducimos el siguiente
    videoPlayer.addEventListener('ended', playNextVideo);

    // Cargar el primer video al cargar la página
    loadVideo(currentVideoIndex);

    // Permitir hacer clic en las miniaturas para seleccionar un video
    document.querySelectorAll('.video-thumb video').forEach((thumb, index) => {
        thumb.addEventListener('click', () => {
            currentVideoIndex = index; // Actualizamos el índice con el video seleccionado
            loadVideo(currentVideoIndex);
        });
    });
});
