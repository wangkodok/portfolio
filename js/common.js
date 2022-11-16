// 헤더 메뉴 버튼
const body = document.querySelector('body');
const header = document.querySelector('.header');
const menu = document.querySelector('.menu');
const menuOpen = document.querySelector('.full-menu-content');
// let scope = 0;
// menu.addEventListener('click', menuBtn);
// function menuBtn() {
//   if (scope === 0) {
//     header.style.position = 'fixed';
//     header.style.zIndex = 1001;
//     menuOpen.classList.add('on');
//     menu.classList.add('on');
//     menu.style.zIndex = 1001;
//     scope = 1;
//   } else {
//     header.style.position = '';
//     header.style.zIndex = '';
//     menuOpen.classList.remove('on');
//     menu.classList.remove('on');
//     menu.style.zIndex = '';
//     window.scrollTo(0, 0);
//     scope = 0;
//   }
// }

// 햄버거 메뉴
const btnMenu = document.querySelector('.btn-line');
console.log(btnMenu);
btnMenu.addEventListener('click', () => {
  if (!btnMenu.classList.contains('on')) {
    header.style.position = 'fixed';
    header.style.zIndex = 1001;
    menuOpen.classList.add('on');
    btnMenu.classList.add('on');
    btnMenu.classList.remove('off');
    btnMenu.style.zIndex = 1001;
  } else {
    header.style.position = '';
    header.style.zIndex = '';
    menuOpen.classList.remove('on');
    btnMenu.classList.remove('on');
    btnMenu.classList.add('off');
    btnMenu.style.zIndex = 1001;
  }
})

// 스크롤 애니메이션
window.addEventListener('load', () => {

  function scrollAppear() {
    const textBox = document.querySelectorAll('.text-content p');
    const screenPosition = window.innerHeight / 1;

    for (let i = 0; i < textBox.length; i++) {
      const textPosition = textBox[i].getBoundingClientRect().top;

      if (textPosition < screenPosition) {
        textBox[i].classList.add('scroll-on');
      } else {
        textBox[i].classList.remove('scroll-on');
      }
    }
  }

  window.addEventListener('scroll', scrollAppear);

});