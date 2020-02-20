<template>
  <div class="tree-item">
    <!-- 横线和箭头 -->
    <div class="tree-item-left">
      <p class="split-line"/>
      <i class="iconfont icon-arrow-thick"></i>
    </div>
    <!-- 内容 -->
    <div class="tree-item-content">
      <p class="tree-item-title">
        <span class="title">{{ data.label }}</span>
        <i class="iconfont"></i>
      </p>
      <hr class="line-blue"/>
      <p class="tree-item-value">{{ data.value }}</p>
    </div>
    <!-- 节点 -->
    <div class="tree-item-right">
      <p class="tree-item-node"></p>
    </div>
  </div>
</template>
<script>
import TreeSub from './TreeSub'

export default {
  components: { TreeSub },
  props: {
    data: Object,
    level: Number
  },
  data () {
    return {
    }
  },
  created () {
    console.log(this.data.label, this.level)
  }
}
</script>
<style lang="scss" scoped>
.tree-item {
  font-family: PingFangSC-Medium;
  color: white;
  &>* {
    display: inline-block;
    vertical-align: middle
  }
}
// 横线和箭头
.tree-item-left {
  &>* {
    display: inline-block;
    vertical-align: middle
  }
  .split-line {
    width: 20px;
    height: 0;
    border-top: 1px dashed #819cc6
  }
  .icon-arrow-thick {
    color: #56a0ff;
    font-size: 16px;
  }
}
// 内容
.tree-item-content {
  background-image: linear-gradient(rgba(37, 94, 173, 0.27) 0%, rgba(0, 12, 32, 0.27) 100%);
  .tree-item-title {
    padding: 12px 14px 12px 10px;
    font-size: 16px;
    text-align: left;
    line-height: 16px;
    &::before {
      display: inline-block;
      content: '';
      margin-right: 8px;
      width: 3px;
      height: 13px;
      background-color: #ff7e01
    }
  }
  .tree-item-value {
    padding: 13px;
    font-size: 20px;
    line-height: 20px;
  }
  .line-blue {
    margin: 0;
    padding: 0;
    height: 2px;
    color: #173d79;
    background-color: #173d79;
    border: none;
  }
}

.tree-item-right {
  .tree-item-node {
    margin-right: -8px;
    width: 16px;
    height: 16px;
    background-color: #56a0ff;
    border: 3px solid #213451;
    border-radius: 8px
  }
}

</style>
