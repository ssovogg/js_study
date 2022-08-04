const $year = document.querySelector(".year");
const $month = document.querySelector(".month");
const $dates = document.querySelector(".dates");
const $prevMonth = document.querySelector(".prev-month");
const $nextMonth = document.querySelector(".next-month");
const $today = document.querySelector(".today");
const today = new Date().getDate();
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

renderCalender();
$prevMonth.addEventListener("click", () => {
  month -= 1;
  date.setMonth(month);
  renderCalender();
});
$nextMonth.addEventListener("click", () => {
  month += 1;
  date.setMonth(month);
  renderCalender();
});
$today.addEventListener("click", () => {
  month = new Date().getMonth();
  date.setMonth(month);
  renderCalender();
});


function renderCalender() {
  $year.textContent = year + "년";
  $month.textContent = month + 1 + "월";

  // 오늘 날짜 기준 지난달, 이번달 마지막 날
  const prevLast = new Date(year, month, 0); // 지난달 마지막날 설정: 7월 31일
  const PLDate = prevLast.getDate(); // 지난달 마지막날 : 31
  const PLDay = prevLast.getDay(); // 0 - 일요일
  const thisLast = new Date(year, month + 1, 0); // 이번달 마지막날 설정 : 8월 31일
  const TLDate = thisLast.getDate(); // 31
  const TLDay = thisLast.getDay(); // 3 - 목요일

  // 날짜 배열
  const prevDates = [];
  const nextDates = [];
  const thisDates = [...Array(TLDate + 1).keys()].slice(1);
  /** 이번달 날짜 배열 생성
   * 1. TLDate + 1 길이의 빈 배열 생성
   * 2. keys() => 0부터 n-1까지의 Array Iterator 생성
   * 3. slice(1) => 제일 앞에 있는 0 없앰
   */

  // 지난 달 날짜 배열 생성
  if (PLDay !== 6) {
    // 지난달 마지막날이 토요일이 아니면
    for (let i = 0; i < PLDay + 1; i++) {
      prevDates.unshift(PLDate - i);
    }
  }
  // 다음 달 날짜 배열 생성
  for (let i = 1; i < 7 - TLDay; i++) {
    nextDates.push(i);
  }

  // DOM 구성
  makeDateList(prevDates, "otherDate");
  makeDateList(nextDates, "otherDate");
  makeDateList(thisDates, "date");
  function makeDateList(array, className) {
    array.forEach((date, i) => {
      array[i] = `<li class=${className}>${date}</li>`;
    });
  }
  const dates = prevDates.concat(thisDates, nextDates);
  $dates.innerHTML = dates.join("");

  const $allDates = $dates.querySelectorAll('li')
  for(let i=0; i<$allDates.length; i++){
    // 조건추가 : 2022년 8월이고,
    if($allDates[i].innerText == today){
      $allDates[i].classList.add('its-today')
    }
  }
}
