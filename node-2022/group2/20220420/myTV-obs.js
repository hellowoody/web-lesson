
function myTV(){
    const cache = {}

    const on = (name,callback) => {
        if(!Array.isArray(cache[name])){
            cache[name] = []
        }
        cache[name].push(callback)
    }

    const emit = (name,data) => {
        if(!Array.isArray(cache[name])) return

        cache[name].forEach( observer => observer(data))
    }

    return {
        on,
        emit
    }
}

const tv = myTV()

function zhang(msg){
    console.log(`老张！${msg}`)
}

tv.on("sport",zhang)
tv.on("sport",(msg) => console.log(`老李！${msg}`))
tv.on("star_news",msg => console.log(`老王! ${msg}`))

tv.emit("sport","体育新闻开始了")
tv.emit("star_news","港台娱乐信息开始了")