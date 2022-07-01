/*

<시작>
1. 1~45까지의 숫자 준비
2. 숫자 섞기
3. 공 7개 뽑기. 마지막 공은 보너스 공
4. 1초마다 공을 하나씩 화면에 표시
<끝>

 */
// 1. 1~45까지의 후보 숫자 준비
const candidate = Array(45).fill().map((num, i) => i + 1);
// 2. 숫자 섞기
const shuffle = [];
while (candidate.length > 0) { // i=46 -> 0
  // 무작위 인덱스 뽑기 (후보 숫자 배열 길이 중 1개씩)
  const randomIndex = Math.floor(Math.random() * candidate.length);
  // 뽑은 인덱스에 해당하는 후보숫자 배열에서 1개씩 꺼내오기
  const randomNum = candidate.splice(randomIndex, 1);
  // 셔플 배열에 집어넣기
  shuffle.push(randomNum[0]);
}


// 3. 공 7개 뽑아서 순서대로 정렬하기
const winBalls = shuffle.slice(0, 6).sort((a, b) => a - b);
const bonusBall = shuffle[6]


// 4. 1초마다 공을 하나씩 화면에 표시
const $start = document.getElementById("start");
const $replay = document.getElementById("replay");

const $result = document.getElementById("result");
const $bonus = document.getElementById("bonus");

$start.addEventListener("click", lottoStart);
$replay.addEventListener("click", reStart);

function lottoStart(){
  $start.style.display = "none"
  $replay.style.backgroundColor = "#576F72"
  $replay.style.display = "block"
  // 아래의 과정을 6번 반복
  for (let i = 0; i < winBalls.length; i++) {
    // 'i+1'초마다 공 하나씩 화면에 표시
    setTimeout(() => {
      lotto(winBalls[i], $result);
    }, 500 * (i + 1));
  }
  // 보너스 공 뽑기
  setTimeout(() => {
    lotto(bonusBall, $bonus);
  }, 3500);
}

function reStart(){
  history.go(0);
}

// 화면에 공 표시하는 함수
function lotto(number, $parent) {
  const $ball = document.createElement("div"); // div 태그 만들기
  $ball.classList.add("ball") // div class="ball"
  $ball.textContent = number; // 랜덤 숫자 표시
  coloring(number, $ball);
  $parent.appendChild($ball); // div > div
}

// 공 숫자별 색깔 변경
function coloring(number, $ball) {
  if (number < 10) {
    $ball.style.backgroundColor = '#53BF9D';
  } else if (number < 20) {
    $ball.style.backgroundColor = '#F94C66';
  } else if (number < 30) {
    $ball.style.backgroundColor = '#FFC54D';
  } else if (number < 40) {
    $ball.style.backgroundColor = '#BD4291';
  } else {
    $ball.style.backgroundColor = 'black';
    $ball.style.color = 'white';
  }
}