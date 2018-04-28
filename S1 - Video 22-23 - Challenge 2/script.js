///////////////////////////////////////
// CODING CHALLENGE 2

/*
1. Create an array with some years where persons were born
2. Create an empty array (just [] )
3. Use a loop to fill the array with the ages of the persons
4. Use another loop to log into the console whether each person is of full age (18 or older), as well as their age

5. Finally, create a function called printFullAge which receives the array of years as an argument, executes the steps 2., 3. and 4. and returns an array of true/false boolean values: true if the person is of full age (>= 18 years) and false if not (< 18 years)
6. Call the function with two different arrays and store the results in two variables: full_1 and full_2

Example input:  [1965, 2008, 1992]
Example output: [true, false, true]

Hint: you can use a loop not only to read from an array, like y[i], but also to set values in an array, like y[i] = ... You can also use the specific array methods.
*/

//Part 1 + 2
var birthYear = [1999, 2001, 2012, 1952, 1974, 1963];
var ageArr = [];

//Part 3
for (var i = 0 ; i < birthYear.length ; i++) {    
    ageArr.push(2018 - birthYear[i]);
}
console.log(ageArr);

//Part 4
for (var i = 0 ; i < ageArr.length ; i++) {
    if (ageArr[i] < 18) {
        console.log('This person is NOT of age because he/she is ' + ageArr[i] + ' years old.');
    } else {
        console.log('This person IS of age because he/she is ' + ageArr[i] + ' years old.');
    }
}

//Part 5
function printFullAge(years) {
    var ageArr = [];
    
    for (var i = 0 ; i < years.length ; i++) {    
        ageArr.push(2018 - years[i]);
        
        if (ageArr[i] < 18) {
            console.log('This person is NOT of age because he/she is ' + ageArr[i] + ' years old.');
            ageArr[i] = false;
        } else {
            console.log('This person IS of age because he/she is ' + ageArr[i] + ' years old.');
            ageArr[i] = true;
        }  
    }
    return ageArr;
}

var full_1 = printFullAge([1965, 2008, 1992]);
var full_2 = printFullAge([1965, 2008, 1992, 1482, 2016]);








