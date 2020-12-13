import helperFunc from './helper';
import errorHandleFunc from './errorHandle'

export const dataList = [];
export let dataItem = "0"

export const dataFunc = {
  _operate(num1, operator, num2) {
    const countDecimalPlace = num => {
      if (String(num).indexOf(".") !== -1)
        return String(num).length - String(num).indexOf(".") - 1;
      return 0;
    };
    
    try {
      if (operator === "/" && Number(num2) === 0)
      throw "divideByZero";
    } catch (error) {
      errorHandleFunc.set(error);
    }

    const num1DecimalPlace = countDecimalPlace(num1);
    const num2DecimalPlace = countDecimalPlace(num2);
    let result = 0;
    let resultDecimalPlace = 0;

    if (operator === "+" || operator === "-") {
      resultDecimalPlace = (num1DecimalPlace > num2DecimalPlace) ? num1DecimalPlace : num2DecimalPlace;
      
      const num1Int = num1 * Math.pow(10, resultDecimalPlace);
      const num2Int = num2 * Math.pow(10, resultDecimalPlace);

      if (operator === "+")
        result = num1Int + num2Int;
      if (operator === "-")
        result = num1Int - num2Int;
    }
    if (operator === "*" || operator === "/") {
      const num1Int = num1 * Math.pow(10, num1DecimalPlace);
      const num2Int = num2 * Math.pow(10, num2DecimalPlace);

      if (operator === "*") {
        result = num1Int * num2Int;
        resultDecimalPlace = num1DecimalPlace + num2DecimalPlace;
      } else {
        result = num1Int / num2Int;
        resultDecimalPlace = num1DecimalPlace - num2DecimalPlace;
      }
    }
    result /= Math.pow(10, resultDecimalPlace);

    return Number(result);
  },

  list: {
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
          throw "cannotPutItemNextToSameType" ;
        if (helperFunc.isNumber(text) && helperFunc.isNumber(dataList[dataList.length - 1]))
          throw "cannotPutItemNextToSameType";
      } catch (error) {
        errorHandleFunc.set(error);
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
          throw "cannotRelaceRecentItem";
        if (helperFunc.isNumber(text) && helperFunc.isOperator(recentItem))
          throw "cannotRelaceRecentItem";
      } catch (error) {
        errorHandleFunc.set(error);
      }
      
      dataFunc.list.backspace();
      dataFunc.list.input(text);
    },
    calculate() {
      if (!dataList.length)
        return 0;
      if (dataList.length <= 2)
        return dataList[0];

      let result = 0;
      try {
        if (helperFunc.isOperator(dataList[0]))
          throw "misorderedDataList";

        result = Number(dataList[0]);
        for (let i = 1; i < dataList.length - 1; i += 2) {
          if (!helperFunc.isOperator(dataList[i]) || !helperFunc.isNumber(dataList[i + 1]))
            throw "misorderedDataList";

          result = dataFunc._operate(result, dataList[i], Number(dataList[i + 1]));
        }
      } catch (error) {
        errorHandleFunc.set(error);
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
      dataItem = String(dataFunc._operate(1, "/", Number(dataItem)));
    },
    square() {
      dataItem = String(dataFunc._operate(Number(dataItem), "*", Number(dataItem)));
    },
    squareRoot() {
      dataItem = String(Math.pow(Number(dataItem), 0.5));
    },
    percent(num, numFull) {
      const decimal = dataFunc._operate(Number(num), "/", 100);
      return String(dataFunc._operate(decimal, "*", Number(numFull)));
    }
  }
}
