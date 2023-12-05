"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ \"./components/Header/index.js\");\n/* harmony import */ var _components_Socials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Socials */ \"./components/Socials/index.js\");\n/* harmony import */ var _components_WorkCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/WorkCard */ \"./components/WorkCard/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ \"./utils/index.js\");\n/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../animations */ \"./animations/index.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! typed.js */ \"./node_modules/typed.js/dist/typed.module.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../data */ \"./data.js\");\n\n\n\n\n\n\n\n\n\n\n\n// Local Data\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    var _this = this;\n    _s();\n    // Ref\n    var workRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var aboutRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var textOne = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var textTwo = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var el = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    // Handling Scroll\n    var handleWorkScroll = function() {\n        window.scrollTo({\n            top: workRef.current.offsetTop,\n            left: 0,\n            behavior: \"smooth\"\n        });\n    };\n    var handleAboutScroll = function() {\n        window.scrollTo({\n            top: aboutRef.current.offsetTop,\n            left: 0,\n            behavior: \"smooth\"\n        });\n    };\n    (0,_utils__WEBPACK_IMPORTED_MODULE_5__.useIsomorphicLayoutEffect)(function() {\n        (0,_animations__WEBPACK_IMPORTED_MODULE_6__.stagger)([\n            textOne.current,\n            textTwo.current\n        ], {\n            y: 30\n        }, {\n            y: 0\n        });\n    }, []);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(function() {\n        var typed = new typed_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"](el.current, {\n            strings: [\n                \"domi\",\n                \"Domenico Valentino\",\n                \"a Web Developper\",\n                \"a Software Developper\",\n                \"a Student\",\n                \"a Robotics Enthusiast\",\n                \"a Canadian\"\n            ],\n            typeSpeed: 100\n        });\n        return function() {\n            // Destroy Typed instance during cleanup to stop animation\n            typed.destroy();\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_8___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: _data__WEBPACK_IMPORTED_MODULE_10__[\"default\"].name\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Domenico\\\\Desktop\\\\NextPortfolio\\\\pages\\\\index.js\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Domenico\\\\Desktop\\\\NextPortfolio\\\\pages\\\\index.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container mx-auto mb-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        handleWorkScroll: handleWorkScroll,\n                        handleAboutScroll: handleAboutScroll\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Domenico\\\\Desktop\\\\NextPortfolio\\\\pages\\\\index.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"laptop:mt-20 mob:mt-10\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-5\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        ref: textOne,\n                                        className: \"text-8xl mob:text-3xl laptop:text-8xl mob:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5\",\n                                        children: [\n                                            \"Hi there\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"waving-hand\",\n                                                children: \"\\uD83D\\uDC4B\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Domenico\\\\Desktop\\\\NextPortfolio\\\\pages\\\\index.js\",\n                                                lineNumber: 76,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Domenico\\\\Desktop\\\\NextPortfolio\\\\pages\\\\index.js\",\n                                        lineNumber: 72,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        ref: textTwo,\n                                        className: \"text-8xl mob:text-3xl laptop:text-8xl mob:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5\",\n                                        children: [\n                                            \"I'm \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                ref: el\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Domenico\\\\Desktop\\\\NextPortfolio\\\\pages\\\\index.js\",\n                                                lineNumber: 81,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Domenico\\\\Desktop\\\\NextPortfolio\\\\pages\\\\index.js\",\n                                        lineNumber: 78,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Domenico\\\\Desktop\\\\NextPortfolio\\\\pages\\\\index.js\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Socials__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                className: \"mt-5 mob:mt-2 laptop:mt-5\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Domenico\\\\Desktop\\\\NextPortfolio\\\\pages\\\\index.js\",\n                                lineNumber: 85,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Domenico\\\\Desktop\\\\NextPortfolio\\\\pages\\\\index.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-40 mob:mt-10 laptop:mt-40 mob:p-2 laptop:p-0\",\n                        ref: workRef,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-2xl text-bold\",\n                                children: \"Work.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Domenico\\\\Desktop\\\\NextPortfolio\\\\pages\\\\index.js\",\n                                lineNumber: 90,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-10 mob:mt-5 laptop:mt-10 grid grid-cols-2 mob:grid-cols-1 laptop:grid-cols-2 gap-4\",\n                                children: _data__WEBPACK_IMPORTED_MODULE_10__[\"default\"].projects.map(function(project, index) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_WorkCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        img: project.imageSrc,\n                                        name: project.title,\n                                        description: project.description,\n                                        onClick: function() {\n                                            return window.open(project.url);\n                                        }\n                                    }, index, false, {\n                                        fileName: \"C:\\\\Users\\\\Domenico\\\\Desktop\\\\NextPortfolio\\\\pages\\\\index.js\",\n                                        lineNumber: 93,\n                                        columnNumber: 15\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Domenico\\\\Desktop\\\\NextPortfolio\\\\pages\\\\index.js\",\n                                lineNumber: 91,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Domenico\\\\Desktop\\\\NextPortfolio\\\\pages\\\\index.js\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-40 mob:mt-2 laptop:mt-40 mob:p-2 laptop:p-0\",\n                        ref: aboutRef,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-2xl text-bold\",\n                                children: \"About.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Domenico\\\\Desktop\\\\NextPortfolio\\\\pages\\\\index.js\",\n                                lineNumber: 106,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"m-5 mob:m-0 laptop:m-5 mob:mt-2 laptop:ml-0 ml-0 text-3xl mob:text-xl laptop:text-3xl w-3/5 mob:w-full laptop:w-3/5\",\n                                children: _data__WEBPACK_IMPORTED_MODULE_10__[\"default\"].aboutpara\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Domenico\\\\Desktop\\\\NextPortfolio\\\\pages\\\\index.js\",\n                                lineNumber: 107,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Domenico\\\\Desktop\\\\NextPortfolio\\\\pages\\\\index.js\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Domenico\\\\Desktop\\\\NextPortfolio\\\\pages\\\\index.js\",\n                        lineNumber: 111,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Domenico\\\\Desktop\\\\NextPortfolio\\\\pages\\\\index.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"nvw6WztiUuM5Q4Hco1jMgr2dRIY=\", false, function() {\n    return [\n        _utils__WEBPACK_IMPORTED_MODULE_5__.useIsomorphicLayoutEffect\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Oi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XHJcbmltcG9ydCBTb2NpYWxzIGZyb20gXCIuLi9jb21wb25lbnRzL1NvY2lhbHNcIjtcclxuaW1wb3J0IFdvcmtDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL1dvcmtDYXJkXCI7XHJcbmltcG9ydCB7IHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QgfSBmcm9tIFwiLi4vdXRpbHNcIjtcclxuaW1wb3J0IHsgc3RhZ2dlciB9IGZyb20gXCIuLi9hbmltYXRpb25zXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IFR5cGVkIGZyb20gJ3R5cGVkLmpzJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vIExvY2FsIERhdGFcclxuaW1wb3J0IGRhdGEgZnJvbSBcIi4uL2RhdGFcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgLy8gUmVmXHJcbiAgY29uc3Qgd29ya1JlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IGFib3V0UmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgdGV4dE9uZSA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IHRleHRUd28gPSB1c2VSZWYoKTtcclxuICBjb25zdCBlbCA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuXHJcbiAgLy8gSGFuZGxpbmcgU2Nyb2xsXHJcbiAgY29uc3QgaGFuZGxlV29ya1Njcm9sbCA9ICgpID0+IHtcclxuICAgIHdpbmRvdy5zY3JvbGxUbyh7XHJcbiAgICAgIHRvcDogd29ya1JlZi5jdXJyZW50Lm9mZnNldFRvcCxcclxuICAgICAgbGVmdDogMCxcclxuICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVBYm91dFNjcm9sbCA9ICgpID0+IHtcclxuICAgIHdpbmRvdy5zY3JvbGxUbyh7XHJcbiAgICAgIHRvcDogYWJvdXRSZWYuY3VycmVudC5vZmZzZXRUb3AsXHJcbiAgICAgIGxlZnQ6IDAsXHJcbiAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICBzdGFnZ2VyKFxyXG4gICAgICBbdGV4dE9uZS5jdXJyZW50LCB0ZXh0VHdvLmN1cnJlbnRdLFxyXG4gICAgICB7IHk6IDMwIH0sXHJcbiAgICAgIHsgeTogMCB9XHJcbiAgICApO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHR5cGVkID0gbmV3IFR5cGVkKGVsLmN1cnJlbnQsIHtcclxuICAgICAgc3RyaW5nczogWydkb21pJywgJ0RvbWVuaWNvIFZhbGVudGlubycsICdhIFdlYiBEZXZlbG9wcGVyJywgJ2EgU29mdHdhcmUgRGV2ZWxvcHBlcicsICdhIFN0dWRlbnQnLCAnYSBSb2JvdGljcyBFbnRodXNpYXN0JywgJ2EgQ2FuYWRpYW4nXSxcclxuICAgICAgdHlwZVNwZWVkOiAxMDAsXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAvLyBEZXN0cm95IFR5cGVkIGluc3RhbmNlIGR1cmluZyBjbGVhbnVwIHRvIHN0b3AgYW5pbWF0aW9uXHJcbiAgICAgIHR5cGVkLmRlc3Ryb3koKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPntkYXRhLm5hbWV9PC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIG1iLTEwXCI+XHJcbiAgICAgICAgPEhlYWRlclxyXG4gICAgICAgICAgaGFuZGxlV29ya1Njcm9sbD17aGFuZGxlV29ya1Njcm9sbH1cclxuICAgICAgICAgIGhhbmRsZUFib3V0U2Nyb2xsPXtoYW5kbGVBYm91dFNjcm9sbH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFwdG9wOm10LTIwIG1vYjptdC0xMFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC01XCI+XHJcbiAgICAgICAgICAgIDxoMVxyXG4gICAgICAgICAgICAgIHJlZj17dGV4dE9uZX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LTh4bCBtb2I6dGV4dC0zeGwgbGFwdG9wOnRleHQtOHhsIG1vYjpwLTIgdGV4dC1ib2xkIHctNC81IG1vYjp3LWZ1bGwgbGFwdG9wOnctNC81XCI+XHJcbiAgICAgICAgICAgICAgICBIaSB0aGVyZSBcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndhdmluZy1oYW5kXCI+8J+Rizwvc3Bhbj5cclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPGgxXHJcbiAgICAgICAgICAgICAgcmVmPXt0ZXh0VHdvfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtOHhsIG1vYjp0ZXh0LTN4bCBsYXB0b3A6dGV4dC04eGwgbW9iOnAtMiB0ZXh0LWJvbGQgdy00LzUgbW9iOnctZnVsbCBsYXB0b3A6dy00LzVcIj5cclxuICAgICAgICAgICAgICBJJ20gPHNwYW4gcmVmPXtlbH0gLz5cclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxTb2NpYWxzIGNsYXNzTmFtZT1cIm10LTUgbW9iOm10LTIgbGFwdG9wOm10LTVcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTQwIG1vYjptdC0xMCBsYXB0b3A6bXQtNDAgbW9iOnAtMiBsYXB0b3A6cC0wXCJcclxuICAgICAgICAgIHJlZj17d29ya1JlZn0+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC1ib2xkXCI+V29yay48L2gxPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMCBtb2I6bXQtNSBsYXB0b3A6bXQtMTAgZ3JpZCBncmlkLWNvbHMtMiBtb2I6Z3JpZC1jb2xzLTEgbGFwdG9wOmdyaWQtY29scy0yIGdhcC00XCI+XHJcbiAgICAgICAgICAgIHtkYXRhLnByb2plY3RzLm1hcCgocHJvamVjdCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8V29ya0NhcmRcclxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICBpbWc9e3Byb2plY3QuaW1hZ2VTcmN9XHJcbiAgICAgICAgICAgICAgICBuYW1lPXtwcm9qZWN0LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3Byb2plY3QuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB3aW5kb3cub3Blbihwcm9qZWN0LnVybCl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtdC00MCBtb2I6bXQtMiBsYXB0b3A6bXQtNDAgbW9iOnAtMiBsYXB0b3A6cC0wXCJcclxuICAgICAgICAgIHJlZj17YWJvdXRSZWZ9PlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtYm9sZFwiPkFib3V0LjwvaDE+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtLTUgbW9iOm0tMCBsYXB0b3A6bS01IG1vYjptdC0yIGxhcHRvcDptbC0wIG1sLTAgdGV4dC0zeGwgbW9iOnRleHQteGwgbGFwdG9wOnRleHQtM3hsIHctMy81IG1vYjp3LWZ1bGwgbGFwdG9wOnctMy81XCI+XHJcbiAgICAgICAgICAgIHtkYXRhLmFib3V0cGFyYX1cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlUmVmIiwiSGVhZGVyIiwiU29jaWFscyIsIldvcmtDYXJkIiwidXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCIsInN0YWdnZXIiLCJGb290ZXIiLCJIZWFkIiwiVHlwZWQiLCJSZWFjdCIsImRhdGEiLCJIb21lIiwid29ya1JlZiIsImFib3V0UmVmIiwidGV4dE9uZSIsInRleHRUd28iLCJlbCIsImhhbmRsZVdvcmtTY3JvbGwiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInRvcCIsImN1cnJlbnQiLCJvZmZzZXRUb3AiLCJsZWZ0IiwiYmVoYXZpb3IiLCJoYW5kbGVBYm91dFNjcm9sbCIsInkiLCJ1c2VFZmZlY3QiLCJ0eXBlZCIsInN0cmluZ3MiLCJ0eXBlU3BlZWQiLCJkZXN0cm95IiwidGl0bGUiLCJuYW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJyZWYiLCJzcGFuIiwicHJvamVjdHMiLCJtYXAiLCJwcm9qZWN0IiwiaW5kZXgiLCJpbWciLCJpbWFnZVNyYyIsImRlc2NyaXB0aW9uIiwib25DbGljayIsIm9wZW4iLCJ1cmwiLCJwIiwiYWJvdXRwYXJhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});