// https://eunhee-programming.tistory.com/106?category=1202432

const slides = document.querySelector(".slides"); // 전체 슬라이드 컨테이너
const slideImg = document.querySelectorAll(".slides li") // 슬라이드 이미지들
let currentIndex = 0; // 현재 슬라이드 index

const slideCount = slideImg.length; // 슬라이드 개수
const slideWidth = 300; // 슬라이드 넓이
const slideMargin = 100; // 슬라이드 마진값
// 전체 슬라이드 컨테이너 넓이
slides.style.width = (slideWidth + slideMargin) * slideCount + 'px';


// controller
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

function moveSlide(num) {
  slides.style.left = -num * 400 + 'px';
  currentIndex = num;
}

prevBtn.addEventListener('click', () => {
  // 첫번째 슬라이드는 이전버튼 눌러도 반응 없게
  // 첫번째 슬라이드가 아닐때만 함수 호출
  if(currentIndex !== 0) moveSlide(currentIndex-1);
});

nextBtn.addEventListener('click', ()=>{
  // 마지막 슬라이드가 아닐때만 함수 호출
  if(currentIndex !== slideCount-1){
    moveSlide(currentIndex+1);
  }
})