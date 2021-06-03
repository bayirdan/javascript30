# 05- Flexbox JS Image Gallery

view demos [here](https://bayirdan.github.io/javascript30/05-flexbox-js-image-gallery/index.html)

---

projenin özeti: her bir resme tıklandığında, esnek bir yapı ile resmin büyümesi, yazıların ekrana gelmesi.

projenin çalışma mantığı ise, hangi box'a tıklanırsa, o box'a önceden belirlenen class'ı ekleme.

```
const allBox = document.querySelectorAll(".box");

allBox.forEach((box) => box.addEventListener("click", clicked));
allBox.forEach((box) => box.addEventListener("transitionend", active));
```

değişkenler tanımlandı, tıklanma ve geçis sonrası eventListener'ler eklendi.

```
function clicked() {
  this.classList.toggle("open");
}

function active(e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("clicked-active");
  }
}
```

box üzerinde bir tıklanma olduğunda ilk olarak `clicked()` fonksiyonu çalışır ve box'a 'open' class'ı eklenir.

```
.box.open {
font-size: 8rem;
flex: 3;
}
```

box class'ında `transition` özelliği kullanıldığı için, `transition` sonrası `transitionend` eventListener'i tetiklenir, `active()` fonksiyonu çalışır ve 'clicked-active' class'ı eklenir.

```
p:first-child {
transform: translateY(-200%);
}

p:last-child {
transform: translateY(200%);
}

.box.clicked-active > p:first-child,
.box.clicked-active > p:last-child {
transform: translateY(0);
}
```

başlangıçta ekran dışında olan 'p', eklenen class'la beraber 0 konumuna getirilir ve ekranda görünmesi sağlanır.
