import { DOM } from './_config.js';
import { dataList, dataItem, dataFunc } from './calculate.js';

import helperFunc from './helper';
import { history, btnHistoryFunc, historyFunc } from './status';

const textFunc = {
  sub: {
    update() {
      DOM.text.sub.value = "";

      for (let i = 0; i < dataList.length; i++) {
        const value = dataList[i];
        if (helperFunc.isOperator(value))
          value = ` ${value} `;
        DOM.text.sub.value += value;
      }

      if (DOM.text.sub.value[DOM.text.sub.value.length - 1] === " ")
        DOM.text.sub.value = DOM.text.sub.value.slice(0, DOM.text.sub.value.length - 1);
    },
    clear() {
      DOM.text.sub.value = "";
      dataFunc.list.reset();
    },
    input(text) {
      if (btnHistoryFunc.isShortcut())
        dataFunc.list.input(text);
      else if (btnHistoryFunc.isOperator())
        dataFunc.list.replaceRecent(text);
      else if (btnHistoryFunc.isEqual()) {
        dataFunc.list.reset();
        dataFunc.list.input(history.recentResult);
        dataFunc.list.input(text);
      } else {
        dataFunc.list.input(helperFunc.filterNum(dataItem));
        dataFunc.list.input(text);
      }

      history.recentOperator = text;
      history.recentInput = dataItem;
    },
    preCalculate() {
      let result = 0;
      result = dataFunc.list.preCalculate();

      textFunc.main.replace(result);
      history.recentResult = String(result);
    },
    calculate() {
      if (btnHistoryFunc.isShortcut() || btnHistoryFunc.isToggleSign()) {
        dataFunc.list.input("=");
      } else if (btnHistoryFunc.isOperator()) {
        dataFunc.list.input(textFunc.main.get());
        history.recentInput = textFunc.main.get();
        dataFunc.list.input("=");
      } else if (btnHistoryFunc.isEqual()) {
        textFunc.sub.clear();
        dataFunc.list.input(history.recentResult);
        dataFunc.list.input(history.recentOperator);
        if (history.recentOperator !== "=") {
          dataFunc.list.input(history.recentInput);
          dataFunc.list.input("=");
        }
      } else {
        if (btnHistoryFunc.isDot())
          textFunc.sub.clear();
        if (history.recentOperator === "=") {
          dataFunc.list.input(helperFunc.filterNum(dataItem));
          history.recentInput = helperFunc.filterNum(dataItem);
        } else if ((!btnHistoryFunc.isNum() && !btnHistoryFunc.isShortcut() && !btnHistoryFunc.isToggleSign()) || dataFunc.list.isEmpty()) {
          dataFunc.list.input(helperFunc.filterNum(dataItem));
          dataFunc.list.input(history.recentOperator);
          dataFunc.list.input(history.recentInput);
        } else {
          dataFunc.list.input(helperFunc.filterNum(dataItem));
          history.recentInput = helperFunc.filterNum(dataItem);
        }
        dataFunc.list.input("=");
      }

      let result = 0;
      result = dataFunc.list.calculate();

      textFunc.main.replace(result);
      history.recentResult = String(result);
    }
  },

  main: {
    get() {
      return helperFunc.filterNum(DOM.text.main.value);
    },
    update() {
      DOM.text.main.value = dataItem;
    },
    replace(text) {
      DOM.text.main.value = text;
    },
    clear() {
      if (btnHistoryFunc.isEqual())
        textFunc.sub.clear();
      DOM.text.main.value = "0";
      dataFunc.item.replace("0");
    },
    backspace() {
      if (btnHistoryFunc.isOperator() || dataItem === "0")
        return ;
      if (btnHistoryFunc.isEqual()) {
        textFunc.sub.clear();
        dataFunc.item.replace(history.recentResult);
        return ;
      }
      if (dataItem.length === 1)
        textFunc.main.clear();
      else
        dataFunc.item.backspace();
    },
    input(text) {
      if (text === "0" && dataItem === "0")
        return ;
      else if (text === "." && dataItem.includes(".")) {
        if (btnHistoryFunc.isOperator() || btnHistoryFunc.isEqual())
          dataFunc.item.replace("0.");
        else
          return ;
      }
      if (btnHistoryFunc.isEqual()) {
        textFunc.sub.clear();
        if (text === ".")
          dataFunc.item.replace("0.");
        else
          dataFunc.item.replace(text);
      } else if (btnHistoryFunc.isOperator() || btnHistoryFunc.isToggleSign() || btnHistoryFunc.isShortcut() || dataItem === "0") {
        if (text === ".")
          dataFunc.item.replace("0.");
        else
          dataFunc.item.replace(text);
      }
      else
        dataFunc.item.input(text);
    },
    toggleSign() {
      if (btnHistoryFunc.isEqual()) {
        textFunc.sub.clear();
        dataFunc.item.replace(history.recentResult);
      }
      dataFunc.item.toggleSign();
      if (btnHistoryFunc.isShortcut() || btnHistoryFunc.isToggleSign())
        dataFunc.list.replaceRecent(helperFunc.filterNum(dataItem) || history.recentOperator === "=");
      else
        dataFunc.list.input(helperFunc.filterNum(dataItem));
    },
    percent() {
      if (dataItem === "0")
        dataFunc.item.replace("0");
      else if (btnHistoryFunc.isEqual()) {
        textFunc.sub.clear();
        dataFunc.item.replace(history.recentResult);
      }
      dataFunc.item.replace(dataFunc.item.percent(dataItem, history.recentResult));
      if (btnHistoryFunc.isShortcut() || btnHistoryFunc.isToggleSign() || history.recentOperator === "=")
        dataFunc.list.replaceRecent(helperFunc.filterNum(dataItem));
      else
        dataFunc.list.input(helperFunc.filterNum(dataItem));
    },
    fraction() {
      if (btnHistoryFunc.isEqual()) {
        textFunc.sub.clear();
        dataFunc.item.replace(history.recentResult);
      }
      dataFunc.item.fraction();
      if (btnHistoryFunc.isShortcut() || btnHistoryFunc.isToggleSign() || history.recentOperator === "=")
        dataFunc.list.replaceRecent(helperFunc.filterNum(dataItem));
      else
        dataFunc.list.input(helperFunc.filterNum(dataItem));
    },
    square() {
      if (btnHistoryFunc.isEqual()) {
        textFunc.sub.clear();
        dataFunc.item.replace(history.recentResult);
      }
      dataFunc.item.square();
      if (btnHistoryFunc.isShortcut() || btnHistoryFunc.isToggleSign() || history.recentOperator === "=")
        dataFunc.list.replaceRecent(helperFunc.filterNum(dataItem));
      else
        dataFunc.list.input(helperFunc.filterNum(dataItem));
    },
    squareRoot() {
      if (btnHistoryFunc.isEqual()) {
        textFunc.sub.clear();
        dataFunc.item.replace(history.recentResult);
      }
      dataFunc.item.squareRoot();
      if (btnHistoryFunc.isShortcut() || btnHistoryFunc.isToggleSign() || history.recentOperator === "=")
        dataFunc.list.replaceRecent(helperFunc.filterNum(dataItem));
      else
        dataFunc.list.input(helperFunc.filterNum(dataItem));
    }
  }
}

export default textFunc;
