const MyCheckbox = {
    props:["itemId","checkedParam"],
    setup(props,ctx){
        const handle = e => {
            // console.log(props.itemId,e.target.checked)
            ctx.emit("mcchange",{
                id:props.itemId,
                checked:e.target.checked
            })
        }

        return {
            handle
        }
    },
    template:`
        <div style="display:inline-block;">
            <input 
                class="mc-input" 
                :id="'mc'+itemId" 
                type="checkbox" 
                @change="handle"
            />
            <label class="mc-label" :for="'mc'+itemId"></label>
        </div>
    `
}