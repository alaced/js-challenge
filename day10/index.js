const range = document.querySelector(".js-range");
const submit = document.querySelector(".js-play");
const guessInput = document.querySelector(".js-guess");
const rangeInfo = document.querySelector(".js-rangeInfo");
const result = document.querySelector(".js-result");

function paintRange() {
  const userRange = range.value;
  rangeInfo.innerText = `Generate a number between 0 and ${userRange}`;
}

function paintResult() {
  const userRange = range.value;
  const randomNumber = Math.floor(Math.random() * userRange) + 1;
  const userNumber = guessInput.value;
  const winOrLost = document.createElement("div");
  winOrLost.classList.add("win-or-lost");
  if (userNumber === "") {
    alert("Please enter your number");
  } else if (parseInt(userRange) < parseInt(userNumber)) {
    result.innerText = `Please enter the number below ${userRange}`;
  } else if (parseInt(guessInput.value) === randomNumber) {
    winOrLost.innerText = `You won!`;
    result.innerHTML = `You chose: ${userNumber}<br/>The machine chose: ${randomNumber}`;
    result.appendChild(winOrLost);
  } else {
    winOrLost.innerText = `You lost!`;
    result.innerHTML = `You chose: ${userNumber}<br/>The machine chose: ${randomNumber}`;
    result.appendChild(winOrLost);
  }
}

function submitHandler(event) {
  event.preventDefault();
  paintResult();
}

function init() {
  range.addEventListener("input", paintRange);
  submit.addEventListener("click", submitHandler);
}

init();
