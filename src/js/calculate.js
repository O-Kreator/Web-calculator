import helperFunc from './helper';


export const dataList = [];
export let dataItem = "0"

export const dataFunc = {
  list: {
    _operate(num1, operator, num2) {
      const countDecimalPlace = num => {
        if (String(num).indexOf(".") !== -1)
          return String(num).length - String(num).indexOf(".") - 1;
        return 0;
      };
      
      try {
        if (operator === "/" && Number(num2) === 0)
        throw "Can't divide with 0";
      } catch (error) {
        console.error(error);
      }

      const num1DecimalPlace = countDecimalPlace(num1);
      const num2DecimalPlace = countDecimalPlace(num2);
      let result = 0;
      let resultDecimalPlace = 0;

      if (operator === "+") {
        resultDecimalPlace = (num1DecimalPlace > num2DecimalPlace) ? num1DecimalPlace : num2DecimalPlace;

        const num1Int = num1 * Math.pow(10, resultDecimalPlace);
        const num2Int = num2 * Math.pow(10, resultDecimalPlace);
        result = num1Int + num2Int;
      }
      if (operator === "-") {
        resultDecimalPlace = (num1DecimalPlace > num2DecimalPlace) ? num1DecimalPlace : num2DecimalPlace;

        const num1Int = num1 * Math.pow(10, resultDecimalPlace);
        const num2Int = num2 * Math.pow(10, resultDecimalPlace);
        result = num1Int - num2Int;
      }
      if (operator === "*") {
        resultDecimalPlace = num1DecimalPlace + num2DecimalPlace;

        const num1Int = num1 * Math.pow(10, num1DecimalPlace);
        const num2Int = num2 * Math.pow(10, num2DecimalPlace);
        result = num1Int * num2Int;
      }
      if (operator === "/") {
        resultDecimalPlace = num1DecimalPlace - num2DecimalPlace;

        const num1Int = num1 * Math.pow(10, num1DecimalPlace);
        const num2Int = num2 * Math.pow(10, num2DecimalPlace);
        result = num1Int / num2Int;
      }
      result /= Math.pow(10, resultDecimalPlace);

      return Number(result);
    },
    isEmpty() {
      return (!dataList.length);
    },
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
      try {
        if (helperFunc.isOperator(text) && helperFunc.isOperator(dataList[dataList.length - 1]))
          throw "Operator cannot be input next to operator." ;
        if (helperFunc.isNumber(text) && helperFunc.isNumber(dataList[dataList.length - 1]))
          throw "Number cannot be input next to number.";
      } catch (error) {
        console.error(error);
      }
      
      dataList.push(text);
    },
    replaceRecent(text) {
      if (!dataList.length) {
        dataFunc.list.input(text);
        return ;
      }

      const recentItem = dataList[dataList.length - 1];
      try {
        if (helperFunc.isOperator(text) && helperFunc.isNumber(recentItem))
          throw "Operator cannot replace number.";
        if (helperFunc.isNumber(text) && helperFunc.isOperator(recentItem))
          throw "Number cannot replace operator.";
      } catch (error) {
        console.error(error);
      }
      
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
        try {
          if (helperFunc.isOperator(dataList[i + 1]))
          throw "Misordered item in dataList.";
        } catch (error) {
          console.error(error);
        }

        result = this._operate(result, dataList[i], Number(dataList[i + 1]));
      }

      return String(result);
    },
    calculate() {
      if (!dataList.length)
        return 0;
      if (dataList.length <= 2)
        return dataList[0];

      let result = Number(dataList[0]);
      for (let i = 1; i < dataList.length - 1; i += 2) {
        try {
          if (helperFunc.isOperator(dataList[i + 1]))
            throw "Misordered item in dataList."
        } catch (error) {
          console.error(error);
        }

        result = this._operate(result, dataList[i], Number(dataList[i + 1]));
      }

      return String(result);
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
    },
    toggleSign() {
      dataItem *= -1;
      dataItem = String(dataItem);
    },
    fraction() {
      dataItem = String(dataFunc.list._operate(1, "/", Number(dataItem)));
    },
    square() {
      dataItem = String(dataFunc.list._operate(Number(dataItem), "*", Number(dataItem)));
    },
    squareRoot() {
      dataItem = String(Math.pow(Number(dataItem), 0.5));
    },
    percent(num, numFull) {
      const decimal = dataFunc.list._operate(Number(num), "/", 100);
      return String(dataFunc.list._operate(decimal, "*", Number(numFull)));
    }
  }
}
