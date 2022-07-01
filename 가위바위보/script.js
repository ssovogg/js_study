/*
<시작>
<대기화면>
1. 0.05초마다 가위바위보 값을 바꾼다
2. 값에 따라 그림을 바꾼다.
<대기>

<가위바위보 버튼 클릭>
1. 돌아가는 그림을 멈춘다.
2. 점수를 계산한다.
3. 점수를 표시한다.
4. 1초 후 그림을 돌린다.
<대기>
*/


const $computer = document.getElementById("computer")
const $score = document.getElementById("score")
const $rock = document.getElementById("rock")
const $scissors = document.getElementById("scissors")
const $paper = document.getElementById("computer")
const IMG_URL = './rsp.png';
$computer.style.background = `url(${IMG_URL} 0 0`; // 가위
$computer.style.backgroundSize = 'auto 200px'; 

// 배경이미지 위치
const rspX = {
  scissors: '0';
  rock: '-220ox';
  papper: '-440px'
}