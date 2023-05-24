


const menuBtn = document.querySelector('.header__menu-btn');
const menu = document.querySelector('.header__nav-main-list');
menuBtn.addEventListener('click', () => {
    menu.classList.toggle('list--active');
});
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('menu-btn--active');
});
