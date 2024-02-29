window.addEventListener('load', function() {
    var loader = document.querySelector('.loader-container');
    var content = document.querySelector('.content');

    // Afficher le contenu et masquer l'écran de chargement
    loader.style.display = 'none';
    content.style.display = 'block';
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
            console.log(imageURLs[i] + "Loaded");
        }
    });
}

// Exemple d'utilisation :
var imageURLs = [];

for (var i = 0; i < 567; i++) {
    imageURLs.push('content/images/img_scroll_anim/' + i.toString().padStart(4, '0') + '.avif');
}

preloadImages(imageURLs).then(function() {
    console.log("Toutes les images sont chargées !");
    // Ici, vous pouvez continuer votre logique JavaScript une fois que toutes les images sont préchargées
}).catch(function(error) {
    console.error("Erreur lors du chargement des images :", error);
});

console.log("Loader Loaded");