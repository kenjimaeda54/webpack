/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack"] = self["webpackChunkwebpack"] || []).push([["next"],{

/***/ "./src/next.js":
/*!*********************!*\
  !*** ./src/next.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("/* provided dependency */ var _ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\nconst array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\n\nconst filter = _.filter(array, function (num) {\n  return num % 2 == 0;\n});\n\nconst h1 = document.createElement('h1');\nconst p = document.createElement('p');\nh1.innerHTML += `Valores pares dos números: ${array}`;\nfilter.map(it => {\n  p.innerText += `${it},`;\n});\ndocument.body.appendChild(h1);\ndocument.body.appendChild(p);\n\n//# sourceURL=webpack://webpack/./src/next.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/next.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);