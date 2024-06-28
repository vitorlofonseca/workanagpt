import { defineStore } from 'pinia'
import { chats } from './state'
import { createChat, pushMessagesToChat, initializeChats } from './actions'
import { getLastChat, getChats } from './getters'

export const useChatsStore = defineStore('chats', () => {
  return {
    chats,
    createChat,
    pushMessagesToChat,
    getLastChat,
    initializeChats,
    getChats
  }
})
