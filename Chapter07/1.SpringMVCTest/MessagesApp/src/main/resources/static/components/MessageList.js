import MessageListItem from './MessageListItem.js'

export default {
  name: 'MessageList',
  template: `<div><ul><message-list-item v-for="item in items"
    :item="item" :key="item.id"@delete="deleteMessage(item)">
    </message-list-item></ul></div>`,
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  components: {
    MessageListItem
  },
  methods: {
    deleteMessage (message) {
      this.$emit('delete', message)
    }
  }
}
