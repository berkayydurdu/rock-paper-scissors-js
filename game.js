function game() {
  playerWinCont = 0;
  computerWinCount = 0;

  while (playerWinCont <= 5 || computerWinCount <= 5) {
    const choices = ["Rock", "Paper", "Scissors"];
    function getComputerChoice() {
      return choices[~~(Math.random() * choices.length)];
    }


    let humanChoice = prompt('What is your selection?(Rock, Paper, or Scissors)');

    function getPlayerSelection() {
      humanChoice = humanChoice[0].toUpperCase() + humanChoice.slice(1).toLowerCase();
      return humanChoice;
    }


    function playRound(playerSelection, computerSelection) {
      if (playerSelection == "Rock" & computerSelection == "Scissors" || playerSelection == "Paper" & computerSelection == "Rock" || playerSelection == "Scissors" & computerSelection == "Paper") {
        playerWinCont += 1;
        return (`You Won! ${playerSelection} beats ${computerSelection}`);
      }
      else if (playerSelection === computerSelection) {
        return (`It is a tie! ${playerSelection} versus ${computerSelection}`);
      }
      else {
        computerWinCount += 1;
        return (`You Lose! ${computerSelection} beats ${playerSelection}`);
      }
    }

    console.log(playRound(getPlayerSelection(), getComputerChoice()));
    console.log(`Player is ${playerWinCont} and Computer is ${computerWinCount}`);

    if (playerWinCont == 5) {
      console.log(`You are the winner! ${playerWinCont} vs ${computerWinCount}`);
      break;
    }

    if (computerWinCount == 5) {
      console.log(`Computer is the winner! ${computerWinCount} vs ${playerWinCont}`);
      break;
    }

  }
}

game();