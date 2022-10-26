<template>
    <div class="footer-bar">
        <slot></slot>
    </div>
</template>

<style scoped>
.footer-bar {
    position: fixed;
    bottom:0px;
    right:0px;
    left:0px;
    /* 为了和首页的底部选项卡的策略一样，这里设置和tarbar组件一样的高度 */
    height:58px;
    background-color: #fff;
    box-shadow: 0px 0px 8px rgb(0 0 0 / 0.2);
    display:flex;
}

</style>