export default {
  name: 'MessageListItem',
  template: `<li>{{ item.text }} - {{ item.createdAt | datetime }} 
    <button @click="deleteClicked">X</button></li>`,
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    deleteClicked () {
      this.$emit('delete');
    }
  }
}; 