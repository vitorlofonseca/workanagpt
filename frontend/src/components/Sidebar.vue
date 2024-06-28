<script setup lang="ts">
import SidebarContent from './SidebarContent.vue'
import { ElDrawer } from 'element-plus'
import { Menu as MenuIcon } from '@element-plus/icons-vue'
import { ref } from 'vue'
import type { Chat } from '@/domain/Chat'

defineProps<{
  chats: Chat[]
}>()

const drawerWidth = ref('50%')

window.addEventListener('resize', () => {
  let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)

  drawerWidth.value = '50%'

  if (vw < 600) {
    drawerWidth.value = '100%'
  }
})

const drawerIsOpened = ref(false)
</script>

<template>
  <MenuIcon class="MenuIcon" @click="drawerIsOpened = true" />

  <SidebarContent class="Sidebar" />

  <ElDrawer v-model="drawerIsOpened" :direction="'ltr'" :size="drawerWidth">
    <SidebarContent />
  </ElDrawer>
</template>

<style scoped lang="scss">
.MenuIcon {
  display: none;
  color: $color-primary;
  width: 35px;
  position: absolute;
  top: 20px;
  left: 20px;
  cursor: pointer;
}

.Sidebar {
  display: block;
}

@media only screen and (max-width: 900px) {
  .MenuIcon {
    display: block;
  }

  .Sidebar {
    display: none;
  }
}
</style>
