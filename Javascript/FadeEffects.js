var elements = [document.getElementById('first-catch'),
document.getElementById('second-catch'),
document.getElementById('third-catch'),
document.getElementById('SG-logo')];
var background = document.getElementById('black-background');
var scrollPosition = window.scrollY;

elements[0].style.position = 'fixed';
elements[0].style.zIndex = '1';
elements[0].style.opacity = OpacityCalculator(700, 1500);
elements[0].style.transform = 'translate(-50%, -50%) scale(' + ScaleCalcultaor(0) + ')';

function Reset() {
    elements.forEach(e => {
        e.style.position = 'absolute';
        e.style.zIndex = '-11';
    });
        background.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        background.style.backdropFilter = 'blur(0px)';
}

function OpacityCalculator(min, max) {
    value = 1 - (scrollPosition - min) / (max - min);
    return value;
}

function ScaleCalcultaor(min) {
    var value = 1 + (scrollPosition - min) / 15000;
    return value;
}

UpDate();

window.addEventListener('scroll', function () {
    scrollPosition = window.scrollY;

    UpDate();
});

function UpDate() {
    Reset();

    if (scrollPosition >= 7358 + window.innerHeight / 2 - 176/2) {
        elements[3].style.position = 'absolute';
        elements[3].style.top = 7358 + window.innerHeight - 176/2 -42 + 'px';
        elements[3].style.zIndex = '1';
        background.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
        background.style.backdropFilter = 'blur(4px)';
    }
    else if (scrollPosition >= 7358 && scrollPosition < 7358 + window.innerHeight - 176/2) {
        elements[3].style.position = 'fixed';
        elements[3].style.top = '50%';
        elements[3].style.zIndex = '1';
        background.style.backgroundColor = 'rgba(0, 0, 0, ' + (scrollPosition - 7358) / 737 + ')';
        background.style.backdropFilter = 'blur(' + (scrollPosition - 7358) / 110 +'px)';
    }
    else if (scrollPosition >= 6000 && scrollPosition <= 7357) {
        elements[3].style.position = 'fixed';
        elements[3].style.zIndex = '1';
        elements[3].style.top = '50%';
    }
    else if (scrollPosition >= 3700 && scrollPosition <= 5000) {
        elements[2].style.position = 'fixed';
        elements[2].style.zIndex = '1';
        elements[2].style.opacity = OpacityCalculator(4400, 4700);
        elements[2].style.transform = 'translate(-50%, -110%) scale(' + ScaleCalcultaor(5000) + ')';
    }
    else if (scrollPosition >= 2000 && scrollPosition <= 3500) {
        elements[1].style.position = 'fixed';
        elements[1].style.zIndex = '1';
        elements[1].style.opacity = OpacityCalculator(2700, 3500);
        elements[1].style.transform = 'translate(-50%, -0%) scale(' + ScaleCalcultaor(3000) + ')';
    }
    else {
        elements[0].style.position = 'fixed';
        elements[0].style.zIndex = '1';
        elements[0].style.opacity = OpacityCalculator(700, 1500);
        elements[0].style.transform = 'translate(-50%, -50%) scale(' + ScaleCalcultaor(0) + ')';
    }
}