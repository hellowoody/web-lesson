<template>
    <div class="layout">
        <slot name="TopBar"></slot>
        <div class="content">
            <slot name="SideBar"></slot>
            <slot name="Content"></slot>
        </div>
    </div>
</template>

<style scoped>
.layout {
    display:flex;
    flex-direction: column;
    min-height: 100vh;
}

.content {
    display:flex;
}
</style>