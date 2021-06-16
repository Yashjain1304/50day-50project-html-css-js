const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipBoardEl = document.getElementById("clipboard");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  num: getRandomNumber,
  sym: getRandomSymbol,
};

// copy to clip board method
clipBoardEl.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const password = resultEl.innerText;
  if (!password) {
    return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Password copied to clipboard!");
});

generateEl.addEventListener("click", () => {
  const length = +lengthEl.value; //+ sign to convert string into number
  //   console.log(length);
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasSymbols = symbolsEl.checked;
  const hasNumbers = numbersEl.checked;

  resultEl.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumbers,
    hasSymbols,
    length
  );
});

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 33);
}

function generatePassword(lower, upper, num, sym, len) {
  let generatePassword = "";
  const typesCount = lower + upper + num + sym;
  //   console.log(typesCount);
  const typesArr = [{ lower }, { upper }, { num }, { sym }].filter((item) => {
    // console.log(item);
    // console.log(Object.values(item)[0]);
    return Object.values(item)[0];
  });
  //   console.log(typesArr);

  if (typesCount === 0) {
    return "";
  }

  for (let i = 0; i < len; i += typesCount) {
    // console.log("inside loop");
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      generatePassword += randomFunc[funcName]();
    });
  }
  const finalPassword = generatePassword.slice(0, len);
  console.log(finalPassword);
  return finalPassword;
}
