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
let blockCounter=1;
let chancesRemaining=5;
let hintText = document.getElementById('hint-text');
let userInput = document.getElementById('guess-input');
//create event listener that inputs guess in box
console.log('answer:', answer);


submitGuess.addEventListener('click', function inputGuess(){
  
  let guessInput = Number(document.getElementById('guess-input').value);
  let hintTitle = document.getElementById('hint-text');
  let hintMessage= document.getElementById('hint-message');
  hintMessage.innerHTML = '';
  let guessHistory = document.getElementById(`guess${blockCounter}`);
  let playerWon = guessHistory === answer;
  if(playerWon || hintTitle.innerHTML === `Congratulations! You guessed the correct number: ${answer}!` ){
    hintTitle.innerHTML = `Congratulations! You guessed the correct number: ${answer}!`
    hintMessage.innerHTML = 'Wanna Play Again? Click the restart Button.'
    document.getElementById(submitGuess).removeAttribute('disable');
    document.getElementById('hint').removeAttribute('disable');
    return;
  }
  
  else if(chancesRemaining < 1 && !playerWon){
    hintTitle.innerHTML = `Sorry, but you are officially out of guesses. The correct answer was: ${answer}!`;
    hintMessage.innerHTML = 'Wanna Play Again? Click the restart Button.'
    return;
  }
  else if(guessInput >= 1 && guessInput <= 100 && guessInput !== null){
      if(guessInput === answer){
      guessHistory.innerHTML = guessInput;
      console.log(guessHistory.innerHTML)
      hintTitle.innerHTML = `Congratulations! You guessed the correct number: ${answer}!`
      hintMessage.innerHTML = 'Wanna Play Again? Click the restart Button.'
      return;
      }
      else{
        chancesRemaining--;
        blockCounter++;
        function inputGuess(){guessHistory.innerHTML = guessInput};
      inputGuess();
      }
  }
  else{
    hintMessage.innerHTML = 'Your guess must be a number between 1 - 100.';
  }
  userInput.value = '';
})
userInput.addEventListener('keypress', (e)=>{
  if(e.key === 'Enter'){
  e.preventDefault(); 
  submitGuess.click();
  userInput.value = '';
  }
  
})

hintButton.addEventListener('click', ()=>{
  let hintMessage= document.getElementById('hint-message');
  let lastGuess = Number(document.getElementById(`guess${blockCounter - 1}`).innerHTML);
  if(chancesRemaining >= 5){
    hintMessage.innerHTML = 'HINT: THE ANSWER IS A NUMBER BETWEEN 1 - 100';
    return;
  }
  else if(chancesRemaining < 1){
    hintMessage.innerHTML = 'Wanna Play Again? Click the restart Button.'
    return;
  }
  else if(lastGuess <= answer + 10 && lastGuess > answer){
    hintMessage.innerHTML = 'HINT: You are super close! Try guessing a little lower!';
  }
  else if(lastGuess >= answer - 10 && lastGuess < answer){
    hintMessage.innerHTML = 'HINT: You are super close! Try guessing a little higher!';
  }
  else if(lastGuess <= answer + 20 && lastGuess > answer){
    hintMessage.innerHTML = 'HINT: You are getting closer! Try guessing lower!';
  }
  else if(lastGuess >= answer - 20 && lastGuess < answer){
    hintMessage.innerHTML = 'HINT: You are getting closer! Try guessing higher!';
  }
  else if(lastGuess < answer){
    hintMessage.innerHTML = 'HINT: You are not close at all. Guess higher!';
  }
  else if(lastGuess > answer){
    hintMessage.innerHTML = 'HINT: You are not close at all. Guess lower!';
  }
})


//create random number generator and variable to store it
function randomNum(){
  return Math.floor(Math.random(100) *100)
 }

//create event listenter that refreshes page once you press the reset button

restartButton.addEventListener('click', ()=>{
  location.reload();
  blockCounter = 1;
  chancesRemaining = 5;
});


