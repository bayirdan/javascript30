const keys = [];
const secretCode =
  "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba";
let secret = document.querySelector(".secret-area");

window.addEventListener("keyup", (e) => {
  keys.push(e.key);
  keys.splice(-secretCode.length - 1, keys.length - secretCode.length);

  if (keys.join("").includes(secretCode)) {
    secret.style.opacity = 1;
  }
});
