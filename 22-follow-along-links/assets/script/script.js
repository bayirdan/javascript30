const triggers = document.querySelectorAll("a");

const highlight = document.createElement("span");
highlight.classList.add("highlight");
document.body.append(highlight);

function highlightLink() {
  const linkCoords = this.getBoundingClientRect();

  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX,
  };

  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

const initStart = {
  left: window.innerWidth / 2,
  top: -100,
};

highlight.style.transform = `translate(${initStart.left}px, ${initStart.top}px)`;

triggers.forEach((i) => i.addEventListener("mouseenter", highlightLink));
