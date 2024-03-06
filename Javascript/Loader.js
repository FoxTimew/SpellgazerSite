var anim = document.getElementById('hero-sequence');
var imageURLs = [];
var timeOutDelay = 60000; // 1 minute
var timer = setTimeout(TimeOut, timeOutDelay);

window.addEventListener('load', function() {
    clearTimeout(timer);
    RemoveLoadingScreen();
});

function preloadImages(imageURLs) {
    return new Promise(function(resolve, reject) {
        var loadedImages = 0;
        var totalImages = imageURLs.length;

        // load every frame needed for the hero sequence
        function loadImage(url) {
            var image = new Image();
            image.onload = image.onerror = function() {
                loadedImages++;
                if (loadedImages === totalImages) {
                    resolve(); // All frames are loaded
                }
            };
            image.src = url;
        }

        // Load each frame
        for (var i = 0; i < totalImages; i++) {
            loadImage(imageURLs[i]);
        }
    });
}

// hide the loading screen
function RemoveLoadingScreen() {
    var loader = document.getElementById('loader-container');
    var body = document.body;

    loader.style.display = 'none';
    body.style.overflow = 'visible'; 
    body.style.overflowX = 'hidden'; 
}

function TimeOut() {
    console.log("Le chargement de la page a pris plus d'une minute.");
    anim.style.display = 'none';
    RemoveLoadingScreen();
}

// index every url
for (var i = 0; i < 567; i++) {
    imageURLs.push('content/images/img_scroll_anim/' + i.toString().padStart(4, '0') + '.avif');
}

//predload every indexed url
preloadImages(imageURLs).then(function() {
    RemoveLoadingScreen();
    anim.style.display = 'visible';
}).catch(function(error) {
    console.error("Erreur lors du chargement des images :", error);
});