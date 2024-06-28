<script setup lang="ts">
import Sidebar from '@/components/Sidebar.vue'
import Chat from '@/components/Chat.vue'
import { onMounted, ref, type Ref } from 'vue'
import { type Chat as ChatDomain } from '@/domain/Chat'
import { useChatsStore } from '@/stores/chats/index'

const chatsStore = useChatsStore()

const chat: Ref<ChatDomain> = ref({} as ChatDomain)
const chats: Ref<ChatDomain[]> = ref([])

const initializeChat = (chatName: string) => {
  chat.value.name = chatName
  chat.value.messages = []
  chatsStore.createChat(chat.value)
}

onMounted(() => {
  chatsStore.initializeChats()
  chats.value = chatsStore.getChats()
})

const onChangeChat = (selectedChat: ChatDomain) => {
  chat.value = selectedChat
}

const onAddChat = () => {
  chat.value = {} as ChatDomain
}
</script>

<template>
  <main class="Container">
    <Sidebar class="Sidebar" @change-chat="onChangeChat" @add-chat="onAddChat" />
    <Chat :chat="chat" @initialize-chat="initializeChat" />
  </main>
</template>

<style scoped lang="scss">
.Container {
  display: flex;
}
</style>
