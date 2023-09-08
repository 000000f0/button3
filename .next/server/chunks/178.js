"use strict";
exports.id = 178;
exports.ids = [178];
exports.modules = {

/***/ 178:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_easy_qrcode_generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(501);
/* harmony import */ var react_easy_qrcode_generator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_easy_qrcode_generator__WEBPACK_IMPORTED_MODULE_2__);



function QRCodeGenerator() {
    const { 0: userAmount , 1: setUserAmount  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const ethereumAddress = "0xeebcc0f57f26da6cef510db4b670c9f97f559a4f"; // Replace with your Ethereum address
    const generateQRCode = ()=>{
        const qrString = `gwei;${userAmount};${ethereumAddress}`;
        (0,react_easy_qrcode_generator__WEBPACK_IMPORTED_MODULE_2__.qrcodeGenerator)({
            value: qrString,
            size: "180x180",
            title: "Title",
            qrAlt: "QR Code Image",
            showQrId: "qr-code",
            color: "#000080",
            bgcolor: "#ffffff"
        });
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "QRCodeGenerator",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: "number",
                value: userAmount,
                onChange: (e)=>setUserAmount(e.target.value)
                ,
                placeholder: "Enter Gwei amount"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: generateQRCode,
                children: "Generate QR Code"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                id: "qr-code"
            })
        ]
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QRCodeGenerator);


/***/ })

};
;