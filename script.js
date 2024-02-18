function getComputerChoice() {
  let choices = ['rock', 'paper', 'scissor'];
  let randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if ((playerSelection == 'rock' && computerSelection == 'scissor') ||
    (playerSelection == 'scissor' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'rock')) {
    return `You Win! ${playerSelection} beats ${computerSelection}.`
  }

  else if ((playerSelection == 'rock' && computerSelection == 'rock') ||
    (playerSelection == 'paper' && computerSelection == 'paper') ||
    (playerSelection == 'scissor' && computerSelection == 'scissor')) {
    return `Tie! Nobody wins.`
  }

  else {
    return `You Lose! ${computerSelection} beats ${playerSelection}.`
  }
}

// function playGame() {
//   let playerScore = 0;
//   let computerScore = 0;
//   for (let i = 0; i < 5; i++) {
//     let playerSelection = prompt("Enter you choice: ");
//     let computerSelection = getComputerChoice();
//     let roundOutcome = playRound(playerSelection, computerSelection);
//     console.log(roundOutcome);

//     let result = roundOutcome.split('!');
//     if (result[0] == "You Win") {
//       playerScore++;
//     }

//     else if (result[0] == "You Lose") {
//       computerScore++;
//     }
//   }
//   if (playerScore > computerScore) {
//     return "Player wins!";
//   }
//   else if (playerScore < computerScore) {
//     return "Computer wins!";
//   }
//   return "Tie Game!"
// }

// console.log(playGame());

// let playerSelection = prompt("Enter you choice: ");
// let computerSelection = getComputerChoice();
// console.log(alert(playRound(playerSelection, computerSelection)));

let myDiv = document.querySelector('#mainDiv');
let result;

let outputDiv = document.createElement('h3');

function createButton(buttonText) {
  let button = document.createElement('BUTTON');
  let text = document.createTextNode(buttonText);
  button.appendChild(text);
  button.style.cssText = "color:white";
  button.style.margin = "10px";
  button.style.padding = "10px";
  button.style.backgroundColor = "black";
  button.id = buttonText;

  myDiv.appendChild(button);
}

createButton("Rock");
createButton("Paper");
createButton("Scissor");

myDiv.appendChild(outputDiv);

document.getElementById("Rock").addEventListener("click", () => {
  result = playRound("Rock", getComputerChoice());
  outputDiv.textContent = result;
})

document.getElementById("Paper").addEventListener("click", () => {
  result = playRound("Paper", getComputerChoice());
  outputDiv.textContent = result;
})

document.getElementById("Scissor").addEventListener("click", () => {
  result = playRound("Scissor", getComputerChoice());
  outputDiv.textContent = result;
})



