let tar = "";
document.querySelector(".container").addEventListener("click", (e) => {
  if (tar) tar.classList.remove("active");

  tar = e.target;
  tar.classList.add("active");
});
