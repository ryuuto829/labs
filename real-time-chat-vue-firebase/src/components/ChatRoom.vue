<template>
  <section class="room">
    <header class="room__header">
      <div class="room__btn">
        <button @click="onSideBarToggle" :class="['button', { 'button--rotate': isSideBarOpen }]">
          <ArrowsIcon />
        </button>
      </div>
      <RoomHeader title="Room name" />
    </header>
    <div class="room__messages-list">
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
    </div>
    <div class="room__footer">
      <MessageForm />
    </div>
  </section>
</template>

<script>
import MessageForm from './MessageForm.vue'
import ChatMessage from './ChatMessage.vue'
import RoomHeader from './RoomHeader.vue'
import ArrowsIcon from './icons/ArrowsIcon.vue'

export default {
  name: 'ChatRoom',
  components: {
    MessageForm,
    ChatMessage,
    RoomHeader,
    ArrowsIcon,
  },
  props: {
    isSideBarOpen: Boolean,
  },
  emits: ['onSideBarToggle'],
  methods: {
    onSideBarToggle() {
      this.$emit('onSideBarToggle')
    },
  },
}
</script>

<style scoped lang="scss">
.room {
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 6px;
  background-color: #f8f9fa;
  width: 100%;

  &__btn {
    padding-right: 0.5rem;
    margin-right: 0.5rem;
    border-right: 1px solid var(--colorLightGray);
  }

  &__header {
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--colorLightGray);
    background-color: var(--colorWhite);
    position: absolute;
    height: 64px;
    width: 100%;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    padding: 1rem;
  }

  &__messages-list {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 64px;
    padding: 2rem 1rem;
  }

  &__footer {
    padding: 0 1rem;
    margin-bottom: 1rem;
  }
}

.button--rotate {
  transform: rotate(180deg);
}
</style>
