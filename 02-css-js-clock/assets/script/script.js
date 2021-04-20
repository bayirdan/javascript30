const counterSecond = document.querySelector('.counter-second');
const counterMinute = document.querySelector('.counter-minute');
const counterHour = document.querySelector('.counter-hour');


function setDate() {
  const now = new Date();
  
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds * 6) + 90;
  counterSecond.style.transform = `rotate(${secondsDegrees}deg`;

  const minutes = now.getMinutes();
  const minutesDegress = (minutes * 6) + 90;
  counterMinute.style.transform = `rotate(${minutesDegress}deg)`

  const hours = now.getHours();
  const hoursDegress = (hours * 30) + 90;
  counterHour.style.transform = `rotate(${hoursDegress}deg)`

}

setInterval(setDate, 1000);