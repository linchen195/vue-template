<template>
  <div>
    <!-- <item></item> -->
    <component :is="item" v-for="(data, index) in children" :key="index"
               :data="data"></component>
  </div>
</template>
<script>
import item from './item.vue'
export default {
  name: 'wrap',
  props: {
    children: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
      item: item
    }
  },
  created () {
    console.log(this.children)
  }
}
</script>
