const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;
  btn.addEventListener("click", () => {
    stopPrevious();
    document.getElementById(sound).play();
  });
  document.getElementById("buttons").appendChild(btn);
});
const stopPrevious = () => {
  sounds.forEach((sound) => {
    const s = document.getElementById(sound);
    s.pause();
    s.currentTime = 0;
  });
};
