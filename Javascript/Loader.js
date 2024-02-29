window.addEventListener('load', function() {
    var loader = document.querySelector('.loader-container');
    var content = document.querySelector('.content');

    // Afficher le contenu et masquer l'écran de chargement
    loader.style.display = 'none';
    content.style.display = 'block';
});

console.log("Loader Loaded");