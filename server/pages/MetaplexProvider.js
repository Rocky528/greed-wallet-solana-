"use strict";
(() => {
var exports = {};
exports.id = 239;
exports.ids = [239,551,841];
exports.modules = {

/***/ 580:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MetaplexProvider": () => (/* binding */ MetaplexProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _metaplex_foundation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(644);
/* harmony import */ var _useMetaplex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(356);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(247);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_metaplex_foundation_js__WEBPACK_IMPORTED_MODULE_1__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__]);
([_metaplex_foundation_js__WEBPACK_IMPORTED_MODULE_1__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const MetaplexProvider = ({ children  })=>{
    const { connection  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__.useConnection)();
    const wallet = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__.useWallet)();
    const metaplex = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>_metaplex_foundation_js__WEBPACK_IMPORTED_MODULE_1__.Metaplex.make(connection).use((0,_metaplex_foundation_js__WEBPACK_IMPORTED_MODULE_1__.walletAdapterIdentity)(wallet)), [
        connection,
        wallet
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_useMetaplex__WEBPACK_IMPORTED_MODULE_2__.MetaplexContext.Provider, {
        value: {
            metaplex
        },
        children: children
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

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

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 644:
/***/ ((module) => {

module.exports = import("@metaplex-foundation/js");;

/***/ }),

/***/ 247:
/***/ ((module) => {

module.exports = import("@solana/wallet-adapter-react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(580));
module.exports = __webpack_exports__;

})();