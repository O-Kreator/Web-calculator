import { CONST, DOM } from './_config.js';

const navStatus = {
  isMoving: false
}

const navFunc = {
  toggle() {
    if (!navStatus.isMoving) {
      navStatus.isMoving = true;
      DOM.body.classList.toggle("menu_pressed");
      setTimeout(() => {navStatus.isMoving = false}, CONST.TIME_LONG);
    }
  },

  init() {
    DOM.nav.button.addEventListener("click", this.toggle);
  }
}

navFunc.init();
