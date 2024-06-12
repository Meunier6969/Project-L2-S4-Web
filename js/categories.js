function selectCategory(name) {
    let category = document.getElementsByClassName("categories-" + name)[0];
    let ol = document.getElementsByTagName('ol')[0];

    category.classList.add('desappear');

        // Attendre que l'animation de déplacement se termine
        category.addEventListener('animationend', function() {
            // Supprimer la classe d'animation de déplacement
            category.classList.remove('desappear');

            ol.removeChild(category);
            ol.insertBefore(category, ol.firstChild);

            // Ajouter une classe d'animation d'apparition
            category.classList.add('appear');

            // Supprimer la classe d'animation d'apparition après l'animation
            category.addEventListener('animationend', function() {
                category.classList.remove('appear');
            }, { once: true });

        }, { once: true });
}