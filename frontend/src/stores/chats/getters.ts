import { chats } from './state'

export const getChatByName = (name: string) => {
  return chats.value.find((chat) => chat.name === name)
}

export const getLastChat = () => {
  const localStorageChatsString = localStorage.getItem('chats')

  if (!localStorageChatsString) {
    return undefined
  }

  const localStorageChats = JSON.parse(localStorageChatsString)
  return [...localStorageChats].pop()
}
