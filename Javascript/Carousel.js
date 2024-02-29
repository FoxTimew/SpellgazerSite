const carousel = document.querySelectorAll('.carousel');
let currentIndex = [];

for (var i = 0; i < carousel.length; i++) {
currentIndex[i] = 0;
}

function goToIndex(carouselIndex, itemindex) {
const items = carousel[carouselIndex].querySelectorAll('.carousel-item');
const buttons = document.querySelectorAll('.carousel-button-container')[carouselIndex].querySelectorAll('.carousel-button-item');
const itemWidth = carousel[carouselIndex].offsetWidth;

    
if (itemindex < 0 || itemindex>= items.length) return;
    buttons[currentIndex[carouselIndex]].classList.remove("active");
    currentIndex[carouselIndex] = itemindex;
    buttons[currentIndex[carouselIndex]].classList.add("active");
    carousel[carouselIndex].querySelector('.carousel-container').style.transform = `translateX(-${currentIndex[carouselIndex] * itemWidth}px)`;
}

function next(carouselIndex) {
if (currentIndex[carouselIndex] === carousel[carouselIndex].querySelectorAll('.carousel-item').length - 1) {
    goToIndex(carouselIndex, 0);
} else {
    goToIndex(carouselIndex, currentIndex[carouselIndex] + 1);
}
}

function prev(carouselIndex) {
if (currentIndex[carouselIndex] === 0) {
    goToIndex(carouselIndex, carousel[carouselIndex].querySelectorAll('.carousel-item').length  - 1);
} else {
    goToIndex(carouselIndex, currentIndex[carouselIndex] - 1);
}
}
console.log("Carousel Loaded");