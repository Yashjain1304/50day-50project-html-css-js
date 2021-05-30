const loadtext = document.querySelector(".loading");
const bg = document.querySelector(".bg");

let load = 0;

let interval = setInterval(blurring, 50);

function blurring() {
  load++;
  if (load > 99) {
    clearInterval(interval);
  }
  loadtext.innerText = `${load}%`;
  loadtext.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 50, 0)}px)`;
}

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
