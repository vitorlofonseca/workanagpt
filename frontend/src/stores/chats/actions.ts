import type { Chat } from '@/domain/Chat'
import type { Message } from '@/domain/Message'
import { chats } from './state'

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
  const localStorageChatsString = localStorage.getItem('chats')

  if (!localStorageChatsString) {
    return
  }

  const localStorageChats = JSON.parse(localStorageChatsString)
  chats.value = localStorageChats
}
