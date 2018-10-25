<template>
  <div class="container">
    <!--<form action="add" method="post">-->
      <div class="row">
        <div class="col-md-8"><p><input type="text"  placeholder="请输入您的信息" name="fname" v-model="msg" @keyup.enter="add"/></p></div>
        <div class="col-md-4"><input type="submit" value="提交" @click="add"/></div>
      </div>
   <!-- </form>-->
  </div>
</template>

<script>
export default {
  props: {
    adddatas: Function,
    required: true
  },
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    add () {
      // 1.检查输入是否合法
      // alert('cun')
      const msg = this.msg.trim()
      if (!msg) {
        alert('输入信息不能为空！')
        return
      }
      // 2.根据输入数据，封装成一个对象
      const comment = {
        msg
      }
      // 3.将对象添加到datas
      this.adddatas(comment)
      // 4.清除信息
      this.msg = ''
    }
  }
}
</script>

<style>

</style>
