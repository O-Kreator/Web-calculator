import { DOM } from './_config.js';
import textFunc from './text';
import { btnHistoryFunc } from './status';

const mainNumBtnFunc = {
  event(text) {
    textFunc.main.input(text);
    textFunc.main.update();
  },

  init() {
    for (let i = 0; i < 10; i++) {
      DOM.mainBtn[`num${i}`].addEventListener("click", e => {
        mainNumBtnFunc.event(String(i));
        btnHistoryFunc.update(e.target);
      });
    }

    DOM.mainBtn.dot.addEventListener("click", () => {
      mainNumBtnFunc.event(".");
      btnHistoryFunc.update(DOM.mainBtn.dot);
    });
  }
}

mainNumBtnFunc.init();
