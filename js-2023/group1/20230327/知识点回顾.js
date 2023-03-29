/*
    1.用正则校验密码规则为长度最少8位，只能包含大小写字母和数字

        const reg = /[A-Za-z0-9]{8,}/g

        const reg = /^[A-Za-z0-9]{8,}$/

        ASDFGHJKL

    2.字符串中有几种方法可以传正则

        const instance = new RegExp()
        
        instance.exec()
        instance.test()


        "hello".match(/l/)  
        {
            "0":"l"
            length:1
            input:"hello"
            index:2
        }

        "hello".match(/l/g) ["l","l"]
        

        "hello".replace()
        "hello".split()

        "hello".search()  indexOf 
    

    3.dom对象的节点类型常用的有哪几种，值分别是多少

        Node.ELEMENT_NODE    1
        Node.ATTRIBUTE_NODE  2
        Node.TEXT_NODE       3

        <div>
            <input value=1 style="color:red" >
        <div>    
*/
