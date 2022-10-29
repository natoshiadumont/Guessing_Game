/* 

Write your guess-game code here! Don't forget to look at the test specs as a guide. You can run the specs
by running "npm test".

In this file, you will also include the event listeners that are needed to interact with your HTML file when
a user clicks a button or adds a guess to the input field.

*/

//create random number generator and variable to store it
function randomNum(){
  return Math.floor(Math.random(100) *100)
 }



/*make following variables:
answer
guess
guessButton
tryAgain
hintButton
hintText
*/

 let answer = randomNum();
 let guessInput = document.getElementById('guess-input');
 let guessButton = document.getElementById('crystal-ball');
 let resetButton = document.getElementById('reset');
 let hintButton = document.getElementById('hint');

//populate guesses into game
console.log('connected');
resetButton.addEventListener('click', ()=>{
  console.log('This button works!');
});


