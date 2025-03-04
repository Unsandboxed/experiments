(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["addon-entry-editor-block-chomping"],{

/***/ "./src/addons/addons/editor-block-chomping/_runtime_entry.js":
/*!*******************************************************************!*\
  !*** ./src/addons/addons/editor-block-chomping/_runtime_entry.js ***!
  \*******************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/editor-block-chomping/userscript.js");

const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/addons/addons/editor-block-chomping/userscript.js":
/*!***************************************************************!*\
  !*** ./src/addons/addons/editor-block-chomping/userscript.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (async function (_ref) {
  let {
    addon
  } = _ref;
  const ScratchBlocks = await addon.tab.traps.getBlockly();

  // Rerender the dragged block when updating the insertion marker
  const ogConnectMarker = ScratchBlocks.InsertionMarkerManager.prototype.connectMarker_;
  ScratchBlocks.InsertionMarkerManager.prototype.connectMarker_ = function () {
    ogConnectMarker.call(this);
    if (!addon.self.disabled && this.firstMarker_) {
      var _this$workspace_, _this$workspace_$curr, _this$workspace_$curr2;
      const block = this === null || this === void 0 ? void 0 : (_this$workspace_ = this.workspace_) === null || _this$workspace_ === void 0 ? void 0 : (_this$workspace_$curr = _this$workspace_.currentGesture_) === null || _this$workspace_$curr === void 0 ? void 0 : (_this$workspace_$curr2 = _this$workspace_$curr.blockDragger_) === null || _this$workspace_$curr2 === void 0 ? void 0 : _this$workspace_$curr2.draggingBlock_;
      block.noMoveConnection = true;
      if (block) block.render(false);
    }
  };
  const ogDisconnectMarker = ScratchBlocks.InsertionMarkerManager.prototype.disconnectMarker_;
  ScratchBlocks.InsertionMarkerManager.prototype.disconnectMarker_ = function () {
    ogDisconnectMarker.call(this);
    if (!addon.self.disabled && this.firstMarker_) {
      var _this$workspace_2, _this$workspace_2$cur, _this$workspace_2$cur2;
      const block = this === null || this === void 0 ? void 0 : (_this$workspace_2 = this.workspace_) === null || _this$workspace_2 === void 0 ? void 0 : (_this$workspace_2$cur = _this$workspace_2.currentGesture_) === null || _this$workspace_2$cur === void 0 ? void 0 : (_this$workspace_2$cur2 = _this$workspace_2$cur.blockDragger_) === null || _this$workspace_2$cur2 === void 0 ? void 0 : _this$workspace_2$cur2.draggingBlock_;
      block.noMoveConnection = true;
      if (block) block.render(false);
    }
  };
  const ogDraw = ScratchBlocks.BlockSvg.prototype.renderDraw_;
  const ogMoveConnections = ScratchBlocks.BlockSvg.prototype.renderMoveConnections_;
  ScratchBlocks.BlockSvg.prototype.renderDraw_ = function (iconWidth, inputRows) {
    var _this$workspace, _this$workspace$curre, _this$workspace$curre2;
    if (addon.self.disabled) return ogDraw.call(this, iconWidth, inputRows);

    // If the block contains a statement (C) input and has an insertion marker,
    // use that to calculate the height of the statement inputs
    let computeBlock = this;
    if (this !== null && this !== void 0 && (_this$workspace = this.workspace) !== null && _this$workspace !== void 0 && (_this$workspace$curre = _this$workspace.currentGesture_) !== null && _this$workspace$curre !== void 0 && (_this$workspace$curre2 = _this$workspace$curre.blockDragger_) !== null && _this$workspace$curre2 !== void 0 && _this$workspace$curre2.draggedConnectionManager_) {
      const dragger = this.workspace.currentGesture_.blockDragger_;
      const manager = dragger.draggedConnectionManager_;
      if (manager.markerConnection_ && manager.firstMarker_ && dragger.draggingBlock_ == this && dragger.draggingBlock_.type == manager.firstMarker_.type) {
        if (inputRows.some(row => row.some(input => input.type === ScratchBlocks.NEXT_STATEMENT))) {
          computeBlock = manager.firstMarker_;
        }
      }
    }

    // Change the height of substacks
    // (If we set inputRows to computeBlock.renderCompute_,
    // the references to the inputs would be wrong
    // so they just won't update properly)
    if (computeBlock !== this) {
      const _inputRows = computeBlock.renderCompute_(iconWidth);
      for (let i = 0; i < inputRows.length; i++) {
        const row = inputRows[i];
        let update = false;
        for (const input of row) {
          if (input.type === ScratchBlocks.NEXT_STATEMENT) update = true;
        }
        if (update) row.height = Math.max(row.height, _inputRows[i].height);
      }
    }
    ogDraw.call(this, iconWidth, inputRows);

    // Moving the connections of a block while it's being dragged breaks it,
    // so don't
    if (computeBlock === this && !this.noMoveConnection) ogMoveConnections.call(this);
    this.noMoveConnection = false;
  };
  ScratchBlocks.BlockSvg.prototype.renderMoveConnections_ = function () {
    if (addon.self.disabled) return ogMoveConnections.call(this);
    // Do nothing (this function is instead called by renderDraw_)
  };
});

/***/ })

}]);
//# sourceMappingURL=addon-entry-editor-block-chomping.js.map