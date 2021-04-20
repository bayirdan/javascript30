function clickSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const btn = document.querySelector(`.btn[data-key="${e.keyCode}"]`);

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  btn.classList.add("clicked");
}

function removeTransition(e) {
  if (e.propertyName !== "box-shadow") return;
  this.classList.remove("clicked");
}

window.addEventListener("keydown", clickSound);

const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) =>
  button.addEventListener("transitionend", removeTransition)
);
