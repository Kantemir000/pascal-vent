const activeBurgerMenu = (parentTriggerSelector, triggerSelector, elementSelector, alwaysWorks) => {
    const parent = document.querySelector(parentTriggerSelector);

    const eventHandler = e => {
        const elem = document.querySelector(elementSelector);
        const animation = '--animation',
            { target } = e;

        if (target && target.closest(triggerSelector)) {
            if (!elem.classList.contains('show')) {
                document.documentElement.style.setProperty(animation, 'fadeIn');
                elem.classList.add('show');
                return;
            }
            document.documentElement.style.setProperty(animation, 'fadeOut');
            elem.addEventListener("animationend", () => elem.classList.remove('show'), { once: true });
        }
    };

    if (alwaysWorks) {
        parent.addEventListener('click', eventHandler);
        return;
    }
    if (window.matchMedia('(max-width: 992px)').matches) {
        parent.addEventListener('click', eventHandler);
    }
    window.addEventListener('resize', () => {
        if (window.matchMedia('(max-width: 992px)').matches) {
            parent.addEventListener('click', eventHandler);
            return;
        }
        parent.removeEventListener('click', eventHandler);
    });
};

export default activeBurgerMenu;