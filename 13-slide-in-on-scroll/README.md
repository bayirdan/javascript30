# 13- Slide in on Scroll

view demos [here](https://bayirdan.github.io/javascript30/13-slide-in-on-scroll/index.html)

### Debouncing

debunce fonksiyonu, her scrollda tetiklenen eventListener için, performans kaybı yaşanmaması amacıyla kullanılmıştır. Scroll işleminden sonraki 20 ms'lik bir eventListener gecikmesi, hiç kullanılmamasına oranla ciddi bir performans artışı sağlamıştır.

---

### Slides

ilk olarak `slideInAt`, `imageBottom`, `isHalfShown`, `isNotScrolledPast` kavramlarını açıklamak gerekirse;

```
const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
```

`slideInAt`, slide'nin başlayacağı (.active class'ının ekleneceği) konum için tanımlanmıştır. Konum her bir image'nin, Y ekseninde, 50%'lik kısmından bir miktar sonrası olarak belirlenmiştir.

`window.scrollY + window.innerHeight` Y ekseninde, son scroll yapılan noktanın top 0'a göre konumunu verir.

```
const imageBottom = sliderImage.offsetTop + sliderImage.height;
```

`imageBottom`, .active class'ının silineceği konumunu belirlemek için tanımlanmıştır. Konum, her bir image'nin, en alt noktasının bir miktar sonrası olarak belirlenmiştir.

`sliderImage.offsetTop + sliderImage.height` Y ekseninde, her bir image'nin, top 0'a göre, en alt noktasının konumunu verir.

```
const isHalfShown = slideInAt > sliderImage.offsetTop;
const isNotScrolledPast = window.scrollY < imageBottom;

if(isHalfShown && isNotScrolledPast) {
  sliderImage.classList.add('active');
} else {
  sliderImage.classList.remove('active');
}
```

`isHalfShown`, .active class'ının eklenme durumunu, `isNotScrolledPast` ise .active class'ının silinme durumunu belirlemek için tanımlanmıştır.

`slideInAt = sliderImage.offsetTop` olduğu durum, her bir image'nin %50'lik kısmının görünme anına denk gelir, bir miktar fazlası da, yani `slideInAt > sliderImage.offsetTop` olduğu durum true dönecektir.

`window.scrollY = imageBottom` olduğu durum, her bir image'nin en alt noktasının konumuna denk gelir, bir miktar fazlası da, yani `window.scrollY < imageBottom` olduğu durum false dönecektir.

Bu durumlar sorguda beraber kullanıldıklarında, her bir image'nin 50%'nin bir miktar fazlasında .active class'ını ekler, scroll, her bir image'nin en alt noktasının konumunu geçtiğinde de .active class'ını siler. Böylelikle hem aşağı yöndeki scroll hem de yukarı yöndeki scroll işlemlerinde, slide özelliği sağlıklı bir şekilde kullanılır.
