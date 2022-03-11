// Create an Array of at least 3 losing messages

var losingMessages = [
    'Sorry, wrong number!',
    'Wrong! Try again.',
    'Maybe next time!'
];

// Create variables to count wins and losses

var totalWins = 0;
var totalLoss = 0;

// Create variables that target elements with the following IDs: 'message', 'wins', 'losses'

var wins = document.getElementById('wins');
var losses = document.getElementById('losses');
var message = document.getElementById('message');


// target all .box elements and attach a click event listener to each one using a loop
// within each click event...
// determine which box was clicked with 'this.textContent' or event.target.textContent
// convert that value to a Number and store it to a variable
// create a random number between 1-3 and store it to a variable
// This number will represent the winning box
// determine if the box clicked is equal to the random number
// if the numbers match, display a winning message by changing the text content of the div#message element
// if the numbers match, increment wins and display the win count in div#wins
// if the numbers don't match, change the div#message element's text to a random losing message from the array above
// if the numbers don't match, increment losses and display the loss count in div#losses
// create a random number between 1-3 and store it to a variable
// This number will represent the winning box
// determine if the box clicked is equal to the random number
// if the numbers match, display a winning message by changing the text content of the div#message element
// if the numbers match, increment wins and display the win count in div#wins
// if the numbers don't match, change the div#message element's text to a random losing message from the array above
// if the numbers don't match, increment losses and display the loss count in div#losses


var boxes = document.querySelectorAll('.box');

randomNumber = Math.floor(Math.random()*3)+1;

for (var i = 0; i < boxes.length; i ++ ){
    boxes[i].addEventListener('click', function(e){
        var boxClicked = e.target.textContent;
        parseInt(boxClicked);

        var numOfClickedBox = parseInt(boxClicked)

        if(numOfClickedBox === randomNumber){
            message.textContent = "Congratulations!";
            totalWins++
            wins.textContent = 'Wins:'+ totalWins;
        }

        else {
             message.textContent = losingMessages[Math.floor(Math.random() * 3)];
            totalLoss++
            losses.textContent = 'Losses:'+ totalLoss;
         }
    })
};
