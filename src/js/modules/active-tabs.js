const activeTabs = (parentTabsSelector, tabsSelector, сontentSelector, activeSelector) => {
    const tabsParent = document.querySelector(parentTabsSelector),
        tabs = tabsParent.querySelectorAll(tabsSelector),
        contents = document.querySelectorAll(сontentSelector);

    const hide = () => {
        contents.forEach(content => {
            content.classList.remove('show');
            content.classList.add('hide');
        });

        tabs.forEach(tab => {
            tab.classList.remove(activeSelector);
        });
    };
    hide();

    const show = (i = tabs.length - 1) => {
        contents[i].classList.remove('hide');
        contents[i].classList.add('show');

        tabs[i].classList.add(activeSelector);
    };
    show();

    tabsParent.addEventListener('click', e => {
        const { target } = e;

        if (target && target.closest(tabsSelector)) {
            tabs.forEach((tab, i) => {
                if (target.closest(tabsSelector).getAttribute("data-tab") === tab.getAttribute("data-tab")) {
                    hide();
                    show(i);
                }
            });
        }
    });

};

export default activeTabs;