const FooterBar = {
    setup(){
        const sty1 = {
            background:"#797B7C",
            height:"2em",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            color:"#fff"
        }

        return {
            sty1
        }
    },
    template:`
        <div :style="sty1">copyright@xxxxxx</div>
    `
}