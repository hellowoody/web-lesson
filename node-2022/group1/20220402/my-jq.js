;(function(w){
    w.$ = (query) => {
        const app = document.querySelector(query)
        return {
            html:() => app.innerHTML
        }
    }
})(window)