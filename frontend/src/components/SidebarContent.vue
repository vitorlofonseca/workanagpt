<script setup lang="ts">
import { CirclePlus } from '@element-plus/icons-vue'
import { useChatsStore } from '@/stores/chats/index'
import type { Chat } from '@/domain/Chat'

const chatsStore = useChatsStore()

const emit = defineEmits(['change-chat'])

const onClickChat = (chat: Chat) => {
  emit('change-chat', chat)
}
</script>

<template>
  <div class="SidebarContent">
    <div class="SidebarContent__Header">
      <img
        class="SidebarContent__Lettering"
        src="@/assets/images/workana-lettering.png"
        alt="Workana lettering logo"
      />
      <CirclePlus class="SidebarContent__AddIcon" />
    </div>

    <div v-if="chatsStore.chats.length > 0" class="ChatsList">
      <div v-for="chat in chatsStore.chats" class="ChatsList__Chat" @click="onClickChat(chat)">
        {{ chat.name }}
      </div>
    </div>
    <h5 v-else class="NoChats">Ainda não tem histórico de conversas :(</h5>
  </div>
</template>

<style scoped lang="scss">
.SidebarContent {
  background-color: lighten($color: $color-primary, $amount: 55);
  padding: 30px;
  width: 100%;
  max-width: 30vw;

  &__Header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__Lettering {
    height: 22px;
  }

  &__AddIcon {
    width: 37px;
    color: $color-primary;
    cursor: pointer;
  }

  .NoChats {
    height: 80vh;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .ChatsList {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 40px;

    &__Chat {
      background-color: lighten($color: $color-primary, $amount: 45);
      padding: 5px 10px;
      border-radius: 10px;
      cursor: pointer;
    }
  }
}

@media only screen and (max-width: 900px) {
  .SidebarContent {
    max-width: unset;
    height: 100%;
  }
}
</style>
