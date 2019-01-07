import axios from 'axios';

async function getResults(query) {
  const proxy = 'https://cors-anywhere.herokuapp.com/';
  const key = 'cc0ab89c8d7d6c05b01c6ab5c1a43102'
  try {
    const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${query}`);
    const recipes = res.data.recipes;
    console.log(recipes);
  } catch (error) {
    alert(error);
  }
  
}
getResults('tomato pasta');
