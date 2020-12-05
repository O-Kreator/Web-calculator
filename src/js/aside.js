import { CONST, DOM } from './_config.js';

const asideStatus = {
  current: "history",
  isChanging: false
}

const asideFunc = {
  show: {
    memory() {
      if (!asideStatus.isChanging) {
        asideStatus.isChanging = true;
        asideStatus.current = "memory";

        DOM.aside.historyTab.classList.remove("actived");
        DOM.aside.memoryTab.classList.add("actived");

        DOM.aside.wrapper.classList.remove("history_shown");
        setTimeout(() => { DOM.aside.wrapper.classList.remove("history_clicked") }, CONST.TIME_LONG);
        setTimeout(() => { DOM.aside.wrapper.classList.add("memory_clicked") }, CONST.TIME_SHORT + CONST.TIME_LONG);
        setTimeout(() => { DOM.aside.wrapper.classList.add("memory_shown") }, CONST.TIME_SHORT + 2 * CONST.TIME_LONG);

        setTimeout(() => { asideStatus.isChanging = false }, CONST.TIME_SHORT + 2 * CONST.TIME_LONG);
      }
    },

    history() {
      if (!asideStatus.isChanging) {
        asideStatus.isChanging = true;
        asideStatus.current = "history";

        DOM.aside.memoryTab.classList.remove("actived");
        DOM.aside.historyTab.classList.add("actived");

        DOM.aside.wrapper.classList.remove("memory_shown");
        setTimeout(() => { DOM.aside.wrapper.classList.remove("memory_clicked") }, CONST.TIME_LONG);
        setTimeout(() => { DOM.aside.wrapper.classList.add("history_clicked") }, CONST.TIME_SHORT + CONST.TIME_LONG);
        setTimeout(() => { DOM.aside.wrapper.classList.add("history_shown") }, CONST.TIME_SHORT + 2 * CONST.TIME_LONG);

        setTimeout(() => { asideStatus.isChanging = false }, CONST.TIME_SHORT + 2 * CONST.TIME_LONG);
      }
    }
  },

  init() {
    DOM.aside.historyTab.addEventListener("click", () => {
      if (asideStatus.current === "memory") asideFunc.show.history();
    });
    DOM.aside.memoryTab.addEventListener("click", () => {
      if (asideStatus.current === "history") asideFunc.show.memory();
    });
  }
}

asideFunc.init();
