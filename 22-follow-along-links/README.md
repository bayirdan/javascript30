# 22- Follow Along Links

view demos [here](https://bayirdan.github.io/javascript30/22-follow-along-links/index.html)

---

projenin amacı, her linke `mouseenter` eventListener'i gerçekleştiğinde, yeni bir class eklenmesinden ziyade, eklenen class'ın bir önceki konumundan yeni konumuna translate olması.

eklenen class, her bir linkin bulunduğu konum, yükseklik ve genişliğine bağlı olarak boyut alır.

```
const highlight = document.createElement("span");
highlight.classList.add("highlight");
document.body.append(highlight);
```

eklenecek olan span class'ı oluşturulur.

```
function highlightLink() {
  const linkCoords = this.getBoundingClientRect();

  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX,
  };

  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

triggers.forEach((i) => i.addEventListener("mouseenter", highlightLink));
```

`getBoundingClientRect()` metodu ile, anlık olarak üzerinde bulunulan tag'in konumu ve boyutu alınır; eldeki verilere göre, eklenecek olan sınıfın boyutu ve konumu ayarlanır.

```
const initStart = {
  left: window.innerWidth / 2,
  top: -100,
};

highlight.style.transform = `translate(${initStart.left}px, ${initStart.top}px)`;
```

eklenecek class'ın ilk konumu belirlenir.
