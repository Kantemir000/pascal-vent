const changeColorNavBar = () => {
    const changeColor = () => {
        const section = document.querySelector('.promo'),
            navBar = document.querySelector('.header'),
            btn = document.querySelector('.btn_connect');

        if (section.offsetHeight <= window.pageYOffset) {
            navBar.classList.add('header_active');
            btn.classList.add('btn_border_dark');
        } else {
            navBar.classList.remove('header_active');
            btn.classList.remove('btn_border_dark');
        }
    };

    window.addEventListener('scroll', changeColor);
};

export default changeColorNavBar;