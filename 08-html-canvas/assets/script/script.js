const inputs = document.querySelectorAll(".top-bar input");
const canvas = document.querySelector("#drawing");
const ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
ctx.strokeStyle = "#000000";
ctx.lineWidth = 5;
ctx.lineJoin = "round";
ctx.lineCap = "round";

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e) {
  if (!isDrawing) return;

  ctx.beginPath();
  // Starting Position
  ctx.moveTo(lastX, lastY);

  //way
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();

  [lastX, lastY] = [e.offsetX, e.offsetY];
}

function changeValue() {
  if (this.type == "range") ctx.lineWidth = this.value;
  else {
    ctx.strokeStyle = this.value;
  }
  console.log(this);
}

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));

inputs.forEach((input) => input.addEventListener("change", changeValue));
