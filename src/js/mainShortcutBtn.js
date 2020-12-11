import { CONST, DOM } from './_config.js';
import textFunc from './text';
import { historyFunc, btnHistoryFunc } from './status';

const mainShortcutBtnFunc = {
  percent() {
    textFunc.main.percent();
    textFunc.main.update();
    textFunc.sub.update();
  },
  fraction() {
    textFunc.main.fraction();
    textFunc.main.update();
    textFunc.sub.update();
  },
  square() {
    textFunc.main.square();
    textFunc.main.update();
    textFunc.sub.update();
  },
  squareRoot() {
    textFunc.main.squareRoot();
    textFunc.main.update();
    textFunc.sub.update();
  },

  init() {
    DOM.mainBtn.percent.addEventListener("click", () => {
      mainShortcutBtnFunc.percent();
      btnHistoryFunc.update(DOM.mainBtn.percent);
    });

    DOM.mainBtn.fraction.addEventListener("click", () => {
      mainShortcutBtnFunc.fraction();
      btnHistoryFunc.update(DOM.mainBtn.fraction);
    });

    DOM.mainBtn.square.addEventListener("click", () => {
      mainShortcutBtnFunc.square();
      btnHistoryFunc.update(DOM.mainBtn.square);
    });

    DOM.mainBtn.squareRoot.addEventListener("click", () => {
      mainShortcutBtnFunc.squareRoot();
      btnHistoryFunc.update(DOM.mainBtn.squareRoot);
    });
  }
}

mainShortcutBtnFunc.init();
