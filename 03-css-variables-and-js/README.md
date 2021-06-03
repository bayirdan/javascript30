# 03- CSS Variables and JS

view demos [here](https://bayirdan.github.io/javascript30/03-css-variables-and-js/index.html)

---

projenin özeti: önceden belirlenen CSS değişkenlerinin JS ile kontrolünü sağlamak.

```
<div class="tools">
  <label for="spacing">Spacing: </label>
  <input
    type="range"
    name="spacing"
    min="0"
    max="200"
    value="10"
    data-sizing="px"
  />

  <label for="blur">Blur: </label>
  <input
    type="range"
    name="blur"
    min="0"
    max="20"
    value="5"
    data-sizing="px"
  />

  <label for="base">Base Color: </label>
  <input type="color" name="base" value="#ff0000" />
</div>
```

resim için boşluk, bulanıklık ve arkaplan rengi için 3 input tanımlandı.

```
:root {
  --base: #ff0000;
  --spacing: 10px;
  --blur: 5px;
}
```

CSS'de base, spacing ve blur olmak üzere 3 değişken tanımlandı.

```
const inputs = document.querySelectorAll(".tools input");

inputs.forEach((input) => input.addEventListener("change", changeValue));
inputs.forEach((input) => input.addEventListener("mousemove", changeValue));
```

değişkenler tanımlandı ve eventListener'ler eklendi. `mousemove` ve `change` eventListener'i tek bir fonksiyonu çalıştırır. Peki gelen verinin, değer veya renk kodu olduğu nasıl anlaşılır ?

```
function changeValue() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}
```

- `suffix` değişkeni, html elemanının veri saklama durumuna göre "px" veya "" değerlerini alır. Yani html elemanı `data-sizing` içeriyorsa `suffix = px` içermiyorsa `suffix = ""` olur.

  - 'base' inputundan gelen veri `data-sizing` içermediğinden dolayı, CSS değişkeni 'px' olmadan 'value' olarak tanımlanacaktır.

  - 'spacing' ve 'blur' inputundan gelen veri `data-sizing` içerdiğinden dolayı, CSS değişkeni 'valuepx' şeklinde tanımlanacaktır.

- böylelikle style düzenlemesi sağlıklı bir şekilde gerçekleştirilecektir.
