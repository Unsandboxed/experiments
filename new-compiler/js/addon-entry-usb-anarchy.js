(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["addon-entry-usb-anarchy"],{

/***/ "./src/addons/addons/usb-anarchy/_runtime_entry.js":
/*!*********************************************************!*\
  !*** ./src/addons/addons/usb-anarchy/_runtime_entry.js ***!
  \*********************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _anarchy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anarchy.js */ "./src/addons/addons/usb-anarchy/anarchy.js");
/* generated by pull.js */

const resources = {
  "anarchy.js": _anarchy_js__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/addons/addons/usb-anarchy/anarchy.js":
/*!**************************************************!*\
  !*** ./src/addons/addons/usb-anarchy/anarchy.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (async function (_ref) {
  let {
    addon
  } = _ref;
  const Blockly = await addon.tab.traps.getBlockly();
  Blockly.Connection.prototype.canConnectWithReason_ = () => {
    return ScratchBlocks.Connection.CAN_CONNECT;
  };
});

/***/ })

}]);
//# sourceMappingURL=addon-entry-usb-anarchy.js.map