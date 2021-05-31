const scoreBoard = document.querySelector(".score");
const holes = document.querySelectorAll(".hole");
const moles = document.querySelectorAll(".mole");
const button = document.querySelector(".button");

let score = 0;
let lastHole;
let timeUp = false;

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(data) {
  const idx = Math.floor(Math.random() * data.length);
  const hole = holes[idx];

  if (hole === lastHole) {
    return randomHole(holes);
  }

  lastHole = hole;
  return hole;
}

function peep() {
  const time = randomTime(200, 750);
  const hole = randomHole(holes);

  hole.classList.add("up");

  setTimeout(() => {
    hole.classList.remove("up");
    if (!timeUp) peep();
  }, time);
}

function startGame() {
  scoreBoard.textContent = `Score: 0`;
  timeUp = false;
  button.disabled = true;
  score = 0;
  peep();

  setTimeout(() => {
    timeUp = true;
    button.disabled = false;
  }, 15000);
}

function bonk(e) {
  if (!e.isTrusted) return;
  score++;
  this.classList.remove("up");
  scoreBoard.textContent = `Score: ${score}`;
}

moles.forEach((mole) => mole.addEventListener("click", bonk));
