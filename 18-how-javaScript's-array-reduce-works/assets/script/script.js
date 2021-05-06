const timeList = [...document.querySelectorAll("[data-time]")];

const totalSeconds = timeList
  .map((item) => item.dataset.time)
  .map((item) => {
    const [minutes, seconds] = item.split(":").map(parseFloat);
    return minutes * 60 + seconds;
  })
  .reduce((total, i) => total + i);

let secondsRemaining = totalSeconds;

const hours = Math.floor(secondsRemaining / 3600);
secondsRemaining %= 3600;

const minutes = Math.floor(secondsRemaining / 60);
secondsRemaining %= 60;

document.querySelector(".total").innerHTML = `Total Seconds: ${totalSeconds}
 <p> ${hours} hour, ${minutes} minutes, ${secondsRemaining} seconds </p>`;
