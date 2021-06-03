const button = document.querySelectorAll(".faq-toggle");

button.forEach((item) => {
  item.addEventListener("click", () => {
    item.parentNode.classList.toggle("active");
  });
});
