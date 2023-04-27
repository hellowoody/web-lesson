const HeaderBar = {
    setup(){
        const sty1 = {
            background:"#7385e7",
            height:"5em",
            display:"flex",
            // "align-items":"center",
            alignItems:"center",
            color:"#fff",
        }

        return {
            sty1
        }
    },
    template:`
        <div :style="sty1">
            <h2 style="margin-left:1em">Vue3-记事本</h2>
        </div>
    `
}

