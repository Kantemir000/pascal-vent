import activeBurger from "./modules/active-burger";
import rippleEffect from "./modules/ripple-effect";
import activeTabs from "./modules/active-tabs";
import container from "./modules/container";
import changeColorNavBar from "./modules/change-color-nav-bar";
import form from "./modules/form";

window.addEventListener('DOMContentLoaded', () => {
    container();
    changeColorNavBar();
    activeBurger('body', '.btn_burger', '.menu', true);
    activeBurger('.menu__items', '.menu__link', '.menu');
    rippleEffect('body', '.btn__element', true);
    rippleEffect('.menu__items', '.menu__link');
    activeTabs('.bar__tabs', '.bar__tab', '.bar__inner', 'bar__tab_active');
    form('.form');
});
