import Search from './models/Search';
import Recipe from './models/Recipe';
import List from './models/List';
import Likes from './models/Likes';

import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import * as listView from './views/listView';
import * as likesView from './views/likesView';

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

    try {
      // 4) Search for recipes from API call. This will wait until results are returned. 
      await state.search.getResults();
      
      // 5) Render results on UI 
      clearLoader();
      searchView.renderResults(state.search.result);

    } catch (err) {
      alert('Something went wront with the search...');
      clearLoader();
    }
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

// const r = new Recipe(47746); 
// r.getRecipe();

const controlRecipe = async () => {
  // Get ID from url
  const id = window.location.hash.replace('#','');

  if (id) {
    // Prepare UI for changes
    recipeView.clearRecipe();
    renderLoader(elements.recipe);

    // Highlight the selected search item
    if (state.search) searchView.highlightSelected(id);

    // Create new recipe object
    state.recipe = new Recipe(id);

    try {
      // Get recipe data and parse ingredients
      await state.recipe.getRecipe();
      state.recipe.parseIngredients();

      // Calculate servings and time for prepareation - functions in Recipe.js
      state.recipe.calcTime();
      state.recipe.calcServings();

      // Render Recipe
      clearLoader();
      recipeView.renderRecipe(
        state.recipe,
        state.likes.isLiked(id)
        );
    } catch (err) {
      alert('Error processing recipe!');
    }
  }
};

// window.addEventListener('hashchange', controlRecipe);
// window.addEventListener('load', controlRecipe);
// Can compress above two lines into one line like this:
['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));


// LIST CONTROLLER //
const controlList = () => {
  // Create a new list if none yet exists
  if (!state.list) state.list = new List();

  // Add each ingredient to the list and UI
  state.recipe.ingredients.forEach(el => {
    const item = state.list.addItem(el.count, el.unit, el.ingredient);
    listView.renderItem(item);
  });
};

// Handling delete and update list item events 
elements.shopping.addEventListener('click', e => {
  const id = e.target.closest('.shopping__item').dataset.itemid; 
  //Handle the delete button
  if (e.target.matches('.shopping__delete, .shopping__delete *')) {
    //Delete from state
    state.list.deleteItem(id);

    // Delete from UI
    listView.deleteItem(id);

    //Handle the count update
  } else if (e.target.matches('.shopping__count-value')) {
    const val = parseFloat(e.target.value, 10);
    state.list.updateCount(id, val);
  }
});

// LIKE CONTROLLER //
const controlLike = () => {
  //If there is no like state yet, we want to make a new one
  if (!state.likes) state.likes = new Likes();

  // User has NOT yet liked current recipe
  const currentID = state.recipe.id;
  if (!state.likes.isLiked(currentID)) {
    // Add like to the state
    const newLike = state.likes.addLike(
      currentID, 
      state.recipe.title, 
      state.recipe.author,
      state.recipe.img
    );
    // Toggle like button
    likesView.toggleLikeButton(true);
    // Add like to the UI list
    likesView.renderLike(newLike);

  // User has already like current recipe
  }else {
    // Remove like from the state
    state.likes.deleteLike(currentID);
    // Toggle the like button
    likesView.toggleLikeButton(false);
    // Remove like from UI list
    likesView.deleteLike(currentID);

  }
  likesView.toggleLikeMenu(state.likes.getNumLikes());
}

// Restore liked recipes on page load
window.addEventListener('load', () => {
  state.likes = new Likes();
  // Restore likes 
  state.likes.readStorage();
  // Toggle like menu button. If there are likes, the button will be visible
  likesView.toggleLikeMenu(state.likes.getNumLikes());
  // Render the existing likes
  state.likes.likes.forEach(like => likesView.renderLike(like));
});

// Handling recipe button clicks
elements.recipe.addEventListener('click', e => {
  if (e.target.matches('.btn-decrease, .btn-decrease *')) {
    // Decrease button is clicked 
    if (state.recipe.servings > 1) {
      state.recipe.updateServings('dec');
      recipeView.updateServingsIngredients(state.recipe);
    }
  } else if (e.target.matches('.btn-increase, .btn-increase *')) {
    // Increase button is clicked 
    state.recipe.updateServings('inc');
    recipeView.updateServingsIngredients(state.recipe);
  } else if (e.target.matches('.recipe__btn--add, .recipe__btn--add *')) {
    // Add ingredients to the shopping list
    controlList();
  } else if (e.target.matches('.recipe__love, .recipe__love *')) {
    // Like controller 
    controlLike();
  }
});