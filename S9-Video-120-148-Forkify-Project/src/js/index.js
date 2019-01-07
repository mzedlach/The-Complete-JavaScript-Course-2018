import Search from './models/Search';

// Global state of the app
// - Search Object (contains search query and results)
// - Current recipe object
// - Shoppign list object
// - Liked recipes

//This is set so that the state will start empty when the page loads. 
const state = {};

const controlSearch = async () => {
  // 1) Get query fro the view
  const query = 'pizza' //TODO - this is a placeholder
  
  if (query) {
    // 2) New search object and add to state
    state.search = new Search(query);
    // 3) Prepare UI for results

    // 4) Search for recipes. 
    await state.search.getResults();
    // 5) Render results on UI 
    console.log(state.search.result);
    // 6)
  }
}

document.querySelector('.search').addEventListener('submit', e => {
  e.preventDefault(); //prevents page reload
  controlSearch(); 
});

