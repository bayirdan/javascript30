const addItems = document.querySelector(".add-items");
const itemList = document.querySelector(".menu");

const items = JSON.parse(localStorage.getItem("items")) || [];

function addItem(e) {
  e.preventDefault();
  const text = this.querySelector("[name=item").value;
  const item = {
    text,
    done: false,
  };

  items.push(item);
  populateList(items, itemList);
  localStorage.setItem("items", JSON.stringify(items));
  this.reset();
}

function populateList(items = [], itemList) {
  itemList.innerHTML = items
    .map((item, i) => {
      return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${
        item.done ? "checked" : ""
      }>
        <label for="item${i}">${item.text}</label>
      </li>
    `;
    })
    .join("");
}

function toggleDone(e) {
  if (!e.target.matches("input")) return;

  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}

addItems.addEventListener("submit", addItem);
itemList.addEventListener("click", toggleDone);

populateList(items, itemList);
