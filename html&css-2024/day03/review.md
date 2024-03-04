# image

 - img 
 - img tag src
 - img tag alt
 - img tag usemap
  
  ```html
    <img src="img01.jpg"  usemap="#lifemap" width="500" height="300" />
    <map name="lifemap">
        <area shape="rect" coords="10,208,155,338" alt="aaa" href="a.html">
        <area shape="circle" coords="250,150,30" alt="bbb" href="b.html">
        <area shape="poly" coords="250,150" alt="bbb" href="b.html">
    </map> 
  ```

# 表单

 - form tag
 - form action
 - form method="get" "POST" "PUT" "DELETE"
 - 
 - form enctype="application/x-www-form-urlencoded" 传统的 兼容性强
 - form enctype="appliction/json"                   新的   效率更高
 - 
 - form enctype="multipart/form-data"               提交流媒体
 - form enctype="text/plain"                       提交纯文本 使用的场景很少

 - js 模拟 form 标签
  
# 录入标签

 - input type="text"
 - input type="password"
 - input type="checkbox"
 - input type="radio"
 - input type="button"
    
    ```html
    <input type="button" value="btn2">
    <button>btn1</button>
    ```