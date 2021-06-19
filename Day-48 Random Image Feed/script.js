const container = document.querySelector(".container");
const API = "https://source.unsplash.com/random/";
const rows = 10;

for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement("img");
  img.src = `${API}${getRandomSize()}`;
  container.appendChild(img);
}
function getRandomSize() {
  return `${getRandom()}x${getRandom()}`;
}
function getRandom() {
  return Math.floor(Math.random() * 10) + 300;
}
