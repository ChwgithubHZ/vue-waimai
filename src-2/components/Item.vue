<template>
<div>
  <li>{{comment.msg}}</li>
</div>
</template>

<script>
export default {
  props: { // 指定属性名和属性值得类型
    comment: Object
  }
}
</script>

<style scoped>

</style>
