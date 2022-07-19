// https://lpla.tistory.com/148
// https://minimal-dev.tistory.com/16

const output = document.querySelector("#output");
const result = document.querySelector("#result");
const clear = document.querySelector(".clear");

let numOne = '';
let symbol = '';
let numTwo = '';

const numbers = Array.from(document.querySelectorAll(".num"));
numbers.map(number => {
  number.addEventListener("click", (event) => {
    let num = event.target.value;
    if (symbol = '') {
      numOne += num;
      output.value = numOne;
    } else {
      numTwo += num
      output.value = numTwo;
    };
    console.log(numTwo, numOne, num);
  });
})

const operators = Array.from(document.querySelectorAll(".operator"));
operators.map(operator => {
  operator.addEventListener("click", (event) => {
    symbol = event.target.value;
    if (numOne = ''){
      alert('숫자를 입력하세요');
    } 
  });
})

clear.addEventListener("click", () => {
  output.value = '';
  numOne = '';
  symbol = '';
  numTwo = '';
})

result.addEventListener("click", ()=>{
  if (symbol == '+') {
    output.value = parseInt(numOne) + parseInt(numTwo);
    console.log(parseInt(numOne));
    console.log(parseInt(numTwo));
    console.log(output.value);
  }
})