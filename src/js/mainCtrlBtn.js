import { CONST, DOM } from './_config.js';
import textFunc from './text';
import { historyFunc, btnHistoryFunc } from './status';

const mainCtrlBtnFunc = {
  clearEntry() {
    textFunc.main.clear();
  },
  clear() {
    textFunc.main.clear();
    textFunc.sub.clear();

    historyFunc.reset();
  },
  backspace() {
    textFunc.main.backspace();
    textFunc.main.update();
  },
  backspaceKeyDown() {
    mainCtrlBtnFunc.backspace();

    DOM.mainBtn.backspace.classList.add("pressed");
    setTimeout(() => { DOM.mainBtn.backspace.classList.remove("pressed") }, CONST.TIME_SHORT);
  },

  init() {
    DOM.mainBtn.clearEntry.addEventListener("click", mainCtrlBtnFunc.clearEntry);
    DOM.mainBtn.clear.addEventListener("click", mainCtrlBtnFunc.clear);
    DOM.mainBtn.backspace.addEventListener("click", mainCtrlBtnFunc.backspace);

    document.addEventListener("keydown", e => {
      if (e.key === "Backspace" && !DOM.mainBtn.backspace.disabled)
        mainCtrlBtnFunc.backspaceKeyDown();
    });
  }
}

mainCtrlBtnFunc.init();
