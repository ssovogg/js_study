/*
1. 배경이미지 배열을 만들어서
2. 배경이미지가 들어갈 태그의 클래스에 넣자
 */

const wrapBack = document.querySelector(".wrapback");
const img = ["0.png", "1.png", "2.png"];

const background = img[Math.floor(Math.random() * img.length)];
const url = `url('../images/${background}')`
console.log(url);

wrapBack.style.background = `url('../images/${background}')`;