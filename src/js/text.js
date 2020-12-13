import { DOM } from './_config.js';
import { dataList, dataItem, dataFunc } from './calculate.js';

import helperFunc from './helper';
import { history, btnHistoryFunc } from './status';

const textFunc = {
  sub: {
    update() {
      DOM.text.sub.value = "";
      for (let i = 0; i < dataList.length; i++) {
        const value = `${dataList[i]} `;
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
      // This event only happens when operator or equal button is pressed.

      // If user used shortcut button or toggle sign button,
      // the recent number aleady entered into the list, so the operator should be just input.
      if (btnHistoryFunc.isShortcut() || btnHistoryFunc.isToggleSign())
        dataFunc.list.input(text);
      
      // If user used another operator button, we should replace recent operator.
      else if (btnHistoryFunc.isOperator())
        dataFunc.list.replaceRecent(text);
  
      // If user used equal button, new operations should be started.
      else if (btnHistoryFunc.isEqual()) {
        dataFunc.list.reset();
        dataFunc.list.input(history.recentResult);
        dataFunc.list.input(text);
      }
      
      // In this case user pressed other buttons such as number or dot button.
      // So the current number is needed to be input.
      else {
        dataFunc.list.input(helperFunc.filterNum(dataItem));
        dataFunc.list.input(text);
      }

      history.recentOperator = text;
      history.recentInput = dataItem;
    },
    preCalculate() {
      let result = 0;
      result = dataFunc.list.calculate();

      textFunc.main.replace(result);
      history.recentResult = String(result);
    },
    calculate() {
      // This event only happens when equal button is pressed.

      // If user used shortcut button or toggle sign button,
      // the recent number just entered into the list, so the "=" text is needed to be placed.
      if (btnHistoryFunc.isShortcut() || btnHistoryFunc.isToggleSign())
        dataFunc.list.input("=");
      
      // If user used operator button, the text in textarea should be input into the list,
      // and text "=" is also needed after that.
      else if (btnHistoryFunc.isOperator()) {
        dataFunc.list.input(textFunc.main.get());
        history.recentInput = textFunc.main.get();
        dataFunc.list.input("=");
      }
      
      // If user used equal button, the recent operation will be started.
      // But if there's no history, just text and equal will be showed.
      else if (btnHistoryFunc.isEqual()) {
        textFunc.sub.clear();
        dataFunc.list.input(history.recentResult);
        dataFunc.list.input(history.recentOperator);
        if (history.recentOperator !== "=") {
          dataFunc.list.input(history.recentInput);
          dataFunc.list.input("=");
        }
      }
      
      // In this case user used other buttons such as number or dot.
      else {
        // If there's no history, it means user just pressed equal button with no operator.
        // So just the number in textarea will be shown. But before that, we must put the dataItem into the dataList.
        if (history.recentOperator === "=") {
          dataFunc.list.input(helperFunc.filterNum(dataItem));
          history.recentInput = helperFunc.filterNum(dataItem);
        }
        
        // In this case dataList is empty but there's history,
        // which means the recent operation should be started.
        else if (dataFunc.list.isEmpty()) {
          dataFunc.list.input(helperFunc.filterNum(dataItem));
          dataFunc.list.input(history.recentOperator);
          dataFunc.list.input(history.recentInput);
        }
        
        // If dataList is not empty, we should just get dataItem and put into dataList normally.
        else {
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
      (dataItem.length === 1) ? textFunc.main.clear() : dataFunc.item.backspace();
    },
    input(text) {

      // If dataItem is "0", the 0 should not be input.
      if (text === "0" && dataItem === "0")
        return ;
      
      // If dataItem already has ".", the "." should not be input.
      // But in the case of user used operator button or equal button, the new number "0." should be input.
      else if (text === "." && dataItem.includes(".")) {
        if (btnHistoryFunc.isOperator() || btnHistoryFunc.isEqual())
          dataFunc.item.replace("0.");
        else
          return ;
      }

      // If user used shortcut button or toggle sign button,
      // The old number aleady input into dataList.
      if (btnHistoryFunc.isShortcut() || btnHistoryFunc.isToggleSign()) {
        dataFunc.list.backspace();
        (text === ".") ? dataFunc.item.replace("0.") : dataFunc.item.replace(text);
      }

      // If user used operator button, or dataItem is "0",
      // The new number should be input.
      else if (btnHistoryFunc.isOperator() || dataItem === "0")
        (text === ".") ? dataFunc.item.replace("0.") : dataFunc.item.replace(text) ;
      
      // If user used equal button,
      // The new number should be input, and new operation should be started.
      else if (btnHistoryFunc.isEqual()) {
        textFunc.sub.clear();
        (text === ".") ? dataFunc.item.replace("0.") : dataFunc.item.replace(text) ;
      }
      
      // In this case user used other buttons such as number or dot, and dataItem is not "0".
      // just normally input the text.
      else
        dataFunc.item.input(text);
      
    },
    shortcut: {
      _template(func) {
        if (btnHistoryFunc.isEqual()) {
          textFunc.sub.clear();
          dataFunc.item.replace(history.recentResult);
        }

        func();

        if (btnHistoryFunc.isShortcut() || btnHistoryFunc.isToggleSign() || history.recentOperator === "=")
          dataFunc.list.replaceRecent(helperFunc.filterNum(dataItem));
        else
          dataFunc.list.input(helperFunc.filterNum(dataItem));
      },
      toggleSign() {
        textFunc.main.shortcut._template(() => { dataFunc.item.toggleSign(); });
      },
      percent() {
        if (dataItem === "0")
          dataFunc.item.replace("0");
        else
          textFunc.main.shortcut._template(() => {
            dataFunc.item.replace(dataFunc.item.percent(dataItem, history.recentResult));
          });
      },
      fraction() {
        textFunc.main.shortcut._template(() => { dataFunc.item.fraction(); });
      },
      square() {
        textFunc.main.shortcut._template(() => { dataFunc.item.square(); });
      },
      squareRoot() {
        textFunc.main.shortcut._template(() => { dataFunc.item.squareRoot(); });
      }
    }
  }
}

export default textFunc;
