console.log("Fade Loaded");

// JavaScript code goes here
var titleImage = document.getElementById('titleImage');

window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;

    // Calculer la taille de l'image et l'opacit� en fonction du d�filement
    var scale = 1 + scrollPosition / 15000; // Grossissement de l'image en fonction du d�filement
    var opacity = 1;

    // Appliquer les styles � l'image
    titleImage.style.transform = 'translate(-50%, -50%) scale(' + scale + ')';
    titleImage.style.opacity = 1;
    if (scrollPosition > 700) {
        opacity = 1 - (scrollPosition - 700) / 300;
        titleImage.style.opacity = opacity;
    }
    // Masquer l'image lorsque l'utilisateur a d�fil� au-del� de la hauteur de la page
    else if (scrollPosition > 1000) {
        titleImage.classList.add('hidden');
    } else {
        titleImage.classList.remove('hidden');
    }
});

