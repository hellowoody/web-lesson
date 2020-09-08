<template>
    <a-button size="large" @click="clickHandle" block>{{name}}</a-button>
</template>

<script>
export default {
    name:"FooterBarButton",
    props:{
        name:String
    },
    methods:{
        clickHandle(){
            this.$emit("funcHandle")
        }
    }
}
</script>
