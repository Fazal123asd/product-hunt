"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Index\": () => (/* binding */ Index),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Index(props) {\n    const { data  } = props;\n    console.log(data.results);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: data.results.map((val)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: val.name\n            }, void 0, false, {\n                fileName: \"/Users/mohfazal1/Documents/GitHub/product-hunt/apps/product-hunt/pages/index.tsx\",\n                lineNumber: 8,\n                columnNumber: 27\n            }, this)\n        )\n    }, void 0, false, {\n        fileName: \"/Users/mohfazal1/Documents/GitHub/product-hunt/apps/product-hunt/pages/index.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);\nasync function getServerSideProps() {\n    const res = await fetch(`https://rickandmortyapi.com/api/character/`);\n    const data = await res.json();\n    if (!data) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/mohfazal1/Documents/GitHub/product-hunt/apps/product-hunt/pages/index.tsx\",\n            lineNumber: 19,\n            columnNumber: 12\n        }, this);\n    }\n    // Pass data to the page via props\n    return {\n        props: {\n            data: data\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUVPLFNBQVNBLEtBQUssQ0FBQ0MsS0FBSyxFQUFFO0lBQzdCLE1BQU0sRUFBQ0MsSUFBSSxHQUFDLEdBQUdELEtBQUs7SUFDcEJFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixJQUFJLENBQUNHLE9BQU8sQ0FBQztJQUN2QixxQkFDRSw4REFBQ0MsS0FBRztrQkFDSkosSUFBSSxDQUFDRyxPQUFPLENBQUNFLEdBQUcsQ0FBQ0MsQ0FBQUEsR0FBRyxpQkFBRSw4REFBQ0MsSUFBRTswQkFBRUQsR0FBRyxDQUFDRSxJQUFJOzs7OztvQkFBTTtRQUFBLENBQUM7Ozs7O1lBQ3BDLENBQ047Q0FDSDtBQUVELGlFQUFlVixLQUFLLEVBQUM7QUFFZCxlQUFlVyxrQkFBa0IsR0FBRztJQUMxQyxNQUFNQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDLENBQUMsMENBQTBDLENBQUMsQ0FBQztJQUNwRSxNQUFNWCxJQUFJLEdBQUcsTUFBTVUsR0FBRyxDQUFDRSxJQUFJLEVBQUU7SUFDN0IsSUFBSSxDQUFDWixJQUFJLEVBQUU7UUFDVCxxQkFBTyw4REFBQ2EsR0FBQztzQkFBQyxZQUFVOzs7OztnQkFBSSxDQUFDO0tBQzFCO0lBQ0Qsa0NBQWtDO0lBQ2xDLE9BQU87UUFBRWQsS0FBSyxFQUFFO1lBQ2RDLElBQUksRUFBRUEsSUFBSTtTQUNYO0tBQ0E7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbmRleC5tb2R1bGUuc2Nzcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBJbmRleChwcm9wcykge1xuY29uc3Qge2RhdGF9ID0gcHJvcHNcbmNvbnNvbGUubG9nKGRhdGEucmVzdWx0cylcbiAgcmV0dXJuIChcbiAgICA8ZGl2ID5cbiAgIHtkYXRhLnJlc3VsdHMubWFwKHZhbD0+PGxpPnt2YWwubmFtZX08L2xpPil9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci9gKVxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuICBpZiAoIWRhdGEpIHtcbiAgICByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIH1cbiAgLy8gUGFzcyBkYXRhIHRvIHRoZSBwYWdlIHZpYSBwcm9wc1xuICByZXR1cm4geyBwcm9wczoge1xuICAgIGRhdGE6IGRhdGFcbiAgfVxuICB9XG59Il0sIm5hbWVzIjpbIkluZGV4IiwicHJvcHMiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInJlc3VsdHMiLCJkaXYiLCJtYXAiLCJ2YWwiLCJsaSIsIm5hbWUiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJyZXMiLCJmZXRjaCIsImpzb24iLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();