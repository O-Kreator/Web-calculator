import { DOM } from './_config.js';
import btnStatusFunc from './btnStatus';

let errorStatus = "";

const errorHandleFunc = {
  message: {
    show(text = "Unknown Error") {
      DOM.error.text.innerText = text;
      DOM.body.classList.add("error");
    },
    hide() {
      DOM.body.classList.remove("error");
    }
  },
  _handlers: {
    release() {
      btnStatusFunc.main.enableAll();
      errorHandleFunc.message.hide();
    },
    divideByZero() {
      btnStatusFunc.main.disableError();
      errorHandleFunc.message.show("Can't divide with 0.");
    },
    misorderDataList() {
      btnStatusFunc.main.disableError();
      errorHandleFunc.message.show("Misorder in operation list.");
    },
    cannotReplaceRecentItem() {
      btnStatusFunc.main.disableError();
      errorHandleFunc.message.show("Can't replace different type of item.");
    },
    cannotPutItemNextToSameType() {
      btnStatusFunc.main.disableError();
      errorHandleFunc.message.show("Can't put item next to the same type.");
    }
  },
  isError() {
    return (errorStatus !== "")
  },
  set(errCode) {
    errorStatus = errCode;
  },
  release() {
    this.set("");
  },
  check() {
    if (this.isError()) {
      DOM.text.main.value = "Error";
      this._handlers[errorStatus]();
    } else {
      this.release();
      this._handlers.release();
    }
  },

  init() {
    DOM.error.closeBtn.addEventListener("click", this.message.hide);
    DOM.nav.button.addEventListener("click", this.message.hide);
  }
}

errorHandleFunc.init();

export default errorHandleFunc;
