<template>
  <div>
    <header>
      <h1>Real time chat built with Vue.js and Firebase</h1>
    </header>
    <main>
      <SideBar :isSideBarOpen="isSideBarOpen" />
      <ChatRoom @onSideBarToggle="onSideBarToggle" :isSideBarOpen="isSideBarOpen" />
    </main>
  </div>
</template>

<script>
import ChatRoom from './components/ChatRoom.vue'
import SideBar from './components/SideBar.vue'

export default {
  name: 'App',
  data() {
    return {
      isSideBarOpen: false,
    }
  },
  components: {
    ChatRoom,
    SideBar,
  },
  methods: {
    onSideBarToggle() {
      this.isSideBarOpen = !this.isSideBarOpen
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
  width: 100%;
  max-width: 600px;
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
