<template>
    <div class="top-bar">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="middle">
             <slot name="middle"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name:'TopBar',

}
</script>

<style scoped>
.top-bar {
    background-color:#fff;
    height:60px;
    box-shadow: 0px 1px 2px rgba(40,40,40,0.2);
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 18px 0px 18px;
}

.left {
    font-size: 24px;
}

.right {
    font-size: 24px !important;
}
</style>