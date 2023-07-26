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
              return Object(_utils_fetchData__WEBPACK_IMPORTED_MODULE_9__["postData"])('auth/register', userData);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbmluLmpzIl0sIm5hbWVzIjpbInNpZ25pbiIsImluaXRpYWxTdGF0ZSIsImVtYWlsIiwicGFzc3dvcmQiLCJ1c2VTdGF0ZSIsInVzZXJEYXRhIiwic2V0VXNlckRhdGEiLCJ1c2VDb250ZXh0IiwiRGF0YUNvbnRleHQiLCJzdGF0ZSIsImRpc3BhdGNoIiwiaGFuZGxlQ2hhbmdlSW5wdXQiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwidHlwZSIsInBheWxvYWQiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImxvYWRpbmciLCJwb3N0RGF0YSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJlcnJvciIsInN1Y2Nlc3MiLCJtc2ciLCJtYXhXaWR0aCIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQ25CLE1BQU1DLFlBQVksR0FBRztBQUFFQyxTQUFLLEVBQUUsRUFBVDtBQUFhQyxZQUFRLEVBQUU7QUFBdkIsR0FBckI7O0FBRG1CLGtCQUVhQyxzREFBUSxDQUFDSCxZQUFELENBRnJCO0FBQUEsTUFFWkksUUFGWTtBQUFBLE1BRUZDLFdBRkU7O0FBQUEsTUFHVkosS0FIVSxHQUdVRyxRQUhWLENBR1ZILEtBSFU7QUFBQSxNQUdIQyxRQUhHLEdBR1VFLFFBSFYsQ0FHSEYsUUFIRzs7QUFBQSxvQkFJQ0ksd0RBQVUsQ0FBQ0MsOERBQUQsQ0FKWDtBQUFBLE1BSWZDLEtBSmU7QUFBQSxNQUlUQyxRQUpTOztBQU9yQixNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUFDLENBQUMsRUFBSTtBQUFBLG9CQUNIQSxDQUFDLENBQUNDLE1BREM7QUFBQSxRQUNsQkMsSUFEa0Is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QUssRUFBRTtBQUFDQyxtQkFBSyxFQUFDO0FBQVAsYUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXNCRCxDQXBERDs7R0FBTTlCLE07O0FBc0RTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaWduaW4uMmU0NWQwNmY5MjU5YmZjZDY4YWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHVzZVN0YXRlLHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB2YWxpZCBmcm9tICcuLi91dGlscy92YWxpZCdcbmltcG9ydCB7RGF0YUNvbnRleHR9IGZyb20gJy4uL3N0b3JlL0dsb2JhbFN0YXRlJ1xuaW1wb3J0IHtwb3N0RGF0YX0gZnJvbSAnLi4vdXRpbHMvZmV0Y2hEYXRhJ1xuXG5jb25zdCBzaWduaW4gPSAoKSA9PiB7XG4gIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHsgZW1haWw6ICcnLCBwYXNzd29yZDogJycgfVxuICBjb25zdCBbdXNlckRhdGEsIHNldFVzZXJEYXRhXSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZSlcbiAgY29uc3QgeyAgZW1haWwsIHBhc3N3b3JkIH0gPSB1c2VyRGF0YVxuY29uc3Rbc3RhdGUsZGlzcGF0Y2hdPXVzZUNvbnRleHQoRGF0YUNvbnRleHQpXG4gIFxuXG5jb25zdCBoYW5kbGVDaGFuZ2VJbnB1dCA9IGUgPT4ge1xuICAgICAgY29uc3Qge25hbWUsIHZhbHVlfSA9IGUudGFyZ2V0XG4gICAgICBzZXRVc2VyRGF0YSh7Li4udXNlckRhdGEsIFtuYW1lXTp2YWx1ZX0pXG4gIGRpc3BhdGNoKHt0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge319KSAgXG4gIH1cblxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIGUgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgLyogICBjb25zdCBlcnJNc2cgPSB2YWxpZCggZW1haWwsIHBhc3N3b3JkKVxuICAgICAgaWYoZXJyTXNnKSByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge2Vycm9yOiBlcnJNc2d9IH0pXG4gICAqL1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge2xvYWRpbmc6IHRydWV9IH0pXG4gIFxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgcG9zdERhdGEoJ2F1dGgvcmVnaXN0ZXInLCB1c2VyRGF0YSlcbiAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgIGlmKHJlcy5lcnIpIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7ZXJyb3I6IHJlcy5lcnJ9IH0pXG5cbiAgICAgIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7c3VjY2VzczogcmVzLm1zZ30gfSlcbiAgICAgLyogIGlmKHJlcy5lcnIpIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7ZXJyb3I6IHJlcy5lcnJ9IH0pXG4gIFxuICAgICAgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHtzdWNjZXNzOiByZXMubXNnfSB9KSAqL1xuICAgIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDx0aXRsZT5cbiAgICAgICAgICAgICAgICBTaWduIGluIFBhZ2VcbiAgICAgICAgICAgIDwvdGl0bGU+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPSdteC1hdXRvIG15LTQnIHN0eWxlPXt7bWF4V2lkdGg6XCI1MDBweFwifX0+XG4gIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgIDxsYWJlbCBodG1sRm9yPVwiZXhhbXBsZUlucHV0RW1haWwxXCIgY2xhc3M9XCJmb3JtLWxhYmVsXCI+RW1haWwgYWRkcmVzczwvbGFiZWw+XG4gICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwiZXhhbXBsZUlucHV0RW1haWwxXCIgYXJpYS1kZXNjcmliZWRieT1cImVtYWlsSGVscFwiLz5cbiAgICA8ZGl2IGlkPVwiZW1haWxIZWxwXCIgY2xhc3NOYW1lPVwiZm9ybS10ZXh0XCI+V2UnbGwgbmV2ZXIgc2hhcmUgeW91ciBlbWFpbCB3aXRoIGFueW9uZSBlbHNlLjwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XG4gICAgPGxhYmVsIGh0bWxGb3I9XCJleGFtcGxlSW5wdXRQYXNzd29yZDFcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+UGFzc3dvcmQ8L2xhYmVsPlxuICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImV4YW1wbGVJbnB1dFBhc3N3b3JkMVwiLz5cbiAgPC9kaXY+XG4gIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGFyayB3LTEwMFwiPkxvZ2luPC9idXR0b24+XG4gICA8cCBjbGFzc05hbWU9J215LTInPnlvdSBkb250IGhhdmUgYW4gYWNjb3VudD88TGluayBocmVmPScvcmVnaXN0ZXInIGxlZ2FjeUJlaGF2aW9yPjxhIHN0eWxlPXt7Y29sb3I6XCJjcmltc29uXCJ9fT5SZWdpc3RlcjwvYT48L0xpbms+PC9wPlxuPC9mb3JtPlxuPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2lnbmluIl0sInNvdXJjZVJvb3QiOiIifQ==