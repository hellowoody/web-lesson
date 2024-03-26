# dom基础概念

 - Node节点 颗粒度“比较细” 12种 （childNodes）
   - 标签节点 1
   - 属性节点 2
   - 文本节点 3
  
 - 颗粒度到标签的  （children）

# dom 基础操作

 - 父标签.appendChild
 - 父标签.insertBefore
 - 父标签.removeChild
 - 父标签.replaceChild

# 活动节点

 > cloneNode(true) 深拷贝 将某一个标签在执行那“一瞬间”拍了一张照片

# canvas 画板

 - 尺寸的设置有两个“入口”
   - css      “相框”
   - 私有属性  “照片”
  
 - 浏览器兼容性 

    ```js
    var canvas = document.getElementById("myCanvas");
    canvas.getContext ? "浏览器支持canvas" : "浏览器不支持canvas";
    ```
