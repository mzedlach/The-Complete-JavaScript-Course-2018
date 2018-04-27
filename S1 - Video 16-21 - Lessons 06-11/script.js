/*---------*/
//Functions// 
/*---------*/
/*
function calculateAge(yearOfBirth) {
    var age = 2016 - yearOfBirth;
    return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);

function yearsUntilRetirement(name, year) {
    var age = calculateAge(year);
    var retirement = 65 - age; 
    
    if (retirement >= 0) {
        console.log(name + ' retires in ' + retirement + ' years.');
    } else {
        console.log(name + ' is already retired.');
    }
}

yearsUntilRetirement('John', 1990);
yearsUntilRetirement('Mike', 1969);
yearsUntilRetirement('Mary', 1948);
*/

/*--------------------------*/
//Statements and Expressions//
/*--------------------------*/
/*
//function statement - performs just an action
function someFun(par) {
    //code
}

//function expression - this produces a value
var someFun = function(par) {
    //code
}

//Expressions
3 + 4; 
var x = 3; 

//Statements
if (x ====5) {
    //do something
}
*/

/*------*/
//Arrays//
/*------*/
/*
var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
names[1] = 'Ben'; 
console.log(names); 

var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr.');
john.pop();
john.shift();
console.log(john);

if (john.indexOf('teacher') === -1) {
    console.log('John is NOT a teacher.');
}
*/

/*-------*/
//Objects//
/*-------*/

var john = {
    name: 'John',
    lastName: 'Smith', 
    yearOfBirth: '1990', 
    job: 'teacher', 
    isMarried: false
}

console.log(john.lastName);
console.log(john['lastName']);

var xyz = 'job';
console.log(john[xyz]);

john.lastName = 'Miller';
john['job'] = 'programmer';

console.log(john);

var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969; 
jane['job'] = 'retired';
jane['isMarried'] = true;

console.log(jane);























