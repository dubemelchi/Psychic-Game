


let alphabet = ['a','b','c','d','e','f','g','h','j'];

/* we start the game with 0 wins, 0 losses, 3 guesses left, null guesses  */
    
let wins = 0,
    losses = 0,
    guessesLeft = 3,
    yourGuesses = [];
    

// Computer's guess

let randomL = alphabet[Math.floor(Math.random()*alphabet.length)];

console.log(randomL);

function updateWins(){
  document.querySelector("#ws").innerHTML = "Wins: "+" "+ wins;
}




// When the user presses a key, it will run the following function...

document.onkeypress = function(event) {
  let userInput = event.key;

  document.querySelector("#yGuesses").innerHTML = "Your Guesses: " + userInput;
  console.log(userInput);

  
  document.querySelector("#ws").innerHTML = "Wins: "+" "+ wins;
  

  if(userInput === randomL){
    alert("WIN!"); 
    wins++;

  
  }



}

// Function that updates wins























      


