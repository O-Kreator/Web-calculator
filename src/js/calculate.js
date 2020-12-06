import helperFunc from './helper';

export const dataList = [];
export let dataItem = "0"

export const dataFunc = {
  list: {
    reset() {
      dataList.splice(0, dataList.length);
    },
    backspace() {
      dataList.pop();
    },
    input(text) {
      if (!dataList.length) {
        dataList.push(text);
        return ;
      }
      if (helperFunc.isOperator(text) && helperFunc.isOperator(dataList[dataList.length - 1]))
        throw "Operator cannot be input next to operator." ;
      if (helperFunc.isNumber(text) && helperFunc.isNumber(dataList[dataList.length - 1]))
        throw "Number cannot be input next to number.";
      
      dataList.push(text);
    },
    replaceRecent(text) {
      if (!dataList.length) {
        dataFunc.list.input(text);
        return ;
      }

      const recentItem = dataList[dataList.length - 1];
      if (helperFunc.isOperator(text) && helperFunc.isNumber(recentItem))
        throw "Operator cannot replace number.";
      if (helperFunc.isNumber(text) && helperFunc.isOperator(recentItem))
        throw "Number cannot replace operator.";
      
      dataFunc.list.backspace();
      dataFunc.list.input(text);
    },
    preCalculate() {
      if (!dataList.length)
        return 0;
      if (dataList.length <= 2)
        return dataList[0];

      let result = Number(dataList[0]);
      for (let i = 1; i < dataList.length - 1; i += 2) {
        if (helperFunc.isOperator(dataList[i + 1]))
          throw "Misordered item in dataList."

        const operator = dataList[i];
        if (operator === "+")
          result += Number(dataList[i + 1]);
        if (operator === "-")
          result -= Number(dataList[i + 1]);
        if (operator === "*")
          result *= Number(dataList[i + 1]);
        if (operator === "/")
          result /= Number(dataList[i + 1]);
      }

      return result;
    },
    calculate() {
      if (!dataList.length)
        return 0;
      if (dataList.length <= 2)
        return dataList[0];

      let result = Number(dataList[0]);
      for (let i = 1; i < dataList.length; i += 2) {
        if (helperFunc.isOperator(dataList[i + 1]))
          throw "Misordered item in dataList."
        
        const operator = dataList[i];
        if (operator === "+")
          result += Number(dataList[i + 1]);
        if (operator === "-")
          result -= Number(dataList[i + 1]);
        if (operator === "*")
          result *= Number(dataList[i + 1]);
        if (operator === "/")
          result /= Number(dataList[i + 1]);
      }

      return result;
    }
  },

  item: {
    reset() {
      dataItem = "0";
    },
    backspace() {
      dataItem = dataItem.slice(0, dataItem.length - 1);
    },
    replace(text) {
      dataItem = text;
    },
    input(text) {
      dataItem += text;
    }
  }
}
