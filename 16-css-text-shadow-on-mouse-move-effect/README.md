# 16- Css Text Shadow on Mouse Move

view demos [here](https://bayirdan.github.io/javascript30/16-css-text-shadow-on-mouse-move-effect/index.html)

---

projenin özeti: fare hareket ettirildiğinde, farenin konumuna göre, gölge efekti oluşturulması.

```
const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const walk = 30;

hero.addEventListener("mousemove", shadow);
```

ilk olarak değişkenler tanımlandı ve eventListener eklendi. `walk` değişkeni gölgenin boyutu için tanımladı.

```
function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero; // ES6 syntax
  let { offsetX: x, offsetY: y } = e; // ES6 syntax

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / height) * walk - walk / 2);

  text.style.textShadow = `${xWalk * -1}px ${yWalk * -1}px 0 rgba(0, 0, 0, 0.2)`;
}
```

- tarayıcı penceresinin genişliği ve yüksekliği, farenin X ve Y konumları değişkenlere atandı.

- offsetX ve offsetY kapsayıcıya göre konum aldığında, hero sınıfı içerisindeki offset'lere, o kapsayıcının offsetLeft ve offsetTop değerleri de eklendi.

- farenin konumuna göre `walk` değerini belirlemek için `(x / width) * walk` işlemi uygulandı. Ancak burada sadece tek yönlü gölge olmayacağı için her işlemden `walk / 2` değeri çıkarıldı. Böylelikle `walk` değerinin farenin konumuna göre -15 ve +15 değerleri arasında değişmesi sağlandı.

- elde edilen değerler `style` ile gölge olarak eklendi. Farenin bulunduğu konumun zıt yönününde gölge oluşması için, değerler eklenirken -1 ile çarpıldı.
