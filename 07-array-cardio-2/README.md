# 07- Array Cardio 2

view demos [here](https://bayirdan.github.io/javascript30/07-array-cardio-2/index.html)

---

bu projede sık sık tercih edilen, bazı önemli array metodları kullanıldı.

```
const belowMinWage = employees.some((employee) => {
  return minWage > employee.salary;
});
```

- `some()` fonksiyonu, array içerisinde şartları sağlayan tek bir eleman bile varsa 'true' döner.

```
const allAboveMinWage = employees.every((employee) => {
  return minWage > employee.salary;
});
```

- `every()` fonksiyonu, array içerisindeki bütün elemanlar şartları sağlarsa 'true' döner, bir tane bile şarta uymayan eleman olursa 'false' döner.

```
const personInfo = staff.find((person) => {
  return person.id === 3021842;
});
```

- `find()` fonksiyonu, array içerisinde, aranan elemanı döner. Yalnızca ilk bulduğu elemanı döner.

```
const personIndex = staff.findIndex((person) => {
  return person.id === 3021842;
});
```

- `findIndex()` fonksiyonu, array içerisinde, aranan elemanın index değerini döner. Yalnızca ilk bulduğu elemanın index değerini döner.

```
staff.splice(personIndex, 1);
```

- `splice()` fonksiyonu, array içerisine eleman eklediği gibi, array içerisindeki elemanları da silebilir. Silme işlemi sonucunda silinen değeri döner.
