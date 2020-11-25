/*
js 
prototype  原型
__proto__  原型链
*/

function Vue(){
    /*
    */
}

Vue.prototype.Init = function(config,beforeCreate,created){
    
    // config.methods
    // config.computed
    beforeCreate()
    /*
      config.data
    */
    created()
    /*
    
    
    */
    console.log("vue init")
}

Vue.prototype.Create = (xxx,xxx)=>{

}


const app = new Vue({
    el:"xxx"
})