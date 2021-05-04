# 15- LocalStorage and Event Delegation

view demos [here](https://bayirdan.github.io/javascript30/15-localStorage-and-event-delegation/index.html)

---

## LocalStorage

localStorage, web uygulamalamada verilerin, kullanıcı tarayıcısında, son kullanma tarihi olmadan yerel olarak depolanmasına izin veren yapıdır. Sayfa yenilendiğinde veya tarayıcı kapatıldığında bile veriler silinmez, tekrar kullanılabilir.

veri eklemek için `localStorage.setItem()` metodu kullanılır.

```
localStorage.setItem('key', 'value');
```

localStorage verileri string ifade ile depolar. Bu örnekte veriler object olarak depolandığı için, `JSON.stringify()` ile string'e dönüştürülecektir.

```
const items = [];

const item = {
  text: text,
  done: false,
};

items.push(item);

localStorage.setItem("items", JSON.stringify(items));
```

veri çekmek için `localStorage.getItem()` metodu kullanılır.

```
localStorage.getItem('key');
```

localstorage'deki veriler string olarak depolanır demiştik, bu uygulamada veriler object olarak depolandığı için, çekilen veriler `JSON.parse()` ile object'e dönüştürülecektir.

```
const items = JSON.parse(localStorage.getItem("items")) || [];
```

bu yapı sayesinde, veriler temizlendiyse veya ilk defa işlem yapılacaksa, items = [] olacaktır, ancak daha önceden işlem yapıldıysa, localStorage'de verilerimiz varsa, items = localStorage verilerine eşit olacaktır.
