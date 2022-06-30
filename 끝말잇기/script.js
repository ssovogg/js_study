/*
let arr = [];
for(i=1; i<=999; i++){
  if(i%2 == 1) continue;
  arr.push(i);
};

let count = 0;
for(let i=1; i<=999; i++){
  if(i%2 == 0) count++; 
}

console.log(`짝수의 갯수는 ${arr.length}개 입니다.`);
console.log(`짝수의 갯수는 ${count}개 입니다.`);
*/

/*
<시작>
1. 참가자 수 선택 
  -> 유효성 검사 : 숫자인지 아닌지
  -> 참가자 수 재확인
      yes -> 2
      no -> 1
2. 참가자 순서 지정
+ 제시어를 저장할 변수를 만든다.
+ 입력한 단어를 저장할 변수를 만든다.
<대기>

<입력 버튼 클릭>  
1. 제시어가 비어있거나, 입력한 단어가 올바른가?
  yes
    1. 입력된 단어가 제시어가 된다. -> 화면에 제시어 표시
    2. 다음 사람에게 순서를 넘긴다
      1) 현재 순서를 파악한다
      2) 현재 순서에 1을 더한 값이 참가자수(playerNum)보다 큰가?
        -> yes : 다음 순서를 1로
        -> no : 다음 순서를 현재 순서 +1로
    3. 입력창을 비우고 커서를 둔다.
    <대기>
  no
    yes -> 1-1
    no -> 틀렸다고 표시 -> 1-3 -> <끝>

<단어 입력> -> 입력한 단어 저장

*/

// 1. 참가자 수 선택
const playerNum = Number(prompt('몇 명이 참가하나요?'));

const $word = document.querySelector("#word");
const $input = document.querySelector("input");
const $button = document.querySelector("button");
const $order = document.querySelector("#order");

let word; // 제시어
let newWord; // 현재 단어(입력된 단어)

$input.addEventListener('input', onInput);
$button.addEventListener('click', onClickButton);

// <단어 입력(input event)>
function onInput(event) {
  newWord = event.target.value;
}

// <입력 버튼 클릭>
function onClickButton() {
  // 제시어가 비어있는가? or 입력된 단어가 올바른가?
  if (!word || word[word.length - 1] === newWord[0]) {
    //yes
    word = newWord; // 입력한 단어가 제시어가 된다.
    $word.textContent = word; // 화면에 제시어 표시
    onOrder();
    $input.value = '';
    $input.focus();
  } else {
    // no 
    alert('올바르지 않은 단어입니다.');
    $input.value = '';
    $input.focus();
  }
};

// <순서 넘기기>
function onOrder() {
  const order = Number($order.textContent);
  if (order + 1 > playerNum) {
    $order.textContent = 1;
  } else {
    $order.textContent = order + 1;
  }
}