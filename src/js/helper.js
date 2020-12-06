const helperFunc = {
  isOperator(text) {
    return (text === "+" || text === "-" || text === "*" || text === "/");
  },
  isNumber(text) {
    return (!isNaN(text));
  }
}

export default helperFunc;