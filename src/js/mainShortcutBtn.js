import { DOM } from './_config.js';
import textFunc from './text';
import { btnHistoryFunc } from './status';

const mainShortcutBtnFunc = {
  toggleSign() {
    textFunc.main.shortcut.toggleSign();
    textFunc.main.update();
    textFunc.sub.update();

    btnHistoryFunc.update(DOM.mainBtn.toggleSign);
  },
  percent() {
    textFunc.main.shortcut.percent();
    textFunc.main.update();
    textFunc.sub.update();

    btnHistoryFunc.update(DOM.mainBtn.percent);
  },
  fraction() {
    textFunc.main.shortcut.fraction();
    textFunc.main.update();
    textFunc.sub.update();

    btnHistoryFunc.update(DOM.mainBtn.fraction);
  },
  square() {
    textFunc.main.shortcut.square();
    textFunc.main.update();
    textFunc.sub.update();

    btnHistoryFunc.update(DOM.mainBtn.square);
  },
  squareRoot() {
    textFunc.main.shortcut.squareRoot();
    textFunc.main.update();
    textFunc.sub.update();

    btnHistoryFunc.update(DOM.mainBtn.squareRoot);
  },

  init() {
    DOM.mainBtn.toggleSign.addEventListener("click", () => { mainNumBtnFunc.toggleSign(); });
    DOM.mainBtn.percent.addEventListener("click", () => { mainShortcutBtnFunc.percent(); });
    DOM.mainBtn.fraction.addEventListener("click", () => { mainShortcutBtnFunc.fraction(); });
    DOM.mainBtn.square.addEventListener("click", () => { mainShortcutBtnFunc.square(); });
    DOM.mainBtn.squareRoot.addEventListener("click", () => { mainShortcutBtnFunc.squareRoot(); });
  }
}

mainShortcutBtnFunc.init();
