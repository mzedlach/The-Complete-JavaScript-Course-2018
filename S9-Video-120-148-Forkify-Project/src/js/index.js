import Search from './models/Search';
import Recipe from './models/Recipe';
import * as searchView from './views/searchView';
import { elements, renderLoader, clearLoader } from './views/base';

// Global state of the app
// - Search Object (contains search query and results)
// - Current recipe object
// - Shopping list object
// - Liked recipes

//This is set so that the state will start empty when the page loads. 
const state = {};

// SEARCH CONTROLLER // 
const controlSearch = async () => {
  // 1) Fetch info from getInput (in searchView.js) and assign it to variable 'query'
  const query = searchView.getInput();
  
  if (query) {
    // 2) New search object and add to state 
    state.search = new Search(query);

    // 3) Prepare UI for results - clear previous results + show loading spinner
    searchView.clearInput();
    searchView.clearResults();
    renderLoader(elements.searchRes);

    // 4) Search for recipes from API call. This will wait until results are returned. 
    await state.search.getResults();
    
    // 5) Render results on UI 
    clearLoader();
    searchView.renderResults(state.search.result);
  }
}

elements.searchForm.addEventListener('submit', e => {
  e.preventDefault(); //prevents page reload
  controlSearch(); 
});

elements.searchResPages.addEventListener('click', e => {
  const btn = e.target.closest('.btn-inline');
  if (btn) {
    // get value of the dataset goto and assign it to goToPage
    const goToPage = parseInt(btn.dataset.goto, 10);
    //clear previous resutls so next page can be show in their place
    searchView.clearResults();
    searchView.renderResults(state.search.result, goToPage);
    
  };
});

// RECIPE CONTROLLER //

const r = new Recipe(47746); 
r.getRecipe();
console.log(r);