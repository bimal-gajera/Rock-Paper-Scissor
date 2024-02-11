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

function playGame() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Enter you choice: ");
    let computerSelection = getComputerChoice();
    let roundOutcome = playRound(playerSelection, computerSelection);
    console.log(roundOutcome);

    let result = roundOutcome.split('!');
    if (result[0] == "You Win") {
      playerScore++;
    }

    else if (result[0] == "You Lose") {
      computerScore++;
    }
  }
  if (playerScore > computerScore) {
    return "Player wins!";
  }
  else if (playerScore < computerScore) {
    return "Computer wins!";
  }
  return "Tie Game!"
}

console.log(playGame());