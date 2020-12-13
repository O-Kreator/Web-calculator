import { DOM } from './_config.js';
import textFunc from './text';
import { btnHistoryFunc } from './status';

const mainShortcutBtnFunc = {
  percent() {
    textFunc.main.percent();
    textFunc.main.update();
    textFunc.sub.update();

    btnHistoryFunc.update(DOM.mainBtn.percent);
  },
  fraction() {
    textFunc.main.fraction();
    textFunc.main.update();
    textFunc.sub.update();

    btnHistoryFunc.update(DOM.mainBtn.fraction);
  },
  square() {
    textFunc.main.square();
    textFunc.main.update();
    textFunc.sub.update();

    btnHistoryFunc.update(DOM.mainBtn.square);
  },
  squareRoot() {
    textFunc.main.squareRoot();
    textFunc.main.update();
    textFunc.sub.update();

    btnHistoryFunc.update(DOM.mainBtn.squareRoot);
  },

  init() {
    DOM.mainBtn.percent.addEventListener("click", () => { mainShortcutBtnFunc.percent(); });
    DOM.mainBtn.fraction.addEventListener("click", () => { mainShortcutBtnFunc.fraction(); });
    DOM.mainBtn.square.addEventListener("click", () => { mainShortcutBtnFunc.square(); });
    DOM.mainBtn.squareRoot.addEventListener("click", () => { mainShortcutBtnFunc.squareRoot(); });
  }
}

mainShortcutBtnFunc.init();
