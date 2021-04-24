const jsonData =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];

fetch(jsonData)
  .then((blob) => blob.json())
  .then((data) => cities.push(...data));

function findMatch(word, cities) {
  return cities.filter((place) => {
    const regex = new RegExp(word, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function showMatch() {
  const matches = findMatch(this.value, cities);
  const html = matches
    .map((place) => {
      const regex = new RegExp(this.value, "gi");
      const cityName = place.city.replace(
        regex,
        `<span class="h1">${this.value}</span>`
      );
      const stateName = place.state.replace(
        regex,
        `<span class="h1">${this.value}</span>`
      );
      return `<li>
    <span class="name">${cityName}, ${stateName}</span>
    <span class="population">${numberWithCommas(place.population)} </span>
    </li>`;
    })
    .join("");
  list.innerHTML = html;
}

const searchInput = document.querySelector(".search-input");
const list = document.querySelector(".list");

searchInput.addEventListener("change", showMatch);
searchInput.addEventListener("keyup", showMatch);
