import { DOM } from './_config.js';
import textFunc from './text';
import { historyFunc, btnHistoryFunc } from './history';
import errorHandleFunc from './errorHandle';

export const mainNumBtnFunc = {
  event(text) {
    if (errorHandleFunc.isError()) {
      errorHandleFunc.release();

      textFunc.main.clear();
      textFunc.sub.clear();
      
      historyFunc.reset();
    }

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
