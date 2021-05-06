# 18- How Javascript's Array Reduce Works

view demos [here](https://bayirdan.github.io/javascript30/18-how-javascript-array-reduce-works/index.html)

---

`split()`, `parseFloat()`, `reduce()`, `Math.floor()`

```
const timeList = [...document.querySelectorAll("[data-time]")];
```

data-time'ye sahip her `<li>` tag'ı çekildi ve (...) array'a dönüştürüldü.

```
const totalSeconds = timeList
  .map((item) => item.dataset.time)
  .map((item) => {
    const [minutes, seconds] = item.split(":").map(parseFloat);
    return minutes * 60 + seconds;
  })
  .reduce((total, i) => total + i);
```

dakika ve saniyeler `split(:)` kullanılarak ayrıldı, `parseFloat()` kullanılarak işlem yapmak için float'a dönüştürüldü.

tüm süreyi saniye cinsinden hesaplamak için, dakika ve saniyeye gerekli işlemler yapıldı, `reduce()` ile toplandı.

```
let secondsRemaining = totalSeconds;

const hours = Math.floor(secondsRemaining / 3600);
secondsRemaining %= 3600;

const minutes = Math.floor(secondsRemaining / 60);
secondsRemaining %= 60;
```

toplam saniye, gerekli işlemlerden geçerek saat ve dakika hesabı yapıldı, `Math.floor()` ile küsuratlar kaldırıldı, `%` operatörü ile kalan saniye hesaplandı.
