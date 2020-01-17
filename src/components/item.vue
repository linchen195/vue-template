<template>
  <div class="item">
    <div class="wrap-item">
      <p class="title">{{ data.label }}</p>
      <p class="type">{{ data.value }}</p>
    </div>
    <wrap class="col" v-if="data.children&&data.children.length>0"
          :children="data.children"></wrap>
  </div>
</template>
<script>
import wrap from './wrap'
export default {
  name: 'item',
  components: { wrap },
  props: {
    data: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  data () {
    return {}
  },
}
</script>
<style lang="scss" scoped>
.item {
  // overflow: auto;
  // zoom: 1;
  // &::after {
  //   display: block;
  //   content: '';
  //   clear: both
  // }
  display: flex;
  align-items: center;
}
.wrap-item {
  float: left;
}
.col {
  float: left;
}
.title {
  padding: 10px 20px;
  line-height: 20px;
  font-size: 18px;
  color: lightseagreen;
  font-weight: bold;
  background-color: lightcyan;
  border-bottom: lightgrey
}
.type {
  padding: 10px 20px;
  line-height: 20px;
  color: black;
  background-color: linen
}
</style>
