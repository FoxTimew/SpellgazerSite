var titleImage = document.getElementById('SG-logo');

window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;

    // Calculer la taille de l'image et l'opacité en fonction du défilement
    var scale = 1 + scrollPosition / 15000; // Grossissement de l'image en fonction du défilement
    var opacity = 1;

    // Appliquer les styles à l'image
    titleImage.style.position ='fixed';
    titleImage.style.transform = 'translate(-50%, -50%) scale(' + scale + ')';
    titleImage.style.opacity = 1;
    if (scrollPosition > 1000) {
        titleImage.style.position = 'absolute';
    }
    // Masquer l'image lorsque l'utilisateur a défilé au-delà de la hauteur de la page
    else if (scrollPosition > 700) {
        opacity = 1 - (scrollPosition - 700) / 300;
        titleImage.style.opacity = opacity;
    }
});

console.log("Fade Loaded");