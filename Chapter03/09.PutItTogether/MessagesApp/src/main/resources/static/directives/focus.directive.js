// The following example is borrowed from 
// https://vuejs.org/v2/guide/custom-directive.html

// Register a global custom directive called `v-focus`
Vue.directive('focus', {
  // When the bound element is inserted into the DOM...
  inserted: function (el) {
    // Focus the element
    el.focus()
  }
})