
(() => { // webpackBootstrap
    "use strict";
    var __webpack_modules__ = ({

         "./src/about.js":((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            eval(`
                __webpack_require__.r(__webpack_exports__);
                __webpack_require__.d(__webpack_exports__, {
                    \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),
                    \"m1\": () => (/* binding */ m1) 
                });
                const m1 = \"hello m1\"
                const __WEBPACK_DEFAULT_EXPORT__ = ({a:1,b:2});
                //# sourceURL=webpack:///./src/about.js?
            `);

        }),
    
        "./src/index.js":((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    
            eval(`
                __webpack_require__.r(__webpack_exports__);
                var _about_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/about.js\");
                console.log(\"about\",_about_js__WEBPACK_IMPORTED_MODULE_0__)
                console.log(\"m1\",_about_js__WEBPACK_IMPORTED_MODULE_0__.m1)
                console.log(\"a\",_about_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])
                console.log(\"a\",_about_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].a)
                console.log(\"b\",_about_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].b)
                console.log(\"a\",_about_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].a)
                console.log(\"b\",_about_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].b)
                //# sourceURL=webpack:///./src/index.js?
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
 		__webpack_require__.d = (exports, definition) => {
 			for(var key in definition) {
 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
 				}
 			}
 		};
 	})();
 	
 	(() => {
 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
 	})();
 	

 	(() => {

 		__webpack_require__.r = (exports) => {
 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
 			}
 			Object.defineProperty(exports, '__esModule', { value: true });
 		};
 	})();
 	

 	var __webpack_exports__ = __webpack_require__("./src/index.js");
 	
 })();