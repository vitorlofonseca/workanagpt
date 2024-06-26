<script setup lang="ts">
import { CirclePlus } from '@element-plus/icons-vue'
import { ElDrawer } from 'element-plus'
import { Menu as MenuIcon } from '@element-plus/icons-vue'
import { ref } from 'vue'

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
  <navbar class="Sidebar">
    <div class="Sidebar__Header">
      <img
        class="Sidebar__Lettering"
        src="@/assets/images/workana-lettering.png"
        alt="Workana lettering logo"
      />
      <CirclePlus class="Sidebar__AddIcon" />
    </div>

    <h5 class="Sidebar__Content">Ainda não tem histórico de conversas :(</h5>
  </navbar>

  <ElDrawer v-model="drawerIsOpened" title="I am the title" :direction="'ltr'" :size="drawerWidth">
    <span>Hi, there!</span>
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
  background-color: lighten($color: $color-primary, $amount: 55);
  flex-grow: 1;
  max-width: 30vw;
  padding: 30px;

  &__Header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__Lettering {
    height: 22px;
  }

  &__AddIcon {
    width: 37px;
    color: $color-primary;
    cursor: pointer;
  }

  &__Content {
    height: 80vh;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
}

@media only screen and (max-width: 900px) {
  .Sidebar {
    display: none;
  }

  .MenuIcon {
    display: block;
  }
}
</style>
