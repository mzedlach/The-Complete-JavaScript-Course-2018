/*------------------*/
/*-----Hoisting-----*/
/*------------------*/
/*
//Functions
calculateAge(1990);

function calculateAge(year) {
    console.log(2016 -  year);
}

//retirement(1990);

var retirement = function(year) {
    console.log(65 - (2016 - year));
}


//Variables
console.log(age);
var age = 23;

function foo() {
    console.log(age);
    var age = 65;
    console.log(age);
}
foo();
console.log(age);
*/

/*-----------------*/
/*-----Scoping-----*/
/*-----------------*/
/*
// First scoping example
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}


// Example to show the differece between execution stack and scope chain
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    //console.log(c);
    console.log(a+d);
}
*/

/*--------------*/
/*-----THIS-----*/
/*--------------*/

//console.log(this);

//calculateAge(1985);
//
//function calculateAge(year) {
//    console.log(2016 - year);
//    console.log(this);
//}

var john = {
    name: 'John', 
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2016 - this.yearOfBirth);
        
        //This is a regular function, so it defaults to the window object, NOT the John project.
//        function innerFunction() {
//            console.log(this);
//        }
//        innerFunction();
    }
}

john.calculateAge();


var mike = {
    name: 'Mike', 
    yearOfBirth: 1984
};

mike.calculateAge = john.calculateAge;
mike.calculateAge();





