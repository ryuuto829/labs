<template>
  <section class="room">
    <header class="room__header">
      <div class="room__btn">
        <button @click="onSideBarToggle" :class="['button', { 'button--rotate': isSideBarOpen }]">
          <ArrowsIcon />
        </button>
      </div>
      <RoomHeader :title="currentRoom" />
    </header>
    <div class="room__messages-list">
      <template v-for="(message, index) in messagesData" :key="index">
        <ChatMessage
          :username="username"
          :author="message.author"
          :content="message.content"
          :created="message.created"
        />
      </template>
      <div v-if="messagesData.length === 0" class="room__no-messages">No messages</div>
    </div>
    <div class="room__footer">
      <MessageForm :username="username" :currentRoom="currentRoom" />
    </div>
  </section>
</template>

<script>
import { formatDistance } from 'date-fns'
import MessageForm from './MessageForm.vue'
import ChatMessage from './ChatMessage.vue'
import RoomHeader from './RoomHeader.vue'
import ArrowsIcon from './icons/ArrowsIcon.vue'
import db from '../firebase/db'

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
    username: String,
    currentRoom: String,
  },
  data() {
    return {
      messagesData: [],
    }
  },
  created() {
    this.getMessagesData()
  },
  watch: {
    currentRoom() {
      this.getMessagesData()
    },
  },
  emits: ['onSideBarToggle'],
  methods: {
    onSideBarToggle() {
      this.$emit('onSideBarToggle')
    },

    async getMessagesData() {
      const messagesRef = db.database().ref(this.currentRoom)

      messagesRef.on('value', (snapshot) => {
        const data = snapshot.val()

        if (!data) {
          this.messagesData = []
          return
        }

        // Markup messages in reverse order to fix scroll bottom position
        const messages = Object.keys(data)
          .map((key) => ({
            id: key,
            author: data[key].author,
            content: data[key].content,
            created: formatDistance(data[key].created, new Date(), { addSuffix: true }),
          }))
          .reverse()

        this.messagesData = messages
      })
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
    align-items: flex-start;
    height: 100%;
    margin-top: 64px;
    padding: 2rem 1rem;
    overflow-y: auto;
    flex-direction: column-reverse;

    &::-webkit-scrollbar {
      width: 0;
      background: transparent;
    }
  }

  &__no-messages {
    width: 100%;
    text-align: center;
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
