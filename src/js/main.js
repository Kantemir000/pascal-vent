import activeBurgerMenu from "./modules/active-burger-menu";
import rippleEffect from "./modules/ripple-effect";
import activeTabs from "./modules/active-tabs";
import container from "./modules/container";
import changeColorNavBar from "./modules/change-color-nav-bar";
import form from "./modules/form";
import { showModalByTime, modal } from "./modules/modal";

window.addEventListener('DOMContentLoaded', () => {
    container();
    changeColorNavBar();
    activeBurgerMenu('body', '.btn_burger', '.menu', true);
    activeBurgerMenu('.menu__items', '.menu__link', '.menu');
    rippleEffect('body', '.btn__element', true);
    rippleEffect('.menu__items', '.menu__link');
    activeTabs('.bar__tabs', '.bar__tab', '.bar__inner', 'bar__tab_active');
    form('.form');
    modal('[data-modal="feedback"]', '[data-modal-trigger="feedback"]');
    modal('[data-modal="contacts"]', '[data-modal-trigger="contacts"]');
    showModalByTime('[data-modal="feedback"]', 15000);
});
