const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const messages = [
  "Message One",
  "Message Two",
  "Message Three",
  "Message Four",
  "Message Five",
  "Message Six",
  "This is invalid data",
];
const type = ["info", "success", "error"];
button.addEventListener("click", () => createNotification());

function createNotification(message = null, type = null) {
  const notify = document.createElement("div");
  notify.classList.add("toast");
  notify.classList.add(type ? type : getRandomType());
  notify.innerText = message ? message : getRandomMessage();
  toasts.appendChild(notify);
  setTimeout(() => {
    notify.remove();
  }, 3000);
}
function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}
function getRandomType() {
  return type[Math.floor(Math.random() * type.length)];
}
