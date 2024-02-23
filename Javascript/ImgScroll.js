var image = document.getElementById('img-scroll');
var body = document.body;
var isAnimationFinished = true;
var endPosition = -1;

window.addEventListener('scroll', function() {
    var scrollPosition = Math.ceil(window.scrollY / 13);
    if (isAnimationFinished) {
        changeImage(scrollPosition);
    }
    else if (window.scrollY <= endPosition){
        isAnimationFinished = true;
        image.style.position = 'fixed';
        image.style.top = '50%';
        image.style.left = '50%';
        image.style.width = '100vw'
        image.style.transform = 'translate(-50%, -50%)';
        body.style.backgroundColor = '#f14ffd';
    }
});

function changeImage(frame) {     
    // Changez les images en fonction de la position de défilement
    if (frame < 10) {
        image.src = 'content/images/img_scroll_anim/000' + frame + '.png';
    } else if (frame < 100) {
        image.src = 'content/images/img_scroll_anim/00' + frame + '.png';
    } else if (frame <= 566) {
        image.src = 'content/images/img_scroll_anim/0' + frame + '.png';
    } else {
        image.src = 'content/images/img_scroll_anim/0566.png';
        endPosition = window.scrollY;
        image.style.position = 'absolute';
        image.style.top = (window.scrollY + window.innerHeight / 2) + 'px';
        image.style.left = '50%';
        image.style.transform = 'translate(-50%, -50%)';
        image.style.width = '100vw';
        isAnimationFinished = false;
        body.style.backgroundColor = 'white';
    }

}

console.log("imgScroll loaded");