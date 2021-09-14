import { createStore } from "vuex";
// 全局命名空间
import {getters} from "@/store/getters";
import {mutations} from "@/store/mutations";
import {actions} from "@/store/actions";
// module命名空间
import count02 from "@/store/modules/count02"
import count03 from "@/store/modules/count03"

export const store = createStore({
    modules:{
        "count02":count02,
        count03,
    },
    state:function(){
        return {
            count:10
        }
    },
    // 同步
    mutations,
    // 异步
    actions,
    // 全局状态中的计算属性
    getters
})