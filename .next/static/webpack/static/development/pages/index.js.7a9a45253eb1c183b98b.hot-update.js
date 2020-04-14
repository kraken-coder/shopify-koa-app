webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/index.es.js");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopify/app-bridge-react */ "./node_modules/@shopify/app-bridge-react/index.js");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_3__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

var index = function index() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var handleSelection = function handleSelection(resource) {
    setOpen(false);
    var idsFromResources = resources.selection.map(function (product) {
      return product.id;
    });
    console.log(idsFromResources);
  };

  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Page"], null, __jsx(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_3__["TitleBar"], {
    primaryAction: {
      content: 'Select Products'
    }
  }), __jsx(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_3__["ResourcePicker"], {
    resourceType: "Product",
    showVariants: false,
    open: open,
    onSelection: function onSelection(resources) {
      return handleSelection(resources);
    },
    onCancel: function onCancel() {
      return setOpen(false);
    }
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["EmptyState"], {
    heading: "Discount your products temporarily",
    action: {
      content: 'Select products',
      onAction: function onAction() {
        return setOpen(true);
      }
    },
    image: img
  }, __jsx("p", null, "Select products to change their price -temporarily."))));
};

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ })

})
//# sourceMappingURL=index.js.7a9a45253eb1c183b98b.hot-update.js.map