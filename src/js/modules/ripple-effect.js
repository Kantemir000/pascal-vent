const rippleEffect = (parentTriggerSelector, triggerSelector, working) => {
    const parent = document.querySelector(parentTriggerSelector);

    const eventHandler = e => {
        const { target } = e;

        if (target && target.closest(triggerSelector)) {
            const x = e.offsetX,
                y = e.offsetY;

            const ripples = document.createElement('span');
            ripples.classList.add("ripple");
            ripples.style.left = `${x}px`;
            ripples.style.top = `${y}px`;
            target.append(ripples);

            target.addEventListener("animationend", () => ripples.remove());
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

export default rippleEffect;