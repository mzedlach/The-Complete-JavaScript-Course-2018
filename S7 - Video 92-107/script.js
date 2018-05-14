/*-----------------------*/
/*-----Let and Const-----*/
/*-----------------------*/
/*
// ES5
var name5 = 'Jane Smith';
var age5 = 23; 
name5 = 'Jane Miller';
console.log(name5);

// ES6
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6);


// ES5
function driversLicence5(passedTest) {
    
    if (passedTest) {
        console.log(firstName);
        var firstName = 'John';
        var yearOfBirth = 1990; 
    }
    console.log(firstName + ', born in ' + yearOfBirth + ' is now officially allowed to drive a car.');
}

driversLicence5(true);


// ES6
function driversLicence6(passedTest) {
    
//    console.log(firstName);
    let firstName;
    const yearOfBirth = 1990; 
    
    if (passedTest) {
        firstName = 'John';
    }
    console.log(firstName + ', born in ' + yearOfBirth + ' is now officially allowed to drive a car.');
}

driversLicence6(true);




let i = 23; 

for (let i = 0 ; i < 5; i++) {
    console.log(i);
}

console.log(i);
//Output - 0, 1, 2, 3, 4, 23

var i = 23; 

for (var i = 0 ; i < 5; i++) {
    console.log(i);
}

console.log(i);
//Output - 0, 1, 2, 3, 4, 5
*/

/*--------------------------*/
/*-----Blocks and IIFEs-----*/
/*--------------------------*/
/*
// ES6
{
    const a = 1;
    let b = 2;
    var c = 3;
}

console.log(a + b);
// a is not defined
console.log(c);
// 3


// ES5

(function() {
    var c = 3;
})();


console.log(c);
//c is not defined
*/

/*-----------------*/
/*-----Strings-----*/
/*-----------------*/

/*
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990; 

function calcAge(year) {
    return 2016 - year;
}

// --- Template Literals --- // 

// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');


// ES6 
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`)


const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));
console.log(n.endsWith('th'));
console.log(n.includes('oh'));
console.log(`${firstName} `.repeat(5));
*/

/*---------------------------------*/
/*-----Arrow Functions: Basics-----*/
/*---------------------------------*/
/*
const years = [1990, 1965, 1982, 1937];

// ES5
var ages5 = years.map(function(el) {
    return 2016 - el;
});
console.log(ages5);

// ES6 
//const ages6 = years.map(el => 2016 - el)
let ages6 = years.map(el => 2016 - el)
console.log(ages6);


ages6 = years.map( (el, index) => `Age element ${index + 1}: ${2016 - el}.`);
console.log(ages6);

ages6 = years.map( (el, index) => {
    const now = new Date().getFullYear(); 
    const age = now - el; 
    return `Age element ${index + 1}: ${age}.`;
});
console.log(ages6);
*/

/*---------------------------*/
/*-----Arrow Functions 2-----*/
/*---------------------------*/

// ES5
/*
var box5 = {
    color: 'green',
    position: 1, 
    clickMe: function() {
        
        var self = this;
        document.querySelector('.green').addEventListener('click', function() {
            var str = 'This is box number ' + self.position + ' and it is ' + self.color;
            alert(str);
        });
    }
}
box5.clickMe();
//If you had 'this' in place of 'self', all these areas would return 'undefined'
//We use 'var self = this' as a sort of hack
*/


// ES6
/*
const box6 = {
    color: 'green',
    position: 1, 
    clickMe: function() {
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}
box6.clickMe();
//This returns everything correctly. The arrow functions maintains 'this' correctly. 
*/
/*
const box66 = {
    color: 'green',
    position: 1, 
    clickMe: () => {
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}
box66.clickMe();
//this becomes undefined again
*/
/*
function Person(name) {
    this.name = name;
}

// ES5
Person.prototype.myFriends5 = function(friends) {
    
    var arr = friends.map(function(el) {
        return this.name + ' is friends with ' + el;
    }.bind(this));
    console.log(arr);
}
var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);

// ES6
Person.prototype.myFriends6 = function(friends) {
    var arr = friends.map( (el) => `${this.name} is friends with ${el}`);
    console.log(arr);
}

new Person('Mike').myFriends6(friends);
*/

/*-----------------------*/
/*-----Destructuring-----*/
/*-----------------------*/
/*
// ES5
var john = ['John', 26];
//var name = john[0];
//var age = john[1];

// ES6

const [name, age] = ['John', 26];
console.log(name);
console.log(age);


const obj = {
    firstName: 'John', 
    lastName: 'Smith'
}

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);

// ES5

function calcAgeRetirement(year) {
    const age = new Date().getFullYear()- year; 
    return [age, 65 - age]
}

const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);
*/

