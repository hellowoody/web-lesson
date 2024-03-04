# 选择器

 - id
 - class
 - tag
 - * 通配符
 - 复合选择器
   - 分组 ,
   - 后代 空格
   - 父子 >
   - 兄弟 +
  
# 伪类 :

 - nth-child
  
    ```html
    <p></p>
    <p></p>
    <div></div>
    <p></p>
    ```

    ```css
    p:nth-child(3){
        
    }
    ```
 - nth-of-type
  
    ```html
    <p></p>
    <p></p>
    <div></div>
    <p></p>
    ```

    ```css
    p:nth-of-type(3){
        
    }
    ```
 - a 
   - :link 未访问
   - :visited 已访问
   - :hover 鼠标悬停
   - :active 鼠标点击
 - input
   - :focus 获取焦点
   - :blur  失去焦点

# 伪元素 :: （:）

 - ::before
 - ::after
  
# 权重的优先级

 ```
 权重：左 > 右
   正无穷     1000          100       10        1       0.1          
!important style行内样式  id选择器  类选择器  标签选择器  继承 
                           有几个     有几个   有几个    有几个 
                           有几个     有几个   有几个    有几个 
 ```

# 盒子模型

# 布局

 - flex
 - 绝对定位
 - float
 - gird

# border
