import { elements } from './base'; 

//Get actual input of text written in search box
export const getInput = () => elements.searchInput.value;
//Clear text in search box
export const clearInput = () => { 
  elements.searchInput.value = '' 
};
//Clear all previous results in left panel
export const clearResults = () => { 
  elements.searchResultList.innerHTML = ''; 
  elements.searchResPages.innerHTML = '';
};

export const highlightSelected = id => {
  const resultsArr = Array.from(document.querySelectorAll('.results__link'))
  resultsArr.forEach(el => {
    el.classList.remove('results__link--active');
  })
  document.querySelector(`.results__link[href*="${id}"]`).classList.add('results__link--active');
};

/*
'Pasta with tomato and spinach'
acc: 0 / acc + cur.length = 5 / newTitle = ['Pasta']
acc: 5 / acc + cur.length = 9 / newTitle = ['Pasta', 'with']
acc: 9 / acc + cur.length = 15 / newTitle = ['Pasta', 'with', tomato']
acc: 15 / acc + cur.length = 18 / newTitle = ['Pasta', 'with', tomato']
acc: 18 / acc + cur.length = 24 / newTitle = ['Pasta', 'with', tomato']
*/
export const limitRecipeTitle = (title, limit = 17) => {
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
      <a class="results__link" href="#${recipe.recipe_id}">
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

// type: 'prev' or 'next' 
const createButton = (page, type) =>  `
    <button class="btn-inline results__btn--${type}" data-goto=${type === 'prev' ? page-1 : page+1}>
      <span>Page ${type === 'prev' ? page-1 : page+1}</span>
      <svg class="search__icon">
        <use href="img/icons.svg#icon-triangle-${type === 'prev' ? 'left' : 'right'}"></use>
      </svg>
    </button>
`;


const renderButtons = (page, numResults, resPerPage) => {
  const pages = Math.ceil(numResults / resPerPage) ;
  let button; 

  if (page === 1 && pages > 1) {
    // only button for next page 
    button = createButton(page,'next');

  } else if (page < pages) {
    // both buttons for prevoius and next 
    button = `
      ${createButton(page,'prev')}
      ${createButton(page,'next')}
    `;

  } else if (page === pages && pages > 1) {
    // only button for previous page
    button = createButton(page,'prev');
  }
  
  elements.searchResPages.insertAdjacentHTML('afterbegin', button);
};

export const renderResults = (recipes, page = 1, resPerPage = 10) => {
  // render resutls of current page 
  const start = (page - 1) * resPerPage ;
  const end = page * resPerPage ;

  // Array of all 30 recipes
  // recipes.forEach(renderRecipe);
  recipes.slice(start, end).forEach(renderRecipe);

  // render pagination button at bottom
  renderButtons(page, recipes.length, resPerPage);

};
