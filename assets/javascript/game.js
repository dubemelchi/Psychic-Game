


let alphabet = ['a','b','c','d','e','f','g','h','j'];

/* we start the game with 0 wins, 0 losses, 3 guesses left, null guesses  */
    
let wins = 0,
    losses = 0,
    guessesLeft = 3,
    yourGuesses = [];
    

// Computer's guess
let randomL = alphabet[Math.floor(Math.random()*alphabet.length)];

console.log(randomL);

// Starting display
document.querySelector("#ws").innerHTML = "Wins: "+" "+ wins;
document.querySelector("#ls").innerHTML = "Losses: "+" "+ losses;
document.querySelector("#gLeft").innerHTML = "Guesses Left: "+" "+ guessesLeft;




function updateWins(){
  document.querySelector("#ws").innerHTML = "Wins: "+" "+ wins;
}




// When the user presses a key, it will run the following function...
document.onkeypress = function(event) {
  let userInput = event.key;

  if(userInput === randomL){alert("WIN!"); wins++;}

  else{ guessesLeft--; }

  if(guessesLeft === 0){alert("LOOSE!");losses++;}

//display userInput
  document.querySelector("#yGuesses").innerHTML = "Your Guesses: " + userInput;

  console.log(userInput);

//display wins
  document.querySelector("#ws").innerHTML = "Wins: "+" "+ wins;

  //display guesses left
  document.querySelector("#gLeft").innerHTML = "Guesses Left:" +" "+ guessesLeft;
  

  


}

// Function that updates wins























      


