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
/* harmony import */ var _store_GlobalState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/GlobalState */ "./store/GlobalState.js");
/* harmony import */ var _utils_fetchData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/fetchData */ "./utils/fetchData.js");





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

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_store_GlobalState__WEBPACK_IMPORTED_MODULE_7__["DataContext"]),
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
      var res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              /*   const errMsg = valid( email, password)
                if(errMsg) return dispatch({ type: 'NOTIFY', payload: {error: errMsg} })
              */

              dispatch({
                type: 'NOTIFY',
                payload: {
                  loading: true
                }
              });
              _context.next = 4;
              return Object(_utils_fetchData__WEBPACK_IMPORTED_MODULE_8__["postData"])('auth/register', userData);

            case 4:
              res = _context.sent;
              console.log(res);

              if (!res.err) {
                _context.next = 8;
                break;
              }

              return _context.abrupt("return", dispatch({
                type: 'NOTIFY',
                payload: {
                  error: res.err
                }
              }));

            case 8:
              return _context.abrupt("return", dispatch({
                type: 'NOTIFY',
                payload: {
                  success: res.msg
                }
              }));

            case 9:
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
        lineNumber: 41,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("form", {
      className: "mx-auto my-4",
      style: {
        maxWidth: "500px"
      },
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: "mb-3",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
          htmlFor: "exampleInputEmail1",
          "class": "form-label",
          children: "Email address"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
          type: "email",
          className: "form-control",
          id: "exampleInputEmail1",
          "aria-describedby": "emailHelp",
          name: "email",
          value: email,
          onChange: handleChangeInput
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          id: "emailHelp",
          className: "form-text",
          children: "We'll never share your email with anyone else."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 5
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 3
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: "mb-3",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
          htmlFor: "exampleInputPassword1",
          className: "form-label",
          children: "Password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
          type: "password",
          className: "form-control",
          id: "exampleInputPassword1",
          name: "password",
          value: password,
          onChange: handleSubmit
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 5
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 3
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
        type: "submit",
        className: "btn btn-dark w-100",
        children: "Login"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
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
            lineNumber: 56,
            columnNumber: 87
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 49
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 4
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbmluLmpzIl0sIm5hbWVzIjpbInNpZ25pbiIsImluaXRpYWxTdGF0ZSIsImVtYWlsIiwicGFzc3dvcmQiLCJ1c2VTdGF0ZSIsInVzZXJEYXRhIiwic2V0VXNlckRhdGEiLCJ1c2VDb250ZXh0IiwiRGF0YUNvbnRleHQiLCJzdGF0ZSIsImRpc3BhdGNoIiwiaGFuZGxlQ2hhbmdlSW5wdXQiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwidHlwZSIsInBheWxvYWQiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImxvYWRpbmciLCJwb3N0RGF0YSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJlcnJvciIsInN1Y2Nlc3MiLCJtc2ciLCJtYXhXaWR0aCIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQ25CLE1BQU1DLFlBQVksR0FBRztBQUFFQyxTQUFLLEVBQUUsRUFBVDtBQUFhQyxZQUFRLEVBQUU7QUFBdkIsR0FBckI7O0FBRG1CLGtCQUVhQyxzREFBUSxDQUFDSCxZQUFELENBRnJCO0FBQUEsTUFFWkksUUFGWTtBQUFBLE1BRUZDLFdBRkU7O0FBQUEsTUFHVkosS0FIVSxHQUdVRyxRQUhWLENBR1ZILEtBSFU7QUFBQSxNQUdIQyxRQUhHLEdBR1VFLFFBSFYsQ0FHSEYsUUFIRzs7QUFBQSxvQkFJQ0ksd0RBQVUsQ0FBQ0MsOERBQUQsQ0FKWDtBQUFBLE1BSWZDLEtBSmU7QUFBQSxNQUlUQyxRQUpTOztBQU9yQixNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUFDLENBQUMsRUFBSTtBQUFBLG9CQUNIQSxDQUFDLENBQUNDLE1BREM7QUFBQSxRQUNsQkMsSUFEa0IsYUFDbEJB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UyxFQUFDLG9CQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVZNLGVBV0w7QUFBRyxpQkFBUyxFQUFDLE1BQWI7QUFBQSw2REFBNkMscUVBQUMsZ0RBQUQ7QUFBTSxjQUFJLEVBQUMsV0FBWDtBQUF1Qix3QkFBYyxNQUFyQztBQUFBLGlDQUFzQztBQUFHLGlCQUFLLEVBQUU7QUFBQ1ksbUJBQUssRUFBQztBQUFQLGFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWEs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFzQkQsQ0FwREQ7O0dBQU05QixNOztBQXNEU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbmluLjYyZjllODI2MDEyYzMzZjA2YWNkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB1c2VTdGF0ZSx1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge0RhdGFDb250ZXh0fSBmcm9tICcuLi9zdG9yZS9HbG9iYWxTdGF0ZSdcbmltcG9ydCB7cG9zdERhdGF9IGZyb20gJy4uL3V0aWxzL2ZldGNoRGF0YSdcblxuY29uc3Qgc2lnbmluID0gKCkgPT4ge1xuICBjb25zdCBpbml0aWFsU3RhdGUgPSB7IGVtYWlsOiAnJywgcGFzc3dvcmQ6ICcnIH1cbiAgY29uc3QgW3VzZXJEYXRhLCBzZXRVc2VyRGF0YV0gPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUpXG4gIGNvbnN0IHsgIGVtYWlsLCBwYXNzd29yZCB9ID0gdXNlckRhdGFcbmNvbnN0W3N0YXRlLGRpc3BhdGNoXT11c2VDb250ZXh0KERhdGFDb250ZXh0KVxuICBcblxuY29uc3QgaGFuZGxlQ2hhbmdlSW5wdXQgPSBlID0+IHtcbiAgICAgIGNvbnN0IHtuYW1lLCB2YWx1ZX0gPSBlLnRhcmdldFxuICAgICAgc2V0VXNlckRhdGEoey4uLnVzZXJEYXRhLCBbbmFtZV06dmFsdWV9KVxuICBkaXNwYXRjaCh7dHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHt9fSkgIFxuICB9XG5cblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyBlID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIC8qICAgY29uc3QgZXJyTXNnID0gdmFsaWQoIGVtYWlsLCBwYXNzd29yZClcbiAgICAgIGlmKGVyck1zZykgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHtlcnJvcjogZXJyTXNnfSB9KVxuICAgKi9cbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHtsb2FkaW5nOiB0cnVlfSB9KVxuICBcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHBvc3REYXRhKCdhdXRoL3JlZ2lzdGVyJywgdXNlckRhdGEpXG4gICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICBpZihyZXMuZXJyKSByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge2Vycm9yOiByZXMuZXJyfSB9KVxuXG4gICAgICByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge3N1Y2Nlc3M6IHJlcy5tc2d9IH0pXG4gICAgIC8qICBpZihyZXMuZXJyKSByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge2Vycm9yOiByZXMuZXJyfSB9KVxuICBcbiAgICAgIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7c3VjY2VzczogcmVzLm1zZ30gfSkgKi9cbiAgICB9XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICA8dGl0bGU+XG4gICAgICAgICAgICAgICAgU2lnbiBpbiBQYWdlXG4gICAgICAgICAgICA8L3RpdGxlPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT0nbXgtYXV0byBteS00JyBzdHlsZT17e21heFdpZHRoOlwiNTAwcHhcIn19IG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICA8bGFiZWwgaHRtbEZvcj1cImV4YW1wbGVJbnB1dEVtYWlsMVwiIGNsYXNzPVwiZm9ybS1sYWJlbFwiPkVtYWlsIGFkZHJlc3M8L2xhYmVsPlxuICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImV4YW1wbGVJbnB1dEVtYWlsMVwiIGFyaWEtZGVzY3JpYmVkYnk9XCJlbWFpbEhlbHBcIm5hbWU9J2VtYWlsJyB2YWx1ZT17ZW1haWx9b25DaGFuZ2U9e2hhbmRsZUNoYW5nZUlucHV0fS8+XG4gICAgPGRpdiBpZD1cImVtYWlsSGVscFwiIGNsYXNzTmFtZT1cImZvcm0tdGV4dFwiPldlJ2xsIG5ldmVyIHNoYXJlIHlvdXIgZW1haWwgd2l0aCBhbnlvbmUgZWxzZS48L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgIDxsYWJlbCBodG1sRm9yPVwiZXhhbXBsZUlucHV0UGFzc3dvcmQxXCIgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJleGFtcGxlSW5wdXRQYXNzd29yZDFcIiBuYW1lPSdwYXNzd29yZCd2YWx1ZT17cGFzc3dvcmR9IG9uQ2hhbmdlPXtoYW5kbGVTdWJtaXR9Lz5cbiAgPC9kaXY+XG4gIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGFyayB3LTEwMFwiPkxvZ2luPC9idXR0b24+XG4gICA8cCBjbGFzc05hbWU9J215LTInPnlvdSBkb250IGhhdmUgYW4gYWNjb3VudD88TGluayBocmVmPScvcmVnaXN0ZXInIGxlZ2FjeUJlaGF2aW9yPjxhIHN0eWxlPXt7Y29sb3I6XCJjcmltc29uXCJ9fT5SZWdpc3RlcjwvYT48L0xpbms+PC9wPlxuPC9mb3JtPlxuPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2lnbmluIl0sInNvdXJjZVJvb3QiOiIifQ==