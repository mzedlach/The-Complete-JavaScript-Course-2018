/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/



var scores, roundScore, activePlayer, gamePlaying, lastDiceRoll;

init(); 

document.querySelector('.btn-roll').addEventListener('click', function() {
    
    if (gamePlaying) {
        // Random Number
        var dice1 = Math.floor(Math.random()*6) +1 ;
        var dice2 = Math.floor(Math.random()*6) +1 ;
        // Display the XPathResult
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png'; 
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png'; 
        
//        From Challenge #2
//        if (lastDiceRoll === 6 && dice === 6) {
//            scores[activePlayer] == 0;
//            document.querySelector('#score-' + activePlayer).textContent = '0';
//            nextPlayer();
//        } else if (dice !== 1) {
//            //Add score
//            roundScore += dice;
//            document.querySelector('#current-' + activePlayer).textContent = roundScore;
//        } else {
//            //Next Player        
//            nextPlayer();
//        }
//        lastDiceRoll = dice;
        
        // If neither of the dice are ONE
        if (dice1 !== 1 && dice2 !== 1) {
            // Add score of both die
            roundScore += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            // Next Player        
            nextPlayer();
        }
    } 
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    
    if (gamePlaying) {
        // Add current score to global score
        scores[activePlayer] += roundScore;
        //  Update UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];    
        // Retreive value of score input
        var inputScore = document.querySelector('.winning-score').value;
        var winningScore;
        // If there WAS an input, set to that score, otherwise, use 100 as winning score
        if (inputScore) {
            winningScore = inputScore;
        } else {
            winningScore = 100;
        };
        // Check if player won the game
        if (scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
            hideDice();
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            // Next Player
            nextPlayer();
        }
    }
});

function nextPlayer() {
// Next Player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    // Both 'current' points will be set to zero
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // Active player will switch. Other player gets grey background and red dot
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    // Dice will disappear
    hideDice();
}

// When the new game is clicked
document.querySelector('.btn-new').addEventListener('click', init);


function init() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    
    // Make dice invisible when page loads
    hideDice();

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    
    document.querySelector('.player-0-panel').classList.add('active');
    
}

function hideDice() {
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
}










