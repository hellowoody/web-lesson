<template>
    <div class="content">
        <div class="top-bar">top-bar</div>
        <router-view></router-view>
        <div class="footer-bar">footer-bar</div>
    </div>
</template>

<style scoped>
.content {
    height: 100vh;
    background: blue;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.top-bar {
    height:100px;
    background: #f1f1f1;
}
.footer-bar {
    height:20px;
    background: #000;
    color:#fff;
}
</style>