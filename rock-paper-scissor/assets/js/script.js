const scoreElement = document.getElementById("score");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissor");
const palyerMoveElement = document.getElementById("player-move");
const botMoveElement = document.getElementById("bot-move");
let userScore = 0;
let botScore = 0;
let moves = 0;
const maxMoves = 20;

const options = ["rock", "paper", "scissor"];
const jsConfetti = new JSConfetti();

const scoreHandller = (userMove, botMove) => {
  moves++;
  if (userMove === botMove) return;
  if (userMove === "rock") {
    if (botMove === "paper") botScore++;
    else userScore++;
  } else if (userMove === "paper") {
    if (botMove === "scissor") botScore++;
    else userScore++;
  } else {
    if (botMove === "rock") botScore++;
    else userScore++;
  }
  scoreElement.innerText = `${userScore} - ${botScore}`;
};

const endGame = async () => {
  if (userScore === botScore) {
    await jsConfetti.addConfetti();
    alert("Match Draw");
  } else if (userScore > botScore) {
    await jsConfetti.addConfetti();
    alert("You Won!!");
  } else {
    alert("You Lost");
  }
  const isReplay = confirm("Are you need to replay again");
  if (isReplay) {
    moves = 0;
    userScore = 0;
    botScore = 0;
    scoreElement.innerText = `${userScore} - ${botScore}`;
    palyerMoveElement.src = `./assets/images/placeholder.webp`;
    botMoveElement.src = `./assets/images/placeholder.webp`;
    await jsConfetti.addConfetti();
  }
};

const gameHandller = (playerMove) => {
  const randomNumber = Math.floor(Math.random() * 3);
  const botMove = options[randomNumber];
  palyerMoveElement.src = `./assets/images/${playerMove}.png`;
  botMoveElement.src = `./assets/images/${botMove}.png`;
  if (moves === maxMoves) {
    endGame();
    return;
  }
  scoreHandller(playerMove, botMove);
};

rockBtn.addEventListener("click", () => gameHandller("rock"));
paperBtn.addEventListener("click", () => gameHandller("paper"));
scissorBtn.addEventListener("click", () => gameHandller("scissor"));
