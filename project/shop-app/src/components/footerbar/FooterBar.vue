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
<style scoped>
.footer-bar {
    position: fixed;
    bottom:0px;
    right:0px;
    left:0px;
    background-color:#fff;
    box-shadow: 0px 1px 8px #e3e3e3;
    padding:16px;
    height:59px;
    display:flex;
    justify-content: space-between;
    align-items: center;
}

/* css 选择器 多个选择器公用同一个样式设置时，使用逗号，作为并列关系 */
.wrapper-left,.wrapper-right {
    flex:1;
    padding:0px 8px;
}

</style>
