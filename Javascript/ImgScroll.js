var image = document.getElementById('img-scroll');
var isAnimationFinished = true;
var endPosition = 7358;

image.addEventListener('load', function() {
    HeroAnimationManager();
    if (window.scrollY >= endPosition) FinishedAnimation();
});

window.addEventListener('scroll', function () {
    HeroAnimationManager();
});

function HeroAnimationManager(){
        var scrollPosition = Math.ceil(window.scrollY / 13);
    document.getElementById('img-scroll-anim').style.height = 7358 + image.offsetHeight+'px';
    
    if (isAnimationFinished) {
        changeImage(scrollPosition);
    }
    else if (window.scrollY <= endPosition){
        isAnimationFinished = true;
        image.style.position = 'fixed';
        image.style.top = '0px';
    }
}

function changeImage(frame) {     
    // Changez les images en fonction de la position de défilement
    if (frame < 10) {
        image.src = 'content/images/img_scroll_anim/000' + frame + '.avif';
    } else if (frame < 100) {
        image.src = 'content/images/img_scroll_anim/00' + frame + '.avif';
    } else if (frame <= 566) {
        image.src = 'content/images/img_scroll_anim/0' + frame + '.avif';
    } else {
        FinishedAnimation();
    }
}

function FinishedAnimation() {
        isAnimationFinished = false;
        image.src = 'content/images/img_scroll_anim/0566.avif';
        image.style.position = 'absolute';
        image.style.top = 7358 + 'px';
}

console.log("imgScroll loaded");