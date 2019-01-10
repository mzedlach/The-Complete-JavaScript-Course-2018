import { elements } from './base'; 

//Get actual input of text written in search box
export const getInput = () => elements.searchInput.value;
//Clear text in search box
export const clearInput = () => { elements.searchInput.value = '' };
//Clear all previous results in left panel
export const clearResults = () => { elements.searchResultList.innerHTML = ''; };


/*
'Pasta with tomato and spinach'
acc: 0 / acc + cur.length = 5 / newTitle = ['Pasta']
acc: 5 / acc + cur.length = 9 / newTitle = ['Pasta', 'with']
acc: 9 / acc + cur.length = 15 / newTitle = ['Pasta', 'with', tomato']
acc: 15 / acc + cur.length = 18 / newTitle = ['Pasta', 'with', tomato']
acc: 18 / acc + cur.length = 24 / newTitle = ['Pasta', 'with', tomato']
*/
const limitRecipeTitle = (title, limit = 17) => {
  const newTitle = []; 
  if (title.length > limit) {
    title.split(' ').reduce((acc, cur) => {
      if (acc + cur.length <= limit) {
        newTitle.push(cur);
      }
      //the returned value is new value for accumulator
      return acc + cur.length;
    }, 0);
    //Return new result
    return `${newTitle.join(' ')} ...`;
  } 
  return title;
};

//Create and input HTML for each recipe object
const renderRecipe = recipe => {
  const markup = `
    <li>
      <a class="results__link" href="#${recipe.recipe_id}}">
          <figure class="results__fig">
              <img src="${recipe.image_url}" alt="${recipe.title}">
          </figure>
          <div class="results__data">
              <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
              <p class="results__author">${recipe.publisher}</p>
          </div>
      </a>
    </li>
  `;
  elements.searchResultList.insertAdjacentHTML('beforeend', markup);
};

export const renderResults = recipes => {
  recipes.forEach(renderRecipe);
};
