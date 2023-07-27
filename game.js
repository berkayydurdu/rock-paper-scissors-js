const score_cont = document.createElement('div');
const humanScore = document.createElement('p');
const computerScore = document.createElement('p');

human_pt = 0;
cpu_pt = 0;

humanScore.textContent = `Human: ${human_pt}`;
computerScore.textContent = `Machine: ${cpu_pt}`;

score_cont.appendChild(humanScore);
score_cont.appendChild(computerScore);

score_cont.setAttribute('style', 'display: flex; justify-content: space-evenly; align-items: center; align-content: center; margin: 0 auto;');
humanScore.setAttribute('style', 'font-size: 24px; align-self: center;');
computerScore.setAttribute('style', 'font-size: 24px; align-self: center;');


const btn_cont = document.createElement('div');

const rock_btn = document.createElement('button');
const paper_btn = document.createElement('button');
const scissors_btn = document.createElement('button');

rock_btn.textContent = 'Rock';
paper_btn.textContent = 'Paper';
scissors_btn.textContent = 'Scissors';

btn_cont.appendChild(rock_btn);
btn_cont.appendChild(paper_btn);
btn_cont.appendChild(scissors_btn);

btn_cont.setAttribute('style', 'display: flex; justify-content: space-evenly; align-items: center; align-content: center; margin: 0 auto;');
btn_cont.setAttribute('id', 'buttonDiv')
rock_btn.setAttribute('style', 'font-size: 24px; border-radius: 12px;');
paper_btn.setAttribute('style', 'font-size: 24px; border-radius: 12px;');
scissors_btn.setAttribute('style', 'font-size: 24px; border-radius: 12px;');

document.body.appendChild(score_cont);
document.body.appendChild(btn_cont);


const buttons = document.querySelectorAll('button');
buttons.forEach(clickedBtn => clickedBtn.addEventListener('click', playRound));


const choices = ["Rock", "Paper", "Scissors"];
function getComputerChoice() {
  return choices[~~(Math.random() * choices.length)];
};

function  playRound() {
  playerSelection = `${this.innerText}`;
  cpu = getComputerChoice();

  console.log(`${playerSelection}, and ${cpu}`)
  
  if (playerSelection == "Rock" & cpu == "Scissors" || playerSelection == "Paper" & cpu == "Rock" || playerSelection == "Scissors" & cpu == "Paper") {
    human_pt += 1;
    humanScore.textContent = `Human: ${human_pt}`;;
    console.log(`You Won! ${playerSelection} beats ${cpu}`);
  }
  else if (playerSelection === cpu) {
    console.log(`It is a tie! ${playerSelection} versus ${cpu}`);
  }
  else {
    cpu_pt += 1;
    computerScore.textContent = `Machine: ${cpu_pt}`;;
    console.log(`You Lose! ${cpu} beats ${playerSelection}`);
  };

  console.log(`${human_pt}, and ${cpu_pt}`)

  if ( human_pt == 5) {
    console.log(`The winner is you!!!, ${human_pt} vs. ${cpu_pt}`)
    buttons.forEach(bt => bt.disabled = true);

    let subButs = document.getElementById("buttonDiv").getElementsByTagName('*');
    for(let i = 0; i < subButs.length; i++){
      subButs[i].disabled = true;
    }
  };
  
  if (cpu_pt == 5) {
    console.log(`The winner is CPU, ${cpu_pt} vs. ${human_pt}`)
    buttons.forEach(bt => bt.disabled = true);

    let subButs = document.getElementById("buttonDiv").getElementsByTagName('*');
    for(let i = 0; i < subButs.length; i++){
      subButs[i].disabled = true;
    }
  };
};