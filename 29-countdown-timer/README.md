# 29- Countdown Timer

view demos [here](https://bayirdan.github.io/javascript30/29-countdown-timer/index.html)

---

projenin amacı; belirlenen süreleri, geri sayım ile ekranda göstermek.

```
const buttons = document.querySelectorAll("[data-time]");
const timerDisplay = document.querySelector(".display-time");
const endTime = document.querySelector(".display-end");
let countdown;

buttons.forEach((button) => button.addEventListener("click", startTimer));
document.customForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const mins = this.minutes.value * 60;
  timer(mins);
  this.reset;
});
```

ilk olarak değişkenler tanımlandı, eventListener'ler eklendi.

```
function timer(seconds) {
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayTimeEnd(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }

    displayTimeLeft(secondsLeft);
  }, 1000);
}
```

`timer()` fonksiyonunda; şimdiki zamana, girilen sürenin milisaniye cinsinden değeri eklenerek, geri sayımın ne zaman biteceği milisaniye cinsinden bulundu.

`setInterval()` ile her 1 saniyede, geri sayımın biteceği zamandan şimdiki zaman çıkarılarak kalan süre hesaplandı.

bu bulunan değerler, ekrana yazdırmak için `displayTimeLeft()` ve `displayTimeEnd()` fonksiyonlarına gönderildi.

```
function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? "0" : ""}${remainderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
}
```

saniye cinsinden gelen değer, dakika ve saniye olarak dönüştürüldükten sonra geri sayım sayacına yazdırıldı.

```
function displayTimeEnd(timestap) {
  const end = new Date(timestap);
  const hour = end.getHours();
  const minutes = end.getMinutes();
  endTime.textContent = `End Time ${hour}:${minutes < 10 ? "0" : ""}${minutes}`;
}
```

milisaniye cinsinden gelen değer `new Date()` ile tam zaman formatına dönüştürüldü, zaman formatından saat ve dakika değerleri alındı ve geri sayımın ne zaman biteceği ekrana yazdırıldı.
