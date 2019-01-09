import { elements } from './base'; 

export const getInput = () => elements.searchInput.value;

//Clear Search bar
export const clearInput = () => { elements.searchInput.value = '' };
//Clear all previous results
export const clearResults = () => { elements.searchResultList.innerHTML = ''; };

//Create and input HTML for each recipe object
const renderRecipe = recipe => {
  const markup = `
    <li>
      <a class="results__link" href="#${recipe.recipe_id}}">
          <figure class="results__fig">
              <img src="${recipe.image_url}" alt="${recipe.title}">
          </figure>
          <div class="results__data">
              <h4 class="results__name">${recipe.title}</h4>
              <p class="results__author">${recipe.publisher}</p>
          </div>
      </a>
    </li>
  `;
  elements.searchResultList.insertAdjacentHTML('beforeend', markup);
};

//WHAT IS THIS?!
export const renderResults = recipes => {
  recipes.forEach(renderRecipe);
};
