const textArea = document.getElementById("textarea");
const tagsEl = document.getElementById("tags");
textArea.focus();

textArea.addEventListener("keyup", (e) => {
  createTags(e.target.value);

  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 20);
    randomSelect();
  }
});

function createTags(input) {
  const choice = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());

  //   console.log(choice);
  tagsEl.innerHTML = "";
  choice.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
}

function randomSelect() {
  const times = 30;

  const interval = setInterval(() => {
    const randomtag = pickRandomTag();

    highLighttag(randomtag);

    setTimeout(() => {
      unhightlighttag(randomtag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = pickRandomTag();
      highLighttag(randomTag);
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

function highLighttag(tag) {
  tag.classList.add("highlight");
}

function unhightlighttag(tag) {
  tag.classList.remove("highlight");
}
