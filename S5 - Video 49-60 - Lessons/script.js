/*--------------------------*/
//---Function Constructor---//
/*--------------------------*/

/*
var john = {
    name: 'John', 
    yearOfBirth: 1990,
    job: 'teacher'
};

//This is the function constructor:
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function() {
        console.log(2016-this.yearOfBirth);
    }

Person.prototype.lastName = 'Smith';

//These are used to create objects
var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/


/*-------------------*/
//---Object.create---//
/*-------------------*/
/*
var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
};


var john = Object.create(personProto);

john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';


var jane = Object.create(personProto, {
    name:{ value: 'Jane'}, 
    yearOfBirth: { value: 1969 }, 
    job: {value: 'designer'}
});
*/

/*---------------------------*/
//---Primatives VS Objects---//
/*---------------------------*/
/*
//Primatives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

//Objects
var obj1 = {
    name: 'John', 
    age: 26
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

//Functions
var age = 27;
var obj = {
    name: 'Maria', 
    city: 'Somewhere'
};

function change(a,b) {
    a = 30; 
    b.city = 'San Francisco';
}

change(age,obj);

console.log(age);
console.log(obj.city);
*/

/*------------------------------------*/
//---Passing functions as arguments---//
/*------------------------------------*/
/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    
    for (var i = 0 ; i < arr.length ; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

//This is the callback function for arrayCalc function becuase it is ACTUALLY called LATER in the arrayCalc function.
function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el)); 
    } else {
        return -1;
    }   
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);
*/

/*-----------------------------------*/
//---Functions Returning Functions---//
/*-----------------------------------*/
/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?')
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
};

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('John');
designerQuestion('Jane');
designerQuestion('Mark');
designerQuestion('Mike');

interviewQuestion('teacher')('Mark');
*/

/*-----------------------------------------------------*/
//---IIFE - Immediately Invoked Function Expressions---//
/*-----------------------------------------------------*/
/*
//function game() {
//    var score = Math.random() * 10; 
//    console.log(score >= 5);
//}
//game();

//THIS is an IIFE
(function () {
    var score = Math.random() * 10; 
    console.log(score >= 5);
})();

//Without the parenthesis, the javascript parser with think that it is a function declaration
//But, since we don't have a name for the function declaration, we have to trick the parser and make 
//it believe that what we have here is an expression, not a declaration. 
//Solution is to wrap the whole thing in parenthesis. JS treats anything in parenthesis as 
//an expression, NOT declaration.
//This also creates variable privacy for 'score'. It is NOT accessible outside of the function. 


//console.log(score);
//console log here would return undefined because the variable is not accessible. 

(function (goodLuck) {
    var score = Math.random() * 10; 
    console.log(score >= 5 - goodLuck);
})(5);

//IIFE is used to create a function that will be REUSED. It is for data privacy. 
*/

/*--------------*/
//---Closures---//
/*--------------*/
/*
function retirement(retirementAge) {
    var a = ' years left until retirement';
    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);


retirementGermany(1990);
retirementUS(1990);
retirementIceland(1990);
//retirement(66)(1990);


//Additional Exercise - WOOO! GOT IT! :) 
function interviewQuestion(job) {
    
    return function(name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is?')
        } else if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }   
};

interviewQuestion('teacher')('Mark');
interviewQuestion('designer')('John');
interviewQuestion('')('Jane');
*/

/*---------------------------*/
//---Bind, Call, and Apply---//
/*---------------------------*/

var john = {
    name: 'John', 
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', ladies and gentlemen! I\'m ' + 
                        this.name + '. I\'m a ' + 
                        this.job + ' and I\'m ' + 
                        this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' + 
                        this.name + '. I\'m a ' + 
                        this.job + ' and I\'m ' + 
                        this.age + ' years old. Have a nice ' +
                       timeOfDay + '.');
        }
    }
};

var emily = {
    name: 'Emily', 
    age: 35,
    job: 'designer',
}


john.presentation('friendly', 'morning'); 

//This is called Method Borrowing
john.presentation.call(emily, 'friendly', 'afternoon');

//The following will not work because our function does expect an array
//john.presentation.apply(emily, ['friendly', 'afternoon']);

var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');






var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    
    for (var i = 0 ; i < arr.length ; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}


var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

console.log(ages);
console.log(fullJapan);





















