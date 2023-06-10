"use strict";
(() => {
var exports = {};
exports.id = 841;
exports.ids = [841];
exports.modules = {

/***/ 356:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MetaplexContext": () => (/* binding */ MetaplexContext),
/* harmony export */   "useMetaplex": () => (/* binding */ useMetaplex)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const DEFAULT_CONTEXT = {
    metaplex: null
};
const MetaplexContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(DEFAULT_CONTEXT);
function useMetaplex() {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(MetaplexContext);
}


/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(356));
module.exports = __webpack_exports__;

})();