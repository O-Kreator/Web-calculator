import { DOM } from './_config.js';
import btnStatusFunc from './btnStatus';

let errorStatus = "";

const errorHandleFunc = {
  _handlers: {
    release() {
      btnStatusFunc.main.enableAll();
    },
    divideByZero() {
      btnStatusFunc.main.disableError();
    },
    misorderDataList() {
      btnStatusFunc.main.disableError();
    },
    cannotRelaceRecentItem() {
      btnStatusFunc.main.disableError();
    },
    cannotPutItemNextToSameType() {
      btnStatusFunc.main.disableError();
    }
  },
  isError() {
    return (errorStatus !== "")
  },
  set(errCode) {
    errorStatus = errCode;
    if (this.isError())
      this._handlers[errCode]();
    else
      this._handlers.release();
  },
  release() {
    this.set("");
  }
}

export default errorHandleFunc;
