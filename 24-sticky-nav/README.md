# 24- Sticky Nav

view demos [here](https://bayirdan.github.io/javascript30/24-sticky-nav/index.html)

---

projenin amacı; aşağıya scroll yapıldığında navigation bar'ın top'a yapışık bir şekilde kalması.

dikkat edilmesi gereken nokta; aşağıya ne kadar scroll yapıldığı ve navigation bar'ın top ile mesafesi.

```
const nav = document.querySelector("#nav");
const topOfNav = nav.offsetTop;
```

navigation bar'ın top ile mesafesi alınır.

`window.scrollY = topOfNav` ifadesi, aşağıya doğru yapılan scrool ve navigation bar'ın top ile mesafesinin eşitlendiği anı ifade eder. Amacımız tam da bu anda navigation bar'ı top'a sabitlemek.

```
function fixNav() {
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + "px";
    document.body.classList.add("fixed-nav");
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove("fixed-nav");
  }
}

window.addEventListener("scroll", fixNav);
```

her scroll'da, eventListener ile fixNav fonksiyonu çalıştırılır, scroll ile navigation bar'ın top mesafesi eşitlendiğinde ya da scroll, navigation bar'ın top mesafesinden büyük olduğunda, önceden belirlenen `fixed-nav` class'ı, navigation bar'a eklenir, şartlar karşılanmazsa silinir.

navigation bar top'a sabitlenince, altındaki class hizalama için navigation bar'ı değil bir üst class'ı örnek alacağı için, alt class'a sabitlenen class yüksekliğinde bir padding eklenir.
