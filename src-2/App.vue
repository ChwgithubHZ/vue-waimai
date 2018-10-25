<template>
<div class="app">
  <div class="header">
    <Add :adddatas="adddatas"/>
  <div class="container">
    <List :datas="datas"/>
  </div>
  </div>
</div>
</template>

<script>
import Add from './components/Add'
import List from './components/List'
export default {
  data () {
    return {
      datas: [
        {
          msg: 'chenhaowen'
        },
        {
          msg: 'xiaohua'
        },
        {
          msg: 'ritian'
        }
      ]
    }
  },
  methods: {
    adddatas (comment) {
      this.datas.unshift(comment)
    }
  },
  components: {
    Add,
    List
  }
}
</script>
<style>
  .app{
    width: 300px;
    height: 500px;
    border: 1px solid red;
    margin-left: auto;
    margin-right: auto;
  }
 .header{
   width: 300px;
   height: 50px;
   border: 1px solid  bisque;
   padding-top: 10px;
   margin-left: auto;
   margin-right: auto;
 }
</style>
