<template>
  <div>
     <ul>
       <Item v-for="(comment,index) in datas" :key="index" :comment="comment"></Item>
     </ul>
  </div>
</template>

<script>

import Item from './Item'
export default {
  // 声明父组件的属性名，这个属性就会成为组件对象的属性
  props: ['datas'],
  components: {Item}
}
</script>

<style>
</style>
