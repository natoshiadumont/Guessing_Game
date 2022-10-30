/* 

Write your guess-game code here! Don't forget to look at the test specs as a guide. You can run the specs
by running "npm test".

In this file, you will also include the event listeners that are needed to interact with your HTML file when
a user clicks a button or adds a guess to the input field.

*/

/*make following variables:
answer
guess
guessButton
tryAgain
hintButton
hintText
*/
 const answer = randomNum();
 let submitGuess = document.getElementById('crystal-ball');
 let restartButton = document.getElementById('restart');
 let hintButton = document.getElementById('hint');
let blockCounter=0;
let chancesRemaining=6;
let hintText = document.getElementById('hint-text');
//create event listener that inputs guess in box

submitGuess.addEventListener('click', ()=>{
  chancesRemaining--;
  blockCounter++;
  function pluralS(num){
    if(num === 0 || num > 1){
      return 's';
    }
  }
  let guessInput = Number(document.getElementById('guess-input').value);
  let hintTitle = document.getElementById('hint-text');
  let hintMessage= document.getElementById('hint-message');
  hintMessage.innerHTML = 'Your guess must be a number between 1 - 100.';
  let guessHistory = document.getElementById(`guess${blockCounter}`);
  if(chancesRemaining < 1){
    hintTitle.innerHTML = 'Sorry, you are officially out of guesses.';
    hintMessage.innerHTML = 'Wanna Play Again? Click the restart Button.'
    return;
  }
  if(guessInput >= 1 && guessInput <= 100){
    guessHistory.innerHTML = guessInput;
    if(guessInput === answer){
      hintTitle.innerHTML = 'Congratulations! You guessed the correct number!'
      hintMessage.innerHTML = 'Wanna Play Again? Click the restart Button.'
      return;
    }
  }
  else{
    hintMessage.innerHTML = 'Your guess must be a number between 1 - 100.';

  }
  console.log(guessInput);
})




//create random number generator and variable to store it
function randomNum(){
  return Math.floor(Math.random(100) *100)
 }

//create event listenter that refreshes page once you press the reset button

restartButton.addEventListener('click', ()=>{
  location.reload();
  blockCounter = 0;
  chancesRemaining = 5;
});
