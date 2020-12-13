import { CONST, DOM } from './_config.js';
import { mainNumBtnFunc } from './mainNumBtn';
import { mainCtrlBtnFunc } from './mainCtrlBtn'; 
import { mainOperatorBtnFunc } from './mainOperatorBtn';
import helperFunc from './helper.js';

const keydownFunc = {
  _handler(func, btn) {
    if (!btn.disabled) {
      func();

      btn.classList.add("pressed");
      setTimeout(() => { btn.classList.remove("pressed") }, CONST.TIME_SHORT);
    }
  },

  _keydown(e) {
    
    if (helperFunc.isNumber(e.key))
      keydownFunc._handler(() => { mainNumBtnFunc.event(e.key); }, DOM.mainBtn[`num${e.key}`]);
    if (e.key === ".")
      keydownFunc._handler(() => { mainNumBtnFunc.event("."); }, DOM.mainBtn.dot);
    
    if (e.key === "Backspace")
      keydownFunc._handler(() => { mainCtrlBtnFunc.backspace(); }, DOM.mainBtn.backspace);
    if (e.key === "Escape")
      keydownFunc._handler(() => { mainCtrlBtnFunc.clear(); }, DOM.mainBtn.clear);
    
    if (e.key === "+")
      keydownFunc._handler(() => { mainOperatorBtnFunc.operator("+"); }, DOM.mainBtn.plus);
    if (e.key === "-")
      keydownFunc._handler(() => { mainOperatorBtnFunc.operator("-"); }, DOM.mainBtn.minus);
    if (e.key === "*")
      keydownFunc._handler(() => { mainOperatorBtnFunc.operator("*"); }, DOM.mainBtn.multiply);
    if (e.key === "/")
      keydownFunc._handler(() => { mainOperatorBtnFunc.operator("/"); }, DOM.mainBtn.divide);
    if (e.key === "=" || e.key === "Enter") {
      e.preventDefault();
      keydownFunc._handler(() => { mainOperatorBtnFunc.equal(); }, DOM.mainBtn.equal);
    }
    
  },

  init() {
    document.addEventListener("keydown", e => { keydownFunc._keydown(e); });
  }
}

keydownFunc.init();
