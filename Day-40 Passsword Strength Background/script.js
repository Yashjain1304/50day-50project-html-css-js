const background = document.getElementById("background");
const password = document.getElementById("password");

password.addEventListener("input", (e) => {
  //   const input = e.target.value;
  //   console.log("input");
  changeBackgroundBlur();
});

function changeBackgroundBlur() {
  //   console.log("cha");
  background.style.filter = `blur(${20 - password.value.length * 2}px)`;
}
