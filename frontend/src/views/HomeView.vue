<script setup lang="ts">
import Sidebar from '@/components/Sidebar.vue'
import Chat from '@/components/Chat.vue'
</script>

<template>
  <main class="Container">
    <Sidebar />
    <Chat />
  </main>
</template>

<style scoped lang="scss">
.Container {
  display: flex;
}
</style>
