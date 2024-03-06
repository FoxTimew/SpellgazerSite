// YouTube video initialisation
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: 'NpEaa2P7qZI',
        playerVars: {
            'autoplay': 1,
            'controls': 1,
            'rel': 0,
            'showinfo': 0,
            'playsinline': 1
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}