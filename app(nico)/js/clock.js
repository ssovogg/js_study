const clock = document.querySelector("h2#clock");

// 시간 보여주기
function getClock(){
	const date = new Date();
  const hours = String(date.getHours()).padStart(2,"0");
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const second = String(date.getSeconds()).padStart(2,"0");
  clock.innerText = `${hours}:${minutes}:${second}`;
}

// 1초마다 시간 갱신
getClock();
setInterval(getClock, 1000);