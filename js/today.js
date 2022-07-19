// https://devinus.tistory.com/27?category=983141

const hourHand = document.querySelector('.hour_hand');
const minHand = document.querySelector('.min_hand');
const secondHand = document.querySelector('.second_hand');

function setClock() {
  const now = new Date();
  // 초침 표시
  const seconds = now.getSeconds();
  const secondsDeg = getDegree(seconds);
  setDegree(secondHand, secondsDeg);
  // 분침 표시
  const mins = now.getMinutes();
  const minsDeg = getDegree(mins);
  setDegree(minHand, minsDeg);
  // 시침 표시
  const hours = now.getHours();
  const hoursDeg = getDegree(hours);
  setDegree(hourHand, hoursDeg);
}

setClock();
setInterval(setClock, 1000);

function getDegree(time) {
  return ((time / 60) * 360) + 90;
}

function setDegree(hand, deg){
  hand.style.transform = `rotate(${deg}deg)`;
}