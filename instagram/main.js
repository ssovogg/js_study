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
  storyList.addEventListener('scroll', () => {
    if (storyList.offsetWidth + storyList.scrollLeft >= storyList.scrollWidth) {
      storyNextBtn.classList.add('hidden');
    } else {
      storyNextBtn.classList.remove('hidden');
    }
  })
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

pidImg.addEventListener('scroll', ()=>{
  (currentImg !== pidImgList.length - 1) ? pidNextBtn.classList.remove('hidden') : pidNextBtn.classList.add('hidden');
  (currentImg !== 0) ? pidPrevBtn.classList.remove('hidden') : pidPrevBtn.classList.add('hidden')
})

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
  howManyLike.innerText = `${likeCount}명`
})

// 댓글
const commentBtn = document.querySelector('.fa-comment');
const showComment = document.querySelector('.comment')
const commentForm = document.querySelector('.comment_form');
const commentInput = commentForm.querySelector('input');
const commentAddBtn = commentForm.querySelector('button');
const userComment = document.querySelector('.user_comments');
// 댓글 버튼 클릭 => 댓글 창 보이기
showComment.addEventListener('click', () => {
  commentForm.classList.toggle('hidden');
  userComment.classList.toggle('hidden');
})
commentBtn.addEventListener('click', () => {
  commentBtn.classList.toggle('fa-solid');
  commentForm.classList.toggle('hidden');
})
// 타이핑하면 게시 버튼 활성화
commentInput.addEventListener('input', () => {
  if (commentInput.value != '') {
    commentAddBtn.classList.add('btn_active');
  } else {
    commentAddBtn.classList.remove('btn_active');
  }
})
// 댓글 추가
commentForm.addEventListener('submit', (event) => {
  event.preventDefault();
  userComment.classList.remove('hidden');
  addCommentList();
})

// 댓글 노드 생성
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