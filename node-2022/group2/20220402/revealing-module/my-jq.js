// (function(){
//     console.log(1000)
// })()

// (function(w,callback){
//     w.$ = (str) => {
//         const app = document.querySelector(str) // <div id="app"></div>
//         return {
//             html:() => app.innerHTML
//         }
//     }
//     callback()
// }(window,() => console.log("我是最外层的参数")))

(function(w,callback){
    w.$ = (str) => {
        const app = document.querySelector(str) // <div id="app"></div>
        return {
            html:() => app.innerHTML
        }
    }
    callback()
})(window,() => console.log("我是最外层的参数"))