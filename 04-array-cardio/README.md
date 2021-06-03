# 04- Array Cardio

view demos [here](https://bayirdan.github.io/javascript30/04-array-cardio/index.html)

---

bu projede sık sık tercih edilen, bazı önemli array metodları kullanıldı.

```
const filtered = inventors.filter((inventor) => {
  return inventor.year >= 1800 && inventor.year < 1900;
});
```

- `filter()` fonksiyonu, array içerisinde, şartlara uyan bütün elemanları array olarak döner.

```
const fullNames = inventors.map(
  (inventor) => `${inventor.first} ${inventor.last}`
);
```

- `map()` fonksiyonu, array içerisindeki elemanları, belirli işlemlere tabi tutup farklı bir array olarak kaydetmek için kullanılır.

```
const sorting = inventors.sort((x, y) => {
return y.year - x.year;
});

const alphabetical = people.sort((x, y) => {
const [xFirst, xLast] = x.split(", ");
const [yFirst, yLast] = y.split(", ");
return xLast > yLast ? 1 : -1;
});
```

- `sort()` fonksiyonu, sıralama için kullanılır, sayılarda kullanıldığı gibi alfabetik sıralamalarda da kullanılır.

```
const totalAge = inventors.reduce((total, inventor) => {
  return (total += inventor.passed - inventor.year);
}, 0);
```

- `reduce()` fonksiyonu, obje içerisindeki verileri toplamak için kullanılabilir. İlk değer toplamı, ikinci değer ise toplanacak veriyi temsil eder.
