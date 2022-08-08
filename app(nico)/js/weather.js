const API_KEY = "f8ba4826c935c02e13e7d67aacaa341c";

// user 위치 확인하기
// get location : success
function onGeoOk(position){
  // console.log(position); user 위치 확인 가능
  const lat = position.coords.latitude; // 위도
  const lon = position.coords.longitude; // 경도
  // https://openweathermap.org/api 사이트에서 정보 불러오기
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    })
}

// get locatioin : error
function onGeoError(){
	alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);


