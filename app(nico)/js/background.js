// images Array 만들기
const images = ["0.jpg", "1.jpg", "2.jpg"];

// 랜덤 이미지 선택
const chosenImage = images[Math.floor(Math.random() * images.length)];

// 랜덤 이미지 html에 추가
  // img 태그 만들기
  // createElement() : html 태그 만들기
const bgImage = document.createElement('img');
bgImage.src = `images/${chosenImage}`;

  // img 태그 body에 집어넣기
    //appendChild() : body에 html태그 추가
document.body.appendChild(bgImage);