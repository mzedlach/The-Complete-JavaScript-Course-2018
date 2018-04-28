///////////////////////////////////////
// CODING CHALLENGE 1

/*
John and a friend invented a simple game where the player with the highest value of his height (in centimeters) plus five times his age wins (what a silly game :)

1. Create variables for the heights and ages of two friends and assign them some values
2. Calculate their scores
3. Decide who wins and print the winner to the console. Include the score in the string that you output to the console. Don't forget that there can be a draw (both players with the same score).

4. EXTRA: Add a third player and now decide who wins. Hint: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
*/

var heightJohn = 170;
var ageJohn = 30;

var heightSusan = 170;
var ageSusan = 30;

var scoreJohn = heightJohn + (ageJohn * 5);
var scoreSusan = heightSusan + (ageSusan * 5);

if (scoreJohn > scoreSusan ) {
    console.log('John is the winner with ' + scoreJohn + ' points!');
} else if (scoreSusan > scoreJohn) {
    console.log('Susan is the winner with ' + scoreSusan + ' points!');
} else {
    console.log('The result is a tie! Both players have ' + scoreSusan + ' points.');
}

var player3 = prompt('What is the third player\'s name?');
var agePlayer3 = prompt('How old is ' + player3 + ' ?');
var heightPlayer3 = prompt('How tall is ' + player3 + ' ?(in centimeters)');

var scorePlayer3 = (heightPlayer3 * 1) + (agePlayer3 * 5);


if (scorePlayer3 > scoreJohn && scorePlayer3 > scoreSusan) {
    console.log(player3 + ' is the winner with a score of ' + scorePlayer3 + ' points!');
} else if (scoreSusan > scorePlayer3 && scoreSusan > scoreJohn) {
    console.log('Susan is the winner with a score of ' + scoreSusan + ' points!');
} else if (scoreJohn > scorePlayer3 && scoreJohn > scoreSusan) {
    console.log('John is the winner with a score of ' + scoreJohn + ' points!');
} else {
    console.log('There is a tie! All players have the same score');
}

















