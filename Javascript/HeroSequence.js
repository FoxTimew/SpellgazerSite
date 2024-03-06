var image = document.getElementById('hero-sequence-img');
var isAnimationFinished = false;
var endPosition = 7358; //size needed for the sequence

Update();

image.addEventListener('load', function() {
    if (window.scrollY >= endPosition) FinishedAnimation();
});

window.addEventListener('scroll', function () {
    Update();
});

function Update(){
    var scrollPosition = Math.ceil(window.scrollY / 13);

    // adjust the container height depending of the user's screen
    document.getElementById('hero-sequence-container').style.height = 7358 + image.offsetHeight+'px';
    
    if (!isAnimationFinished) {
        changeImage(scrollPosition);
    }
    else if (window.scrollY <= endPosition){
        isAnimationFinished = false;
        image.style.position = 'fixed';
        image.style.top = '0px';
    }
}

function changeImage(frame) {     
    // Choose the right images depending of scrolling position
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
        isAnimationFinished = true;
        image.src = 'content/images/img_scroll_anim/0566.avif';
}