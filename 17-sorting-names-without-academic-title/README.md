# 17- Sorting Names without Academic Title

view demos [here](https://bayirdan.github.io/javascript30/17-sorting-names-without-academic-title/index.html)

---

## Array Sort

`sort()` fonksiyonu, sayılarda küçükten büyüğe veya büyükten küçüğe, metin veri türlerinde de alfabetik sıralama için kullanılır.

```
const sortedNames = names.sort((a, b) => (a > b ? 1 : -1));
```

alfabetik sıralama yapılırken ünvanların etki etmemesi için, her bir elamana `regex` uygulanır.

```
/(uz. |yrd. |doc. |prof. |dr. |ord. )/ig
```

kullanılan bu ifade, metinde kullanılan her ünvana karşılık gelir. `i` olması büyük küçük ayrımı yapmaksızın `g` olması da metnin herhangi bir bölümünde, anlamlarını taşır.

```
function strip(name) {
  return name
  .replace(/(uz. |yrd. |doc. |prof. |dr. |ord. )/gi, "")
  .trim();
}

const sortedNames = names.sort((a, b) => (strip(a) > strip(b) ? 1 : -1));
```

oluşturulan bu fonksiyon sayesinde değerlerin ilk olarak `regex` ile ünvanları kaldırılır ve sadeleştirilir, sonrasında alfabetik sıralaması yapılır.

```
document.querySelector("#names").innerHTML = sortedNames
  .map((name) => `<li> ${name} </li>`)
  .join("");
```

`map()` fonksiyonu ile array'in her elemanına `<li>` html tag'ı eklenir, `#names` id'li `<ul>` html tag'ına aktarılır.
