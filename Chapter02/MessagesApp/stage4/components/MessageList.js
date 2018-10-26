import lifecyleLogger from '../mixins/lifecycle-logger.mixin.js'
import MessageListItem from './MessageListItem.js'

export default {
  name: 'MessageList',
  mixins: [lifecyleLogger],
  template: `<ul><message-list-item v-for="item in items" 
    :item="item" :key="item.id"@delete="deleteMessage(item)">
    </message-list-item></ul>`,
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