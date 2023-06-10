exports.id = 124;
exports.ids = [124];
exports.modules = {

/***/ 288:
/***/ ((module) => {

// Exports
module.exports = {
	"App": "Home_App__2g2bl",
	"container": "Home_container__bCOhY",
	"title": "Home_title__T09hD",
	"nftForm": "Home_nftForm__h5RzC",
	"nftPreview": "Home_nftPreview__1aCly",
	"dropdown": "Home_dropdown__q4Jzb"
};


/***/ }),

/***/ 124:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowNFTs": () => (/* binding */ ShowNFTs)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(288);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _useMetaplex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(356);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(247);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__]);
_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const ShowNFTs = ({ onClusterChange  })=>{
    const { metaplex  } = (0,_useMetaplex__WEBPACK_IMPORTED_MODULE_1__.useMetaplex)();
    const wallet = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__.useWallet)();
    const { 0: nft , 1: setNft  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const onClick = async ()=>{
        const myAssets = await metaplex.nfts().findAllByOwner({
            owner: metaplex.identity().publicKey
        });
        if (!myAssets.length) {
            setNft(null);
            return;
        }
        const randIdx = Math.floor(Math.random() * myAssets.length);
        const nft = await metaplex.nfts().load({
            metadata: myAssets[randIdx]
        });
        setNft(nft);
    };
    if (!wallet.connected) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                onChange: onClusterChange,
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().dropdown),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        value: "devnet",
                        children: "Devnet"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        value: "mainnet",
                        children: "Mainnet"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        value: "testnet",
                        children: "Testnet"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),
                            children: "NFT Mint Address"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().nftForm),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "text",
                                    value: nft ? nft.mint.address.toBase58() : "",
                                    readOnly: true
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: onClick,
                                    children: "Pick Random NFT"
                                })
                            ]
                        }),
                        nft && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().nftPreview),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    children: nft.name
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: nft?.json?.image || "/fallbackImage.jpg",
                                    alt: "The downloaded illustration of the provided NFT address."
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 356:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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


/***/ })

};
;