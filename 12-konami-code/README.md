# 12- Konami Code

view demos [here](https://bayirdan.github.io/javascript30/12-konami-code/index.html)

---

konami code, ilk olarak **KONAMI** firmasının, oyunlarında kullanmak üzere çıkardığı bir tür hile kodudur. Bu code daha sonra, sadece oyunlarda değil de, bir çok web sitesinde de kullanılmaya başlanmıştır.

bu projede biz de bir konami code oluşturalım.

```
const keys = [];
const secretCode =
  "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba";
let secret = document.querySelector(".secret-area");
```

- ilk olarak değişkenler tanımlandı, code belirlendi. Genelde kullanılan `⬆️-⬆️-⬇️-⬇️-⬅️-➡️-⬅️-➡️-b-a` kombinasyonu kullanıldı.

```
window.addEventListener("keyup", (e) => {
  keys.push(e.key);
  keys.splice(-secretCode.length - 1, keys.length - secretCode.length);
  console.log(keys);

  if (keys.join("").includes(secretCode)) {
    secret.style.opacity = 1;
  }
});
```

- 'keyup' eventListener'ı kullanılarak her basılan key, keys array'ine eklendi.

- array'in gereksiz dolmaması için, eğer ki `secretCode` büyüklüğünde bir veri eklenirse ve bu eklenen değer `secretCode` içermiyorsa, her klavye girdisi ekleme başına başlangıçtan bir değer sil, ta ki array içindeki veri `secretCode` içerene kadar.

- `secretCode` doğru girildiğinde, ekranda gizli yazı gösterildi.
