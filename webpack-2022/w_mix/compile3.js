(() => {
    var __webpack_modules__ = ({

        "./src/about.js":((module, exports) => {

            eval(`
                exports.m1 = \"hello m1\"
                module.exports[\"default\"] = {a:1,b:2}
                //# sourceURL=webpack:///./src/about.js?
            `);

        }),
    
        "./src/index.js":((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    
            "use strict";
            eval(`
                var _about_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
                __webpack_require__.r(__webpack_exports__); 
                var _about_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"./src/about.js\");
                console.log(\"about\", (_about_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_about_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_about_js__WEBPACK_IMPORTED_MODULE_0__, 2))))
                console.log(\"m1\",_about_js__WEBPACK_IMPORTED_MODULE_0__.m1)
                console.log(\"defaultExport\",_about_js__WEBPACK_IMPORTED_MODULE_0__)
                console.log(\"a\",_about_js__WEBPACK_IMPORTED_MODULE_0__.a)
                console.log(\"b\",_about_js__WEBPACK_IMPORTED_MODULE_0__.b)
                console.log(\"a\",_about_js__WEBPACK_IMPORTED_MODULE_0__.a)
                console.log(\"b\",_about_js__WEBPACK_IMPORTED_MODULE_0__.b)
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
 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
 		var leafPrototypes;
 		// create a fake namespace object
 		// mode & 1: value is a module id, require it
 		// mode & 2: merge all properties of value into the ns
 		// mode & 4: return value when already ns object
 		// mode & 16: return value when it's Promise-like
 		// mode & 8|1: behave like require
 		__webpack_require__.t = function(value, mode) {
 			if(mode & 1) value = this(value);
 			if(mode & 8) return value;
 			if(typeof value === 'object' && value) {
 				if((mode & 4) && value.__esModule) return value;
 				if((mode & 16) && typeof value.then === 'function') return value;
 			}
 			var ns = Object.create(null);
 			__webpack_require__.r(ns);
 			var def = {};
 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
 			}
 			def['default'] = () => (value);
 			__webpack_require__.d(ns, def);
 			return ns;
 		};
 	})();
 	
 	/* webpack/runtime/define property getters */
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
 	

 	(() => {
 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
 	})();
 	

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