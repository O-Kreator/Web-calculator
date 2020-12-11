import { CONST, DOM } from './_config.js';
import textFunc from './text';
import { historyFunc, btnHistoryFunc } from './status';

const mainShortcutBtnFunc = {
  fraction() {
    textFunc.main.fraction();
    textFunc.main.update();
  },

  init() {
    DOM.mainBtn.fraction.addEventListener("click", () => {
      mainShortcutBtnFunc.fraction();
      btnHistoryFunc.update(DOM.mainBtn.fraction);
    });
  }
}

mainShortcutBtnFunc.init();
