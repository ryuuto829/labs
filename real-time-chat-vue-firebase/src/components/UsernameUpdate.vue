<template>
  <div class="username">
    <div class="username__description">Your username:</div>
    <input
      v-if="isEdit"
      type="text"
      v-model="userNameInputText"
      maxlength="50"
      class="username__input"
    />
    <div v-else class="username__value">{{ username }}</div>
    <button class="button button--update" @click="onUsernameUpdate">
      {{ isEdit ? 'Confirm' : 'Update' }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'UsernameUpdate',
  props: {
    username: String,
  },
  data() {
    return {
      isEdit: false,
      userNameInputText: '',
    }
  },
  methods: {
    onUsernameUpdate() {
      if (this.isEdit) {
        this.isEdit = false
        this.emitter.emit('onUsernameUpdate', this.userNameInputText)
      } else {
        this.isEdit = true
        this.userNameInputText = this.username
      }
    },
  },
}
</script>

<style scoped lang="scss">
.username {
  margin: 0 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid var(--colorLightGray);

  &__description {
    margin-bottom: 0.5rem;
  }

  &__value {
    font-weight: 600;
    margin-bottom: 1rem;
  }

  &__input {
    width: 100%;
    padding: 0.25rem 0.5rem;
    border-radius: 6px;
    border: 1px solid var(--colorLightGray);
    outline: 0;
    font-size: 16px;
    color: var(--colorDarkGray);
    margin-bottom: 1rem;
  }
}

.button--update {
  width: 100%;
  padding: 0.25rem 1rem;
  font-size: 16px;
  border: 2px solid #fa8072;

  &:hover {
    background-color: #fa8072;
    color: var(--colorWhite);
  }
}
</style>
