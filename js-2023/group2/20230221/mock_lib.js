function mock_lib(){
    // 为什么外部的库都是函数声明
    // 因为函数作用域可以保护里面声明的变量
    var v1;
    var v2;
    var v3;
    var v4;
    var v5;
    var v6 = "我自己的库";

    window.$$ = {
        msg:v6,
        query:function(selector){
            return document.querySelector(selector)
        }
    }
}
mock_lib();