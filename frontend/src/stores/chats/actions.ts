import type { Chat } from '@/domain/Chat'
import type { Message } from '@/domain/Message'
import { chats } from './state'
import { getChats } from './getters'

export const createChat = (chat: Chat) => {
  chats.value.push(chat)
  updateChatsLocalStorage()
}

export const pushMessagesToChat = (messages: Message[], chat: Chat) => {
  chats.value.map((chatIteration) => {
    if (chatIteration.name === chat.name) {
      chatIteration.messages = messages
    }
  })

  updateChatsLocalStorage()
}

const updateChatsLocalStorage = () => {
  localStorage.setItem('chats', JSON.stringify(chats.value))
}

export const initializeChats = () => {
  const localStorageChats = getChats()
  chats.value = localStorageChats || []
}
