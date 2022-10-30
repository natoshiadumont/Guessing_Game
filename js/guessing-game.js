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

 const answer = randomNum();
 let submit = document.getElementById('submit');
 let guessInput = document.getElementById('guess-input');
 let guessButton = document.getElementById('crystal-ball');
 let restartButton = document.getElementById('restart');
 let hintButton = document.getElementById('hint');
 let guessArray = [... document.querySelector(".block").children];
//create event listenter that refreshes page once you press the reset button

restartButton.addEventListener('click', ()=>{
  location.reload(true);
  console.log('working')
});

//event listener pushes value of guess into each guess block
guessButton.addEventListener('click', ()=>{

})

