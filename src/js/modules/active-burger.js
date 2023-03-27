const activeBurger = (parentTriggerSelector, triggerSelector, elementSelector, working) => {
    const parent = document.querySelector(parentTriggerSelector);

    const eventHandler = e => {
        const elem = document.querySelector(elementSelector);
        const animation = '--animation-burger',
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

    if (working) {
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

export default activeBurger;