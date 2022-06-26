// div#login-form의 input, button 찾기
const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
//               = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// 유효성 검사 : username이 비어있거나 길면 안됨(html 기본 기능 활용하기)
// #login-form을 submit 했을 때 
function onLoginSubmit(event) {
  // submit event의 기본동작(새로고침) 막기
  event.preventDefault();

  // remove login-form
  loginForm.classList.add(HIDDEN_CLASSNAME);

  // username 저장하기(기억하기) : local storage API
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);

  // user에게 인사하기
  paintGreeting(username);

}

// show greeting - user에게 인사하기 : username을 document에 출력하기
function paintGreeting(username){
  greeting.innerText = `Hello, ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

// user 정보 저장 유무 확인
// 정보 있으면 user에게 인사, 없으면 login-form 보여주기
let savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
  // show login-form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // user에게 인사하기
  paintGreeting(savedUsername);
}

