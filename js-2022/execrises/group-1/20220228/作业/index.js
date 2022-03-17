// 浏览器中会内置/默认提供“一个”全局变量 = window
var newWin  // 自己定义一个全局变量
function openNewWin(){
    // window.open("https://baidu.com","_blank","height=300,width=300")
    // window.open("about:blank","_blank","height=300,width=300,top=100,left=100")
    newWin = open("about:blank","_blank","height=300,width=300,top=100,left=100")
}

function closeNewWin(){
    newWin.close()
}

function moveNewWin(){
    // newWin.moveTo(500,500)
    newWin.moveBy(10,10)
}

function getInfo(){
    var div_old = document.querySelector("div"); // null | undefined
    if(div_old){
        // 如果页面上存在一个div标签，就把它移出
        document.body.removeChild(div_old)   
    }
    /*
        1.创建一个新标签
        2.创建多个文本节点TextNode节点
        3.在新标签下追加第二步创建的文本节点
        4.获取body标签，将第一步的新节点追加到body中
    */
    var div = document.createElement("div")  // <div></div>
    
    var appName = document.createTextNode(navigator.appName+" ; ");
    var platform = document.createTextNode(navigator.platform+" ; ");
    var deviceMemory = document.createTextNode(navigator.deviceMemory+" ; ");
    var onLine = document.createTextNode(navigator.onLine+" ; ");

    /*
        <div>
            appName
            flatform
            deviceMemory
            onLine 
        </div>
    */ 
    div.appendChild(appName)
    div.appendChild(document.createElement("br")) // <br>
    div.appendChild(platform)
    div.appendChild(document.createElement("br")) // <br>
    div.appendChild(deviceMemory)
    div.appendChild(document.createElement("br")) // <br>
    div.appendChild(onLine)
    div.appendChild(document.createElement("br")) // <br>

    document.body.appendChild(div)
   

    // console.log(window.navigator)

    navigator.getBattery().then(function(res){
        // console.log(res)
        /*
            js 有几种定义或修饰字符串的方式？ 3种
            var a = "hello";
            var b = 'world';
            var ab = a + b;         // helloworld
            var ab2 = a + " " + b ; // hello world
            var c = `你好`
        */
        var str = `
            是否充电:${res.charging} ,
            剩余充电时常:${res.chargingTime} , 
            待机时长:${res.dischargingTime} , 
            电量百分比:${res.level}
        `
        console.log(str)
        var str_node = document.createTextNode(str)
        div.appendChild(str_node)
    })  // 异步 Promise
    
}

function getPos(){
    navigator.geolocation.getCurrentPosition(function(res){
        console.log(res)
    })  // 异步
}


console.log(document.querySelectorAll("button"))