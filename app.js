const days_el = document.getElementById("days");
const hours_el = document.getElementById("hours");
const min_el = document.getElementById("min");
const seconds_el = document.getElementById("seconds");

const newYears = "1 Jan 2022";

const countdown = () => {
  const newYearDate = new Date(newYears);
  const currentDate = new Date();
  const totalSeconds = (newYearDate - currentDate) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;
  days_el.innerText = formatTime(days);
  hours_el.innerText = formatTime(hours);
  min_el.innerText = formatTime(minutes);
  seconds_el.innerText = formatTime(seconds);
};
const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};
countdown();
setInterval(countdown, 1000);
