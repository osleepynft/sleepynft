const burgerMenuFunction = () => {
    const headerBtn = document.querySelector('.header-menu');
    const headerMenu = document.querySelector('.header-inner');
    if (headerBtn) {
        headerBtn.addEventListener('click', () => {
            headerBtn.classList.toggle('header-btn__close');
            headerMenu.classList.toggle('menu-active');
        })
    }
}

burgerMenuFunction()