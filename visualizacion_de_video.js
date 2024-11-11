document.addEventListener('DOMContentLoaded', function() {
    function getQueryParameter(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }
    const playlistString = getQueryParameter('playlist');
    const videoPlayer = document.getElementById('videoPlayer');
    const videoSource = document.getElementById('videoSource');
    if (playlistString) {
        const playlist = playlistString.split(',');
        let currentVideoIndex = 0;
        function loadVideo(index) {
            if (index < playlist.length) {
                videoSource.src = playlist[index];
                videoPlayer.load();
                videoPlayer.onloadeddata = () => {
                    videoPlayer.play();
                };
            }
        }
        loadVideo(currentVideoIndex);
        videoPlayer.onended = function() {
            currentVideoIndex++;
            if (currentVideoIndex < playlist.length) {
                loadVideo(currentVideoIndex);
            } else {
                console.log('Fin de la lista de reproducción.');
            }
        };
    } else {
        console.error('No se encontró la lista de reproducción en la URL.');
    }
});