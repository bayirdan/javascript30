const checkboxes = [
  ...document.querySelectorAll('.inbox input[type="checkbox"]'),
];
let checkState = false;
let lastChecked = null;

function checking(e) {
  if (e.shiftKey && lastChecked !== null) {
    let first = checkboxes.indexOf(lastChecked);
    let last = checkboxes.indexOf(this);
    checkboxes
      .slice(Math.min(first, last), Math.max(first, last) + 1)
      .forEach((input) => (input.checked = checkState));
  }
  lastChecked = this;
  checkState = lastChecked.checked ? true : false;
}

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", checking);
});
