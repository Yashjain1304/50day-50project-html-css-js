const left = document.getElementById("left");
const right = document.getElementById("right");
const imgs = document.getElementById("imgs");

const img = document.querySelectorAll("#imgs img");
// console.log(img.length);
let counter = 0;

let interval = setInterval(run, 2000);

function run() {
  counter++;
  changeImage();
}

function changeImage() {
  //   console.log(counter);
  if (counter > img.length - 1) {
    counter = 0;
  } else if (counter < 0) {
    counter = img.length - 1;
  }
  imgs.style.transform = `translateX(${-counter * 500}px)`;
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 2000);
}

right.addEventListener("click", () => {
  counter++;
  changeImage();
  resetInterval();
});

left.addEventListener("click", () => {
  counter--;
  changeImage();
  resetInterval();
});
