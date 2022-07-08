// display
const itemBtns = document.querySelectorAll("#item li input");
// status
const nowTime = document.getElementById("now")
const totalTime = document.getElementById("total");
const showItem = document.getElementById("show-item");
const showTime = document.getElementById("show-time");
const showHour = showTime.querySelector("span:first-child");
const showMinute = showTime.querySelector("span:last-child");
// setting
const timeSetForm = document.getElementById("time-set");
const hourBtns = timeSetForm.querySelectorAll(".hour");
const minutBtns = timeSetForm.querySelectorAll(".minute");
const resetBtn = document.getElementById("reset");
const addBtn = document.getElementById("add");
const okBtn = document.getElementById("ok");
let totalH = 0;
let totalM = 0;
// print
const print = document.getElementById("print")
const routineList = [];
// print routine !!
const printList = document.getElementById("print-list");
const printTotalTime = document.querySelector(".total-time span:last-child")
const save = printList.querySelector("button");
const printRoutineList = document.getElementById("routine-list");

for (const itemBtn of itemBtns) {
  itemBtn.addEventListener("click", displayShowItem);
}
for (const hourBtn of hourBtns) {
  hourBtn.addEventListener("click", selectHour);
}
for (const minutBtn of minutBtns) {
  minutBtn.addEventListener("click", selectMinute);
}
resetBtn.addEventListener("click", resetTimeSet);
addBtn.addEventListener("click", showTimeSet);
okBtn.addEventListener("click", selectTimeSet);
print.addEventListener("click", printRoutine);
save.addEventListener("click", saveList);

function displayShowItem(event) {
  let selected = event.target.value;
  showItem.innerText = selected;
}

function selectHour(event) {
  let selected = event.target.value;
  showHour.innerText = selected.padStart(2, "0");
}

function selectMinute(event) {
  let selected = event.target.value;
  showMinute.innerText = selected.padStart(2, "0");
}

function resetTimeSet() {
  showHour.innerText = "00";
  showMinute.innerText = "00";
  showItem.innerText = "선택하세요";
}

function showTimeSet() {
  let todo = showItem.innerText;
  let h = Number(showHour.innerText);
  let m = Number(showMinute.innerText);
  let savedRoutine = {
    "todo": todo,
    "hour": h,
    "minute": m
  }
  if (todo === "선택하세요") {
    resetTimeSet();
    return alert("할 일을 선택해주세요");
  }
  if (h === 0 && m === 0) {
    return alert("시간을 추가해주세요");
  } else {
    totalH += savedRoutine.hour;
    totalM += savedRoutine.minute;
    routineList.push(savedRoutine);
    addItem(savedRoutine)
    console.log(routineList);
    calcTime()
    totalTime.innerText = String(totalH).padStart(2, "0") + ":" + String(totalM).padStart(2, "0");
  }
  resetTimeSet()
}

function addItem(savedRoutine) {
  const li = document.createElement("li");
  const strong = document.createElement("strong");
  const span = document.createElement("span");
  li.appendChild(strong);
  li.appendChild(span);
  printRoutineList.appendChild(li);
  strong.innerText = savedRoutine.todo;
  span.innerText = String(savedRoutine.hour).padStart(2, "0") + ":" + String(savedRoutine.minute).padStart(2, "0");
}

function calcTime() {
  let n = Math.floor(totalM / 60);
  if (totalM > 60) {
    totalH = totalH + n;
    totalM = totalM % 60;
  }
}

function selectTimeSet() {
  calcTime()
  showItem.innerText = "PRINT하세요"
  printTotalTime.innerText = String(totalH).padStart(2, "0") + ":" + String(totalM).padStart(2, "0");
}

function printRoutine() {
  printList.classList.remove("hidden");
}

function saveList() {
  printList.classList.add("hidden");
}

function clock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, "0");
  const m = String(now.getMinutes()).padStart(2, "0");
  const s = String(now.getSeconds()).padStart(2, "0");
  nowTime.innerText = `${h}:${m}:${s}`;
}

clock();
setInterval(clock, 1000);