/*----------------*/
/*-----Arrays-----*/
/*----------------*/
//New "FOR (--OF--)"
/*
const boxes = document.querySelectorAll('.box');


// ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur) {
    cur.style.backgroundColor = 'dodgerblue';
});


//ES6

const boxesArr6 = Array.from(boxes);
//boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');
//OR Do this:
//Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');

//ES5
for(var i = 0; i < boxesArr5.length; i++) {
    
    if(boxesArr5[i].className === 'box blue') {
        continue;
    }
    boxesArr5[i].textContent = 'I changed to blue!';
}


// ES6
for (const cur of boxesArr6) {
//    if (cur.className === 'box blue') {
    if (cur.className.includes('blue')) {
        continue;
    }
    cur.textContent = 'I changed to blue!';
}



// ES5
var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function(cur) {
    return cur >= 18;
})
console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

// ES6
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));
*/

/*-------------------------*/
/*-----Spread Operator-----*/
/*-------------------------*/
/*
function addFourAges (a, b, c , d) {
    return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);
// 81
//If we want to put an array into teh addFourAges function:

// ES5

var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);
// 81

// ES6

const sum3 = addFourAges(...ages);
console.log(sum3);


const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
//To join these two arrays, you can use the spread operator "..."

const bigFamily = [...familySmith, 'Lily', ...familyMiller];
console.log(bigFamily);

//Can also apply this on a Node List
//We want to change all of the text of the heading and the boxes 
//Target h1 elements and .box classes. Merge them together as a list in 'all'
const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

//Iterate through 'all' elements array and change the font colour to purple. 
Array.from(all).forEach(cur => cur.style.color = 'purple');
*/

/*-------------------------*/
/*-----Rest parameters-----*/
/*-------------------------*/
// Allow you to pass an arbitrary number of arguments into a function


//Let's create a function that receives an arbitrary number of years, and returns ages that are older than a certain age. 
/*

// ES5
function isFullAge5() {
    //console.log(arguments);
    //We know that the arguments at the point of the console log are the prototype Object, NOT an array
    var argsArr = Array.prototype.slice.call(arguments);
    
    argsArr.forEach(function(cur) {
        console.log((2016 - cur) >= 18);
    })
}

//isFullAge5(1990, 1999, 1965);
//isFullAge5(1990, 1999, 1965, 2016, 1987);

// ES6
// This will transform the paramaters into an array first and then iterate throught that array
function isFullAge6(...years) {
    years.forEach(cur => console.log((2016 - cur) >= 18));
}


//isFullAge6(1990, 1999, 1965);
isFullAge6(1990, 1999, 1965, 2016, 1987);
*/
/*
// ES5
function isFullAge5(limit) {
    // The added '1' says to start cutting at arguemnt #1
    var argsArr = Array.prototype.slice.call(arguments, 1);
    
    argsArr.forEach(function(cur) {
        console.log((2016 - cur) >= limit);
    })
}

//isFullAge5(16, 1990, 1999, 1965);
//isFullAge5(1990, 1999, 1965, 2016, 1987);

// ES6
function isFullAge6(limit, ...years) {
    years.forEach(cur => console.log((2016 - cur) >= limit));
}


isFullAge6(16,1990, 1999, 1965, 2016, 1987);
*/

/*----------------------------*/
/*-----Default parameters-----*/
/*----------------------------*/
/*
// ES5
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
    
    lastName === undefined ? lastName = 'Smith' : lastName = lastName;
    nationality === undefined ? nationality = 'american' : nationality = nationality; 
    
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

// ES6
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'american') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}


var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');
*/

/*--------------*/
/*-----Maps-----*/
/*--------------*/
/*
const question = new Map();
question.set('question', 'What is the official name of the latest major JavaScript version?')
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer!');
question.set(false, 'Wrong. Please try again!');

//To show the quetsion in the console:
console.log(question.get('question'));
//To see how many items in the set --> Here it would be 8
//console.log(question.size);


if (question.has(4)) {
//    question.delete(4);
//    console.log('Answer 4 is here');
}
//question.clear();

//To access all 
//question.forEach((value, key) => console.log(`This is ${key} and it's set to ${value}`));

//Just as the forEach, we can also do this: (This also works for arrays)
//the following will return all entries of the question map
for (let [key, value] of question.entries()) {
//    console.log(`This is ${key} and it's set to ${value}`)
    if (typeof(key) === 'number') {
        console.log(`Answer ${key}: ${value}`)
    }
}

const ans = parseInt(prompt('Write the correct numfor the answer'));
console.log(question.get(ans === question.get('correct')));
*/

/*-----------------*/
/*-----Classes-----*/
/*-----------------*/

// ES5
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
}

var john5 = new Person5('John', 1990, 'teacher');


// ES6
class Person6 {
    constructor ( name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    
    calculateAge() {
        var age = new Date().getFullYear - this.yearOfBirth;
        console.log(age);
    }
    
    static greeting() {
        console.log('Hey there!');
    }
}

const john6 = new Person6('John', 1990, 'teacher');

Person6.greeting();









































