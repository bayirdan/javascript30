# 06- Ajax Type Ahead

view demos [here](https://bayirdan.github.io/javascript30/06-ajax-type-ahead/index.html)

---

projenin özeti: JSON ile çekilen verinin, arama kısmında aranan haflere veya kelimeye göre, bulduğu sonuçları getirme.

```
const jsonData =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

fetch(jsonData)
  .then((blob) => blob.json())
  .then((data) => cities.push(...data));
```

`fetch()` ile json verilerinin bulunduğu adrese bir istek gönderildi ve dönen cevaptan, `json()` fonksiyonu kullanılarak json objesi elde edildi. Elde edilen veri, cities array'ine eklendi.

```
const searchInput = document.querySelector(".search-input");
const list = document.querySelector(".list");

searchInput.addEventListener("change", showMatch);
searchInput.addEventListener("keyup", showMatch);
```

değişkenler tanımlandı, arama bar'ına eventListener eklendi.

```
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
```

arama bar'ında aranan veri `showMatch()` fonksiyonuna gönderildi, gönderilen veri eşleşme için `findMatch()` metoduna gönderildi.

### Regular Expressions

basit bir şekilde anlatmak gerekirse; Regex(Regular Expression) yani düzenli ifadeler, metinlerde aranan bir kelimeyi kolayca bulmamızı sağlayan bir çeşit algoritmadır.

```
function findMatch(word, cities) {
  return cities.filter((place) => {
    const regex = new RegExp(word, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}
```

- `findMatch()` fonksiyonunda gelen veri, gerekli eşleşme yapılması için regex yapısıyla kullanıldı. `gi` özelliği verinin global ve ignore case olmasını sağlar, yani büyük küçük harf ayrımı olmayacak ve aranan veri `city` veya `place` değerlerinin herhangi bir bölgesinde olabilecek. Bu eşleşmeye uyan her veri return edildi.

- `findMatch()` fonksiyonunda gerekli eşleşmeye sahip veriler, `map()` yardımı ile HTML tag eklemeleri yapıldıktan sonra `join()` ile string ifadeye çevrildi ve `inner.HTML` ile, gösterilecek olan listenin html yapısına eklenmiş oldu.

```
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
```

eşleşme ile gelen mekanın nüfusu, regex yardımı ile, her üç rakamda bir ',' ifadesi eklenerek daha düzenli bir görünüme getirildi.
