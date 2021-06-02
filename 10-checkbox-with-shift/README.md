# 10- Checkbox with Shift

view demos [here](https://bayirdan.github.io/javascript30/10-checkbox-with-shift/index.html)

---

projenin amacı; checkbox'larda seçim yaparken, shift tuşu kullanıldığında, son seçim yapılan checkbox ile bir önceki seçilen checkbox arasında başka checkboxlar varsa, onları da seçmek ya da seçimini kaldırmak.

```
const checkboxes = [
  ...document.querySelectorAll('.inbox input[type="checkbox"]'),
];
let checkState = false;
let lastChecked = null;

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", checking);
});
```

- ilk olarak değişkenler tanımlandı ve eventListener eklendi.

- gelen nodeList'i array'a dönüştürmek için `...document.querySelectorAll('.inbox input[type="checkbox"]'` yapısı kullanıldı, dönüştürülen array'in her bir elemanına eventListener eklendi.

```
function checking(e) {
  if (e.shiftKey && lastChecked !== null) {
    let first = checkboxes.indexOf(lastChecked);
    let last = checkboxes.indexOf(this);
    checkboxes
      .slice(Math.min(first, last), Math.max(first, last) + 1)
      .forEach((input) => (input.checked = checkState));
  }
  lastChecked = this;
  checkState = lastChecked.checked ? true : false;
}
```

- ilk olarak `shiftKey` ve `lastChecked` kontrol edildi, ilk seçim olduğu için `lastChecked = false` olacağında if() bloğu atlanmış oldu. `lastChecked = this` ile eşitlendi.

- diğer seçimde `shiftKey` kullanıldığında, `lastChecked = false` olmadığı için if() bloğuna giriş yapıldı.

  - ilk seçilen ile son seçilen checkboxlar arası tamamen seçileceği için veya seçimi kaldırılacağı için first ve last değişkenleri bu değerlere göre belirlendi.

  - bu değerler arasındakiler de seçileceği için `slice()` metodu ile, bu değerler ve arasındakiler için yeni bir array oluşturuldu.

- değerler arasındakilerin seçileceğini ya da seçiminin kaldırılacağını belirlemek için, `checkState` durum değişkeni tanımlandı.
