import { DOM } from './_config.js';
import textFunc from './text';
import { btnHistoryFunc } from './status';

const mainOperatorBtnFunc = {
  operator(text) {
    textFunc.sub.input(text);
    textFunc.sub.update();
  },
  equal() {
    textFunc.sub.calculate();
    textFunc.sub.update();
  },

  init() {
    DOM.mainBtn.plus.addEventListener("click", () => {
      mainOperatorBtnFunc.operator("+");
      btnHistoryFunc.update(DOM.mainBtn.plus);
    });
    DOM.mainBtn.minus.addEventListener("click", () => {
      mainOperatorBtnFunc.operator("-");
      btnHistoryFunc.update(DOM.mainBtn.minus);
    });
    DOM.mainBtn.multiply.addEventListener("click", () => {
      mainOperatorBtnFunc.operator("*");
      btnHistoryFunc.update(DOM.mainBtn.multiply);
    });
    DOM.mainBtn.divide.addEventListener("click", () => {
      mainOperatorBtnFunc.operator("/");
      btnHistoryFunc.update(DOM.mainBtn.divide);
    });
    DOM.mainBtn.equal.addEventListener("click", () => {
      mainOperatorBtnFunc.equal();
      btnHistoryFunc.update(DOM.mainBtn.equal);
    })
  }
}

mainOperatorBtnFunc.init();
