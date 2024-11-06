//funsionalidad_de_episodios
// Lista de episodios de cada streamer (simulada, puedes cambiarla por datos reales)
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
    ]
    // Agrega más streamers y episodios aquí
};

// Función para buscar streamer y mostrar sus episodios con una estructura HTML compleja
function buscarStreamer() {
    const input = document.getElementById("busqueda-streamer").value.trim().toLowerCase();
    const contenedorEpisodios = document.getElementById("episodios-streamer");

    // Limpiar resultados previos
    contenedorEpisodios.innerHTML = "";

    // Verificar si el nombre del streamer existe en los datos
    const streamer = Object.keys(episodiosDeStreamers).find(nombre =>
        nombre.toLowerCase().includes(input)
    );

    if (streamer) {
        // Si se encuentra el streamer, generar estructura HTML para mostrar episodios
        const episodios = episodiosDeStreamers[streamer];

        // Si el streamer es "Crystal Molly", mostramos la estructura HTML específica
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
            // Crear el contenedor principal para los episodios
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
        // Si no se encuentra el streamer, mostrar mensaje
        contenedorEpisodios.innerHTML = `
            <div class="no-encontrado">
                <p>Streamer no encontrado o no tiene episodios disponibles.</p>
            </div>
        `;
    }
}
