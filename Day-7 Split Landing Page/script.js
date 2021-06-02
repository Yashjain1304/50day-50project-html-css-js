const psp = document.querySelector(".psp");
const xbox = document.querySelector(".xbox");
const container = document.querySelector(".container");

psp.addEventListener("mouseenter", () => container.classList.add("hover-psp"));
xbox.addEventListener("mouseenter", () =>
  container.classList.add("hover-xbox")
);
psp.addEventListener("mouseleave", () =>
  container.classList.remove("hover-psp")
);
xbox.addEventListener("mouseleave", () =>
  container.classList.remove("hover-xbox")
);
