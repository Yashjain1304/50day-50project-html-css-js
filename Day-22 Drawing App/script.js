const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const clearBtn = document.getElementById("clear");
const colorChoice = document.getElementById("color");
const sizeEl = document.querySelector("#size");
let size = 5;
let color = "black";
let x;
let y;
let isPressed = false;

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;

  x = e.offsetX;
  y = e.offsetY;
//   console.log(x, y, isPressed);
});

canvas.addEventListener("mouseup", (e) => {
  isPressed = false;

  x = undefined;
  y = undefined;
//   console.log(x, y, isPressed);
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    // console.log(x2, y2);

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});
function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2, true);
  ctx.fillStyle = color;
  ctx.fill();
}
function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}
// drawCircle(100, 200);
// drawLine(100, 100, 100, 500);
increaseBtn.addEventListener("click", () => {
  size += 2;
  if (size > 50) {
    size = 50;
  }

  updateSizeOnScreen();
});

function updateSizeOnScreen() {
  sizeEl.innerText = size;
}

decreaseBtn.addEventListener("click", () => {
  size -= 2;
  if (size < 2) {
    size = 2;
  }
  updateSizeOnScreen();
});

colorChoice.addEventListener("change", (e) => {
  color = e.target.value;
});

clearBtn.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
