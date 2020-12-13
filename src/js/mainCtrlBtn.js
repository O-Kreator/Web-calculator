import { DOM } from './_config.js';
import textFunc from './text';
import { historyFunc } from './status';

export const mainCtrlBtnFunc = {
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

  init() {
    DOM.mainBtn.clearEntry.addEventListener("click", mainCtrlBtnFunc.clearEntry);
    DOM.mainBtn.clear.addEventListener("click", mainCtrlBtnFunc.clear);
    DOM.mainBtn.backspace.addEventListener("click", mainCtrlBtnFunc.backspace);
  }
}

mainCtrlBtnFunc.init();
