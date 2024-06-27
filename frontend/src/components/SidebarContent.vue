<script setup lang="ts">
import { CirclePlus } from '@element-plus/icons-vue'
</script>

<template>
  <div class="SidebarContent">
    <div class="SidebarContent__Header">
      <img
        class="SidebarContent__Lettering"
        src="@/assets/images/workana-lettering.png"
        alt="Workana lettering logo"
      />
      <CirclePlus class="SidebarContent__AddIcon" />
    </div>

    <h5 class="SidebarContent__Content">Ainda não tem histórico de conversas :(</h5>
  </div>
</template>

<style scoped lang="scss">
.SidebarContent {
  background-color: lighten($color: $color-primary, $amount: 55);
  padding: 30px;
  width: 100%;
  max-width: 30vw;

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
  .SidebarContent {
    max-width: unset;
  }
}
</style>
