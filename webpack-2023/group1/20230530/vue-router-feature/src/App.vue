<script setup>
import NavBar from "@/components/NavBar"
import Content from "@/components/Content"
</script>

<template>
  <div class="layout">
    <nav-bar />
    <content />
  </div>
</template>

<style>
.layout {
  display: flex;
  justify-content: space-around;
}

body {
  margin:0;
}
</style>