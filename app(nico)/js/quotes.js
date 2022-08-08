// Array 만들기
const quotes = [
  {
    quote: "hey",
    author: "wait",
  },
  {
    quote: "hey2",
    author: "wait2",
  },
  {
    quote: "hey3",
    author: "wait3",
  },
  {
    quote: "hey4",
    author: "wait4",
  },
  {
    quote: "hey5",
    author: "wait5",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


// 0~10 사이의 랜덤한 숫자 찾기
  // Math.random() : 0~1사이 랜덤한 숫자(소수점을 가지는 float) 제공
  // Math.round() : 반올림
  // Math.ceil() : 올림
  // Math.floor() : 내림
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

// 명언 화면에 보여주기
quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;