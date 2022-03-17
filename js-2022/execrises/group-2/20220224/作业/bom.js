var newwin  // 定义一个自己全局变量
var pos
function openNewWin(){
    /*
        键值对 key-value
        {
            key:value,
            name:"zhangsan"
        }
        window是浏览器的唯一全局对象
        window.document -> document
        window.open     -> open
    */ 
    newwin = open("about:blank","_blank","height=200,width=200,top=300,left=300")
}

document.getElementById("closeWin").addEventListener("click",function(){
    newwin.close()
})

document.querySelector(".moveWin").addEventListener("click",function(){
    newwin.moveTo(100,100)
})

function getInfo(){ 
    
    /*
        先判断页面上有没有显示结果的那个div
        如果有，我直接把那个div删除
        如果没有，直接创建
    */
    var oldDiv = document.querySelector("div") // null | undefined
    if(oldDiv){
        document.body.removeChild(oldDiv)
    }

    var div = document.createElement("div")

    var template = `
       ${window.navigator.appName} ;
       ${window.navigator.platform} ;
       ${window.navigator.deviceMemory} ;
       ${window.navigator.onLine} ;
    `

    div.appendChild(document.createTextNode(template))
    document.body.appendChild(div)

    navigator.getBattery().then(function(res){
        console.log(res) // object  
        var res_template = `
            ${res.charging} ; 
            ${res.chargingTime} ; 
            ${res.dischargingTime} ; 
            ${res.level} ; 
        `
        var t = document.createTextNode(res_template)
        div.appendChild(t)
    })
}

function getPos(){
    navigator.geolocation.getCurrentPosition(function(res){
        // console.log(res)
        pos = res
    })
}

function getPosRes(){
    console.log(pos.timestamp)
    console.log(pos.coords)
    console.log(pos.coords.latitude,pos.coords.longitude)
}