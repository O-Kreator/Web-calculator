import { CONST, DOM } from './_config.js';

const navStatus = {
  isMoving: false,
  isShown: false
}

const navFunc = {
  on() {
    if (!navStatus.isMoving) {
      navStatus.isMoving = true;

      DOM.nav.button.classList.add("on");
      DOM.body.classList.add("menu_pressed");

      setTimeout(() => DOM.body.classList.add("menu_shown"), CONST.TIME_SHORT);
      setTimeout(() => {navStatus.isShown = true}, CONST.TIME_LONG);
      setTimeout(() => {navStatus.isMoving = false}, CONST.TIME_LONG);
    }
  },

  off() {
    if (!navStatus.isMoving) {
      navStatus.isMoving = true;

      DOM.nav.button.classList.remove("on");
      DOM.body.classList.remove("menu_shown");

      setTimeout(() => DOM.body.classList.remove("menu_pressed"), CONST.TIME_LONG);
      setTimeout(() => {navStatus.isShown = false}, CONST.TIME_LONG);
      setTimeout(() => {navStatus.isMoving = false}, CONST.TIME_LONG);
    }
  },

  init() {
    DOM.nav.button.addEventListener("click", () => !navStatus.isShown ? navFunc.on() : navFunc.off());
    DOM.nav.blinder.addEventListener("click", navFunc.off);

    const navButtons = DOM.nav.contents;
    for (const key in navButtons) {
      navButtons[key].addEventListener("click", navFunc.off);
    }
  }
}

navFunc.init();
