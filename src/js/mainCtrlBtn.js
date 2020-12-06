import { DOM } from './_config.js';
import textFunc from './text';
import { btnHistoryFunc } from './status';

const mainCtrlBtnFunc = {
  clearEntry() {
    textFunc.main.clear();
    btnHistoryFunc.update(DOM.mainBtn.clearEntry);
  },
  backspace() {
    textFunc.main.backspace();
    textFunc.main.update();
    btnHistoryFunc.update(DOM.mainBtn.backspace);
  },

  init() {
    DOM.mainBtn.clearEntry.addEventListener("click", mainCtrlBtnFunc.clearEntry);
    DOM.mainBtn.backspace.addEventListener("click", mainCtrlBtnFunc.backspace);
  }
}

mainCtrlBtnFunc.init();
