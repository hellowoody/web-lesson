
function myTV(){
    const cache = {}

    const on = (name,callback) => {
        cache[name] = callback
    }

    const emit = name => {
        cache[name]()
    }

    return {
        on,
        emit
    }
}

const tv = myTV()

tv.on("sport",() => console.log("体育新闻开始了"))
tv.on("star_news",() => console.log("娱乐新闻开始了"))

tv.emit("sport")
tv.emit("star_news")