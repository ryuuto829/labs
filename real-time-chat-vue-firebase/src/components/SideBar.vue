<template>
  <aside v-if="isSideBarOpen" class="room-list">
    <UsernameUpdate :username="username" />
    <div class="room-list__description">Choose a chatroom:</div>
    <div class="room">
      <RoomHeader title="General" />
    </div>
    <div class="room">
      <RoomHeader title="Design" />
    </div>
    <div class="room">
      <RoomHeader title="Web-dev" />
    </div>
    <div class="room">
      <RoomHeader title="Books" />
    </div>
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

  &:hover {
    background-color: #f7f8fa;
  }
}
</style>
