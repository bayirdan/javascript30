const counterSecond = document.querySelector(".counter-second");
const counterMinute = document.querySelector(".counter-minute");
const counterHour = document.querySelector(".counter-hour");

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = (seconds * 6) + 180;
  if (secondsDegrees !== 180) {
    counterSecond.style.transition = "all .05s cubic-bezier(0, 1.51, 1, 1.3)";
  } else {
    counterSecond.style.transition = "all 0s cubic-bezier(0, 1.51, 1, 1.3)";
  }
  counterSecond.style.transform = `rotate(${secondsDegrees}deg`;

  const minutes = now.getMinutes();
  const minutesDegress = (minutes * 6) + 180;
  if (minutesDegress !== 180) {
    counterMinute.style.transition = "all .05s cubic-bezier(0, 1.51, 1, 1.3)";
  } else {
    counterSecond.style.transition = "all 0s cubic-bezier(0, 1.51, 1, 1.3)";
  }
  counterMinute.style.transform = `rotate(${minutesDegress}deg)`;

  const hours = now.getHours();
  const hoursDegress = (hours * 30) + 180;
  if (hoursDegress !== 180) {
    counterHour.style.transition = "all .05s cubic-bezier(0, 1.51, 1, 1.3)";
  } else {
    counterSecond.style.transition = "all 0s cubic-bezier(0, 1.51, 1, 1.3)";
  }
  counterHour.style.transform = `rotate(${hoursDegress}deg)`;
}

setInterval(setDate, 1000);
