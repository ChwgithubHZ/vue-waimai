<template>
    <div>
      <p class="msg">{{msg}}</p>
    </div>
</template>
<script>
export default { // 配置对象
  data () {
    return {
      msg: 'Hello Vue Component!'
    }
  }
}
</script>

<style scoped>
  .msg{
   color: red;
   width: 20px;
   height: 20px;
  }
</style>
