<template>
  <div class="hello">
    <item :data="data"></item>
    <div class="flt">
      <p class="first"></p>
    </div>
  </div>
</template>
<script>
import constant from './constant'
import item from './item'
export default {
  name: 'HelloWorld',
  components: { item },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      data: constant
    }
  }
}
</script>
<style lang="scss" scoped>
.hello {
  background-color:grey
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
