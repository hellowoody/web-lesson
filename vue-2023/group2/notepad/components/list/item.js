const ListItem = {

    setup(){
        const itemSty = {
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
            height:"2.5rem",
            marginBottom:".5rem",
        }

        return {
            itemSty
        }
    },
    template:`
        <div :style="itemSty">
            <div>
                <slot name="left"></slot>
            </div>
            <div>
                <slot name="right"></slot>
            </div>
        </div>
    
    `
}