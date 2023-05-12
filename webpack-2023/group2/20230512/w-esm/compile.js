
(() => {
	"use strict";
	var __webpack_modules__ = {

    "./src/index.js":(__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

        eval(`
          __webpack_require__.r(__webpack_exports__);
          var _m_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( \"./src/m.js\");
          console.log(_m_js__WEBPACK_IMPORTED_MODULE_0__.msg)
        `);

    },

    "./src/m.js":(__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

        eval(`
          __webpack_require__.r(__webpack_exports__);
          __webpack_require__.d(__webpack_exports__, {
            "msg": () => {
              return msg
            }
          });
          const msg = \"你好 ESM 语法\"

          
        `);

    }

	};

	var __webpack_module_cache__ = {};
  /*
  {
    "./src/index.js":{
      exports:{
        "Symbol.xxx":"Module"
        "__esModule":true
      }
    },
    "./src/m.js":{
      exports:{
        "Symbol.xxx":"Module"
        "__esModule":true，
        "msg":"你好 ESM 语法"
      }
    }
  }
  */
	

	function __webpack_require__(moduleId) {

		var cachedModule = __webpack_module_cache__[moduleId];
		if (cachedModule !== undefined) {
			return cachedModule.exports;
		}

		var module = __webpack_module_cache__[moduleId] = {
			exports: {}
		};

    /*
    module = {
      exports:{}
    }
    
    */ 
	
		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
	

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
		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
	})();
	
	(() => {

		__webpack_require__.r = (exports) => {
      // es6
			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
			}
			Object.defineProperty(exports, '__esModule', { value: true });
		};
	})();

	var __webpack_exports__ = __webpack_require__("./src/index.js");
	console.log(JSON.stringify(__webpack_module_cache__))
})();


