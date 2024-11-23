const btnOpenMenu = document.querySelector(".btn-menu-responsive");
const btnCloseMenu = document.querySelector(".btn-close");
const menuMobile = document.querySelector(".menu-mobile"); 

btnOpenMenu.addEventListener('click', () => {
    menuMobile.classList.add('active');
});

btnCloseMenu.addEventListener('click', () => {
    menuMobile.classList.remove('active');
});
    
document.addEventListener('DOMContentLoaded', function() {
    // Obtén todas las tarjetas de categorías
    const categoryCards = document.querySelectorAll('.card-category');
    // Obtén todas las recetas
    const recipeCards = document.querySelectorAll('.card-recipes');

    // Función para mostrar solo las recetas de una categoría específica
    function filterRecipes(category) {
        // Recorre todas las recetas
        recipeCards.forEach(recipe => {
            // Obtén la categoría de la receta
            const recipeCategory = recipe.querySelector('.category').textContent.trim();
            
            // Si la categoría coincide o es "Ver todas las categorías", muestra la receta, si no, ocúltala
            if (category === 'Ver todas las categorías' || recipeCategory === category) {
                recipe.style.display = 'block';
            } else {
                recipe.style.display = 'none';
            }
        });
    }

    // Añade evento a cada tarjeta de categoría
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            // Obtén la categoría desde el texto del elemento <p> dentro de la tarjeta
            const selectedCategory = this.querySelector('p').textContent.trim();
            filterRecipes(selectedCategory);
        });
    });

    // Evento para mostrar todas las recetas si se presiona "Ver todas las categorías"
    const allCategoriesBtn = document.querySelector('.btn-all-categories');
    if (allCategoriesBtn) {
        allCategoriesBtn.addEventListener('click', function(e) {
            e.preventDefault();
            filterRecipes('Ver todas las categorías');
        });
    }

    
});