# 02- CSS JS Clock

view demos [here](https://bayirdan.github.io/javascript30/02-css-js-clock/index.html)

---

projenin özeti: Tasarımı yapılan analog saatin, şimdiki zamana göre gösterimini sağlamak.

```
const counterSecond = document.querySelector(".counter-second");
const counterMinute = document.querySelector(".counter-minute");
const counterHour = document.querySelector(".counter-hour");

setInterval(setDate, 1000);
```

- ilk olarak saat, dakika ve saniye görünümleri için değişkenler tanımlandı.

- `setInterval()` fonksiyonu ile, her 1 saniyede `setDate()` fonksiyonu çalıştırıldı.

```
const now = new Date();
```

- `Date()` fonksiyonu ile, analog saatte göstermek için, şimdiki zaman kayıt altına alındı.

```
function setDate() {
  const seconds = now.getSeconds();
  const secondsDegrees = seconds * 6 + 180;
  if (secondsDegrees !== 180) {
    counterSecond.style.transition = "all .05s cubic-bezier(0, 1.51, 1, 1.3)";
  } else {
    counterSecond.style.transition = "all 0s cubic-bezier(0, 1.51, 1, 1.3)";
  }
  counterSecond.style.transform = `rotate(${secondsDegrees}deg`;
}
```

- saatin dönüş derecesinin hesaplanması için (0 - 360), gelen saniye değeri 6 ile çarpıldı.

- eklenen 180 değeri, tasarım yapılırken saatin başlangıç konumunun 6'da olmasından kaynaklıdır. Tam 12'de gösterilmesi için 180 eklenmiştir.

- şöyle bir önemli noktaya değinmek gerekirse, 0 ile 360 derece, aynı konumu gösterir, yani saat 12'yi gösterir. Öncelikle bunu saat değil, sayı olarak düşünelim. Her saniye 6 derecelik bir rotate'ye karşılık gelmektedir ve 0 konumundan 360 konumuna kadar hep bir artış olacağı için saat yönünde bir rotate, verilen transition yapısı ile gerçekleşecektir. Ancak 360 konumundan yani 0 konumundan, bir sonraki rotate yine 6 konumuna olacağı için, 360 konumundan 6 konumuna rotate bu sefer saat yönünün tersine olacaktır. Çünkü 360'dan 6'ya düşüş söz konusu. Bu sorunu engellemek için de, tam 0 konumunda transition süresi sıfırlandı. Böylelikle saat, dakika ve saniyenin 12'den 1'e geçişlerinde, ters dönme sorunu engellenmiş oldu.
