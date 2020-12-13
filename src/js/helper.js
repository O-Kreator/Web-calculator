const helperFunc = {
  isOperator(text) {
    return (text === "+" || text === "-" || text === "*" || text === "/" || text === "=");
  },
  isNumber(text) {
    return (!isNaN(text));
  },
  filterNum(text) {
    if (String(text)[text.length - 1] === ".")
      return String(text).slice(0, text.length - 1);
    return String(text);
  }
}

export default helperFunc;
