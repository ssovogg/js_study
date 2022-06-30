/*
*** 이벤트를 기준으로 순서도를 끊자 ***

<시작>
1. 숫자(우항)를 저장할 변수 생성 = numA
2. 연산자를 저장할 변수 생성 = operate
3. 숫자(좌항)를 저장할 변수 생성 = numB
<대기>

<숫자 버튼 클릭> ->숫자를 변수에 저장
1. 연산자 변수가 존재하는가?
  no -> 숫자를 numA 문자열로 추가
  yes -> 숫자를 numB 문자열로 추가
<대기>

<연산자 버튼 클릭> -> 연산자를 변수에 저장
1. numA가 존재하는가?
  no -> alert('숫자를 입력하세요')
  yes -> 연산자를 변수에 저장
<대기>

< = 버튼 클릭 >
1. numB가 존재하는가?
  no -> alert('숫자를 입력하세요')
  yes -> 
    1. 숫자(우항)과 숫자(2)에 연산자를 적용해 계산한다.
    2. 계산 결과를 화면에 출력한다.
<끝>

*/


let numA = '';
let numB = '';
let operate = '';
const $operator = document.querySelector("#operator");
const $result = document.querySelector("#result");

document.querySelector("#num-1").addEventListener('click', () => {});
document.querySelector("#num-2").addEventListener('click', () => {});
document.querySelector("#num-3").addEventListener('click', () => {});
document.querySelector("#num-4").addEventListener('click', () => {});
document.querySelector("#num-5").addEventListener('click', () => {});
document.querySelector("#num-6").addEventListener('click', () => {});
document.querySelector("#num-7").addEventListener('click', () => {});
document.querySelector("#num-8").addEventListener('click', () => {});
document.querySelector("#num-9").addEventListener('click', () => {});
document.querySelector("#num-0").addEventListener('click', () => {});

document.querySelector("#plus").addEventListener('click', () => {});
document.querySelector("#minus").addEventListener('click', () => {});
document.querySelector("#divide").addEventListener('click', () => {});
document.querySelector("#multiply").addEventListener('click', () => {});
document.querySelector("#calculate").addEventListener('click', () => {});
document.querySelector("#clear").addEventListener('click', () => {});

const func = () => {
  return () => {
    console.log("hello");
  };
};

const innerFunc = func();
