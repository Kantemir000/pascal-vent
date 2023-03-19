import active from "./modules/active";
import rippleEffect from "./modules/ripple-effect";

window.addEventListener('DOMContentLoaded', () => {
    active('body', '.btn_burger', '.menu', true);
    active('.menu__items', '.menu__link', '.menu');
    rippleEffect('body', '.btn__element', true);
    rippleEffect('.menu__items', '.menu__link');
});
