import { CONST, DOM } from './_config.js';
import textFunc from './text';
import { btnHistoryFunc } from './status';
import helperFunc from './helper.js';

const mainNumBtnFunc = {
  event(text) {
    textFunc.main.input(text);
    textFunc.main.update();
  },
  keyDown(text, btn) {
    mainNumBtnFunc.event(text);

    btn.classList.add("pressed");
    setTimeout(() => { btn.classList.remove("pressed") }, CONST.TIME_SHORT);
  },
  toggleSign() {
    textFunc.main.toggleSign();
    textFunc.main.update();
  },

  init() {
    for (let i = 0; i < 10; i++) {
      DOM.mainBtn[`num${i}`].addEventListener("click", e => {
        mainNumBtnFunc.event(String(i));
        btnHistoryFunc.update(e.target);
      });
    }
    document.addEventListener("keydown", e => {
      if (DOM.mainBtn[`num${e.key}`]) {
        if (helperFunc.isNumber(e.key) && !DOM.mainBtn[`num${e.key}`].disabled) {
          mainNumBtnFunc.keyDown(e.key, DOM.mainBtn[`num${e.key}`]);
          btnHistoryFunc.update(DOM.mainBtn[`num${e.key}`]);
        }
      }
    });

    DOM.mainBtn.dot.addEventListener("click", () => {
      mainNumBtnFunc.event(".");
      btnHistoryFunc.update(DOM.mainBtn.dot);
    });
    document.addEventListener("keydown", e => {
      if (e.key === "." && !DOM.mainBtn.dot.disabled) {
        mainNumBtnFunc.keyDown(e.key, DOM.mainBtn.dot);
        btnHistoryFunc.update(DOM.mainBtn.dot);
      }
    });

    DOM.mainBtn.toggleSign.addEventListener("click", () => {
      mainNumBtnFunc.toggleSign();
      btnHistoryFunc.update(DOM.mainBtn.toggleSign);
    });
  }
}

mainNumBtnFunc.init();
