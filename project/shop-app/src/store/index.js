import {createStore} from "vuex";
import {mutations} from "@/store/mutations";
import pageDirection from "@/store/modules/pageDirection"
import good from "@/store/modules/good"

export const store = createStore({
    modules:{
        pageDirection,
        good
    },
    state:function(){
        return {
            count:-1
        }
    },
    mutations
})