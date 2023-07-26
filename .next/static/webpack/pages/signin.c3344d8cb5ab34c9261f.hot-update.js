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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbmluLmpzIl0sIm5hbWVzIjpbInNpZ25pbiIsImluaXRpYWxTdGF0ZSIsImVtYWlsIiwicGFzc3dvcmQiLCJ1c2VTdGF0ZSIsInVzZXJEYXRhIiwic2V0VXNlckRhdGEiLCJ1c2VDb250ZXh0IiwiRGF0YUNvbnRleHQiLCJzdGF0ZSIsImRpc3BhdGNoIiwiaGFuZGxlQ2hhbmdlSW5wdXQiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwidHlwZSIsInBheWxvYWQiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImxvYWRpbmciLCJwb3N0RGF0YSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJlcnJvciIsInN1Y2Nlc3MiLCJtc2ciLCJtYXhXaWR0aCIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQ25CLE1BQU1DLFlBQVksR0FBRztBQUFFQyxTQUFLLEVBQUUsRUFBVDtBQUFhQyxZQUFRLEVBQUU7QUFBdkIsR0FBckI7O0FBRG1CLGtCQUVhQyxzREFBUSxDQUFDSCxZQUFELENBRnJCO0FBQUEsTUFFWkksUUFGWTtBQUFBLE1BRUZDLFdBRkU7O0FBQUEsTUFHVkosS0FIVSxHQUdVRyxRQUhWLENBR1ZILEtBSFU7QUFBQSxNQUdIQyxRQUhHLEdBR1VFLFFBSFYsQ0FHSEYsUUFIRzs7QUFBQSxvQkFJQ0ksd0RBQVUsQ0FBQ0MsOERBQUQsQ0FKWDtBQUFBLE1BSWZDLEtBSmU7QUFBQSxNQUlUQyxRQUpTOztBQU9yQixNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUFDLENBQUMsRUFBSTtBQUFBLG9CQUNIQSxDQUFDLENBQUNDLE1BREM7QUFBQSxRQUNsQkMsSUFEa0IsYUFDbEJB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O0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFWTSxlQVdMO0FBQUcsaUJBQVMsRUFBQyxNQUFiO0FBQUEsNkRBQTZDLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxFQUFDLFdBQVg7QUFBdUIsd0JBQWMsTUFBckM7QUFBQSxpQ0FBc0M7QUFBRyxpQkFBSyxFQUFFO0FBQUNZLG1CQUFLLEVBQUM7QUFBUCxhQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVhLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBc0JELENBcEREOztHQUFNOUIsTTs7QUFzRFNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ25pbi5jMzM0NGQ4Y2I1YWIzNGM5MjYxZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgdXNlU3RhdGUsdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtEYXRhQ29udGV4dH0gZnJvbSAnLi4vc3RvcmUvR2xvYmFsU3RhdGUnXG5pbXBvcnQge3Bvc3REYXRhfSBmcm9tICcuLi91dGlscy9mZXRjaERhdGEnXG5cbmNvbnN0IHNpZ25pbiA9ICgpID0+IHtcbiAgY29uc3QgaW5pdGlhbFN0YXRlID0geyBlbWFpbDogJycsIHBhc3N3b3JkOiAnJyB9XG4gIGNvbnN0IFt1c2VyRGF0YSwgc2V0VXNlckRhdGFdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKVxuICBjb25zdCB7ICBlbWFpbCwgcGFzc3dvcmQgfSA9IHVzZXJEYXRhXG5jb25zdFtzdGF0ZSxkaXNwYXRjaF09dXNlQ29udGV4dChEYXRhQ29udGV4dClcbiAgXG5cbmNvbnN0IGhhbmRsZUNoYW5nZUlucHV0ID0gZSA9PiB7XG4gICAgICBjb25zdCB7bmFtZSwgdmFsdWV9ID0gZS50YXJnZXRcbiAgICAgIHNldFVzZXJEYXRhKHsuLi51c2VyRGF0YSwgW25hbWVdOnZhbHVlfSlcbiAgZGlzcGF0Y2goe3R5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7fX0pICBcbiAgfVxuXG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgZSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAvKiAgIGNvbnN0IGVyck1zZyA9IHZhbGlkKCBlbWFpbCwgcGFzc3dvcmQpXG4gICAgICBpZihlcnJNc2cpIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7ZXJyb3I6IGVyck1zZ30gfSlcbiAgICovXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7bG9hZGluZzogdHJ1ZX0gfSlcbiAgXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBwb3N0RGF0YSgnYXV0aC9yZWdpc3RlcicsIHVzZXJEYXRhKVxuICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgaWYocmVzLmVycikgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHtlcnJvcjogcmVzLmVycn0gfSlcblxuICAgICAgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHtzdWNjZXNzOiByZXMubXNnfSB9KVxuICAgICAvKiAgaWYocmVzLmVycikgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHtlcnJvcjogcmVzLmVycn0gfSlcbiAgXG4gICAgICByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge3N1Y2Nlc3M6IHJlcy5tc2d9IH0pICovXG4gICAgfVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPHRpdGxlPlxuICAgICAgICAgICAgICAgIFNpZ24gaW4gUGFnZVxuICAgICAgICAgICAgPC90aXRsZT5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9J214LWF1dG8gbXktNCcgc3R5bGU9e3ttYXhXaWR0aDpcIjUwMHB4XCJ9fT5cbiAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XG4gICAgPGxhYmVsIGh0bWxGb3I9XCJleGFtcGxlSW5wdXRFbWFpbDFcIiBjbGFzcz1cImZvcm0tbGFiZWxcIj5FbWFpbCBhZGRyZXNzPC9sYWJlbD5cbiAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJleGFtcGxlSW5wdXRFbWFpbDFcIiBhcmlhLWRlc2NyaWJlZGJ5PVwiZW1haWxIZWxwXCJuYW1lPSdlbWFpbCcgdmFsdWU9e2VtYWlsfW9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VJbnB1dH0vPlxuICAgIDxkaXYgaWQ9XCJlbWFpbEhlbHBcIiBjbGFzc05hbWU9XCJmb3JtLXRleHRcIj5XZSdsbCBuZXZlciBzaGFyZSB5b3VyIGVtYWlsIHdpdGggYW55b25lIGVsc2UuPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICA8bGFiZWwgaHRtbEZvcj1cImV4YW1wbGVJbnB1dFBhc3N3b3JkMVwiIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwiZXhhbXBsZUlucHV0UGFzc3dvcmQxXCIgbmFtZT0ncGFzc3dvcmQndmFsdWU9e3Bhc3N3b3JkfSBvbkNoYW5nZT17aGFuZGxlU3VibWl0fS8+XG4gIDwvZGl2PlxuICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLWRhcmsgdy0xMDBcIj5Mb2dpbjwvYnV0dG9uPlxuICAgPHAgY2xhc3NOYW1lPSdteS0yJz55b3UgZG9udCBoYXZlIGFuIGFjY291bnQ/PExpbmsgaHJlZj0nL3JlZ2lzdGVyJyBsZWdhY3lCZWhhdmlvcj48YSBzdHlsZT17e2NvbG9yOlwiY3JpbXNvblwifX0+UmVnaXN0ZXI8L2E+PC9MaW5rPjwvcD5cbjwvZm9ybT5cbjwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHNpZ25pbiJdLCJzb3VyY2VSb290IjoiIn0=