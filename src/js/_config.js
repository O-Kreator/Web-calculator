/* Const and DOM */

export const CONST = {
  TIME_SHORT: 100,
  TIME_LONG: 200
}

export const DOM = {
  body: document.body,
  nav: {
    button: document.getElementById("navMenuBtn"),
    top: document.getElementById("navTop"),
    blinder: document.getElementById("navBlinder"),

    contents: {
      darkModeBtn: document.getElementById("darkModeBtn")
    }
  },
  text: {
    sub: document.getElementById("textSub"),
    main: document.getElementById("textMain")
  },
  memoryBtn: {
    clear: document.getElementById("memoryClearBtn"),
    read: document.getElementById("memoryReadBtn"),
    plus: document.getElementById("memoryPlusBtn"),
    minus: document.getElementById("memoryMinusBtn"),
    store: document.getElementById("memoryStoreBtn")
  },
  mainBtn: {
    num1: document.getElementById("num1Btn"),
    num2: document.getElementById("num2Btn"),
    num3: document.getElementById("num3Btn"),
    num4: document.getElementById("num4Btn"),
    num5: document.getElementById("num5Btn"),
    num6: document.getElementById("num6Btn"),
    num7: document.getElementById("num7Btn"),
    num8: document.getElementById("num8Btn"),
    num9: document.getElementById("num9Btn"),
    num0: document.getElementById("num0Btn"),
    dot: document.getElementById("dotBtn"),

    clearEntry: document.getElementById("clearEntryBtn"),
    clear: document.getElementById("clearBtn"),
    backspace: document.getElementById("backspaceBtn"),

    percent: document.getElementById("percentBtn"),
    fraction: document.getElementById("fractionBtn"),
    square: document.getElementById("squareBtn"),
    squareRoot: document.getElementById("squareRootBtn"),
    toggleSign: document.getElementById("toggleSign"),

    plus: document.getElementById("plusBtn"),
    minus: document.getElementById("minusBtn"),
    multiply: document.getElementById("multiplyBtn"),
    divide: document.getElementById("divideBtn"),
    equal: document.getElementById("equalBtn")
  },

  aside: {
    historyTab: document.getElementById("historyTabBtn"),
    memoryTab: document.getElementById("memoryTabBtn")
  }
}
