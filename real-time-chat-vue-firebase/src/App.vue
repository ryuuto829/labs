<template>
  <div>
    <header>
      <h1>Real time chat built with Vue.js and Firebase</h1>
    </header>
    <main>
      <SideBar
        :isSideBarOpen="isSideBarOpen"
        :username="username"
        :chatrooms="chatrooms"
        @onRoomChange="onRoomChange"
      />
      <ChatRoom
        @onSideBarToggle="onSideBarToggle"
        :isSideBarOpen="isSideBarOpen"
        :username="username"
        :currentRoom="currentRoom"
      />
    </main>
  </div>
</template>

<script>
import ChatRoom from './components/ChatRoom.vue'
import SideBar from './components/SideBar.vue'

// Generate a unique id for the username
const uid = () => {
  return Math.random().toString(36).substr(9)
}

export default {
  name: 'App',
  components: {
    ChatRoom,
    SideBar,
  },
  data() {
    return {
      isSideBarOpen: true,
      username: '',
      chatrooms: ['General', 'Design', 'Web-dev', 'Books'],
      currentRoom: 'General',
    }
  },
  mounted() {
    if (localStorage.username) {
      this.username = localStorage.username
    } else {
      const usernameWithUID = `anonymous-${uid()}`

      localStorage.setItem('username', usernameWithUID)
      this.username = usernameWithUID
    }
  },
  created() {
    this.emitter.on('onUsernameUpdate', (updatedUsername) => {
      this.onUsernameUpdate(updatedUsername)
    })
  },
  methods: {
    onSideBarToggle() {
      this.isSideBarOpen = !this.isSideBarOpen
    },
    onUsernameUpdate(updatedUsername) {
      localStorage.setItem('username', updatedUsername)
      this.username = updatedUsername
    },
    onRoomChange(roomTitle) {
      this.currentRoom = roomTitle
    },
  },
}
</script>

<style lang="scss">
:root {
  --colorLightGray: #e1e4e8;
  --colorWhite: #ffffff;
  --colorBlack: #030c1a;
  --colorDarkGray: #2f343d;
  --colorLightGreen: #ccf2cf;
}

html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
  padding: 0;
  background-color: var(--colorWhite);
  color: var(--colorDarkGray);
}

main {
  display: flex;
  height: 100vh;
  max-height: 600px;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  background-color: white;
  border-radius: 6px;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.button {
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
</style>
