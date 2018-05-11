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






































