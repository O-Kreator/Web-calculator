import { DOM } from './_config.js';

const btnStatusFunc = {
  _disable(btn) {
    btn.disabled = true;
  },
  _able(btn) {
    btn.disabled = false;
  },
  _toggle(btn) {
    (!btn.disabled) ? btnStatusFunc._disable(btn) : btnStatusFunc._able(btn);
  },

  main: {
    _errorBtns: [
      DOM.mainBtn.toggleSign,
      DOM.mainBtn.percent,
      DOM.mainBtn.fraction,
      DOM.mainBtn.square,
      DOM.mainBtn.squareRoot,
      DOM.mainBtn.divide,
      DOM.mainBtn.multiply,
      DOM.mainBtn.minus,
      DOM.mainBtn.plus,
      DOM.mainBtn.dot
    ],
    disableError() {
      for (let btn of this._errorBtns)
        btnStatusFunc._disable(btn);
    },
    enableError() {
      for (let btn of this._errorBtns)
        btnStatusFunc._able(btn);
    },
    disableAll() {
      for (let btn in DOM.mainBtn)
        btnStatusFunc._disable(DOM.mainBtn[btn]);
    },
    enableAll() {
      for (let btn in DOM.mainBtn)
        btnStatusFunc._able(DOM.mainBtn[btn]);
    }
  }
}

export default btnStatusFunc;
