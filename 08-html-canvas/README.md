# 08- Html Canvas

view demos [here](https://bayirdan.github.io/javascript30/08-html-canvas/index.html)

---

### HTML5 Canvas

`<canvas>` etiketi, javascript ile birlikte grafiksel şekiller oluşturmak ve düzenlemek için kullanılan bir API'dir.

```
const inputs = document.querySelectorAll(".top-bar input");
const canvas = document.querySelector("#drawing");
const ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
ctx.strokeStyle = "#000000";
ctx.lineWidth = 5;
ctx.lineJoin = "round";
ctx.lineCap = "round";

let isDrawing = false;
let lastX = 0;
let lastY = 0;
```

ilk olarak değişkenler tanımlandı.

- `getContext("2d")` nesnesi, HTML nesneleri içinde olan, yollar, kutular, daireler, yazılar, resimler ve daha fazlasını çizmek için bir çok özelliği ve metodu olan bir yapıdır.

- canvas boyutu için, `innerWidth` tarayıcı ekran genişliği ve `innerHeight` tarayıcı ekran yüksekliği kullanıldı.

- fırçanın rengi, boyutu ve yapısı tanımlandı.

- çizim durumu ve fırçanın konumu tanımlandı.

```
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));

inputs.forEach((input) => input.addEventListener("change", changeValue));
```

- farenin; tıklanma, hareket etme, tıklanmayı kaldırma ve ekrandan çıkma eventListener'leri eklendi.

- fare tıklama durumda, çizim durumu 'true' yapıldı, farenin konumu, fırça konum değişkenlerine atandı.

- tıklama durumu ile birlikte fare hareket ettirildiğinde `draw()` fonksiyonu çalıştırıldı.

- tıklamayı kaldırma ve ekrandan çıkma durumlarında çizim durumu 'false' yapıldığı için çizim durduruldu.

- fırça boyutu ve rengi için input değişimine eventListener eklendi.

```
function draw(e) {
  if (!isDrawing) return;

  ctx.beginPath();
  // Starting Position
  ctx.moveTo(lastX, lastY);

  //way
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();

  [lastX, lastY] = [e.offsetX, e.offsetY];
}

function changeValue() {
  if (this.type == "range") ctx.lineWidth = this.value;
  else {
    ctx.strokeStyle = this.value;
  }
}
```

- çizim durumu kontrolü yapıldıktan sonra, farenin tıklanma konumu, fırçanın başlangıç posizyonu olarak eşitlendi, hareket edilen konum da fırçanın son konumu olarak eşitlendi ve çizim yapıldı.

- input değişikliği 'type' durumuna göre kontrol edildi, sonuca göre renk veya boyut değikliği yapıldı.
