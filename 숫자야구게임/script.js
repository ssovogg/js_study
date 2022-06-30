/*

<시작>
1~9 사이 숫자 네개를 무작위로 뽑는다.(중복 불가능)
  1. 1~9 사이의 무작위 숫자 생성 (Math.random() * 9 + 1)
  2. 생성된 숫자를 정수화 ( Math.floor(Math.random() * 9 + 1)))
  3. 생성된 숫자가 기존의 숫자와 동일하면 다시 숫자 생성
  for()
<대기>

<답을 제출한다.
받아온 값을 저장한다.
-> 입력값 검증>
1. 답이 형식에 맞는가?
  no -> alert('error'); <대기>
  yes -> 2
2. 홈런인가?
  yes -> alert('홈런!'); <끝>
  no -> 3
3. 10번째 시도인가?
  yes -> alert('you loose'); <끝>
  no -> 4
4. 결과 표시 + 시도횟수 1 추가
<대기>

*/

// chances
const $chances = document.querySelector("#chances")
// input
const $form = document.querySelector("#form");
const $input = document.querySelector("#input");
const $button = document.querySelector("#form button");
// output
const $logs = document.querySelector("#logs");

// -- 랜덤 숫자 생성 --
// 1~9 까지의 숫자 생성
const numbers = [];
for (let n = 1; n < 10; n++) {
  numbers.push(n);
}
// 숫자 4개 뽑아서 변수 할당
const answer = [];
for (let n = 0; n < 4; n++) {
  const index = Math.floor(Math.random() * numbers.length); // 배열 길이에 따라 인덱스 번호 생성
  answer.push(numbers[index]);
  numbers.splice(index, 1); // 뽑은 숫자는 numbers 배열에서 제거
}
console.log(answer);

// -- 입력값 검증 --

const tries = [];

function checkInput(input) {
  // 1. 답이 형식에 맞는가?(4자리 숫자인가?)
  // 4자리 숫자인가?
  if (input.length !== 4) {
    return alert('4자리 숫자를 입력해주세요.')
  }
  // 중복된 숫자가 없는가?
  if (new Set(input).size !== 4){
    return alert('중복되지 않게 입력해주세요.')
  }
  // 이미 시도한 값이 아닌가?
  if (tries.includes(input)){
    return alert('이미 시도한 값입니다.');
  }
  
  return true;
}

$form.addEventListener('submit', (event) => {
  event.preventDefault();
  const userInput = $input.value; // 인풋값 저장 (문자열)
  $input.value = ''; // 인풋 창 초기화
  console.log(userInput);
  const valid = checkInput(userInput); // 저장한 인풋값의 유효성 검사
  tries.push(userInput); // 시도한 값 저장(중복 입력 방지)
  $chances.innerText = 10 - tries.length; // 남은 기회 수정
  console.log(tries);
  // 홈런인가?
  if(answer.join('') === userInput){
    alert(`홈런! 정답은 ${answer.join('')}`);
    return;
  }
  // 시도 횟수 초과
  if(tries.length >= 9){
    $logs.textContent = `패배! 정답은 ${answer.join('')}`;
    // $button.disabled = false;
    return;
  }
  // 몇 스트라이크, 몇 볼인가?
  let strike = 0;
  let ball = 0;
  for (let i=0; i<answer.length; i++){
    // answer 배열의 i번째 글자가 userInput 배열에 있지 않으면 -1가 반환된다.
    const index = userInput.indexOf(answer[i]);
    if (index > -1){ // 일치하는 숫자를 발견한다면,
      if (index === i){ // 순서도 같음
        strike += 1; 
      } else { // 숫자만 같음
        ball += 1;
      }
    }
  }
  $logs.append(`${userInput} : ${strike}스트라이크, ${ball}볼`, document.createElement('br'));
})