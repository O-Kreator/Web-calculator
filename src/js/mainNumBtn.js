import { DOM } from './_config.js';
import textFunc from './text';
import { btnHistoryFunc } from './status';

export const mainNumBtnFunc = {
  event(text) {
    textFunc.main.input(String(text));
    textFunc.main.update();
    textFunc.sub.update();

    if (text === ".")
      btnHistoryFunc.update(DOM.mainBtn.dot);
    else
      btnHistoryFunc.update(DOM.mainBtn[`num${text}`]);
  },

  init() {
    for (let i = 0; i < 10; i++)
      DOM.mainBtn[`num${i}`].addEventListener("click", e => { mainNumBtnFunc.event(i); });

    DOM.mainBtn.dot.addEventListener("click", () => { mainNumBtnFunc.event("."); });
  }
}

mainNumBtnFunc.init();
