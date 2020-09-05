 (function a(w,jq){
    function foo(){
        console.log("闭包")
    }
    w.$ = w.myjq = {
        foo:foo
    }

})(window,jq)