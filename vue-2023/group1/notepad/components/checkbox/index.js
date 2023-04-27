const MyCheckbox = {
    props:["itemId"],
    setup(props,ctx){
        const handle = (e) => {
            // console.log(props.itemId,e.target.checked)
            ctx.emit("mchandle",{
                id:props.itemId,
                checked:e.target.checked
            })
        }
        return {
            handle
        }
    },
    template:`
        <div class="mc-wrapper">
            <input 
                class="mc-input" 
                type="checkbox"
                :id="'mc'+itemId"
                @change="handle"
             />
            <label :for="'mc'+itemId" class="mc-label"></label>
        </div>
    `
}