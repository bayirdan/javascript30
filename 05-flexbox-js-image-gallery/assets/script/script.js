const allBox = document.querySelectorAll(".box");

function clicked() {
  this.classList.toggle("open");
}

function active(e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("clicked-active");
  }
}

allBox.forEach((box) => box.addEventListener("click", clicked));
allBox.forEach((box) => box.addEventListener("transitionend", active));
