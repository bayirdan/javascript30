const message = new SpeechSynthesisUtterance();
let voices = [];

const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"],[name="text"]');
const speakBtn = document.querySelector("#speak");
const stopBtn = document.querySelector("#stop");

message.text = document.querySelector('[name="text"]').value;

function populateVoices() {
  voices = this.getVoices();
  voicesDropdown.innerHTML = voices
    .filter((voice) => voice.lang.includes("en"))
    .map(
      (voice) =>
        `<option value="${voice.name}">${voice.name} - (${voice.lang})</option>`
    )
    .join("");
}

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
  console.log(this);
  message[this.name] = this.value;
  toggle();
}

speechSynthesis.addEventListener("voiceschanged", populateVoices);
voicesDropdown.addEventListener("change", setVoice);
options.forEach((option) => option.addEventListener("change", setOption));
speakBtn.addEventListener("click", toggle);
stopBtn.addEventListener("click", () => toggle(false));
