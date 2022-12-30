const app = $(".container")  // 获得class="container"的标签对象
const str = app.html()       // 把获得的标签中的html标签
app.html("")                 // 把获得的对象中的标签清空

let progress = 0
const ticket = setInterval(function(){
    const current = str.substr(progress,1)
    if(current == "<"){
        progress = str.indexOf(">",progress) + 1
    }else{
        progress++
    }  
    
    app.html(str.substring(0,progress) + (progress % 5 === 0 ? "_" : ""))
    if(progress >= str.length){
        clearInterval(ticket)
    }
},35)