
(() => { 
	var __webpack_modules__ = {

		"./src/index.js":(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

			eval(`
				const {msg} = __webpack_require__("./src/m.js")
				console.log(msg)
			`);

		},

		"./src/m.js":(__unused_webpack_module, exports) => {

			eval(`
				exports.msg = "hello this is cjs syntax"
			`);

		}

	};

	var __webpack_module_cache__ = {};

	/*
	{
		"./src/index.js":{
			exports: {}
		},
		"./src/m.js":{
			exports: {
				msg:"hello this is cjs syntax"
			}
		}
	}
	
	*/
	
	function __webpack_require__(moduleId) {
		// Check if module is in cache
		var cachedModule = __webpack_module_cache__[moduleId];
		if (cachedModule !== undefined) {
			return cachedModule.exports;
		}

   	    __webpack_module_cache__[moduleId] = {
			exports: {}
		};

    	var module = __webpack_module_cache__[moduleId]

		// var module = __webpack_module_cache__[moduleId] = {
		// 	exports: {}
		// };
    
		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
	
		// Return the exports of the module
		return module.exports;
	}
	
	var __webpack_exports__ = __webpack_require__("./src/index.js");
	console.log(__webpack_module_cache__)
	
})();
