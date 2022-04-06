console.log("start test-require.js")
if(Math.random() > 0.5){
    console.log("a:",require("./test-a").msg)
}else{
    console.log("b:",require("./test-b").msg)
}
console.log("end test-require.js")
