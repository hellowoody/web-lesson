let b = navigator.getBattery().then((b) => console.log(b));


//(b) => console.log(b)
// obj JS type function 
// obj()
document.getElementById("btn").addEventListener("click",()=>console.log("btn click"))

function getAge(id,name){
    console.log(arguments.id)
    console.log(arguments.name)
    
}

// window.navigator = {
//     appName:"123",
//     platform:"456",
//     getBattery:function(){
//         console.log(789)

//         return new Promise()
//     }
// }

/*

es6  promise 处理/形容 异步操作

arrow function
*/


export const test = function(){
    console.log("i from t.js")
}