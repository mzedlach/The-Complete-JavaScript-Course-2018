import str from './models/Search' ;
// import { add, multiply, id } from './views/searchView' ; 
// console.log(`Using imported functions! ${add(id, 2)} and ${multiply(3, 5)}, ${str}`);

// import { add as a, multiply as m , id } from './views/searchView' ; 
// console.log(`Using imported functions! ${a(id, 2)} and ${m(3, 5)}, ${str}`);

import * as searchView from './views/searchView';
console.log(`Using imported functions! ${searchView.add(searchView.id, 2)} and ${searchView.multiply(3, 5)}, ${str}`);
