<script setup lang="ts">
import { ElInput, ElButton } from 'element-plus'
import { Promotion } from '@element-plus/icons-vue'
import { ref, type Ref } from 'vue'
import EmptyChat from './EmptyChat.vue'
import ChatMessages from './ChatMessages.vue'
import { type Message } from '@/domain/Message'

const mockedAnswers = [
  {
    question: 'O que devo fazer para ser um bom freelancer?',
    answer: 'Ser um bom freelancer envolve diversas habilidades e práticas. Pipipi popopo'
  }
]

const messages: Ref<Message[]> = ref([])

const searchInput = ref('')

const onSubmitPrompt = () => {
  if (searchInput.value === '') {
    return
  }

  messages.value.push({ author: 'user', message: searchInput.value })

  for (const index in mockedAnswers) {
    if (mockedAnswers[index].question === searchInput.value) {
      messages.value.push({ author: 'robot', message: mockedAnswers[index].answer })
      searchInput.value = ''
      return
    }
  }

  messages.value.push({
    author: 'robot',
    message: 'Desculpa, não consigo te responder essa pergunta'
  })
  searchInput.value = ''
}
</script>

<template>
  <div class="ChatContainer">
    <div class="Content">
      <EmptyChat v-if="messages.length === 0" />
      <ChatMessages v-else :messages="messages" />

      <ElInput
        v-model="searchInput"
        placeholder="Pergunte aqui algo sobre o mercado de freelancing"
      >
        <template #append>
          <ElButton @click="onSubmitPrompt" :icon="Promotion" />
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
    width: 80%;
  }
}
</style>
