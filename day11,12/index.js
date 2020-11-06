const btn = document.querySelectorAll(".btn");
const input = document.querySelector(".js-input");

let opr = null;
let current = 0;

const oprs = {
  "+": " + ",
  "−": " - ",
  "÷": " / ",
  "×": " * ",
};

btn.forEach((num) =>
  num.addEventListener("click", function (event) {
    const tarElement = event.target.innerText;
    const number = parseInt(tarElement);
    //입력값이 숫자가 아닌 경우, 연산자의 경우
    if (isNaN(number)) {
      // clear 경우
      if (tarElement === "C") {
        opr = null;
        current = 0;
        input.innerText = 0;
        //연산자 중 clear이 아닌 경우
      } else {
        //연산자 중 clear이 아닌 경우 중 =을 제외한 경우
        if (opr && opr !== "=") {
          const calculate = current + oprs[opr] + input.innerText;
          input.innerText = eval(calculate);
        }
        current = parseInt(input.innerText);
        opr = tarElement;
      }
      //입력값이 숫자인 경우
    } else {
      if (current === parseInt(input.innerText)) {
        input.innerText = number;
        //연이어 입력한 숫자를 하나의 스트링으로 ("5"+=6 = "56")
      } else {
        input.innerText += number;
      }
    }
  })
);
