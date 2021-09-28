import {createStore} from "vuex";
import {mutations} from "@/store/mutations";
import pageDirection from "@/store/modules/pageDirection"

export const store = createStore({
    modules:{
        pageDirection
    },
    state:function(){
        return {
            count:-1
        }
    },
    mutations
})