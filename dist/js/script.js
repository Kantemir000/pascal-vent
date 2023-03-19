/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/active.js":
/*!**********************************!*\
  !*** ./src/js/modules/active.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const active = (parentTriggerSelector, triggerSelector, elementSelector, working) => {
  const parent = document.querySelector(parentTriggerSelector);
  const eventHandler = e => {
    const elem = document.querySelector(elementSelector);
    const animation = '--animation-burger',
      {
        target
      } = e;
    if (target && target.closest(triggerSelector)) {
      if (!elem.classList.contains('active')) {
        document.documentElement.style.setProperty(animation, 'fadeIn');
        elem.classList.add('active');
        return;
      }
      document.documentElement.style.setProperty(animation, 'fadeOut');
      elem.addEventListener("animationend", () => elem.classList.remove('active'), {
        once: true
      });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (active);

/***/ }),

/***/ "./src/js/modules/ripple-effect.js":
/*!*****************************************!*\
  !*** ./src/js/modules/ripple-effect.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const rippleEffect = (parentTriggerSelector, triggerSelector, working) => {
  const parent = document.querySelector(parentTriggerSelector);
  const eventHandler = e => {
    const {
      target
    } = e;
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rippleEffect);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_active__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/active */ "./src/js/modules/active.js");
/* harmony import */ var _modules_ripple_effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ripple-effect */ "./src/js/modules/ripple-effect.js");


window.addEventListener('DOMContentLoaded', () => {
  (0,_modules_active__WEBPACK_IMPORTED_MODULE_0__["default"])('body', '.btn_burger', '.menu', true);
  (0,_modules_active__WEBPACK_IMPORTED_MODULE_0__["default"])('.menu__items', '.menu__link', '.menu');
  (0,_modules_ripple_effect__WEBPACK_IMPORTED_MODULE_1__["default"])('body', '.btn__element', true);
  (0,_modules_ripple_effect__WEBPACK_IMPORTED_MODULE_1__["default"])('.menu__items', '.menu__link');
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map