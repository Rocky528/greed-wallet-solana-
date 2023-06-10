"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,551];
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

/***/ 678:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(288);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(247);
/* harmony import */ var _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(364);
/* harmony import */ var _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(280);
/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(847);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(831);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _MetaplexProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(580);
/* harmony import */ var _ShowNFTs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(124);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__, _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_3__, _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_4__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_5__, _MetaplexProvider__WEBPACK_IMPORTED_MODULE_7__, _ShowNFTs__WEBPACK_IMPORTED_MODULE_8__]);
([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__, _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_3__, _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_4__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_5__, _MetaplexProvider__WEBPACK_IMPORTED_MODULE_7__, _ShowNFTs__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











function Home() {
    const { 0: network , 1: setNetwork  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_3__.WalletAdapterNetwork.Devnet);
    const endpoint = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>(0,_solana_web3_js__WEBPACK_IMPORTED_MODULE_6__.clusterApiUrl)(network), [
        network
    ]);
    const wallets = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>[
            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_4__.PhantomWalletAdapter(),
            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_4__.GlowWalletAdapter(),
            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_4__.SlopeWalletAdapter(),
            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_4__.SolflareWalletAdapter({
                network
            }),
            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_4__.TorusWalletAdapter(), 
        ], [
        network
    ]);
    const handleChange = (event)=>{
        switch(event.target.value){
            case "devnet":
                setNetwork(_solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_3__.WalletAdapterNetwork.Devnet);
                break;
            case "mainnet":
                setNetwork(_solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_3__.WalletAdapterNetwork.Mainnet);
                break;
            case "testnet":
                setNetwork(_solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_3__.WalletAdapterNetwork.Testnet);
                break;
            default:
                setNetwork(_solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_3__.WalletAdapterNetwork.Devnet);
                break;
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.ConnectionProvider, {
            endpoint: endpoint,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.WalletProvider, {
                wallets: wallets,
                autoConnect: true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_5__.WalletModalProvider, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MetaplexProvider__WEBPACK_IMPORTED_MODULE_7__.MetaplexProvider, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().App),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_5__.WalletMultiButton, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ShowNFTs__WEBPACK_IMPORTED_MODULE_8__.ShowNFTs, {
                                    onClusterChange: handleChange
                                })
                            ]
                        })
                    })
                })
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 831:
/***/ ((module) => {

module.exports = require("@solana/web3.js");

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

/***/ 364:
/***/ ((module) => {

module.exports = import("@solana/wallet-adapter-base");;

/***/ }),

/***/ 247:
/***/ ((module) => {

module.exports = import("@solana/wallet-adapter-react");;

/***/ }),

/***/ 847:
/***/ ((module) => {

module.exports = import("@solana/wallet-adapter-react-ui");;

/***/ }),

/***/ 280:
/***/ ((module) => {

module.exports = import("@solana/wallet-adapter-wallets");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [124], () => (__webpack_exec__(678)));
module.exports = __webpack_exports__;

})();