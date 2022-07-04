const today = document.getElementById("today");
const day = document.getElementById("day");
const clock = document.getElementById("clock");
const dayKorean = ["일", "월", "화", "수", "목", "금", "토"]

getToday();
setInterval(getToday, 1000);

function getToday(){
  const date = new Date();
  const years = date.getFullYear();
  const month = date.getMonth();
  const datt = date.getDate();
  const dayy = dayKorean[Number(date.getDate())];
  const hours = String(date.getHours()).padStart(2,"0");
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const second = String(date.getSeconds()).padStart(2,"0");
  day.innerText = `${years}년 ${month}월 ${datt}일 ${dayy}요일`
  clock.innerText = `${hours}:${minutes}:${second}`
}