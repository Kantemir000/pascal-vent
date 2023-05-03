const calcScroll = () => {
    const div = document.createElement('div');

    div.style.cssText = `
        width: 50px;
        height: 50px;
        overflow-y: scroll;
        visibility: hidden;
    `;

    document.body.append(div);
    const scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
};

const openModal = (modalSelector) => {
    const modal = document.querySelector(modalSelector),
        scroll = calcScroll(),
        animation = '--animation';

    document.documentElement.style.setProperty(animation, 'fadeIn');
    modal.classList.remove("close");
    modal.classList.add("open");
    document.body.style.marginRight = `${scroll}px`;
};

const closeModal = (modalSelector) => {
    const modal = document.querySelector(modalSelector),
        animation = '--animation';

    document.documentElement.style.setProperty(animation, 'fadeOut');
    modal.addEventListener("animationend", () => {
        modal.classList.remove("open");
        modal.classList.add("close");
        document.body.style.marginRight = `0px`;
    }, { once: true });
};

let timerId = 0;

const showModalByTime = (modalSelector, time) => {
    timerId = setTimeout(() => {
        const modals = document.querySelectorAll("[data-modal]");

        modals.forEach(modal => {
            if (getComputedStyle(modal).display === "none") openModal(modalSelector);
        });
    }, time);

    return timerId;
};

const modal = (modalSelector, triggerSelector) => {
    const modal = document.querySelector(modalSelector),
        triggers = document.querySelectorAll(triggerSelector);


    triggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();

            openModal(modalSelector);
            clearTimeout(timerId);
        });
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('cross') === '') {
            closeModal(modalSelector);
        }
    });
};

export { showModalByTime, modal };
