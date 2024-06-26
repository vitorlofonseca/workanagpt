<script setup lang="ts">
import { ElInput, ElButton } from 'element-plus'
import { Promotion } from '@element-plus/icons-vue'
</script>

<template>
  <div class="ChatContainer">
    <div class="Content">
      <div class="EmptyChat">
        <img class="EmptyChat__Logo" src="@/assets/images/workana-logo.png" alt="Saci Logo" />
        <h2 class="EmptyChat__Title">O que você precisa saber do Workana GPT?</h2>
      </div>
      <ElInput placeholder="Pergunte aqui algo sobre o mercado de freelancing">
        <template #append>
          <ElButton :icon="Promotion" />
        </template>
      </ElInput>
    </div>
  </div>
</template>

<style scoped lang="scss">
.ChatContainer {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  .Content {
    max-width: 80%;
  }

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
}
</style>
