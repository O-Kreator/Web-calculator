import { CONST, DOM } from './_config.js';


/* Getting default theme setting */

const themeStatus = {};
themeStatus.current = localStorage.getItem("theme");
themeStatus.preferDarkScheme = window.matchMedia("prefers-color-scheme: dark");

if (themeStatus.current === "dark")
  DOM.body.classList.toggle("dark-theme");
else if (themeStatus.current === "light")
  DOM.body.classList.toggle("light-theme");


const navFunc = {
  toggleTheme() {
    let theme;

    if (themeStatus.preferDarkScheme.matches) {
      DOM.body.classList.toggle("light-theme");
      theme = DOM.body.classList.contains("light-theme") ? "light" : "dark";
    } else {
      DOM.body.classList.toggle("dark-theme");
      theme = DOM.body.classList.contains("dark-theme") ? "dark" : "light";
    }
    localStorage.setItem("theme", theme);
  },

  init() {
    DOM.nav.contents.darkModeBtn.addEventListener("click", this.toggleTheme);
  }
}

navFunc.init();
