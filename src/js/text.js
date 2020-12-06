import { DOM } from './_config.js';
import { dataList, dataItem, dataFunc } from './calculate.js';

import helperFunc from './helper';
import { history, btnHistoryFunc } from './status';

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
    },
    clear() {
      DOM.text.sub.value = "";
      dataFunc.list.reset();
    },
    input(text) {
      if (btnHistoryFunc.isOperator())
        dataFunc.list.replaceRecent(text);
      else if (btnHistoryFunc.isEqual()) {
        dataFunc.list.reset();
        dataFunc.list.input(history.recentResult);
        dataFunc.list.input(text);
      } else {
        dataFunc.list.input(dataItem);
        dataFunc.list.input(text);
      }

      history.recentOperator = text;
      history.recentInput = dataItem;
    },
    calculate() {
      if (btnHistoryFunc.isOperator()) {
        dataFunc.list.input(textFunc.main.get());
        history.recentInput = textFunc.main.get();
      } else if (btnHistoryFunc.isNum()) {
        dataFunc.list.input(dataItem);
        history.recentInput = dataItem;
      } else if (btnHistoryFunc.isEqual()) {
        textFunc.sub.clear();
        dataFunc.list.input(history.recentResult);
        dataFunc.list.input(history.recentOperator);
        dataFunc.list.input(history.recentInput);
      }

      console.log(dataList);

      let result = 0;
      result = dataFunc.list.calculate()

      textFunc.main.replace(result);
      history.recentResult = String(result);
    }
  },

  main: {
    get() {
      return DOM.text.main.value;
    },
    update() {
      DOM.text.main.value = dataItem;
    },
    replace(text) {
      DOM.text.main.value = text;
    },
    clear() {
      DOM.text.main.value = "0";
      dataFunc.item.replace("0");
    },
    backspace() {
      if (dataItem === "0")
        return ;
      if (dataItem.length === 1)
        textFunc.main.clear();
      else
        dataFunc.item.backspace();
    },
    input(text) {
      if (text === "0" && dataItem === "0")
        return ;
      else if (text === "." && dataItem.includes("."))
        return ;
      if (btnHistoryFunc.isEqual()) {
        dataFunc.list.reset();
        if (text === ".")
          dataFunc.item.replace("0.")
        else
            dataFunc.item.replace(text);
      }
      else if ((text !== "." && dataItem === "0") || btnHistoryFunc.isOperator())
        dataFunc.item.replace(text);
      else
        dataFunc.item.input(text);
    }
  }
}

export default textFunc;
