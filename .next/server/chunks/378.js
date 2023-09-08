"use strict";
exports.id = 378;
exports.ids = [378];
exports.modules = {

/***/ 378:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _zxing_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(759);
/* harmony import */ var _zxing_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_zxing_library__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_webcam__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(250);
/* harmony import */ var react_webcam__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_webcam__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SendGweiComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(433);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(519);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_5__);






const BarcodeScannerComponent = ({ onUpdate , onError , width ="100%" , height ="100%" , facingMode ="environment" , delay =500 , videoConstraints  })=>{
    const webcamRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { 0: scannedValue , 1: setScannedValue  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    //const web3 = new Web3(new Web3.providers.HttpProvider(`https://goerli.infura.io/v3/7e3a144305ea44daac0f3c763e53ecfc`));
    const { 0: scannedValueNumberAmount , 1: setScannedValueNumberAmount  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    // Infura URL for the Goerli testnet
    const infuraUrl = 'https://goerli.infura.io/v3/7e3a144305ea44daac0f3c763e53ecfc';
    // Create a web3 instance using Infura
    const web3 = new (web3__WEBPACK_IMPORTED_MODULE_5___default())(new (web3__WEBPACK_IMPORTED_MODULE_5___default().providers.HttpProvider)(infuraUrl));
    const capture = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        var ref;
        const codeReader = new _zxing_library__WEBPACK_IMPORTED_MODULE_2__.BrowserMultiFormatReader();
        const imageSrc = webcamRef === null || webcamRef === void 0 ? void 0 : (ref = webcamRef.current) === null || ref === void 0 ? void 0 : ref.getScreenshot();
        if (imageSrc && !scannedValue) {
            try {
                const result = await codeReader.decodeFromImage(undefined, imageSrc);
                const barcodeValue = result.getText();
                setScannedValue(barcodeValue);
                onUpdate(barcodeValue, result);
                // Extract Ethereum address and amount from the scanned barcode
                const parts = barcodeValue.split(";");
                if (parts.length === 3) {
                    setScannedValueNumberAmount(parseFloat(parts[1]));
                }
            } catch (err) {
                console.error("Barcode scan error:", err);
                onError(err);
            }
        }
    }, [
        onUpdate,
        onError,
        scannedValue
    ]);
    const handleScanAgainClick = ()=>{
        setScannedValue(null);
        setScannedValueNumberAmount(0);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const interval = setInterval(capture, delay);
        return ()=>{
            clearInterval(interval);
        };
    }, [
        capture,
        delay
    ]);
    // Extract Ethereum address from the scanned barcode
    const scannedAddress = scannedValue ? scannedValue.split(";")[2] : "";
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_webcam__WEBPACK_IMPORTED_MODULE_3___default()), {
                width: width,
                height: height,
                ref: webcamRef,
                screenshotFormat: "image/jpeg",
                videoConstraints: videoConstraints || {
                    facingMode
                },
                audio: false,
                onUserMediaError: onError
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
            scannedValue && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        children: [
                            "Scanned Barcode: ",
                            scannedValue
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: handleScanAgainClick,
                        children: "Scan Again"
                    })
                ]
            }),
            error && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                children: [
                    "Error: ",
                    error
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: "Your Application"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SendGweiComponent__WEBPACK_IMPORTED_MODULE_4__["default"], {
                        walletAddress: scannedAddress,
                        web3: web3,
                        amount: scannedValueNumberAmount
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BarcodeScannerComponent);


/***/ })

};
;