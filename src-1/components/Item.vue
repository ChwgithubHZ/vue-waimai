<template>
<li @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)" :style="{background:bgColor}">
  <label>
    <input type="checkbox" v-model="todo.complete"/>
    <span>{{todo.title}}</span>
  </label>
  <button v-show="isShow" @click="deleteItem">删除</button>
</li>
</template>
<script>
  import PubSub from 'pubsub-js'
  export default {
    props:{
      todo:Object,
      index:Number
      // deleteTodo:Function
    },
    data(){
      return{
        bgColor: 'white',
        isShow: false
      }
    },
    methods:{
      handleEnter(is){
        if(is){
          this.bgColor='#cccccc'
          this.isShow=true
        }else {
          this.bgColor='white'
          this.isShow=false
        }
      },
      deleteItem(){
        const {todo,index,deleteTodo}=this
        if(window.confirm(`确认删除${todo.title}`)){
           console.log(index)
          //发布消息
          PubSub.publish('deleteTodo',index)
          // deleteTodo(index)

        }

      }
    }
  }
</script>

<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0px 5px;
  border-bottom: 1px solid #ddd;
  }

li label {
  float: left;
  cursor: pointer;
}
li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}
li button {
  float: right;
  /*display: none;*/
  margin-top: 3px;
}

li:before {
      content: initial;
      }

li:last-child {
      border-bottom: none;
     }
</style>
