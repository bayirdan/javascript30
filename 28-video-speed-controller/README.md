# 28- Video Speed Controller

view demos [here](https://bayirdan.github.io/javascript30/28-video-speed-controller/index.html)

---

projenin amacı; video oynatıcının yan tarafında bulunan speed bar'dan videonun hızını değiştirmek.

```
const video = document.querySelector(".video");
const speed = document.querySelector(".speed");
const bar = document.querySelector(".speed-bar");

speed.addEventListener("mousedown", () => (isDown = true));
speed.addEventListener("mouseup", () => (isDown = false));
speed.addEventListener("mouseleave", () => (isDown = false));
speed.addEventListener("mousemove", videoSpeed);
```

değişkenler ve eventListener'ler tanımlandı.

```
function videoSpeed(e) {
  if (!isDown) return;
  e.preventDefault();
  const y = e.pageY - this.offsetTop;
  const percent = y / this.offsetHeight;

  const min = 0.5;
  const max = 4;
  const rate = percent * (max - min) + min;

  const height = Math.round(percent * 100) + "%";

  bar.style.height = height;
  bar.textContent = rate.toFixed(2) + "x";

  video.playbackRate = rate;
}
```

`isDown = false` durumunda fonksiyon çalışmaz, 'mousedown' olduğu durumda `isDown = true` olacağı için fonksiyon çalışır; 'mouseup', 'mouseleave' durumlarında da `isDown = false` olacağından fonksiyon çalışmaz.

ilk olarak mouse'nin bar içerisindeki Y eksenide bulunan konumunu bulmak için `e.pageY - this.offsetTop` ifadesi kullanıldı.

bulunan konumun bara göre oranını bulmak için `y / this.offsetHeight` ifadesi kullanıldı.

bulunan oranın yüzdelik değerini bulmak için `const height = Math.round(percent * 100) + "%"` ifadesi kullanıldı.

min ve max değerleri arasında bir rate için `const rate = percent * (max - min) + min` ifadesi kullanıldı.

en son bulunan değerler, css ve html özelliklerine eşitlendi.
