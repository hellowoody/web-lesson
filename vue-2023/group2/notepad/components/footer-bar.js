const FooterBar = {
    setup(){
        const sty1 = {
            display:"flex",
            background:"#7681E6",
            height:"2rem",
            color:"#fff",
            justifyContent:"center",
            alignItems:"center"
        }

        return {
            sty1
        }
    },

    template:`
        <div :style="sty1">
            <div>copyright@xxxxxxxxxxx</div> 
        </div> 
    `
}