parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"HYMH":[function(require,module,exports) {

},{}],"epnb":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.DOM=exports.CONST=void 0;var e={TIME_SHORT:100,TIME_LONG:200};exports.CONST=e;var t={body:document.body,nav:{button:document.getElementById("navMenuBtn"),top:document.getElementById("navTop"),blinder:document.getElementById("navBlinder"),contents:{darkModeBtn:document.getElementById("darkModeBtn")}},text:{sub:document.getElementById("textSub"),main:document.getElementById("textMain")},memoryBtn:{clear:document.getElementById("memoryClearBtn"),read:document.getElementById("memoryReadBtn"),plus:document.getElementById("memoryPlusBtn"),minus:document.getElementById("memoryMinusBtn"),store:document.getElementById("memoryStoreBtn")},mainBtn:{num1:document.getElementById("num1Btn"),num2:document.getElementById("num2Btn"),num3:document.getElementById("num3Btn"),num4:document.getElementById("num4Btn"),num5:document.getElementById("num5Btn"),num6:document.getElementById("num6Btn"),num7:document.getElementById("num7Btn"),num8:document.getElementById("num8Btn"),num9:document.getElementById("num9Btn"),num0:document.getElementById("num0Btn"),dot:document.getElementById("dotBtn"),clearEntry:document.getElementById("clearEntryBtn"),clear:document.getElementById("clearBtn"),backspace:document.getElementById("backspaceBtn"),percent:document.getElementById("percentBtn"),fraction:document.getElementById("fractionBtn"),square:document.getElementById("squareBtn"),squareRoot:document.getElementById("squareRootBtn"),toggleSign:document.getElementById("toggleSign"),plus:document.getElementById("plusBtn"),minus:document.getElementById("minusBtn"),multiply:document.getElementById("multiplyBtn"),divide:document.getElementById("divideBtn"),equal:document.getElementById("equalBtn")},aside:{historyTab:document.getElementById("historyTabBtn"),memoryTab:document.getElementById("memoryTabBtn")}};exports.DOM=t;
},{}],"nfFM":[function(require,module,exports) {
"use strict";var n=require("./_config.js"),i={isMoving:!1,isShown:!1},o={on:function(){i.isMoving||(i.isMoving=!0,n.DOM.nav.button.classList.add("on"),n.DOM.body.classList.add("menu_pressed"),setTimeout(function(){return n.DOM.body.classList.add("menu_shown")},n.CONST.TIME_SHORT),setTimeout(function(){i.isShown=!0},n.CONST.TIME_LONG),setTimeout(function(){i.isMoving=!1},n.CONST.TIME_LONG))},off:function(){i.isMoving||(i.isMoving=!0,n.DOM.nav.button.classList.remove("on"),n.DOM.body.classList.remove("menu_shown"),setTimeout(function(){return n.DOM.body.classList.remove("menu_pressed")},n.CONST.TIME_LONG),setTimeout(function(){i.isShown=!1},n.CONST.TIME_LONG),setTimeout(function(){i.isMoving=!1},n.CONST.TIME_LONG))},init:function(){n.DOM.nav.button.addEventListener("click",function(){return i.isShown?o.off():o.on()}),n.DOM.nav.blinder.addEventListener("click",o.off),window.addEventListener("resize",o.off);var t=n.DOM.nav.contents;for(var s in t)t[s].addEventListener("click",o.off)}};o.init();
},{"./_config.js":"epnb"}],"kkm1":[function(require,module,exports) {
"use strict";var e=require("./_config.js"),t={};t.current=localStorage.getItem("theme"),t.preferDarkScheme=window.matchMedia("prefers-color-scheme: dark"),"dark"===t.current?e.DOM.body.classList.toggle("dark-theme"):"light"===t.current&&e.DOM.body.classList.toggle("light-theme");var r={toggleTheme:function(){var r;t.preferDarkScheme.matches?(e.DOM.body.classList.toggle("light-theme"),r=e.DOM.body.classList.contains("light-theme")?"light":"dark"):(e.DOM.body.classList.toggle("dark-theme"),r=e.DOM.body.classList.contains("dark-theme")?"dark":"light"),localStorage.setItem("theme",r)},init:function(){e.DOM.nav.contents.darkModeBtn.addEventListener("click",this.toggleTheme)}};r.init();
},{"./_config.js":"epnb"}],"aRYt":[function(require,module,exports) {
"use strict";require("./../scss/index.scss"),require("./nav"),require("./navcontent");
},{"./../scss/index.scss":"HYMH","./nav":"nfFM","./navcontent":"kkm1"}]},{},["aRYt"], null)
//# sourceMappingURL=/main.a0cbbf37.js.map