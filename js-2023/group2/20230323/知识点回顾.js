/*

    1.用正则校验密码规则为长度最少8位，只能包含大小写字母和数字
        {m,n}   
        +  {1,}
        *  {0,}
        ?  {0,1}

        const reg = /[A-Za-z\d]{8,}/
        const reg1 = /([A-Z][a-z][0-9]){8,}/ 
        const reg2 = /([A-Z]+|[a-z]+|[0-9]+){8,}/ 


    2.用正则匹配邮箱并可以用邮箱的名字当作用户默认昵称
        const str = "我的邮箱xxx@qq.com"
        

        const reg = /([-\w\.]{1,64})@([-A-Za-z0-9]\.)*[-A-Za-z0-9]/


        console.log(reg.exec(str)[1])


    3.字符串中有几种方法可以传正则

        split()
        match()
        replace()
        
        search(regex)  indexOf("str",startIndex)
*/ 

// const reg = /[A-Za-z\d]{8,}/

// console.log(reg.test("12345678"))

// const reg1 = /([A-Z][a-z][0-9]){8,}/ 
// console.log(reg1.test("Aa123456"))
// console.log(reg1.test("Ab1Ab1Ab1Ab1Ab1Ab1Ab1Ab"))


const str = "xxx@qq.com"
        
const reg = /^([-\w\.]{1,64})@([-A-Za-z0-9]{1,64}\.)*[-A-Za-z0-9]+$/

console.log(reg.exec(str)[1])

console.log(str.split(/@/)[0])