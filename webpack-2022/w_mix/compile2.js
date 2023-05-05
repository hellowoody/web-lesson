(() => {
	var __webpack_modules__ = ({
		 "./src/about.js":((module, exports) => {

			eval(`
				exports.m1 = \"hello m1\"
				module.exports = {a:1,b:2}
			`);

		}),
		"./src/comp.js": ((module) => {
	
			eval(`
				module.exports = {c:1}
			`);
	
		}),
		"./src/index.js": ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
	
			"use strict";
			eval(`
				__webpack_require__.r(__webpack_exports__);
				var _about_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( \"./src/about.js\");
				var _about_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_about_js__WEBPACK_IMPORTED_MODULE_0__);
				var _comp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"./src/comp.js\");
				ar _comp_js__WEBPACK_IMPORTED_MODULE_1___default =__webpack_require__.n(_comp_js__WEBPACK_IMPORTED_MODULE_1__);
				console.log(\"about\",_about_js__WEBPACK_IMPORTED_MODULE_0__)
				console.log(\"m1\",_about_js__WEBPACK_IMPORTED_MODULE_0__.m1)
				console.log(\"defaultExport\",(_about_js__WEBPACK_IMPORTED_MODULE_0___default()))
				console.log(\"a\",(_about_js__WEBPACK_IMPORTED_MODULE_0___default().a))
				console.log(\"b\",(_about_js__WEBPACK_IMPORTED_MODULE_0___default().b))
				console.log(\"a\",(_about_js__WEBPACK_IMPORTED_MODULE_0___default().a))
				console.log(\"b\",(_about_js__WEBPACK_IMPORTED_MODULE_0___default().b))
				console.log(\"comp\",_comp_js__WEBPACK_IMPORTED_MODULE_1__)
			`);
	
		})
	
	});

	var __webpack_module_cache__ = {};
	
	// The require function
	function __webpack_require__(moduleId) {
		// Check if module is in cache
		var cachedModule = __webpack_module_cache__[moduleId];
		if (cachedModule !== undefined) {
			return cachedModule.exports;
		}
		// Create a new module (and put it into the cache)
		var module = __webpack_module_cache__[moduleId] = {
			exports: {}
		};
	
		// Execute the module function
		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
	
		// Return the exports of the module
		return module.exports;
	}
	

	(() => {
		// getDefaultExport function for compatibility with non-harmony modules
		__webpack_require__.n = (module) => {
	  console.log(3000,module)
			var getter = module && module.__esModule ?
				() => (module['default']) :
				() => (module);
			__webpack_require__.d(getter, { a: getter });
			return getter;
		};
	})();
	

	(() => {
		// define getter functions for harmony exports
		__webpack_require__.d = (exports, definition) => {
			for(var key in definition) {
				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
				}
			}
		};
	})();
	
	/* webpack/runtime/hasOwnProperty shorthand */
	(() => {
		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
	})();
	
	/* webpack/runtime/make namespace object */
	(() => {
		// define __esModule on exports
		__webpack_require__.r = (exports) => {
			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
			}
			Object.defineProperty(exports, '__esModule', { value: true });
		};
	})();
	

	var __webpack_exports__ = __webpack_require__("./src/index.js");
	
})();