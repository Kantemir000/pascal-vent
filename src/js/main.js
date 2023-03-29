import activeBurger from "./modules/active-burger";
import rippleEffect from "./modules/ripple-effect";
import activeTabs from "./modules/active-tabs";
import container from "./modules/container";

window.addEventListener('DOMContentLoaded', () => {
    container();
    activeBurger('body', '.btn_burger', '.menu', true);
    activeBurger('.menu__items', '.menu__link', '.menu');
    rippleEffect('body', '.btn__element', true);
    rippleEffect('.menu__items', '.menu__link');
    activeTabs('.bar__tabs', '.bar__tab', '.bar__inner', 'bar__tab_active');
});
