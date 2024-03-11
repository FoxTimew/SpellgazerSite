// YouTube video initialisation
var player0;
var player1;
var player2;

function onYouTubeIframeAPIReady() {
    player0 = new YT.Player('player0', {
        videoId: 'dopBWKMDgIM',
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

    player1 = new YT.Player('player1', {
        videoId: 'NNzEPjX_wH4',
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

    player2 = new YT.Player('player2', {
        videoId: 'Fn0hJQ8CSfE',
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