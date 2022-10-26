<template>
    <div class="layout">
        <slot name="header"></slot>
        <div class="content">
            <slot name="sider"></slot>
            <slot name="container"></slot>
        </div>
    </div>
</template>

<style scoped>
.layout {
    height:100vh;
    display:flex;
    flex-direction: column;
}
.content {
    display: flex;
}
</style>