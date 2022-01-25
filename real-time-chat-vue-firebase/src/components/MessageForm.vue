<template>
  <form @submit.prevent="onSendMessage" class="form">
    <input
      type="text"
      v-model="message"
      placeholder="Write a message ..."
      maxlength="150"
      class="form__input"
    />
    <button class="form__btn">
      <SendIcon />
    </button>
  </form>
</template>

<script>
import SendIcon from './icons/SendIcon.vue'

export default {
  name: 'MessageForm',
  components: {
    SendIcon,
  },
  data() {
    return {
      message: '',
    }
  },
  methods: {
    onSendMessage() {
      console.log('[MessageForm] submit')
    },
  },
}
</script>

<style scoped lang="scss">
.form {
  display: flex;
  align-items: center;
  border-radius: 6px;
  padding: 4px 8px;
  border: 1px solid var(--colorLightGray);
  background-color: var(--colorWhite);

  &__input {
    width: 100%;
    height: 48px;
    border-radius: 6px;
    border: 0;
    outline: 0;
    font-size: 14px;
    color: var(--colorDarkGray);
  }

  &__btn {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    background-color: transparent;
    padding: 4px;
    border-radius: 6px;
    color: #57585d;
    cursor: pointer;
    transition: all 0.25s ease-out;

    &:hover {
      background-color: #f7f8fa;
    }
  }
}
</style>
