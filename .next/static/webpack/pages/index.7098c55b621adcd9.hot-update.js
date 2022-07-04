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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ \"./components/Header/index.js\");\n/* harmony import */ var _components_Socials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Socials */ \"./components/Socials/index.js\");\n/* harmony import */ var _components_WorkCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/WorkCard */ \"./components/WorkCard/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ \"./utils/index.js\");\n/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../animations */ \"./animations/index.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../data */ \"./data.js\");\n\n\n\n\n\n\n\n\n\n// Local Data\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    var _this = this;\n    _s();\n    // Ref\n    var workRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var aboutRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var textOne = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var textTwo = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var textThree = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var textFour = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    // Handling Scroll\n    var handleWorkScroll = function() {\n        window.scrollTo({\n            top: workRef.current.offsetTop,\n            left: 0,\n            behavior: \"smooth\"\n        });\n    };\n    var handleAboutScroll = function() {\n        window.scrollTo({\n            top: aboutRef.current.offsetTop,\n            left: 0,\n            behavior: \"smooth\"\n        });\n    };\n    (0,_utils__WEBPACK_IMPORTED_MODULE_5__.useIsomorphicLayoutEffect)(function() {\n        (0,_animations__WEBPACK_IMPORTED_MODULE_6__.stagger)([\n            textOne.current,\n            textTwo.current,\n            textThree.current,\n            textFour.current\n        ], {\n            y: 30\n        }, {\n            y: 0\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_8___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: _data__WEBPACK_IMPORTED_MODULE_9__[\"default\"].name\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Domenico Valentino\\\\Desktop\\\\react-portfolio\\\\pages\\\\index.js\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Domenico Valentino\\\\Desktop\\\\react-portfolio\\\\pages\\\\index.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container mx-auto mb-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        handleWorkScroll: handleWorkScroll,\n                        handleAboutScroll: handleAboutScroll\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Domenico Valentino\\\\Desktop\\\\react-portfolio\\\\pages\\\\index.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"laptop:mt-20 mob:mt-10\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-5\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        ref: textOne,\n                                        className: \"text-8xl mob:text-3xl laptop:text-8xl mob:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5\",\n                                        children: _data__WEBPACK_IMPORTED_MODULE_9__[\"default\"].headerTaglineOne\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Domenico Valentino\\\\Desktop\\\\react-portfolio\\\\pages\\\\index.js\",\n                                        lineNumber: 59,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        ref: textTwo,\n                                        className: \"text-8xl mob:text-3xl laptop:text-8xl mob:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5\",\n                                        children: _data__WEBPACK_IMPORTED_MODULE_9__[\"default\"].headerTaglineTwo\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Domenico Valentino\\\\Desktop\\\\react-portfolio\\\\pages\\\\index.js\",\n                                        lineNumber: 64,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        ref: textThree,\n                                        className: \"text-8xl mob:text-3xl laptop:text-8xl mob:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5\",\n                                        children: _data__WEBPACK_IMPORTED_MODULE_9__[\"default\"].headerTaglineThree\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Domenico Valentino\\\\Desktop\\\\react-portfolio\\\\pages\\\\index.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        ref: textFour,\n                                        className: \"text-8xl mob:text-3xl laptop:text-8xl mob:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5\",\n                                        children: _data__WEBPACK_IMPORTED_MODULE_9__[\"default\"].headerTaglineFour\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Domenico Valentino\\\\Desktop\\\\react-portfolio\\\\pages\\\\index.js\",\n                                        lineNumber: 74,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Domenico Valentino\\\\Desktop\\\\react-portfolio\\\\pages\\\\index.js\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Socials__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                className: \"mt-5 mob:mt-2 laptop:mt-5\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Domenico Valentino\\\\Desktop\\\\react-portfolio\\\\pages\\\\index.js\",\n                                lineNumber: 81,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Domenico Valentino\\\\Desktop\\\\react-portfolio\\\\pages\\\\index.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-40 mob:mt-10 laptop:mt-40 mob:p-2 laptop:p-0\",\n                        ref: workRef,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-2xl text-bold\",\n                                children: \"Work.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Domenico Valentino\\\\Desktop\\\\react-portfolio\\\\pages\\\\index.js\",\n                                lineNumber: 86,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-10 mob:mt-5 laptop:mt-10 grid grid-cols-2 mob:grid-cols-1 laptop:grid-cols-2 gap-4\",\n                                children: _data__WEBPACK_IMPORTED_MODULE_9__[\"default\"].projects.map(function(project, index) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_WorkCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        img: project.imageSrc,\n                                        name: project.title,\n                                        description: project.description,\n                                        onClick: function() {\n                                            return window.open(project.url);\n                                        }\n                                    }, index, false, {\n                                        fileName: \"C:\\\\Users\\\\Domenico Valentino\\\\Desktop\\\\react-portfolio\\\\pages\\\\index.js\",\n                                        lineNumber: 89,\n                                        columnNumber: 15\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Domenico Valentino\\\\Desktop\\\\react-portfolio\\\\pages\\\\index.js\",\n                                lineNumber: 87,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Domenico Valentino\\\\Desktop\\\\react-portfolio\\\\pages\\\\index.js\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-40 mob:mt-2 laptop:mt-40 mob:p-2 laptop:p-0\",\n                        ref: aboutRef,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-2xl text-bold\",\n                                children: \"About.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Domenico Valentino\\\\Desktop\\\\react-portfolio\\\\pages\\\\index.js\",\n                                lineNumber: 102,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"m-5 mob:m-0 laptop:m-5 mob:mt-2 laptop:ml-0 ml-0 text-3xl mob:text-xl laptop:text-3xl w-3/5 mob:w-full laptop:w-3/5\",\n                                children: _data__WEBPACK_IMPORTED_MODULE_9__[\"default\"].aboutpara\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Domenico Valentino\\\\Desktop\\\\react-portfolio\\\\pages\\\\index.js\",\n                                lineNumber: 103,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Domenico Valentino\\\\Desktop\\\\react-portfolio\\\\pages\\\\index.js\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Domenico Valentino\\\\Desktop\\\\react-portfolio\\\\pages\\\\index.js\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Domenico Valentino\\\\Desktop\\\\react-portfolio\\\\pages\\\\index.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"bh5xM4nhTHnijH5aCZVObLoQP10=\", false, function() {\n    return [\n        _utils__WEBPACK_IMPORTED_MODULE_5__.useIsomorphicLayoutEffect\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVMsRUFBQyxvQkFBb0I7MENBQUMsT0FBSzs7Ozs7b0NBQUs7MENBQzdDLDhEQUFDRCxLQUFHO2dDQUFDQyxTQUFTLEVBQUMsdUZBQXVGOzBDQUNuR3JCLDBEQUFpQixDQUFDLFNBQUM4QixPQUFPLEVBQUVDLEtBQUs7eURBQ2hDLDhEQUFDcEMsNERBQVE7d0NBRVBxQyxHQUFHLEVBQUVGLE9BQU8sQ0FBQ0csUUFBUTt3Q0FDckJkLElBQUksRUFBRVcsT0FBTyxDQUFDWixLQUFLO3dDQUNuQmdCLFdBQVcsRUFBRUosT0FBTyxDQUFDSSxXQUFXO3dDQUNoQ0MsT0FBTyxFQUFFO21EQUFNMUIsTUFBTSxDQUFDMkIsSUFBSSxDQUFDTixPQUFPLENBQUNPLEdBQUcsQ0FBQzt5Q0FBQTt1Q0FKbENOLEtBQUs7Ozs7NkNBS1Y7aUNBQ0gsQ0FBQzs7Ozs7b0NBQ0U7Ozs7Ozs0QkFDRjtrQ0FDTiw4REFBQ1gsS0FBRzt3QkFDRkMsU0FBUyxFQUFDLGdEQUFnRDt3QkFDMURFLEdBQUcsRUFBRXBCLFFBQVE7OzBDQUNiLDhEQUFDbUIsSUFBRTtnQ0FBQ0QsU0FBUyxFQUFDLG9CQUFvQjswQ0FBQyxRQUFNOzs7OztvQ0FBSzswQ0FDOUMsOERBQUNpQixHQUFDO2dDQUFDakIsU0FBUyxFQUFDLHFIQUFxSDswQ0FDL0hyQix1REFBYzs7Ozs7b0NBQ2I7Ozs7Ozs0QkFDQTtrQ0FDTiw4REFBQ0YsMERBQU07Ozs7NEJBQUc7Ozs7OztvQkFDTjs7b0JBQ0wsQ0FDSDtDQUNIO0dBbEd1QkcsSUFBSTs7UUEwQjFCTCw2REFBeUI7OztBQTFCSEssS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCBTb2NpYWxzIGZyb20gXCIuLi9jb21wb25lbnRzL1NvY2lhbHNcIjtcbmltcG9ydCBXb3JrQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9Xb3JrQ2FyZFwiO1xuaW1wb3J0IHsgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCB9IGZyb20gXCIuLi91dGlsc1wiO1xuaW1wb3J0IHsgc3RhZ2dlciB9IGZyb20gXCIuLi9hbmltYXRpb25zXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3RlclwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuXG4vLyBMb2NhbCBEYXRhXG5pbXBvcnQgZGF0YSBmcm9tIFwiLi4vZGF0YVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAvLyBSZWZcbiAgY29uc3Qgd29ya1JlZiA9IHVzZVJlZigpO1xuICBjb25zdCBhYm91dFJlZiA9IHVzZVJlZigpO1xuICBjb25zdCB0ZXh0T25lID0gdXNlUmVmKCk7XG4gIGNvbnN0IHRleHRUd28gPSB1c2VSZWYoKTtcbiAgY29uc3QgdGV4dFRocmVlID0gdXNlUmVmKCk7XG4gIGNvbnN0IHRleHRGb3VyID0gdXNlUmVmKCk7XG5cbiAgLy8gSGFuZGxpbmcgU2Nyb2xsXG4gIGNvbnN0IGhhbmRsZVdvcmtTY3JvbGwgPSAoKSA9PiB7XG4gICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgIHRvcDogd29ya1JlZi5jdXJyZW50Lm9mZnNldFRvcCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVBYm91dFNjcm9sbCA9ICgpID0+IHtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgdG9wOiBhYm91dFJlZi5jdXJyZW50Lm9mZnNldFRvcCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcbiAgICB9KTtcbiAgfTtcblxuICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICBzdGFnZ2VyKFxuICAgICAgW3RleHRPbmUuY3VycmVudCwgdGV4dFR3by5jdXJyZW50LCB0ZXh0VGhyZWUuY3VycmVudCwgdGV4dEZvdXIuY3VycmVudF0sXG4gICAgICB7IHk6IDMwIH0sXG4gICAgICB7IHk6IDAgfVxuICAgICk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntkYXRhLm5hbWV9PC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gbWItMTBcIj5cbiAgICAgICAgPEhlYWRlclxuICAgICAgICAgIGhhbmRsZVdvcmtTY3JvbGw9e2hhbmRsZVdvcmtTY3JvbGx9XG4gICAgICAgICAgaGFuZGxlQWJvdXRTY3JvbGw9e2hhbmRsZUFib3V0U2Nyb2xsfVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhcHRvcDptdC0yMCBtb2I6bXQtMTBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTVcIj5cbiAgICAgICAgICAgIDxoMVxuICAgICAgICAgICAgICByZWY9e3RleHRPbmV9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtOHhsIG1vYjp0ZXh0LTN4bCBsYXB0b3A6dGV4dC04eGwgbW9iOnAtMiB0ZXh0LWJvbGQgdy00LzUgbW9iOnctZnVsbCBsYXB0b3A6dy00LzVcIj5cbiAgICAgICAgICAgICAge2RhdGEuaGVhZGVyVGFnbGluZU9uZX1cbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8aDFcbiAgICAgICAgICAgICAgcmVmPXt0ZXh0VHdvfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LTh4bCBtb2I6dGV4dC0zeGwgbGFwdG9wOnRleHQtOHhsIG1vYjpwLTIgdGV4dC1ib2xkIHctNC81IG1vYjp3LWZ1bGwgbGFwdG9wOnctNC81XCI+XG4gICAgICAgICAgICAgIHtkYXRhLmhlYWRlclRhZ2xpbmVUd299XG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgPGgxXG4gICAgICAgICAgICAgIHJlZj17dGV4dFRocmVlfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LTh4bCBtb2I6dGV4dC0zeGwgbGFwdG9wOnRleHQtOHhsIG1vYjpwLTIgdGV4dC1ib2xkIHctNC81IG1vYjp3LWZ1bGwgbGFwdG9wOnctNC81XCI+XG4gICAgICAgICAgICAgIHtkYXRhLmhlYWRlclRhZ2xpbmVUaHJlZX1cbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8aDFcbiAgICAgICAgICAgICAgcmVmPXt0ZXh0Rm91cn1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC04eGwgbW9iOnRleHQtM3hsIGxhcHRvcDp0ZXh0LTh4bCBtb2I6cC0yIHRleHQtYm9sZCB3LTQvNSBtb2I6dy1mdWxsIGxhcHRvcDp3LTQvNVwiPlxuICAgICAgICAgICAgICB7ZGF0YS5oZWFkZXJUYWdsaW5lRm91cn1cbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8U29jaWFscyBjbGFzc05hbWU9XCJtdC01IG1vYjptdC0yIGxhcHRvcDptdC01XCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJtdC00MCBtb2I6bXQtMTAgbGFwdG9wOm10LTQwIG1vYjpwLTIgbGFwdG9wOnAtMFwiXG4gICAgICAgICAgcmVmPXt3b3JrUmVmfT5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC1ib2xkXCI+V29yay48L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTAgbW9iOm10LTUgbGFwdG9wOm10LTEwIGdyaWQgZ3JpZC1jb2xzLTIgbW9iOmdyaWQtY29scy0xIGxhcHRvcDpncmlkLWNvbHMtMiBnYXAtNFwiPlxuICAgICAgICAgICAge2RhdGEucHJvamVjdHMubWFwKChwcm9qZWN0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8V29ya0NhcmRcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgIGltZz17cHJvamVjdC5pbWFnZVNyY31cbiAgICAgICAgICAgICAgICBuYW1lPXtwcm9qZWN0LnRpdGxlfVxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtwcm9qZWN0LmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5vcGVuKHByb2plY3QudXJsKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTQwIG1vYjptdC0yIGxhcHRvcDptdC00MCBtb2I6cC0yIGxhcHRvcDpwLTBcIlxuICAgICAgICAgIHJlZj17YWJvdXRSZWZ9PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB0ZXh0LWJvbGRcIj5BYm91dC48L2gxPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm0tNSBtb2I6bS0wIGxhcHRvcDptLTUgbW9iOm10LTIgbGFwdG9wOm1sLTAgbWwtMCB0ZXh0LTN4bCBtb2I6dGV4dC14bCBsYXB0b3A6dGV4dC0zeGwgdy0zLzUgbW9iOnctZnVsbCBsYXB0b3A6dy0zLzVcIj5cbiAgICAgICAgICAgIHtkYXRhLmFib3V0cGFyYX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJIZWFkZXIiLCJTb2NpYWxzIiwiV29ya0NhcmQiLCJ1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0Iiwic3RhZ2dlciIsIkZvb3RlciIsIkhlYWQiLCJkYXRhIiwiSG9tZSIsIndvcmtSZWYiLCJhYm91dFJlZiIsInRleHRPbmUiLCJ0ZXh0VHdvIiwidGV4dFRocmVlIiwidGV4dEZvdXIiLCJoYW5kbGVXb3JrU2Nyb2xsIiwid2luZG93Iiwic2Nyb2xsVG8iLCJ0b3AiLCJjdXJyZW50Iiwib2Zmc2V0VG9wIiwibGVmdCIsImJlaGF2aW9yIiwiaGFuZGxlQWJvdXRTY3JvbGwiLCJ5IiwidGl0bGUiLCJuYW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJyZWYiLCJoZWFkZXJUYWdsaW5lT25lIiwiaGVhZGVyVGFnbGluZVR3byIsImhlYWRlclRhZ2xpbmVUaHJlZSIsImhlYWRlclRhZ2xpbmVGb3VyIiwicHJvamVjdHMiLCJtYXAiLCJwcm9qZWN0IiwiaW5kZXgiLCJpbWciLCJpbWFnZVNyYyIsImRlc2NyaXB0aW9uIiwib25DbGljayIsIm9wZW4iLCJ1cmwiLCJwIiwiYWJvdXRwYXJhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});