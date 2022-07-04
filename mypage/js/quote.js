const quote = document.querySelector("#quote p");
const name = document.querySelector("#quote span");
const quotes = [
  {
    quote : "신뢰의 이유는 안전하거나 확실해서가 아니라, 위험을 감수할 용의가 있어서이다.",
    name : "미상"
  },
  {
    quote : "창조적인 삶을 살려면 내가 틀릴지도 모른다는 공포를 버려야 한다.",
    name : "미상"
  },
  {
    quote : "나 자신에 대한 자신감을 잃으면 온 세상이 나의 적이 된다.",
    name : "랄프 왈도 에머슨"
  },
  {
    quote : "새로운 일에 도전하다 보면 가끔 실수를 저지를 수 있다. \n자신의 실수를 빨리 인정하고 다른 시도에 집중하는 것이 최선이다.",
    name : "스티브 잡스"
  },
  {
    quote : "행동은 모든 성공의 가장 기초적인 핵심이다.",
    name : "파블로 피카소"
  },
  {
    quote : "오늘 나무 그늘에서 쉴 수 있는 이유는 예전에 나무를 심었기 때문이다.",
    name : "워렌 버핏"
  },
  {
    quote : "지금이 최악이야’라고 말할 수 있는 한 지금이 최악은 아니다",
    name : "윌리엄 셰익스피어"
  },
];

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
name.innerText = todayQuote.name;
