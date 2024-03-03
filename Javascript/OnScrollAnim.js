// Fonction pour retirer le préfixe "anim-" de la classe
function removeAnimationPrefix(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.forEach(className => {
                if (className.startsWith('anim-')) {
                    entry.target.classList.remove(className);
                    entry.target.classList.add(className.slice(5)); // Retire les 5 premiers caractères (anim-)
                }
            });
        }
    });
}
        
// Création de l'objet Intersection Observer
const observer = new IntersectionObserver(removeAnimationPrefix, {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 // Modifiez ceci pour ajuster la sensibilité
});
        
// Sélectionne tous les éléments avec une classe commençant par "anim-"
const animatedElements = document.querySelectorAll('.onScrollAnim');
        
// Ajoute chaque élément à l'observateur Intersection Observer
animatedElements.forEach(element => {
    observer.observe(element);
});


console.log("OnScrollAnim Loaded");