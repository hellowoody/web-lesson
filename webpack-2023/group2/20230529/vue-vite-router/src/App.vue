<script setup>
import Menus from "@/components/Menus.vue"
import Content from "@/components/Content.vue"
</script>

<template>
  <div style="display: flex;justify-content: space-around;">
    <div style="border-right:1px solid #363636;">
      <menus />
    </div>
    <div>
      <content />
    </div>
  </div>
</template>

