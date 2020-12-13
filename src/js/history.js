import { DOM } from './_config';

export const history = {
  recentInput: "",
  recentResult: "",
  recentButton: null,
  recentOperator: "="
}

export const historyFunc = {
  reset() {
    history.recentInput = "";
    history.recentResult = "";
    btnHistoryFunc.update(null);
    history.recentOperator = "=";
  }
}

export const btnHistoryFunc = {
  update(button) {
    history.recentButton = button;
  },
  isNum() {
    for (let i = 0; i < 10; i++) {
      if (history.recentButton === DOM.mainBtn[`num${i}`])
        return true;
    }
    return false;
  },
  isOperator() {
    if (history.recentButton === DOM.mainBtn.plus)
      return true;
    if (history.recentButton === DOM.mainBtn.minus)
      return true;
    if (history.recentButton === DOM.mainBtn.multiply)
      return true;
    if (history.recentButton === DOM.mainBtn.divide)
      return true;
    return false;
  },
  isEqual() {
    return (history.recentButton === DOM.mainBtn.equal);
  },
  isDot() {
    return (history.recentButton === DOM.mainBtn.dot);
  },
  isToggleSign() {
    return (history.recentButton === DOM.mainBtn.toggleSign);
  },
  isShortcut() {
    if (history.recentButton === DOM.mainBtn.percent)
      return true;
    if (history.recentButton === DOM.mainBtn.fraction)
      return true;
    if (history.recentButton === DOM.mainBtn.square)
      return true;
    if (history.recentButton === DOM.mainBtn.squareRoot)
      return true;
    return false;
  }
}
