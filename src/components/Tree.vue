<template>
  <div class="item">
    <tree-item :data="data" :level="level"></tree-item>
    <tree-sub class="col" v-if="data.children&&data.children.length>0"
              :children="data.children" :level="level"></tree-sub>
  </div>
</template>
<script>
import TreeSub from './TreeSub'
import TreeItem from './TreeItem'

export default {
  name: 'tree',
  components: { TreeSub, TreeItem },
  props: {
    data: {
      type: Object,
      default: function () {
        return {}
      }
    },
    level: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {}
  },
}
</script>
<style lang="scss" scoped>
.item {
  display: flex;
  align-items: center;
}
</style>
