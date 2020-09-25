<template>
    <div ref="content" class="my-content">
        <div v-if="loading">下拉刷新</div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:"MyContent",
    data(){
        return {
            loading : false,
            touchstart : 0, // 手指触摸屏幕的起点
            distance : 0.   // 手指滑动的距离
        }
    },
    mounted(){
        // document.getElementById("content")  这种方式应该也可以
        const content = this.$refs.content
        content.addEventListener("touchstart",(e)=>{
            if(this.loading){
                e.preventDefault(); //阻止冒泡事件
                return 
            }
            // 获取手指第一此触碰屏幕所在的位置
            this.touchstart = e.targetTouches[0].clientY
        })

        content.addEventListener("touchmove",(e)=>{
            if (this.touchstart <= 0){
                e.preventDefault(); //阻止冒泡事件
                return
            }
            if(this.loading){
                e.preventDefault()
                return
            }
            const touch = e.targetTouches[0]
            const scrollTop = content.scrollTop

            if(scrollTop === 0){
                this.distance = touch.clientY - this.touchstart
                if (this.distance > 0) {
                    e.preventDefault()
                }
            }

        })

        content.addEventListener("touchend",()=>{
            if(this.distance === 0){
                e.preventDefault()
                return 
            }
            if(this.loading){
                e.preventDefault()
                return
            }
            if(this.distance > 0){
                this.loading = true
                setTimeout(()=>{
                    this.loading = false
                },2000)
            }
        })
    }
}
</script>

<style scoped>

.my-content {
    padding:24px;
    height: 100vh;
    overflow-x:hidden; /* 防止横向滚动条 */
    margin-bottom: 55px;
}

</style>