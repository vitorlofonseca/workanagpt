import type { Chat } from '@/domain/Chat'
import { type Ref, ref } from 'vue'

const chats: Ref<Chat[]> = ref([])

export { chats }
