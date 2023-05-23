document.querySelector(function () {
    document.querySelector('.header__menu-btn').on('click', function () {
        document.querySelector('.header__nav-main-list').classList.toggle('list--active');
        document.querySelector('.header__menu-btn').classList.toggle('menu-btn--active');
    });
});

