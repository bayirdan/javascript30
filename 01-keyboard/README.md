# 01- Keyboard

view demos [here](https://bayirdan.github.io/javascript30/01-keyboard/index.html)

---

projenin özeti: klavyede belirli tuşlara basıldığında, farklı tuş sesleri çıkarmak.

```
window.addEventListener("keydown", clickSound);

const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) =>
  button.addEventListener("transitionend", removeTransition)
);
```

ilk olarak her tuş basımı için eventLisner ve her button yapısı için, geçiş sonrası eventListener'i eklendi.

```
function clickSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const btn = document.querySelector(`.btn[data-key="${e.keyCode}"]`);

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  btn.classList.add("clicked");
}
```

- `keyCode`, klavyede basılan bir tuşun unicode değerini verir. Bu projede belirlenen tuşların unicode değerleri `data-key` html verisi olarak kaydedildi.

- butonlar ve key datasına sahip html elemanları, değişkenlere atandı.

- eğer ki key datasına sahip html kodu yoksa yani ses oluşturulmadıysa `return` ile fonksiyondan çıkıldı.

- tuşa basıldığında oynatılan ses tekrar tuşa basıldığında sonlanmamışsa, diğer ses de çalışacağı için sesler karışacaktır. Tekrar tekrar basımlarda sesler iç içe gireceği için, `currentTime = 0` kullanılarak, eğer ki fonksiyon çalıştığında oynatılan bir ses varsa bunun sıfırlanması sağlandı. Böylelikle her tuş basımında, önceden bir ses oynatılıyorsa, bu iptal edilerek basılan tuşun sesi oynatılacak.

- 'clicked' class'ı her tuşa basımında button'a eklendi.

```
function removeTransition(e) {
  if (e.propertyName !== "box-shadow") return;
  this.classList.remove("clicked");
}
```

eklenen `clicked` class'ı, transition gerçekleştikten sonra silindi.
