# 14- Javascript Reference vs Copy

view demos [here](https://bayirdan.github.io/javascript30/14-javascript-reference-vs-copy/index.html)

---

## Array

```
  let names = ["Selin", "Azra", "Pelin"];
  let cloneNames = names;
  cloneNames.push("Su");
```

array referanslı bir şekilde kopyalanırsa, kopyada yapılan herhangi bir değişiklik, orjinalinde de değişiklikle sonuçlanır.

çözüm, referanssız kopyalama.

#### without ES6

```
  let names = ["Selin", "Azra", "Pelin"];
  let cloneNames = Array.from(names);
  cloneNames.push("Su");
```

#### with ES6

```
  let names = ["Selin", "Azra", "Pelin"];
  let cloneNames = [...names];
  cloneNames.push("Su");
```

---

## Object

```
  let phone = {
    brand: "Apple",
    model: "11 Pro",
    price: 1499,
  };

  let computer = phone;
  computer.price = 7999;
```

object referanslı bir şekilde kopyalanırsa, kopyada yapılan herhangi bir değişiklik, orjinalinde de değişiklikle sonuçlanır.

çözüm, referanssız kopyalama.

#### without ES6

```
  let computer = Object.assign({}, phone);
```

#### with ES6

```
  let computer = { ...phone };
  computer.price = 7999;
```

---

## Object in the Object

```
  let person = {
    name: "Tolga",
    age: 29,
    job: {
      name: "Teacher",
      salary: 2000,
    },
  };
```

```
  let person_copy = {...person};
```

object referanssız bir şekilde kopyalansa da, person içindeki job içinde bir değişiklik olursa, orjinal object içindeki job da değişmiş olur.

çözüm, JSON.stringify() ile object'in string'e dönüştürülüp, tekrardan JSON.parse() ile object'e dönüştürülmesi.

```
  let person_copy = JSON.parse(JSON.stringify(person));
```

---

## Object in the Array

```
  let pets = [
    {
      type: "dog",
      name: "Zeyna",
    },
    {
      type: "cat",
      name: "Boncuk",
    },
  ];
```

```
let pets2 = [...animals];
```

array, referanssız bir şekilde kopyalansa da, pets içindeki object'lerde bir değişiklik olursa, orjinal array içindeki object'lerde de değişiklik olur.

çözüm, array.map() fonksiyonu.

```
let pets2 = pets.map((pet) => ({...pet}));
```

---

## Object in the Object in the Array

```
  let security = [
    {
      type: "Police",
      department: {
        name: "Traffic",
        salary: 3000,
      },
    },
    {
      type: "Military",
      department: {
        name: "Airforce",
        salary: 4000,
      },
    },
  ];
```

```
let security_clone = security.map((object) => ({...object}));
```

array içindeki object içindeki object üzerinde bir değişiklik yapıldığında, orjinal array içindeki object içindeki object üzerinde de değişiklik olur.

çözüm, yine JSON.parse(JSON.stringify())

```
let security_clone = JSON.parse(JSON.stringify(security));
```
