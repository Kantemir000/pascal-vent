const container = () => {
    const setMargin = () => {
        const mainContainer = document.querySelector('[data-container="main"]'),
            myContainer = document.querySelector('[data-container="services"]');

        const marginL = window.getComputedStyle(mainContainer).marginLeft;

        if (window.matchMedia('(max-width: 992px) or (orientation: portrait)').matches) {
            myContainer.classList.remove('container-left');
            myContainer.classList.add('container');

            myContainer.style.marginLeft = "auto";
        } else {
            myContainer.classList.remove('container');
            myContainer.classList.add('container-left');

            myContainer.style.marginLeft = marginL;
        }
    };
    setMargin();
    window.addEventListener('resize', setMargin);
};

export default container;