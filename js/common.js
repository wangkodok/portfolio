// 헤더 메뉴 버튼
const body = document.querySelector('body');
const header = document.querySelector('.header');
const menu = document.querySelector('.menu');
const menuOpen = document.querySelector('.full-menu-content');
let scope = 0;
menu.addEventListener('click', menuBtn);
function menuBtn() {
  if (scope === 0) {
    header.style.position = 'fixed';
    header.style.zIndex = 1001;
    menuOpen.classList.add('on');
    menu.classList.add('on');
    menu.style.zIndex = 1001;
    scope = 1;
  } else {
    header.style.position = '';
    header.style.zIndex = '';
    menuOpen.classList.remove('on');
    menu.classList.remove('on');
    menu.style.zIndex = '';
    window.scrollTo(0, 0);
    scope = 0;
  }
}