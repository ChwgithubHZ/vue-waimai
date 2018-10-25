<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入您的信息！"
          v-model="title" @keyup.enter="addItem"/>
  </div>
</template>

<script>
  export default {
    // name: 'Header'

    props:{
      // addTodo:Function  //接收App.vue函数
    },

    data(){
      return{
      title:''
      }
    },
    methods:{
      addItem(){
        //检查输入是否为空
       const title=this.title.trim()
       if(!title){
         alert("输入不能为空！")
         return
       }
        //根据输入生成一个 输入信息(eg:todo)的对象
        const todo ={
          title,
          complete:false
        }
        //添加到todos
        //this.addTodo(todo)
        //触发事件
        this.$emit('addTodo',todo)
        //删除输入
        this.title=''
      }
    }
  }
</script>

<style scoped>
  .todo-header input{
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #2e6da4;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus{
    outline: none;
    border-color:rgba(82,168,236,0) ;
    box-shadow: inset 0 1px 1px rgba(0,0,0,075),0 0 8px rgba(82,168,236,0.6);
  }
</style>
