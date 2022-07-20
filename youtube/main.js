const moreTitle = document.querySelector('.info_title h2');
const moreTitleBtn = document.querySelector('.info_more_btn i');
moreTitleBtn.addEventListener('click', ()=>{
  console.log('click');
  moreTitleBtn.classList.toggle('fa-angle-up')
  moreTitle.classList.toggle('clamp')
})