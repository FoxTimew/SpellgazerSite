// remove the "anim-" prefix from class
function removeAnimationPrefix(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.forEach(className => {
                if (className.startsWith('anim-')) {
                    entry.target.classList.remove(className);
                    entry.target.classList.add(className.slice(5));
                }
            });
        }
    });
}
        
// Creation of the Intersection Observer
const observer = new IntersectionObserver(removeAnimationPrefix, {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
});
        
// Select every element begining with "anim-"
const animatedElements = document.querySelectorAll('.onScrollAnim');

// Add each element to the Intersection Observer
animatedElements.forEach(element => {
    observer.observe(element);
});