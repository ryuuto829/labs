<template>
  <div class="message">
    <div class="message__info">
      <span class="message__username">Username</span>
      <span class="message__timestamp">10:25</span>
    </div>
    <div class="message__text">Message some text here</div>
  </div>
</template>

<script>
export default {
  name: 'ChatMessage',
}
</script>

<style scoped lang="scss">
.message {
  font-size: 14px;
  margin-top: 1rem;

  &__info {
    text-align: right;
    margin-bottom: 0.25rem;
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
    background-color: #ccf2cf;
    text-align: left;
    padding: 0.5rem 0.75rem;
    border-radius: 6px;
    max-width: 400px;
  }
}
</style>
