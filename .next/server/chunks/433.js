"use strict";
exports.id = 433;
exports.ids = [433];
exports.modules = {

/***/ 433:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(519);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_2__);



const SendGweiComponent = ({ walletAddress , web3 , amount  })=>{
    const { 0: transactionHash , 1: setTransactionHash  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: error1 , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const handleSendGweiClick = async ()=>{
        try {
            if (web3 && walletAddress) {
                // Hardcoded private key for demonstration purposes only
                const addr_priv = '0x4eaa71ae5d5f71ffe8d000101572c000ebc863ff529905b8a9466681d5dea5fe';
                // Specify the sender's Ethereum address (from address)
                const fromAddress = '0xeebcc0f57f26da6cef510db4b670c9f97f559a4f'; // Replace with the actual sender's address
                // Create a new transaction
                const transactionParameters = {
                    from: fromAddress,
                    to: walletAddress,
                    value: web3.utils.toWei(amount.toString(), 'gwei'),
                    gas: 21000,
                    gasPrice: web3.utils.toWei('10', 'gwei')
                };
                // Sign the transaction with the private key
                const transaction = await web3.eth.accounts.signTransaction(transactionParameters, addr_priv);
                console.log('Transaction Signed:', transaction);
                // Send the signed transaction to the Ethereum network
                const receipt = await web3.eth.sendSignedTransaction(transaction.rawTransaction);
                console.log('Transaction Sent:', receipt);
                // Transaction was successful, you can access the receipt for details
                setTransactionHash(receipt.transactionHash);
                setError(null);
            } else {
                setError('Web3 or wallet address not available');
            }
        } catch (error) {
            console.error('Error sending Gwei:', error);
            setError('Error sending Gwei');
        }
    };
    console.log('Render SendGweiComponent');
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                children: [
                    "Send ",
                    amount,
                    " Gwei"
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                children: [
                    "Address: ",
                    walletAddress
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                onClick: handleSendGweiClick,
                children: [
                    "Send ",
                    amount,
                    " Gwei"
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
            transactionHash && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                children: [
                    "Transaction Hash: ",
                    transactionHash
                ]
            }),
            error1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                children: [
                    "Error: ",
                    error1
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SendGweiComponent);


/***/ })

};
;