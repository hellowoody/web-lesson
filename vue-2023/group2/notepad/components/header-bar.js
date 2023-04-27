const HeaderBar = {
    setup(){
        const sty1 = {
            display:"flex",
            background:"#7385e7",
            height:"5rem",
            // "align-items":"center",
            alignItems:"center",
            color:"#fff",
            padding:"0.5rem 1rem",
            boxSizing:"border-box"
        }

        return {
            sty1
        }
    },
    template:`
        <div :style="sty1">
            <h2>Vue3 - 记事本</h2>    
        </div>    
    `
}
