<script setup lang="ts">
import { ElInput, ElButton } from 'element-plus'
import { Promotion } from '@element-plus/icons-vue'
import { ref, type Ref } from 'vue'
import EmptyChat from './EmptyChat.vue'
import ChatMessages from './ChatMessages.vue'
import type { Chat } from '@/domain/Chat'
import { useChatsStore } from '@/stores/chats/index'

const chatsStore = useChatsStore()

const props = defineProps<{
  chat: Chat
}>()

const mockedAnswers = [
  {
    question: 'O que devo fazer para ser um bom freelancer?',
    answer: 'Ser um bom freelancer envolve diversas habilidades e práticas. Pipipi popopo'
  }
]

const emit = defineEmits(['initialize-chat'])

const initializeChat = (name: string) => {
  if (props.chat.name) {
    return
  }

  emit('initialize-chat', name)
}

const searchInput = ref('')

const onSubmitPrompt = () => {
  if (searchInput.value === '') {
    return
  }

  initializeChat(searchInput.value)
  props.chat.messages.push({ author: 'user', message: searchInput.value })

  for (const index in mockedAnswers) {
    if (mockedAnswers[index].question === searchInput.value) {
      props.chat.messages.push({ author: 'robot', message: mockedAnswers[index].answer })
      searchInput.value = ''
      chatsStore.pushMessagesToChat(props.chat.messages, props.chat)
      return
    }
  }

  props.chat.messages.push({
    author: 'robot',
    message: 'Desculpa, não consigo te responder essa pergunta'
  })

  searchInput.value = ''
  chatsStore.pushMessagesToChat(props.chat.messages, props.chat)
}
</script>

<template>
  <div class="ChatContainer">
    <div class="Content">
      <EmptyChat v-if="!chat?.messages?.length" />
      <ChatMessages v-else :messages="chat?.messages" />

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
    width: 90%;
  }
}
</style>
