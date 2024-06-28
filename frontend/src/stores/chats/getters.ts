import { chats } from './state'

export const getChatByName = (name: string) => {
  return chats.value.find((chat) => chat.name === name)
}

export const getLastChat = () => {
  const localStorageChats = getChats()
  return [...localStorageChats].pop()
}

export const getChats = () => {
  const localStorageChatsString = localStorage.getItem('chats')

  if (!localStorageChatsString) {
    return undefined
  }

  return JSON.parse(localStorageChatsString)
}
