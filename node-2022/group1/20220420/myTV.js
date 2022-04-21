
function myTV(){
    const cache = {}

    const on = (name,callback) => {
        if(!Array.isArray(cache[name])){
            // name 第一个被观察时，将它对应的值设置成 空数组
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


const tv = myTV();

function zhang(msg){
    console.log(`老张！${msg}`)
}
function li(msg){
    console.log(`老李！${msg}`)
}
function wang(msg){
    console.log(`老王！${msg}`)
}

tv.on("sport",zhang)
tv.on("sport",li)
tv.on("sport",wang)
tv.on("science",wang)


tv.emit("sport","体育节目更新了")
tv.emit("science","科普节目更新了")