
module.exports = {
    // entry:{
    //     home:{
    //         import:"./src/home.js",
    //         filename:"./home/index.js"
    //     },
    //     about:"./src/about.js",
    // },

    // entry:() => {
    //     console.log(process.argv)
    //     return {
    //         home:{
    //             import:"./src/home.js",
    //             filename:"./home/index.js"
    //         },
    //         about:"./src/about.js",
    //     }
    // },

    entry:() => {

        console.log(process.argv.slice(2))
        const p = process.argv.slice(3)
        console.log(p)

        if(p[0] === "diyflag") {
            switch (p[1]) {
                case "home":
                    return {
                        home:{
                            import:"./src/home.js",
                            filename:"./home/index.js"
                        }
                    }
                case "about":
                    return {
                        about:"./src/about.js",
                    }
                default:
                    return {
                        home:{
                            import:"./src/home.js",
                            filename:"./home/index.js"
                        },
                        about:"./src/about.js",
                    }
                    break;
            }
        }


        return {
            home:{
                import:"./src/home.js",
                filename:"./home/index.js"
            },
            about:"./src/about.js",
        }
    },
    mode:"development"
}