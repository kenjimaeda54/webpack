/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack"] = self["webpackChunkwebpack"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("/* provided dependency */ var _ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n//nao esquecer de fazer o build para refletir o runtimeChunk\nconsole.log(_.difference([1, 2, 3], [4, 2])); //vai encontrar o ultimo elemento do array de acordo comm a função\n\nconsole.log(_.findLastIndex([5, 3, 3, 4, 2, 6], function (num) {\n  return num % 2 == 0;\n})); // const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\n// //assim que funciona o lodash\n// _.findLastIndex(array, function(num) {  });\n\n//# sourceURL=webpack://webpack/./src/index.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);