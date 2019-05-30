


let alphabet = ['a','b','c','d','e','f','g','h','j'];

/* we start the game with 0 wins, 0 losses, 3 guesses left, null guesses  */
    
let wins = 0,
    losses = 0,
    guessesLeft = 3,
    yourGuesses = [''];
    

// Computer's guess
let randomL = alphabet[Math.floor(Math.random()*alphabet.length)];

console.log(randomL);

// Starting display
document.querySelector("#ws").innerHTML = "Wins: "+" "+ wins;
document.querySelector("#ls").innerHTML = "Losses: "+" "+ losses;
document.querySelector("#gLeft").innerHTML = "Guesses Left: "+" "+ guessesLeft;
document.querySelector("#yGuesses").innerHTML = "Your Guesses: "+" "+ yourGuesses;




function updateWins(){
  document.querySelector("#ws").innerHTML = "Wins: "+" "+ wins;
}

function updateGuessesLeft(){
  document.querySelector("#gLeft").innerHTML = "Guesses Left:" + " " + guessesLeft; 
}


// When the user presses a key, it will run the following function...
document.onkeypress = function(event) {
  let userInput = event.key;

  if (userInput === randomL) {
    alert("YOU WIN!"); 
    wins++; 
    guessesLeft = 3;
    randomL = alphabet[Math.floor(Math.random()*alphabet.length)];

console.log(randomL);

  }

  else{ guessesLeft--; }

  if(guessesLeft === 0){
    losses++; 
    alert("YOU LOOSE!");
    guessesLeft = 3;
    randomL = alphabet[Math.floor(Math.random()*alphabet.length)];
  }

  //display userInput
  document.querySelector("#yGuesses").innerHTML = "Your Guesses: " + userInput;

  console.log(userInput);

//display wins
  document.querySelector("#ws").innerHTML = "Wins: "+" "+ wins;

  //display guesses left
  document.querySelector("#gLeft").innerHTML = "Guesses Left:" +" "+ guessesLeft;

  //display Losses
  document.querySelector("#ls").innerHTML = "Losses:" +" "+ losses;


}

updateGuessesLeft();

// Function that updates wins






















      


