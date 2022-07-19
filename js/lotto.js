/**
 * 1~45까지 숫자 준비
 * 숫자 섞기
 * 공 7개 뽑기, 마지막 공은 보너스
 * 1초마다 공 하나씩 화면에 표시
 */

const lottoStartBtn = document.querySelector("#lotto_start");
const lottoResult = document.querySelector("#lotto_result");
const lottoBonus = document.querySelector("#lotto_bonus");
lottoStartBtn.addEventListener("click", lottoPlay);

let winBalls = [];
let bonusBall = '';
let pickLotto = undefined;

function shuffleNum() {
  // 1부터 45까지의 랜덤 숫자 배열 만들기
  const randomNum = new Set();
  do {
    randomNum.add(Math.ceil(Math.random() * 45));
    console.log(randomNum);
  } while (randomNum.size !== 45)
  const shuffle = Array.from(randomNum);

  // 7개 공 뽑아서 순서대로 정렬
  winBalls = shuffle.slice(0, 6).sort((a, b) => a - b);
  bonusBall = shuffle.splice(6, 1);
}

function lottoPlay() {
  if (lottoStartBtn.innerText === "Start") {
    lottoStartBtn.innerText = "replay"
    shuffleNum()
    lottoStart()
  } else {
    for (let i = 0; i <= pickLotto; i++) {
      clearTimeout(i);
    }
    lottoResult.innerHTML = '';
    lottoBonus.innerHTML = '';
    shuffleNum();
    lottoStart();
  }
}

// 1초마다 공 표시
function lottoStart() {
  for (let i = 0; i < winBalls.length; i++) {
    pickLotto = setTimeout(() => {
      showLotto(winBalls[i], lottoResult);
    }, 500 * (i + 1));
  }
  pickLotto = setTimeout(() => {
    showLotto(bonusBall, lottoBonus)
  }, 3500);
}

function showLotto(number, parent) {
  const ball = document.createElement("span");
  ball.classList.add("ball");
  ball.textContent = number;
  coloring(number, ball);
  parent.appendChild(ball);
}

function coloring(number, ball) {
  (number < 10) ? ball.style.background = '#53BF9D':
    (number < 20) ? ball.style.background = '#F94C66' :
    (number < 30) ? ball.style.background = '#FFC54D' :
    (number < 40) ? ball.style.background = '#BD4291' :
    ball.style.background = '#black';
}