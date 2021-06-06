const buttons = document.querySelectorAll(".ripple");
buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const x = e.clientX;
    const y = e.clientY;
    const buttonTop = e.target.offsetTop;
    const buttonleft = e.target.offsetLeft;

    // console.log(e, x, y);
    const YInside = y - buttonTop;
    const XInside = x - buttonleft;

    const circle = document.createElement("span");
    circle.classList.add("circle");

    circle.style.top = YInside + "px";
    circle.style.left = XInside + "px";

    this.appendChild(circle);

    setTimeout(() => circle.remove(), 500);
  });
});
