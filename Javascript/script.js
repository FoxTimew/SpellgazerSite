console.log("Hello World")

window.addEventListener('scroll', function () {
    var videoContainer = document.getElementById('videoContainer');
    var myVideo = document.getElementById('myVideo');

    // Détermine le point à partir duquel la vidéo doit suivre
    var scrollTrigger = 300; // Modifiez cette valeur selon votre besoin

    if (window.scrollY > scrollTrigger) {
        videoContainer.classList.add('video-follow');
    } else {
        videoContainer.classList.remove('video-follow');
    }
});