
import axios from 'axios';

export default class Search {
  constructor(query) {
    this.query = query;
  }
  
  async getResults() {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const key = 'cc0ab89c8d7d6c05b01c6ab5c1a43102'
    try {
      const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
      this.result = res.data.recipes;
      // console.log(this.result);
    } catch (error) {
      alert(error);
    }
  }
}
