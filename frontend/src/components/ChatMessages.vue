<script setup lang="ts">
import type { Message } from '@/domain/Message'

defineProps<{
  messages: Message[]
}>()
</script>

<template>
  <div class="Chat">
    <div
      v-for="message in messages"
      :class="['Message ', message.author === 'user' && 'Message--right']"
    >
      {{ message.message }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.Chat {
  height: 85vh;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.Message {
  background-color: lighten($color: $color-primary, $amount: 55);
  padding: 15px 20px;
  border-radius: 10px;
  max-width: 70%;

  &--right {
    align-self: end;
  }
}
</style>
