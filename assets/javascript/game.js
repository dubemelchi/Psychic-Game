/*
Game Functions:
- Player must guess a letter.
- Player gets a certain number of guesses.
- Notify player of guesses remaining.
- Notify plater of correct answer if loose.
- Let player choose to play again.

*/
/*My id's and classes: id = #game, #ws, #ls, #gLeft, #gSoFar, 
classes: .firstLetter, .lastLetter, .container,
 */
// Game values


let alphabet = ['a','b','c','d','e','f','g','h','j'];

let wins = 0,
    losses = 0,
    gLeft = 3,
    yGuesses = 'a';

    console.log(yGuesses);

let randomL = alphabet[Math.floor(Math.random()*alphabet.length)];

console.log(randomL);

document.onkeypress = function(event) {
  let playerGuess = event.key;

  if(playerGuess === randomL){wins++;}

  else{gLeft--;}

  if(gLeft === 0){losses++}

}

document.getElementById('ws').innerHTML = "Wins:" + wins;










      


