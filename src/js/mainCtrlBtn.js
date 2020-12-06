import { DOM } from './_config.js';
import textFunc from './text';
import { btnHistoryFunc } from './status';

const mainCtrlBtnFunc = {
  clearEntry() {
    textFunc.main.clear();
  },
  backspace() {
    textFunc.main.backspace();
    textFunc.main.update();
  },

  init() {
    DOM.mainBtn.clearEntry.addEventListener("click", mainCtrlBtnFunc.clearEntry);
    DOM.mainBtn.backspace.addEventListener("click", mainCtrlBtnFunc.backspace);
  }
}

mainCtrlBtnFunc.init();
