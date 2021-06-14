const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const annimated_bgs = document.querySelectorAll(".animated-bg");
const annimated_bg_text = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2500);
function getData() {
  header.innerHTML = `
    <img
      src="https://www.windowscentral.com/sites/wpcentral.com/files/styles/large/public/field/image/2020/10/hp-spectre-x360-14-press-1.jpg"
      alt=""
    />`;
  title.innerHTML = `
Lorem ipsum dolor sit amet.
</h3>`;
  excerpt.innerHTML = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, iste.`;
  profile_img.innerHTML = `<img src="https://randomuser.me/api/portraits/men/40.jpg" alt="" />`;

  name.innerHTML = `Chunky Pandey`;
  date.innerHTML = `June 14,2021`;
  annimated_bgs.forEach((bg) => {
    bg.classList.remove("animated-bg");
  });
  annimated_bg_text.forEach((bg) => {
    bg.classList.remove("animated-bg-text");
  });
}
