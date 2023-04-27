const ListItem = {
    setup(){
        const itemSty = {
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
            height:"3.5em",
            marginBottom:"1em"
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