# 11- Custom Html5 Video Player

view demos [here](https://bayirdan.github.io/javascript30/11-custom-html5-video-player/index.html)

---

projenin özeti: özel video oynatıcı oluşturmak.

```
const video = document.querySelector(".viewer");
const progress = document.querySelector(".duration");
const progressBar = document.querySelector(".duration-full");
const toggle = document.querySelector(".toggle");
const skipButtons = document.querySelectorAll("[data-skip]");
const ranges = document.querySelectorAll(".controls-range");
```

ilk olarak kullanılacak olan değişkenler tanımlandı.

```
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);

toggle.addEventListener("click", togglePlay);
skipButtons.forEach((button) => button.addEventListener("click", skip));

ranges.forEach((range) => range.addEventListener("change", handleRangeUpdate));
ranges.forEach((range) =>
  range.addEventListener("mousemove", handleRangeUpdate)
);

progress.addEventListener("click", scrub);
```

- video için; tıklama, oynatılma, durdurulma, süre değişim anları için eventListener'ler eklendi.

- kontrol penceresindeki oynatma tuşu ve süre arttırıp azaltma tuşları için tıklama eventListener'leri eklendi.

- kontrol penceresindeki ses ve oynatma hızı değişiklikleri için; değişim ve fare hareketi eventListenerler'i eklendi.

- video oynatma süresi çubuğu için tıklama eventListener'i eklendi.

```
function togglePlay() {
  const method = video.paused ? "play" : "pause";
  video[method]();
}
```

video ve play tuşu tıklandığında `togglePlay()` fonksiyonu çalıştırılarak video oynatıldı. Her tıklama için video oynatılıyorsa duraklatılma, video duraklatılmışsa oynatılma koşulu eklendi.

```
function updateButton() {
  const icon = this.paused ? "►" : "| |";
  toggle.textContent = icon;
}
```

bir üstteki oynatılma ve duraklatılma koşulu, bu fonksiyonda da icon değişimi için kullanıldı.

```
function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}
```

video süre arttırma veya azaltma tuşları tıklandığında `skip()` fonksiyonu çalıştırılarak, html 'skip' data'sı kadar, videonun şimdiki süresi arttırılır veya azaltılır.

```
function handleRangeUpdate() {
  video[this.name] = this.value;
}
```

kontrol penceresindeki ses ve oynatma hızı tıklandığında veya fare ile kaydırıldığında son değer, video'nun ses ve oynatma hızı değerine eşitlendi.

```
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}
```

`handleProgress()` fonksiyonu, videoda geçen sürenin, videonun toplam süresine oranını anlık olarak stile yansıtmak için kullanılmıştır.

```
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}
```

`scrub()` fonksiyonu, video süresi çubuğunda her hangi bir yere tıklandığında, farenin bulunduğu konumu, oynatma çubuğunun genişliğine bölüp toplam video süresi ile çarparak, farenin bulunduğu konumunda videonun hangi sürede olduğu hesaplar. Bulunan süre videonun şimdiki zamanına eşitlenir.
