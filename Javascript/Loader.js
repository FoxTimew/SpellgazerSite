window.addEventListener('load', function() {
    var loader = document.querySelector('.loader-container');
    var body = document.body;

    // Afficher le contenu et masquer l'écran de chargement
    loader.style.display = 'none';
    body.style.overflow = 'visible'; 
    body.style.overflowX = 'hidden'; 
});

function preloadImages(imageURLs) {
    return new Promise(function(resolve, reject) {
        var loadedImages = 0;
        var totalImages = imageURLs.length;

        // Fonction de chargement pour chaque image
        function loadImage(url) {
            var image = new Image();
            image.onload = image.onerror = function() {
                loadedImages++;
                if (loadedImages === totalImages) {
                    resolve(); // Toutes les images sont chargées
                }
            };
            image.src = url;
        }

        // Charger chaque image
        for (var i = 0; i < totalImages; i++) {
            loadImage(imageURLs[i]);
        }
    });
}

// Exemple d'utilisation :
var imageURLs = [];

for (var i = 0; i < 567; i++) {
    imageURLs.push('content/images/img_scroll_anim/' + i.toString().padStart(4, '0') + '.avif');
}

preloadImages(imageURLs).then(function() {
}).catch(function(error) {
    console.error("Erreur lors du chargement des images :", error);
});

window.scrollTo(0, 0);

console.log("Loader Loaded");