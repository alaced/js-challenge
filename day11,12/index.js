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

//Solution//
// const inputValue = document.querySelector(".input-value");
// const clearBtn = document.querySelector(".btn-clear");
// const buttons = document.querySelectorAll(".btn");

// let firstNumber = "";
// let secondNumber = "";
// let inputOperator = "";

// function handleClear() {
//   inputValue.innerText = "";
//   firstNumber = "";
//   secondNumber = "";
//   inputOperator = "";
// }

// function handleCalc() {
//   const firstValue = parseInt(firstNumber, 10);
//   const secondValue = parseInt(secondNumber, 10);
//   let result = 0;
//   switch (inputOperator) {
//     case "+":
//       result = firstValue + secondValue;
//       break;
//     case "-":
//       result = firstValue - secondValue;
//       break;
//     case "*":
//       result = firstValue * secondValue;
//       break;
//     case "/":
//       result = firstValue / secondValue;
//       break;
//     default:
//       return;
//   }
//   handleClear();
//   inputValue.innerText = result;
//   return String(result);
// }

// function clickOperator(operator) {
//   const number = inputValue.innerText;
//   if (!number) {
//     return;
//   } else {
//     if (firstNumber && secondNumber && inputOperator) {
//       firstNumber = handleCalc();
//       inputOperator = operator;
//     } else {
//       if (!firstNumber) {
//         firstNumber = secondNumber;
//         secondNumber = "";
//         inputOperator = operator;
//       } else {
//         secondNumber = "";
//         inputOperator = operator;
//       }
//     }
//   }
// }

// function clickNumber(number) {
//   const input = inputValue.innerText;

//   if (!input) {
//     inputValue.innerText = number;
//     secondNumber = number;
//   } else {
//     if (inputOperator) {
//       if (!secondNumber) {
//         inputValue.innerText = number;
//         secondNumber = number;
//       } else {
//         inputValue.innerText += number;
//         secondNumber += number;
//       }
//     } else {
//       if (input === "0") {
//         inputValue.innerText = number;
//         secondNumber = number;
//       } else {
//         inputValue.innerText += number;
//         secondNumber += number;
//       }
//     }
//   }
// }

// function init() {
//   buttons.forEach((button) => {
//     button.addEventListener("click", () => {
//       switch (button.classList[1]) {
//         case "btn-number":
//           const number = button.innerText;
//           clickNumber(number);
//           break;
//         case "btn-operator":
//           const operator = button.innerText;
//           clickOperator(operator);
//           break;
//         case "btn-equals":
//           if (secondNumber) {
//             firstNumber = handleCalc();
//           }
//           break;
//         case "btn-clear":
//           handleClear();
//           break;
//         default:
//           break;
//       }
//     });
//   });
// }

// init();
