<template>
  <div :class="['message', isUserOwnMessage && 'message--own-message']">
    <div :class="['message__info', isUserOwnMessage && 'message__info--own-message']">
      <span class="message__username">{{ author }}</span>
      <span class="message__timestamp">10:25</span>
    </div>
    <div :class="['message__text', isUserOwnMessage && 'message__text--own-message']">
      Message some text here
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatMessage',
  props: {
    author: String,
    username: String,
  },
  computed: {
    isUserOwnMessage() {
      return this.author === this.username
    },
  },
}
</script>

<style scoped lang="scss">
.message {
  font-size: 14px;
  margin-top: 1rem;

  &--own-message {
    align-self: flex-end;
  }

  &__info {
    text-align: left;
    margin-bottom: 0.25rem;

    &--own-message {
      text-align: right;
    }
  }

  &__username {
    font-weight: 700;
  }

  &__timestamp {
    margin-left: 0.5rem;
    color: #9ca6af;
  }

  &__text {
    min-height: 50px;
    background-color: var(--colorLightGray);
    text-align: left;
    padding: 0.5rem 0.75rem;
    border-radius: 6px;
    max-width: 400px;

    &--own-message {
      background-color: var(--colorLightGreen);
    }
  }
}
</style>
