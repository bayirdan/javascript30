# 26- Stripe Follow Along Dropdown Navigation

view demos [here](https://bayirdan.github.io/javascript30/26-stripe-follow-along-dropdown-navigation/index.html)

---

projenin amacı; her nav linkine `mouseenter` eventListener'i gerçekleştiğinde açılabilir bir dropdown yapısı oluşturmadan ziyade, açılan bu dropdown'ın boyutunun içeriğe göre dinamik olması ve konumunun bir önceki nav linkinden gelmesi.

`mouseenter`, `mouseleave` yapıları kullanılarak, nav linklerinden birine gelindiğinde class'ın eklenmesi ve silinmesi gerçekleştirildi, eklenen class'ların konumu ve boyutu `getBoundingClientRect` yapısı ile sağlandı.

```
  triggers.forEach((trigger) =>
  trigger.addEventListener("mouseenter", handleEnter)
);

  triggers.forEach((trigger) =>
  trigger.addEventListener("mouseleave", handleLeave)
);
```

```
  const dropdown = this.querySelector(".dropdown");
  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();

  const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - navCoords.left,
  };

  background.style.setProperty("width", `${coords.width}px`);
  background.style.setProperty("height", `${coords.height}px`);
  background.style.setProperty(
    "transform",
    `translate(${coords.left}px, ${coords.top}px)`
  );
```
