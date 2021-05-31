# 30- Whack a Mole

view demos [here](https://bayirdan.github.io/javascript30/30-whack-a-mole/index.html)

---

projenin amacı; random sürede, random bir yerde çıkan köstebekleri tıklayarak score kazanmak.

```
const scoreBoard = document.querySelector(".score");
const holes = document.querySelectorAll(".hole");
const moles = document.querySelectorAll(".mole");

let score = 0;
let lastHole;
let timeUp = false;

moles.forEach((mole) => mole.addEventListener("click", bonk));
```

- ilk olarak değişkenler tanımlandı, eventListener eklendi.

```
function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(data) {
  const idx = Math.floor(Math.random() * data.length);
  const hole = holes[idx];

  if (hole === lastHole) {
    return randomHole(holes);
  }

  lastHole = hole;
  return hole;
}
```

- random bir süre belirlemek için `randomTime()` fonksiyonu oluşturuldu.

- random bir köstebek yeri belirlemek için `randomHole()` fonksiyonu oluşturuldu, oluşturulan değer en son değere eşit ise tekrardan `randomHole()` fonksiyonu çalıştırılarak, aynı yerin tekrar seçilmesi engellendi. Yani köstebek ard arda aynı yerden tekrar çıkamaz hale getirildi.

```
function peep() {
  const time = randomTime(200, 750);
  const hole = randomHole(holes);

  hole.classList.add("up");

  setTimeout(() => {
    hole.classList.remove("up");
    if (!timeUp) peep();
  }, time);
}
```

- `peep()` fonksiyonunda oluşturulan diğer fonksiyonlar kullanılarak random time ve hole değerleri elde edildi, bu elde edilen değerler ve eklenen class sayesinde, random sürede, random yerde köstebek çıkarıldı.

- `timeUp = false` (oyun süresi dolmadığı sürece) `peep()` fonksiyonu, random sürelerde tekrar kullanıldı.

```
function bonk(e) {
  if (!e.isTrusted) return;
  score++;
  this.classList.remove("up");
  scoreBoard.textContent = `Score: ${score}`;
}
```

- `bonk()` fonksiyonu ile her köstebek tıklamaları score olarak kazanıldı, her score ekrana yazdırıldı.

- `e.isTrusted` ile sahte tıklamalar kontrol edildi, gelen tıklamanın eventten geldiği kontrol edildi.

```
function startGame() {
  scoreBoard.textContent = `Score: 0`;
  timeUp = false;
  score = 0;
  peep();

  setTimeout(() => (timeUp = true), 30000);
}
```

- `startGame()` fonksiyon ile, belirlenen sürede oyun başlatıldı.
