<template>
    <div class="footer-bar">
        <slot></slot>
        <div class="wrapper-left">
            <slot name="left"></slot>
        </div>
        <div class="wrapper-right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name:"FooterBar"
}
</script>

<style scoped>
.footer-bar {
    position:fixed;
    bottom:0px;
    right:0px;
    left:0px;
    background-color:#fff; 
    box-shadow: 0px 0px 8px #E3E3E3;
    padding:16px;
    height:59px;
    display:flex;
    justify-content: space-between;
    align-items: center;
}

.wrapper-right{
    flex:1;
    padding: 0px 8px 0px 8px;
}

.wrapper-left{
    flex:1;
    padding: 0px 8px 0px 8px;
}
</style>