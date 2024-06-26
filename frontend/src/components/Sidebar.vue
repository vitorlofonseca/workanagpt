<script setup lang="ts">
import { CirclePlus } from '@element-plus/icons-vue'
</script>

<template>
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
</template>

<style scoped lang="scss">
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
  }
}
</style>
