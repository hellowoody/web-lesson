/*
    1.把"heLlO,世界"的大小写l都找出来

        const reg = /[A-Za-z]/
        console.log(reg.exec("heLlO,世界")) ["h"]

        // [A-Za-z0-9_]
        const reg1 = /\w/g
        let res1
        while(res1 = reg1.exec("heLlO,世界")){
            if(res1[0] === "L" || res1[0] === "l"){
                console.log("res1",res1)
            }
        }

        // /Ll/g
        const reg2 = /[L][l]/g
        const reg2 = /Ll/g
        let res2
        while(res2 = reg2.exec("heLlO,世界")){
            console.log("res2",res2)
        }

        const reg3 = /[Ll]/g
        let res3
        while(res3 = reg3.exec("heLlO,世界")){
            console.log("res3",res3)
        }

        const reg4 = /l/ig
        let res4
        while(res4 = reg4.exec("heLlO,世界")){
            console.log("res4",res4)
        }

    2.将"2023-03-21"中数字用正则找出来

        const reg1 = /\d/g
        let res1
        while(res1 = reg1.exec("2023-03-21")){
            console.log("res1",res1[0])
        }

        const reg2 = /[0-9]/g

        const reg3 = /[^-]/g
        let res3
        while(res3 = reg3.exec("2023-03-21")){
            console.log("res3",res3[0])
        }


        const reg = /[1^2]/g
        let res
        while(res = reg.exec("2023^03^21")){
            console.log("res",res)
        }


    3.用正则匹配一下完整的字符串
        “hello”
        “hello world”
        "hello_world"
        "hi-hello-世界"

        <input value="" type="password" >

        const reg1 = /^\w/g
        const reg2 = /[helo]/g
                     /h/g
                     /e/g
                     /l/g
                     /o/g
                    
        const reg3 = /hello/g

        const reg4 = /^hello$/g

        console.log(reg4.test("hello"))
        console.log(reg4.test("hello world"))
        console.log(reg4.test("hello_world"))
        console.log(reg4.test("hi-hello-世界"))

    4.用\w能匹配下面的哪些字符“<input style="font-size:16px" id="_id">”

        const reg = /\w/g
        let res
        while(res = reg.exec(`<input style="font-size:16px" id="_id">`)){
            console.log("res",res[0])
        }
        
*/