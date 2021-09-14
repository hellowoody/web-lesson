export const actions = {
    incrementDelay:(context) => {
        // 模拟网络延迟 
        // pending
        // fullxxx -> resolve
        // rejected -> reject
        new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve("")
            }, 2000);
        }).then(() => {
            context.commit("increment",3)
            // context.state.count = context.state.count + 3 // 不能这么写，虽然控制台没有抛错，因为全局状态追踪会产生问题，用chrome插件查看会更直观
        })
    },
    decrementDelay:({commit}) => {
        new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve("")
            }, 2000);
        }).then(() => {
            commit("decrement")
        })
    }
}