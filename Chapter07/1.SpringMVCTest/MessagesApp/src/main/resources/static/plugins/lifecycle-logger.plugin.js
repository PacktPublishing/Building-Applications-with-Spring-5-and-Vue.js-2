const switchers = {
  created: true,
  beforeMount: true,
  mounted: true,
  destroyed: true
}

export default {
  install (Vue, options) {    
    Object.assign(switchers, options)
    
    Vue.mixin({  
      created () {
        if (switchers.created) {
          console.log(`${this.$options.name} created`)
        }        
      },
      beforeMount () {
        if (switchers.beforeMount) {
          console.log(`${this.$options.name} about to mount`)
        }        
      },
      mounted () {
        if (switchers.mounted) {
          console.log(`${this.$options.name} mounted`) 
        }        
      },  
      destroyed () {
        if (switchers.destroyed) {
          console.log(`${this.$options.name} destroyed`)
        }        
      }
    })
  }
}