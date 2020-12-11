import { CONST, DOM } from './_config.js';
import textFunc from './text';
import { btnHistoryFunc } from './status';
import helperFunc from './helper.js';

const mainOperatorBtnFunc = {
  operator(text) {
    textFunc.sub.input(text);
    textFunc.sub.preCalculate();
    textFunc.sub.update();
  },
  operatorKeydown(text, btn) {
    mainOperatorBtnFunc.operator(text);

    btn.classList.add("pressed");
    setTimeout(() => { btn.classList.remove("pressed") }, CONST.TIME_SHORT);
  },
  equal() {
    textFunc.sub.calculate();
    textFunc.sub.update();
  },
  equalKeydown() {
    mainOperatorBtnFunc.equal();

    DOM.mainBtn.equal.classList.add("pressed");
    setTimeout(() => { DOM.mainBtn.equal.classList.remove("pressed") }, CONST.TIME_SHORT);
  },

  init() {
    DOM.mainBtn.plus.addEventListener("click", () => {
      mainOperatorBtnFunc.operator("+");
      btnHistoryFunc.update(DOM.mainBtn.plus);
    });
    document.addEventListener("keydown", e => {
      if (e.key === "+" && !DOM.mainBtn.plus.disabled) {
        mainOperatorBtnFunc.operatorKeydown(e.key, DOM.mainBtn.plus);
        btnHistoryFunc.update(DOM.mainBtn.plus);
      }
    });

    DOM.mainBtn.minus.addEventListener("click", () => {
      mainOperatorBtnFunc.operator("-");
      btnHistoryFunc.update(DOM.mainBtn.minus);
    });
    document.addEventListener("keydown", e => {
      if (e.key === "-" && !DOM.mainBtn.minus.disabled) {
        mainOperatorBtnFunc.operatorKeydown(e.key, DOM.mainBtn.minus);
        btnHistoryFunc.update(DOM.mainBtn.minus);
      }
    });

    DOM.mainBtn.multiply.addEventListener("click", () => {
      mainOperatorBtnFunc.operator("*");
      btnHistoryFunc.update(DOM.mainBtn.multiply);
    });
    document.addEventListener("keydown", e => {
      if (e.key === "*" && !DOM.mainBtn.multiply.disabled) {
        mainOperatorBtnFunc.operatorKeydown(e.key, DOM.mainBtn.multiply);
        btnHistoryFunc.update(DOM.mainBtn.multiply);
      }
    });

    DOM.mainBtn.divide.addEventListener("click", () => {
      mainOperatorBtnFunc.operator("/");
      btnHistoryFunc.update(DOM.mainBtn.divide);
    });
    document.addEventListener("keydown", e => {
      if (e.key === "/" && !DOM.mainBtn.divide.disabled) {
        mainOperatorBtnFunc.operatorKeydown(e.key, DOM.mainBtn.divide);
        btnHistoryFunc.update(DOM.mainBtn.divide);
      }
    });

    DOM.mainBtn.equal.addEventListener("click", () => {
      mainOperatorBtnFunc.equal();
      btnHistoryFunc.update(DOM.mainBtn.equal);
    })
    document.addEventListener("keydown", e => {
      if ((e.key === "=" || e.key === "Enter") && !DOM.mainBtn.equal.disabled) {
        e.preventDefault();
        mainOperatorBtnFunc.equalKeydown();
        btnHistoryFunc.update(DOM.mainBtn.equal);
      }
    });
  }
}

mainOperatorBtnFunc.init();
