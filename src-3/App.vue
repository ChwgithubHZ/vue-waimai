<template>
  <div class="app">
    <div class="header">
      <div class="row">
        <div class="col-md-6">
          <router-link to="/about">
            <input type="submit" value="路由1"/>
          </router-link>
        </div>
          <div class="col-md-6">
          <router-link to="/home">
              <input type="submit" value="路由2"/>
          </router-link>
          </div>
      </div>
    </div>
    <div class="container">
  <router-view></router-view>
    </div>
    </div>
</template>

<script>
export default {

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
  .header input{
   width: 130px;
  }
</style>
