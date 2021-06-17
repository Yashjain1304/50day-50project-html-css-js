const container = document.getElementById("container");
const colors = [
  "#e74c3c",
  "#864aed",
  "#349dbd",
  "#e67e22",
  "#2ecc71",
  "#de2c43",
];
const SQUARES = 500;
for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseleave", () => {
    removeColor(square);
  });
  container.appendChild(square);
}

function setColor(element) {
  //   console.log(element);
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = ` 0 0 2px ${color}, 0 0 10px ${color}`;
}
function removeColor(element) {
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = "0 0 2px #000";
}

function getRandomColor() {
  const num = Math.floor(Math.random() * 6);
  return colors[num];
}
