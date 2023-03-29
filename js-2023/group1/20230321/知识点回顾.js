/*
    1.把"heLlO,世界"的大小写l都找出来

        const reg1 = /l/ig
        let res1
        while(res1 = reg1.exec("heLlO,世界")){
            console.log("res1",res1)
        }
        console.log(reg1.exec("heLlO,世界"))
        
        const reg1 = /l/ig
        console.log(/l/ig.exec("heLlO,世界"))
        console.log(/l/ig.exec("heLlO,世界"))
        console.log(/l/ig.exec("heLlO,世界"))


        const reg2 = /[lL]/g
        let res2
        while(res2 = reg2.exec("heLlO,世界")){
            console.log("res2",res2)
        }

    2.将"今天是2023-3-21，我们xxxxxxx"中日期用正则找出来

        const reg1 = /[\d]{1,2}/g
        const reg1 = /\d{1,2}/g
        // [0-9]
        const reg2 = /\d{4}-\d{1,2}-\d{1,2}/

        console.log(reg2.exec("今天是2023-3-21，我们xxxxxxx"))
        
        
    3.用\w能匹配下面的哪些字符“<input style="font-size:16px" id="_id">”

        const reg = /\w/g
        let res
        while(res = reg.exec(`<input style="font-size:16px" id="_id">`)){
            console.log(res[0])
        }
        reg.exec(`<input style="font-size:16px" id="_id">`)

        "
        =
        :
        <
        >
         
        -


        
*/