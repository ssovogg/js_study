// gnb event
const gnbProfileBtn = document.querySelector('.gnb_mypage');
const gnbProfileSubmenu = document.querySelector('.sub_menu');
gnbProfileBtn.addEventListener('click', () => {
  document.querySelector('.sub_menu').classList.toggle('hidden')
  document.querySelector('.header_user').classList.toggle('gnb_active');
})

const gnbBtns = document.querySelectorAll('.gnb > li > i');
for (const btn of gnbBtns) {
  btn.addEventListener('mousedown', () => {
    btn.classList.add('fa-solid');
  })
  btn.addEventListener('mouseup', () => {
    btn.classList.remove('fa-solid');
  })
  btn.addEventListener('mouseout', () => {
    btn.classList.remove('fa-solid');
  })
}

// story slide
const storyList = document.querySelector('.story_list');
const storyLists = storyList.querySelectorAll('li');
const storyPrevBtn = document.querySelector('.story .prev');
const storyNextBtn = document.querySelector('.story .next');

storyNextBtn.addEventListener('click', () => {
  storyPrevBtn.classList.remove('hidden');
  storyList.scrollLeft += 330;
})
storyList.addEventListener('scroll', () => {
  if (storyList.offsetWidth + storyList.scrollLeft >= storyList.scrollWidth) {
    storyNextBtn.classList.add('hidden');
  } else {
    storyNextBtn.classList.remove('hidden');
  }
})

storyPrevBtn.addEventListener('click', ()=>{
  storyList.scrollLeft -= 330;
  if (storyList.scrollLeft === 0) {
    storyPrevBtn.classList.add('hidden');
  }else {
    storyPrevBtn.classList.remove('hidden');
  }
})

// pid img slide 
const pidImg = document.querySelector('.pid_img');
const pidImgList = pidImg.querySelectorAll('li');
const imgRects = [];
pidImgList.forEach(img => {
  let imgRect = img.getBoundingClientRect();
  imgRects.push(imgRect.left);
})
console.log(imgRects);
const pidPrevBtn = document.querySelector('.img_prev');
const pidNextBtn = document.querySelector('.img_next');
let currentImg = 0;
pidNextBtn.addEventListener('click', ()=>{
  pidImg.scrollLeft += 468;
  currentImg += 1;
})

pidPrevBtn.addEventListener('click', ()=>{
  pidImg.scrollLeft -= 468;
  currentImg -= 1;
})

pidImg.addEventListener('scroll', showPidBtn);



// pagination
/**
 * ????????? ???????????? ????????? ????????? li ?????? (pidImgList.length)
 * ?????? ????????? ????????? ?????? ??????
 * ????????? li ???????????? ????????? ??????
 * ?????? ????????? ???????????? ???????????? li??? pg_active ????????? ??????
 */
const pagination = document.querySelector('.pagination');
for(let i = 0; i < pidImgList.length; i++){
  makePgBtn(i);
}

function makePgBtn (currentImgNum){
  const li = document.createElement('li');
  li.id = currentImgNum;
  li.addEventListener('click', ()=>{
    pidImg.scrollTo(imgRects[li.id]-16, 0);
    currentImg = li.id;
    console.log(currentImg);
  });
  pagination.appendChild(li);
  pidImg.addEventListener('scroll', ()=>{
    pgBtnActive(li);
    showPidBtn();
  })
  pgBtnActive(li);
}

function showPidBtn (){
  (currentImg !== pidImgList.length - 1) ? pidNextBtn.classList.remove('hidden') : pidNextBtn.classList.add('hidden');
  (currentImg !== 0) ? pidPrevBtn.classList.remove('hidden') : pidPrevBtn.classList.add('hidden')
};

function pgBtnActive(li){
  if (li.id == currentImg){
    li.classList.add('pg_active');
  } else {
    li.classList.remove('pg_active');
  }
}

// pid event
const likeBtn = document.querySelector('.pid_btns .fa-heart');
const howManyLike = document.querySelector('.like strong');
let likeCount = 1;
let liked = false;
likeBtn.addEventListener("click", () => {
  likeBtn.classList.toggle('fa-solid');
  likeBtn.classList.toggle('active');
  if (liked) {
    likeCount -= 1;
    liked = false
  } else {
    likeCount += 1;
    liked = true
  }
  howManyLike.innerText = `${likeCount}???`
})

// ??????
const commentBtn = document.querySelector('.fa-comment');
const showComment = document.querySelector('.comment')
const commentForm = document.querySelector('.comment_form');
const commentInput = commentForm.querySelector('input');
const commentAddBtn = commentForm.querySelector('button');
const userComment = document.querySelector('.user_comments');
// ?????? ?????? ?????? => ?????? ??? ?????????
showComment.addEventListener('click', () => {
  commentForm.classList.toggle('hidden');
  userComment.classList.toggle('hidden');
})
commentBtn.addEventListener('click', () => {
  commentBtn.classList.toggle('fa-solid');
  commentForm.classList.toggle('hidden');
})
// ??????????????? ?????? ?????? ?????????
commentInput.addEventListener('input', () => {
  if (commentInput.value != '') {
    commentAddBtn.classList.add('btn_active');
  } else {
    commentAddBtn.classList.remove('btn_active');
  }
})
// ?????? ??????
commentForm.addEventListener('submit', (event) => {
  event.preventDefault();
  userComment.classList.remove('hidden');
  addCommentList();
})

// ?????? ?????? ??????
function addCommentList() {
  const li = document.createElement('li');
  const profile = document.createElement('a')
  profile.classList.add('profile')
  const profileImg = document.createElement('img')
  profileImg.setAttribute('src', 'img/pic1.jpeg');
  const div = document.createElement('div');
  div.classList.add('user_comment');
  const profileId = document.createElement('a');
  profileId.classList.add('user_id')
  profileId.innerText = "ssoo_oogg";
  const commentText = document.createElement('span');
  commentText.classList.add('user_text');
  profile.appendChild(profileImg);
  div.appendChild(profileId);
  div.appendChild(commentText);
  li.appendChild(profile);
  li.appendChild(div);
  userComment.appendChild(li);
}