<template>
  <div class="main">
    <tree :data="data"></tree>
    <div class="flt">
      <p class="first"></p>
    </div>
  </div>
</template>
<script>
import constant from './constant'
import Tree from './Tree'
export default {
  name: 'HelloWorld',
  components: { Tree },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      data: constant
    }
  }
}
</script>
<style lang="scss" scoped>
.main {
  padding: 20px;
  background-color: #04112b;
}
.flt {
  height: 300px;
  background-color: yellowgreen;
  &::after {
    display: inline-block;
    height: 100%;
    content: '';
    vertical-align: middle
  }
}
  .first {
    display: inline-block;
    vertical-align: middle;
    width: 200px;
    height: 100px;
    background-color: red;
  }
</style>
