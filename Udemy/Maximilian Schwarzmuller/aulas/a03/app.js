const startGameBtn = document.getElementById('start-game-btn')

const ROCK = 'ROCK'
const PAPER = 'PAPER'
const SCISSORS = 'SCISSORS'
const DEFAULT_USER_CHOICE = PAPER
const RESULT_DRAW = 'DRAW'
const RESULT_PLAYER_WINS = 'YOU WON'
const ERSULT_PLAEYR_LOST = 'YOU LOST'


let gameIsRunning = false
const getPlayerChoice = function(){

  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase()

  if(selection !== ROCK &&
     selection !== PAPER &&
     selection !== SCISSORS){
    alert(`Invalid Choice! We choose ${DEFAULT_USER_CHOICE} for you!`)
    return DEFAULT_USER_CHOICE
  }
  return selection
}

const getComputerChoice = function() {
  const randomValue = Math.random()
  if(randomValue < 0.34){
    return ROCK
  } else if (randomValue < 0.67){
    return PAPER
  } else{
    return SCISSORS
  }
}

const determineWinner = function (cChoice, pChoice){
  if(cChoice === pChoice){
    return RESULT_DRAW
  } else if(
    cChoice === ROCK && pChoice === PAPER ||
    cChoice === PAPER && pChoice === SCISSORS ||
    cChoice === SCISSORS && pChoice === ROCK
    ){
    return RESULT_PLAYER_WINS
  }
}

startGameBtn.addEventListener('click', function (){
  if(gameIsRunning){
    return
  }
  gameIsRunning = true
  getPlayerChoice()
  const playerSelection = getPlayerChoice()
  const computerChoice = getComputerChoice()
})