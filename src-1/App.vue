<template>
  <div class="todo-container">
    <div class="todo-wrap">
     <!--<TodoHeader :addTodo="addTodo" />-->
      <TodoHeader @addTodo="addTodo" />
      <!--<TodoList :todos="todos" :deleteTodo="deleteTodo"/>-->
      <TodoList :todos="todos"/>
      <TodoFooter :todos="todos" :deleteAllCompleted="deletes" :select="select"/>
    </div>
  </div>
</template>

<script>
  import PubSub from  'pubsub-js'
  import TodoHeader from './components/Header.vue'  //加载组件
  import TodoList from './components/List.vue'
  import TodoFooter from './components/Footer.vue'
  import storageUtils from './utils/storageUtils'
  // import storageUtils from './utils/storageUtils'

  export default {
    data(){
      return{
        //从localStorage 读取todos
        // todos: JSON.parse(window.localStorage.getItem('todos_key') || '[]')
        todos:storageUtils.readTodos()
        // todos:[
        //   {title:"hadoop",complete:false},
        //   {title:"spark",complete:false},
        //   {title:"storm",complete:false}
        // ]   //数组中获取数据
      }
    },
    mounted(){
      //订阅消息 (来自item组件的删除)
      PubSub.subscribe('deleteTodo',(msg,index)=> {
        this.deleteTodo(index)
      })
    },
    methods:{
      addTodo(todo){
        this.todos.unshift(todo)
      },
      deleteTodo(index){
        this.todos.splice(index,1)
      },
      //删除选择中的数据
      deletes(){
          this.todos=this.todos.filter(todo => !todo.complete)  //过滤没选中的行
      },
      //全选或则全不选
      select(check){
        this.todos.forEach(todo => todo.complete=check)
      }
    },
    watch:{//监视
      todos:{
        deep:true,//深度监视
        handler:function (value) {
          // window.localStorage.setItem('todos_key',JSON.stringify(value))
          storageUtils.saveTodos(value)
        }
      }
    },
    // data () {
    //   return {
    //     // todos: JSON.parse(localStorage.getItem('todos_key') || '[]')  // 读取localStorage保存的数据
    //     todos: storageUtils.readTodos()
    //   }
    // },
    // methods: {
    //   addTodo (todo) {
    //     this.todos.unshift(todo)
    //   },
    //
    //   deleteTodo (index) {
    //     this.todos.splice(index, 1)
    //   },
    //
    //   // 删除所有已完成的
    //   deleteCompleteTodos () {
    //     this.todos = this.todos.filter(todo => !todo.complete)
    //   },
    //
    //   // 全选/全不选
    //   selectAll (isSelectAll) {
    //     this.todos.forEach(todo => {
    //       todo.complete = isSelectAll
    //     })
    //   }
    // },
    //
    // watch: {
    //   todos: {
    //     deep: true, // 深度监视
    //     /*handler: function (val) {
    //       // 将数据(json)保存到localStorage
    //       // localStorage.setItem('todos_key', JSON.stringify(val))
    //       storageUtils.saveTodos(val)
    //     }*/
    //     // handler的值应该是一个函数, 且函数应该要有一个形参(接收todos最新的值)
    //     handler: storageUtils.saveTodos,
    //     /*handler: function  (todos) {
    //       localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
    //     }*/
    //   }
    // },

    components: { //注册组件
      TodoHeader,
      TodoList,
      TodoFooter
    }
  }
</script>

<style>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
