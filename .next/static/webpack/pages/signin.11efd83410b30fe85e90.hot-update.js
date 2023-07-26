webpackHotUpdate_N_E("pages/signin",{

/***/ "./pages/signin.js":
/*!*************************!*\
  !*** ./pages/signin.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_valid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/valid */ "./utils/valid.js");
/* harmony import */ var _store_GlobalState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/GlobalState */ "./store/GlobalState.js");
/* harmony import */ var _utils_fetchData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/fetchData */ "./utils/fetchData.js");





var _jsxFileName = "D:\\nextjs-ecommerce-master\\pages\\signin.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var signin = function signin() {
  _s();

  var initialState = {
    email: '',
    password: ''
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(initialState),
      userData = _useState[0],
      setUserData = _useState[1];

  var email = userData.email,
      password = userData.password;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_store_GlobalState__WEBPACK_IMPORTED_MODULE_8__["DataContext"]),
      state = _useContext[0],
      dispatch = _useContext[1];

  var handleChangeInput = function handleChangeInput(e) {
    var _e$target = e.target,
        name = _e$target.name,
        value = _e$target.value;
    setUserData(_objectSpread(_objectSpread({}, userData), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, name, value)));
    dispatch({
      type: 'NOTIFY',
      payload: {}
    });
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var errMsg, res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              errMsg = Object(_utils_valid__WEBPACK_IMPORTED_MODULE_7__["default"])(name, email, password, cf_password);

              if (!errMsg) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", dispatch({
                type: 'NOTIFY',
                payload: {
                  error: errMsg
                }
              }));

            case 4:
              dispatch({
                type: 'NOTIFY',
                payload: {
                  loading: true
                }
              });
              _context.next = 7;
              return Object(_utils_fetchData__WEBPACK_IMPORTED_MODULE_9__["postData"])('auth/register', userData);

            case 7:
              res = _context.sent;
              console.log(res);

              if (!res.err) {
                _context.next = 11;
                break;
              }

              return _context.abrupt("return", dispatch({
                type: 'NOTIFY',
                payload: {
                  error: res.err
                }
              }));

            case 11:
              return _context.abrupt("return", dispatch({
                type: 'NOTIFY',
                payload: {
                  success: res.msg
                }
              }));

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("title", {
        children: "Sign in Page"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("form", {
      className: "mx-auto my-4",
      style: {
        maxWidth: "500px"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: "mb-3",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
          htmlFor: "exampleInputEmail1",
          "class": "form-label",
          children: "Email address"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
          type: "email",
          className: "form-control",
          id: "exampleInputEmail1",
          "aria-describedby": "emailHelp"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          id: "emailHelp",
          className: "form-text",
          children: "We'll never share your email with anyone else."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 5
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 3
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: "mb-3",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
          htmlFor: "exampleInputPassword1",
          className: "form-label",
          children: "Password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
          type: "password",
          className: "form-control",
          id: "exampleInputPassword1"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 5
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 3
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
        type: "submit",
        className: "btn btn-dark w-100",
        children: "Login"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 3
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
        className: "my-2",
        children: ["you dont have an account?", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
          href: "/register",
          legacyBehavior: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("a", {
            style: {
              color: "crimson"
            },
            children: "Register"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 87
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 49
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 4
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }, _this);
};

_s(signin, "O6RXZ6VE20o2cNxybJCl++wOp5Q=");

/* harmony default export */ __webpack_exports__["default"] = (signin);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbmluLmpzIl0sIm5hbWVzIjpbInNpZ25pbiIsImluaXRpYWxTdGF0ZSIsImVtYWlsIiwicGFzc3dvcmQiLCJ1c2VTdGF0ZSIsInVzZXJEYXRhIiwic2V0VXNlckRhdGEiLCJ1c2VDb250ZXh0IiwiRGF0YUNvbnRleHQiLCJzdGF0ZSIsImRpc3BhdGNoIiwiaGFuZGxlQ2hhbmdlSW5wdXQiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwidHlwZSIsInBheWxvYWQiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImVyck1zZyIsInZhbGlkIiwiY2ZfcGFzc3dvcmQiLCJlcnJvciIsImxvYWRpbmciLCJwb3N0RGF0YSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJzdWNjZXNzIiwibXNnIiwibWF4V2lkdGgiLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUNuQixNQUFNQyxZQUFZLEdBQUc7QUFBRUMsU0FBSyxFQUFFLEVBQVQ7QUFBYUMsWUFBUSxFQUFFO0FBQXZCLEdBQXJCOztBQURtQixrQkFFYUMsc0RBQVEsQ0FBQ0gsWUFBRCxDQUZyQjtBQUFBLE1BRVpJLFFBRlk7QUFBQSxNQUVGQyxXQUZFOztBQUFBLE1BR1ZKLEtBSFUsR0FHVUcsUUFIVixDQUdWSCxLQUhVO0FBQUEsTUFHSEMsUUFIRyxHQUdVRSxRQUhWLENBR0hGLFFBSEc7O0FBQUEsb0JBSUNJLHdEQUFVLENBQUNDLDhEQUFELENBSlg7QUFBQSxNQUlmQyxLQUplO0FBQUEsTUFJVEMsUUFKUzs7QUFPckIsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFBQyxDQUFDLEVBQUk7QUFBQSxvQkFDSEEsQ0FBQyxDQUFDQyxNQURDO0FBQUEsUUFDbEJDLElBRGtCLGFBQ2xCQSxJQURrQjtBQUFBLFFBQ1pDLEtBRFksYUFDWkEsS0FEWTtBQUV6QlQsZUFBVyxpQ0FBS0QsUUFBTCxxR0FBZ0JTLElBQWhCLEVBQXNCQyxLQUF0QixHQUFYO0FBQ0pMLFlBQVEsQ0FBQztBQUFDTSxVQUFJLEVBQUUsUUFBUDtBQUFpQkMsYUFBTyxFQUFFO0FBQTFCLEtBQUQsQ0FBUjtBQUNDLEdBSkg7O0FBT0UsTUFBTUMsWUFBWTtBQUFBLGdNQUFHLGlCQUFNTixDQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNqQkEsZUFBQyxDQUFDTyxjQUFGO0FBQ01DLG9CQUZXLEdBRUZDLDREQUFLLENBQUNQLElBQUQsRUFBT1osS0FBUCxFQUFjQyxRQUFkLEVBQXdCbUIsV0FBeEIsQ0FGSDs7QUFBQSxtQkFHZEYsTUFIYztBQUFBO0FBQUE7QUFBQTs7QUFBQSwrQ0FHQ1YsUUFBUSxDQUFDO0FBQUVNLG9CQUFJLEVBQUUsUUFBUjtBQUFrQkMsdUJBQU8sRUFBRTtBQUFDTSx1QkFBSyxFQUFFSDtBQUFSO0FBQTNCLGVBQUQsQ0FIVDs7QUFBQTtBQUtqQlYsc0JBQVEsQ0FBQztBQUFFTSxvQkFBSSxFQUFFLFFBQVI7QUFBa0JDLHVCQUFPLEVBQUU7QUFBQ08seUJBQU8sRUFBRTtBQUFWO0FBQTNCLGVBQUQsQ0FBUjtBQUxpQjtBQUFBLHFCQU9DQyxpRUFBUSxDQUFDLGVBQUQsRUFBa0JwQixRQUFsQixDQVBUOztBQUFBO0FBT1hxQixpQkFQVztBQVFqQkMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaOztBQVJpQixtQkFTZEEsR0FBRyxDQUFDRyxHQVRVO0FBQUE7QUFBQTtBQUFBOztBQUFBLCtDQVNFbkIsUUFBUSxDQUFDO0FBQUVNLG9CQUFJLEVBQUUsUUFBUjtBQUFrQkMsdUJBQU8sRUFBRTtBQUFDTSx1QkFBSyxFQUFFRyxHQUFHLENBQUNHO0FBQVo7QUFBM0IsZUFBRCxDQVRWOztBQUFBO0FBQUEsK0NBV1ZuQixRQUFRLENBQUM7QUFBRU0sb0JBQUksRUFBRSxRQUFSO0FBQWtCQyx1QkFBTyxFQUFFO0FBQUNhLHlCQUFPLEVBQUVKLEdBQUcsQ0FBQ0s7QUFBZDtBQUEzQixlQUFELENBWEU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWmIsWUFBWTtBQUFBO0FBQUE7QUFBQSxLQUFsQjs7QUFnQkEsc0JBQ0U7QUFBQSw0QkFDSSxxRUFBQyxnREFBRDtBQUFBLDZCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBTUk7QUFBTSxlQUFTLEVBQUMsY0FBaEI7QUFBK0IsV0FBSyxFQUFFO0FBQUNjLGdCQUFRLEVBQUM7QUFBVixPQUF0QztBQUFBLDhCQUNOO0FBQUssaUJBQVMsRUFBQyxNQUFmO0FBQUEsZ0NBQ0U7QUFBTyxpQkFBTyxFQUFDLG9CQUFmO0FBQW9DLG1CQUFNLFlBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBTyxjQUFJLEVBQUMsT0FBWjtBQUFvQixtQkFBUyxFQUFDLGNBQTlCO0FBQTZDLFlBQUUsRUFBQyxvQkFBaEQ7QUFBcUUsOEJBQWlCO0FBQXRGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFHRTtBQUFLLFlBQUUsRUFBQyxXQUFSO0FBQW9CLG1CQUFTLEVBQUMsV0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRE0sZUFNTjtBQUFLLGlCQUFTLEVBQUMsTUFBZjtBQUFBLGdDQUNFO0FBQU8saUJBQU8sRUFBQyx1QkFBZjtBQUF1QyxtQkFBUyxFQUFDLFlBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBTyxjQUFJLEVBQUMsVUFBWjtBQUF1QixtQkFBUyxFQUFDLGNBQWpDO0FBQWdELFlBQUUsRUFBQztBQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5NLGVBVU47QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFzQixpQkFBUyxFQUFDLG9CQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVZNLGVBV0w7QUFBRyxpQkFBUyxFQUFDLE1BQWI7QUFBQSw2REFBNkMscUVBQUMsZ0RBQUQ7QUFBTSxjQUFJLEVBQUMsV0FBWDtBQUF1Qix3QkFBYyxNQUFyQztBQUFBLGlDQUFzQztBQUFHLGlCQUFLLEVBQUU7QUFBQ0MsbUJBQUssRUFBQztBQUFQLGFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWEs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFzQkQsQ0FwREQ7O0dBQU1qQyxNOztBQXNEU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbmluLjExZWZkODM0MTBiMzBmZTg1ZTkwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB1c2VTdGF0ZSx1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgdmFsaWQgZnJvbSAnLi4vdXRpbHMvdmFsaWQnXG5pbXBvcnQge0RhdGFDb250ZXh0fSBmcm9tICcuLi9zdG9yZS9HbG9iYWxTdGF0ZSdcbmltcG9ydCB7cG9zdERhdGF9IGZyb20gJy4uL3V0aWxzL2ZldGNoRGF0YSdcblxuY29uc3Qgc2lnbmluID0gKCkgPT4ge1xuICBjb25zdCBpbml0aWFsU3RhdGUgPSB7IGVtYWlsOiAnJywgcGFzc3dvcmQ6ICcnIH1cbiAgY29uc3QgW3VzZXJEYXRhLCBzZXRVc2VyRGF0YV0gPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUpXG4gIGNvbnN0IHsgIGVtYWlsLCBwYXNzd29yZCB9ID0gdXNlckRhdGFcbmNvbnN0W3N0YXRlLGRpc3BhdGNoXT11c2VDb250ZXh0KERhdGFDb250ZXh0KVxuICBcblxuY29uc3QgaGFuZGxlQ2hhbmdlSW5wdXQgPSBlID0+IHtcbiAgICAgIGNvbnN0IHtuYW1lLCB2YWx1ZX0gPSBlLnRhcmdldFxuICAgICAgc2V0VXNlckRhdGEoey4uLnVzZXJEYXRhLCBbbmFtZV06dmFsdWV9KVxuICBkaXNwYXRjaCh7dHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHt9fSkgIFxuICB9XG5cblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyBlID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgY29uc3QgZXJyTXNnID0gdmFsaWQobmFtZSwgZW1haWwsIHBhc3N3b3JkLCBjZl9wYXNzd29yZClcbiAgICAgIGlmKGVyck1zZykgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHtlcnJvcjogZXJyTXNnfSB9KVxuICBcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHtsb2FkaW5nOiB0cnVlfSB9KVxuICBcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHBvc3REYXRhKCdhdXRoL3JlZ2lzdGVyJywgdXNlckRhdGEpXG4gICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICBpZihyZXMuZXJyKSByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge2Vycm9yOiByZXMuZXJyfSB9KVxuXG4gICAgICByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge3N1Y2Nlc3M6IHJlcy5tc2d9IH0pXG4gICAgIC8qICBpZihyZXMuZXJyKSByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge2Vycm9yOiByZXMuZXJyfSB9KVxuICBcbiAgICAgIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7c3VjY2VzczogcmVzLm1zZ30gfSkgKi9cbiAgICB9XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICA8dGl0bGU+XG4gICAgICAgICAgICAgICAgU2lnbiBpbiBQYWdlXG4gICAgICAgICAgICA8L3RpdGxlPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT0nbXgtYXV0byBteS00JyBzdHlsZT17e21heFdpZHRoOlwiNTAwcHhcIn19PlxuICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICA8bGFiZWwgaHRtbEZvcj1cImV4YW1wbGVJbnB1dEVtYWlsMVwiIGNsYXNzPVwiZm9ybS1sYWJlbFwiPkVtYWlsIGFkZHJlc3M8L2xhYmVsPlxuICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImV4YW1wbGVJbnB1dEVtYWlsMVwiIGFyaWEtZGVzY3JpYmVkYnk9XCJlbWFpbEhlbHBcIi8+XG4gICAgPGRpdiBpZD1cImVtYWlsSGVscFwiIGNsYXNzTmFtZT1cImZvcm0tdGV4dFwiPldlJ2xsIG5ldmVyIHNoYXJlIHlvdXIgZW1haWwgd2l0aCBhbnlvbmUgZWxzZS48L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgIDxsYWJlbCBodG1sRm9yPVwiZXhhbXBsZUlucHV0UGFzc3dvcmQxXCIgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJleGFtcGxlSW5wdXRQYXNzd29yZDFcIi8+XG4gIDwvZGl2PlxuICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLWRhcmsgdy0xMDBcIj5Mb2dpbjwvYnV0dG9uPlxuICAgPHAgY2xhc3NOYW1lPSdteS0yJz55b3UgZG9udCBoYXZlIGFuIGFjY291bnQ/PExpbmsgaHJlZj0nL3JlZ2lzdGVyJyBsZWdhY3lCZWhhdmlvcj48YSBzdHlsZT17e2NvbG9yOlwiY3JpbXNvblwifX0+UmVnaXN0ZXI8L2E+PC9MaW5rPjwvcD5cbjwvZm9ybT5cbjwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHNpZ25pbiJdLCJzb3VyY2VSb290IjoiIn0=