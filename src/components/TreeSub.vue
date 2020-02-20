<template>
  <div class="tree-sub">
    <p class="tree-sub-left" :style="lineStyle" ref="verLine"></p>
    <div class="tree-sub-content">
      <component :is="tree" v-for="(data, index) in children" :key="index"
                 :data="data" :level="level+1" ref="treeItem"></component>
    </div>
  </div>
</template>
<script>
import Tree from './Tree.vue'
export default {
  props: {
    children: {
      type: Array,
      default: function () {
        return []
      }
    },
    level: Number
  },
  data () {
    return {
      tree: Tree,
      lineStyle: {
        top: 0,
        bottom: 0
      }
    }
  },
  created () {
    this.$nextTick(() => {
      const treeItems = this.$refs.treeItem
      if (treeItems.length > 0) {
        const height = treeItems[0].$el.offsetHeight
        const lastHeight = treeItems[treeItems.length - 1].$el.offsetHeight

        Object.assign(this.lineStyle, {
          top: height / 2 + 2 + 'px',
          bottom: lastHeight / 2 - 2 + 'px'
        })
      }
    })
  }
}
</script>
<style lang="scss" scoped>
.tree-sub {
  position: relative
}
  .tree-sub-left {
    position: absolute;
    left: 0;
    width: 1px;
    border-left: 1px dashed #819cc6
  }
</style>
