# 23- Text to Speech

view demos [here](https://bayirdan.github.io/javascript30/23-text-to-speech/index.html)

---

projenin özeti: Web Speech API'si kullanılarak, yazıyı sese çevirmek. Kullanılan ana yapı `SpeechSynthesisUtterance`

```
const message = new SpeechSynthesisUtterance();
```

`SpeechSynthesisUtterance` içerisindeki veriler message değişkenine aktarıldı.

```
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"],[name="text"]');
const speakBtn = document.querySelector("#speak");
const stopBtn = document.querySelector("#stop");
message.text = document.querySelector('[name="text"]').value;
```

input, button ve textarea html elementlerine ulaşıldı, textarea'da bulunan text, sese çevirmek için `SpeechSynthesisUtterance` API'sinin text'ine eşitlendi.

```
speechSynthesis.addEventListener("voiceschanged", populateVoices);
voicesDropdown.addEventListener("change", setVoice);
options.forEach((option) => option.addEventListener("change", setOption));
speakBtn.addEventListener("click", toggle);
stopBtn.addEventListener("click", () => toggle(false));
```

input, dropdown ve button html elementlerinin her birine eventListener eklendi.

```
function populateVoices() {
  voices = this.getVoices();
  voicesDropdown.innerHTML = voices
    .map(
      (voice) =>
        `<option value="${voice.name}">${voice.name} - (${voice.lang})</option>`
    )
    .join("");
}
```

API'deki seslendirmeler voices[] array'ine eşitlendi. `array.map()` ile her bir seslendirme, isim ve dil olarak `<option>` html tag'inin içerisine eklenerek yeni bir array oluşturuldu. Oluşturulan array `join()` ile string bir ifadeye çevrildi ve `innerHTML` e eşitlenerek, string olan bütün `<option>` tag'leri dropdown'a eklenmiş oldu.

```
function setVoice() {
  message.voice = voices.find((voice) => voice.name === this.value);
  toggle();
}

function toggle(startOver = true) {
  speechSynthesis.cancel();
  if (startOver) {
    speechSynthesis.speak(message);
  }
}

function setOption() {
  message[this.name] = this.value;
  toggle();
}
```

input, dropdown ve start button tetiklemelerinde `toggle()` fonksiyonu çalıştırılarak seslendirme başlatıldı, stop buttonu tetiklendiğinde ise default olarak true olan fonksiyona, false parametresi gönderildi ve seslendirme iptal edildi.
