# 27- Click and Drag to Scroll

view demos [here](https://bayirdan.github.io/javascript30/27-click-and-drag-to-scroll/index.html)

---

projenin amacı; scroll ile yapılan kaydırma işini, mouse tıklama ile yapabilmek.

```
slider.addEventListener("mousedown", (e) => {});
slider.addEventListener("mousemove", (e) => {});
slider.addEventListener("mouseup", () => {});
slider.addEventListener("mouseleave", () => {});
```

her bir mouse hareketi için ayrı ayrı eventListener eklendi.

```
let isDown = false;
let startX;
let scrollLeft;
```

tıklanma durumu, tıklanma konumu ve scroll konumu için değişkenler tanımlandı.

```
slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const move = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - move;
});
```

mouse tıklandığında tıklanma durumu true yapıldı, önceden hazırlanan css class eklendi, mouse ve scroll başlangıç konumları kaydedildi.

mouse hareket edildiğinde eğer tıklanma durumu 'true' ise, her mouse kaydırmada konum değişikliği kaydedildi; scroll'un konumu, başlangıç durumuna göre olan bu konum değişimine eşitlendi.

```

slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});
```

mouse tıklanması bırakıldığında veya mouse alandan ayrıldığında, tıklanma durumu false yapıldı ve css class'ımız silindi.
