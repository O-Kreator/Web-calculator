import { DOM } from './_config.js';
import textFunc from './text';
import { historyFunc } from './history';
import errorHandleFunc from './errorHandle';

export const mainCtrlBtnFunc = {
  clearEntry() {
    if (errorHandleFunc.isError()) {
      errorHandleFunc.release();

      textFunc.main.clear();
      textFunc.sub.clear();
      
      historyFunc.reset();
    } else
      textFunc.main.clear();

    errorHandleFunc.check();
  },
  clear() {
    if (errorHandleFunc.isError())
      errorHandleFunc.release();
    
    textFunc.main.clear();
    textFunc.sub.clear();

    historyFunc.reset();

    errorHandleFunc.check();
  },
  backspace() {
    if (errorHandleFunc.isError()) {
      errorHandleFunc.release();

      textFunc.main.clear();
      textFunc.sub.clear();
      
      historyFunc.reset();
    } else {
      textFunc.main.backspace();
      textFunc.main.update();
    }
    
    errorHandleFunc.check();
  },

  init() {
    DOM.mainBtn.clearEntry.addEventListener("click", mainCtrlBtnFunc.clearEntry);
    DOM.mainBtn.clear.addEventListener("click", mainCtrlBtnFunc.clear);
    DOM.mainBtn.backspace.addEventListener("click", mainCtrlBtnFunc.backspace);
  }
}

mainCtrlBtnFunc.init();
