<template>
    <div>
        <div>计步器</div>
        <a-button @click="back">返回</a-button>
    </div>
</template>

<script>
export default {
    name:"Counter",
    methods:{
        back(){
            this.$router.go("-1")
        }
    }
}
</script>