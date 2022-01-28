<template>
  <div class="room-name">
    <div class="room-name__hash-icon">
      <HashIcon />
    </div>
    <h2 class="room-name__title">{{ title }}</h2>
  </div>
</template>

<script>
import HashIcon from './icons/HashIcon.vue'

export default {
  name: 'RoomHeader',
  components: {
    HashIcon,
  },
  props: {
    title: {
      default: 'Chartroom name',
      type: String,
    },
  },
}
</script>

<style scoped lang="scss">
.room-name {
  display: flex;
  justify-content: center;
  align-items: center;

  &__hash-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 0.5rem;
    color: var(--colorSalmon);
  }

  &__title {
    font-size: 18px;
    font-weight: 400;
    margin: 0;
  }
}
</style>
