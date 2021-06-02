# 09- Some Dev Tools Tricks

view demos [here](https://bayirdan.github.io/javascript30/09-some-dev-tools-tricks/index.html)

---

bu projede; bazı console yardımcı elementleri kullanıldı.

```
console.log("Hello i am a %s", "engineer");
console.log("Hello i am a %d", 25);
console.log("Hello i am a %o", {
  name: "Burkay",
  age: 25,
});
```

`console.log()`, `console.debug()` değişkenlerle birlikte kullanılabilir.

- Sayılar için: %d veya %i
- String için: %s
- Float için: %f
- Objeler için: %o
- JSON için: %j

```
console.log(
  "Can be used for %c styles ",
  "font-size: 40px; color: tomato; background-color: cyan; text-transform: uppercase; border: 1px solid #000; border-radius: 10px"
);
```

`console.log()`, style ile düzenlenebilir, %c ifadesi kullanılır.

```
console.warn("Warning Messages!");
console.error("Error Messages!!!");
console.info("The Mona Lisa has no eyebrows");
```

console mesajları düz olarak değil, tehlikeli, hata, bilgi verici şekilde de gösterilebilir.

```
const test = document.querySelector("p");
  console.assert(
    test.classList.contains("test-class"),
    "there is no such class"
);
```

`console.assert()`, eğer ki bir ifade false dönecekse, ileti yazdıran bir yöntemdir.

```
console.log(test);
console.dir(test);
```

`console.log()` ile eleman gösterilirken `console.dir()` ile elemanın bütün özellikleri gösterilir.

```
cars.forEach((car) => {
  console.groupCollapsed(car.name);
  console.log(`This is my car ${car.name}`);
  console.log(`${car.name} is ${car.price} €`);
  console.groupEnd(car.name);
});
```

`console.groupCollapsed()`, gruplama için kullanılır. Array, belirlenen değişkene göre gruplanıp, içirisine istenilen veriler yazdırılabilir. `console.groupEnd` ifadesi ile kapatılır.

```
console.count("Apple");
console.count("Apple");
console.count("Microsoft");
console.count("Intel");
console.count("Apple");
console.count("Oracle");
console.count("Oracle");
console.count("Oracle");
console.count("Intel");
console.count("Microsoft");
console.count("Intel");
console.count("Microsoft");
```

`console.count()`, bir ifadenin kaç kere kullanıldığını gösterir.

- çıktısı :

```
Apple: 1
Apple: 2
Microsoft: 1
Intel: 1
Apple: 3
Oracle: 1
Oracle: 2
Oracle: 3
Intel: 2
Microsoft: 2
Intel: 3
Microsoft: 3
```

`console.time()`, süreli bir işlem gerçekleştirilecekse, geçen sürenin hesaplanması için işlemin başlangıcında kullanır.

```
console.time("fetching data");
fetch("https://api.github.com/users/bayirdan")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("fetching data");
    console.log(data);
});
```

`console.timeEnd()`, süreli işlemin bitişinde kullanılır.

```
console.table(cars);
```

`console.table()`, verinin tablo şeklinde gösterilmesini sağlar.
