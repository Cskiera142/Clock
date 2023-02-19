"use strict";

const clockFace = document.getElementById("clockface");
let timeOfDay = "AM";

function showTime() {
  let date = new Date();
  let h = date.getHours(); // 0 - 12
  let m = date.getMinutes(); // 0 - 60
  let s = date.getSeconds(); // 0 - 60

  if (h === 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    timeOfDay = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  clockFace.innerHTML = `${h}:${m}:${s}` + " " + timeOfDay;
  clockFace.textContent = `${h}:${m}:${s}` + " " + timeOfDay;

  setTimeout(showTime, 1000);
}

showTime();
