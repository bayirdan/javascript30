const video = document.querySelector(".video");
const speed = document.querySelector(".speed");
const bar = document.querySelector(".speed-bar");

let isDown = false;

function videoSpeed(e) {
  if (!isDown) return;
  e.preventDefault();
  const y = e.pageY - this.offsetTop;
  const percent = y / this.offsetHeight;

  const min = 0.5;
  const max = 4;
  const rate = percent * (max - min) + min;

  const height = Math.round(percent * 100) + "%";

  bar.style.height = height;
  bar.textContent = rate.toFixed(2) + "x";

  video.playbackRate = rate;
}

speed.addEventListener("mousedown", () => (isDown = true));
speed.addEventListener("mouseup", () => (isDown = false));
speed.addEventListener("mouseleave", () => (isDown = false));
speed.addEventListener("mousemove", videoSpeed);
