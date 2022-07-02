const loginWrap = document.getElementById("login-wrap");
const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");

const wrap = document.getElementById("wrap");
const greeting = document.getElementById("greeting");
const logOut = document.getElementById("log-out");

// loginForm submit
loginForm.addEventListener("submit", onLogin);

function onLogin(event){
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem("username", username);
  loginWrap.classList.add("hidden");
  showGreeting(username);
}

// show greeting
function showGreeting(username) {
  wrap.classList.remove("hidden");
  greeting.innerHTML = `Welcome, ${username}`;
}

// 새로고침 후
const savedUsername = localStorage.getItem("username");

if (savedUsername === null){
  loginWrap.classList.remove("hidden");
} else {
  loginWrap.classList.add("hidden");
  showGreeting(savedUsername);
}

// 로그아웃
logOut.addEventListener("click", onLogout);

function onLogout(){
  loginInput.value = "";
  localStorage.removeItem("username");
  loginWrap.classList.remove("hidden");
  wrap.classList.add("hidden");
}