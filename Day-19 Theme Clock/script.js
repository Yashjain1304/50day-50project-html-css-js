const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const timeEl = document.querySelector(".time");
const toggle = document.querySelector(".toggle");
const dateEl = document.querySelector(".date");

const days = [
  "sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "july",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

toggle.addEventListener("click", (e) => {
  const html = document.querySelector("html");
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    e.target.innerHTML = "Dark Mode";
  } else {
    html.classList.add("dark");
    e.target.innerHTML = "Light Mode";
  }
});

function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const date = time.getDate();
  const day = time.getDay();
  const hours = time.getHours();
  const hoursforClock = hours % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  //   var el = document.getElementById(elid);
  //   var st = window.getComputedStyle(secondEl, null);
  //   var tr = st.getPropertyValue("transform");
  //   // console.log(tr, "hiii");
  //   var values = tr.split("(")[1];
  //   values = values.split(")")[0];
  //   values = values.split(",");
  //   var a = values[0];
  //   var b = values[1];
  //   var c = values[2];
  //   var d = values[3];

  //   // arc sin, convert from radians to degrees, round
  //   /** /
  //     var sin = b/scale;
  //     var angle = Math.round(Math.asin(sin) * (180/Math.PI));
  //     /*/
  //   var angle = Math.atan2(b, a) * (180 / Math.PI);
  // //   console.log(angle, "hiii");

  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    hoursforClock,
    0,
    11,
    0,
    360
  )}deg)`;
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    minutes,
    0,
    59,
    0,
    360
  )}deg)`;
  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    seconds,
    0,
    59,
    0,
    360
  )}deg)`;

  timeEl.innerHTML = `${hoursforClock}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`;

  dateEl.innerHTML = `${days[day]},${months[month]}<span class="circle">${date}</span>`;
}
function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
setTime();
setInterval(setTime, 1000);
