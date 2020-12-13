import { DOM } from './_config.js';
import textFunc from './text';
import { historyFunc, btnHistoryFunc } from './history';
import errorHandleFunc from './errorHandle';

export const mainOperatorBtnFunc = {
  operator(text) {
    textFunc.sub.input(text);
    textFunc.sub.preCalculate();
    textFunc.sub.update();

    if (text === "+")
      btnHistoryFunc.update(DOM.mainBtn.plus);
    if (text === "-")
      btnHistoryFunc.update(DOM.mainBtn.minus);
    if (text === "*")
      btnHistoryFunc.update(DOM.mainBtn.multiply);
    if (text === "/")
      btnHistoryFunc.update(DOM.mainBtn.divide);
    
    errorHandleFunc.check();
  },
  equal() {
    if (errorHandleFunc.isError()) {
      errorHandleFunc.release();

      textFunc.main.clear();
      textFunc.sub.clear();
      
      historyFunc.reset();
      textFunc.sub.update();
    } else {
      textFunc.sub.calculate();
      textFunc.sub.update();
      
      btnHistoryFunc.update(DOM.mainBtn.equal);
    }
    
    errorHandleFunc.check();
  },

  init() {
    DOM.mainBtn.plus.addEventListener("click", () => { mainOperatorBtnFunc.operator("+"); });
    DOM.mainBtn.minus.addEventListener("click", () => { mainOperatorBtnFunc.operator("-"); });
    DOM.mainBtn.multiply.addEventListener("click", () => { mainOperatorBtnFunc.operator("*"); });
    DOM.mainBtn.divide.addEventListener("click", () => { mainOperatorBtnFunc.operator("/"); });
    DOM.mainBtn.equal.addEventListener("click", mainOperatorBtnFunc.equal);
  }
}

mainOperatorBtnFunc.init();
