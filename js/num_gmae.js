const numGameForm = document.querySelector(".num_game__form");
const numGameInput = numGameForm.querySelector("input");
numGameForm.addEventListener("submit", numGameStart);
const userInputHistory = [];
const numGameChance = document.querySelector(".chances_text");
const numGameError = document.querySelector(".chances_error");
let chances = 10;
let count = 0;
const numGameLogs = document.querySelector(".logs");

// 랜덤 숫자 4개 생성
function numGameAnswer(){
  const randomNum = new Set();
  do {
    randomNum.add(Math.ceil(Math.random()*9));
  } while (randomNum.size !== 4);
  console.log(randomNum);
}
numGameAnswer();

function numGameStart(event) {
  event.preventDefault();
  const userInput = numGameInput.value;
  userInputHistory.push(userInput);
  numGameError.innerText = '';
  checkInput(userInput);
  count += 1;
  numGameInput.value = '';
  numGameChance.innerText = `${chances - count}번`;
  numGameLogs.innerHTML += `
    <li><strong>${userInput}</strong></li>
  `
}

// 입력값 검증
function checkInput(input) {
  if(input.length !== 4){
    return numGameError.innerText = "4자리 숫자를 입력하세요."
  }
  if(new Set(input).size !== 4){
    return numGameError.innerText = "중복되지 않게 입력해주세요."
  }
  if(userInputHistory.includes(input)){
    return numGameError.innerText = "이미 시도한 값입니다."
  }
  return true;
}