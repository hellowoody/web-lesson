function mock_jquery(){
    "use strict";
    var class2type = "123"
    var $ = function(selector){
        return document.querySelector(selector)
    }

    window.$ = $
}

mock_jquery()
