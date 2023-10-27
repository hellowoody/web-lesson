export const useRouter = (app) => {

    const LIST = [
        {name:"zhang",score:90},
        {name:"li",score:80},
        {name:"wang",score:70},
    ]

    app.get("/ping",(req,resp) => {
        resp.send("pong")
    })

    app.get("/list",(req,resp) => {
        console.log(req.query)
        resp.json(LIST.filter(v => {
            switch (req.query.staged) {
                case "A":
                    return v.score >= 90        
                case "B":
                    return v.score >= 80 && v.score < 90     
                case "C":
                    return v.score >= 70 && v.score < 80           
                default:
                    return true
            }
        }))
    })

    app.post("/list",(req,resp) => {
        console.log(req.body)
        resp.json(LIST.filter(v => {
            switch (req.body.staged) {
                case "A":
                    return v.score >= 90        
                case "B":
                    return v.score >= 80 && v.score < 90     
                case "C":
                    return v.score >= 70 && v.score < 80           
                default:
                    return true
            }
        }))
    })

    app.post("/mockhome",(req,resp) => {
        resp.json({
            casual:[
                "img01",
                "img02",
                "img03",
            ],
            list:LIST,
            user:{
                name:"admin",
                role:"manager",
                avatar:"头像"
            }
        })
    })


    app.post("/mockhomecasual",(req,resp) => {
        resp.json([
            "img01",
            "img02",
            "img03",
        ])
    })

    app.post("/mockhomelist",(req,resp) => {
        resp.json(LIST)
    })

    app.post("/mockuser",(req,resp) => {
        resp.json({
            name:"admin",
            role:"manager",
            avatar:"头像"
        })
    })
}