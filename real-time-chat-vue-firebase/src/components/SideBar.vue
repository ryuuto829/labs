<template>
  <aside v-if="isSideBarOpen" class="room-list">
    <UsernameUpdate :username="username" />
    <div class="room-list__description">Choose a chatroom:</div>
    <button
      v-for="chartroom in chatrooms"
      :key="chartroom"
      class="button room"
      @click="onRoomChange(chartroom)"
    >
      <RoomHeader :title="chartroom" />
    </button>
  </aside>
</template>

<script>
import RoomHeader from './RoomHeader.vue'
import UsernameUpdate from './UsernameUpdate.vue'

export default {
  name: 'SideBar',
  components: {
    RoomHeader,
    UsernameUpdate,
  },
  props: {
    isSideBarOpen: {
      default: false,
      type: Boolean,
    },
    username: String,
    chatrooms: Array,
  },
  emits: ['onRoomChange'],
  methods: {
    onRoomChange(roomTitle) {
      this.$emit('onRoomChange', roomTitle)
    },
  },
}
</script>

<style scoped lang="scss">
.room-list {
  min-width: 250px;
  border-right: 1px solid var(--colorLightGray);
  padding: 1rem;
  padding-top: 0;
  text-align: left;

  &__description {
    display: flex;
    margin: 0 1rem;
    align-items: center;
    padding: 1rem 0;
  }
}

.room {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.25s ease-out;
  padding: 1rem;
  width: 100%;

  &:hover {
    background-color: #f7f8fa;
  }
}
</style>
