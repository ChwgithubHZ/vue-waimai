<template>
    <div class="todo-footer">
      <label>
        <input type="checkbox" v-model="AllCheck"/>
      </label>
      <span>
        <span>已完成{{completeSize}}</span> / 全部{{todos.length}}
      </span>
      <button v-show="completeSize" @click="deleteAllCompleted">清除已完成的任务</button>
    </div>
</template>

<script>
  export default {
    props:{
      todos:Array,
      deleteAllCompleted:Function,
      select:Function
    },
    computed:{
      completeSize(){
         return this.todos.reduce((preTotal,todo) => preTotal+(todo.complete?1:0),0) //回调函数 初始值0
      },
      AllCheck:{
        get(){
          return this.completeSize===this.todos.length&&this.completeSize>0
        },
        set(value){
          this.select(value)
        }
      }
    },

  }
</script>

<style scoped>
  .todo-footer{
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }
  .todo-footer label{
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input{
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }
  .todo-footer button{
    float: right;
    margin-top: 5px;
  }
</style>
