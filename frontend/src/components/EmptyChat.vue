<script setup lang="ts"></script>

<template>
  <div class="EmptyChat">
    <img class="EmptyChat__Logo" src="@/assets/images/workana-logo.png" alt="Saci Logo" />
    <h2 class="EmptyChat__Title">O que você precisa saber do Workana GPT?</h2>
  </div>
</template>

<style scoped lang="scss">
.EmptyChat {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 85vh;

  &__Logo {
    width: 85px;
  }

  &__Title {
    text-align: center;
  }
}
</style>
