<template>
  <div class="container">
    <div class="form row">
      <div class="form-horizontal col-md-offset-3" id="login_form">
        <h3 class="form-title" style="margin-left:150px">LOGIN</h3>
        <div class="col-md-9">
          <div class="form-group">
            <i class="fa fa-user fa-lg"></i>
            <input class="form-control required" style="margin-left:80px" type="text" placeholder="Username" id="username" name="username"
                   autofocus="autofocus" maxlength="20" v-model="usrname"/>
          </div>
          <div class="form-group">
            <i class="fa fa-lock fa-lg"></i>
            <input class="form-control required" style="margin-left:80px" type="password" placeholder="Password" id="password" name="password"
                   maxlength="8" v-model="passwd"/>
          </div>
          <div class="form-group col-md-offset-9">
            <button type="submit" class="btn btn-success pull-right" style="margin-left:145px" name="submit" @click="add">登录</button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  data () {
    return {
      usrname: '',
      passwd: ''
    }
  },
  methods: {
    add () {
      const username = this.usrname.trim()
      const passwd = this.passwd.trim()
      // http://localhost:8082/ljnet/carbody/service/getPassedCheckList
      this.$http.post('http://localhost:8081/chw/vue/vuecontroller/login', {
        username: username,
        usrpass: passwd
      })
        .then(function (response) {
          // alert(response)
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>
<style>
  body {
    background: url("../static/img/markus-henze-1104614-unsplash.jpg");
    background-size: 2000px 1000px;
    background-repeat: no-repeat;
    /*animation-name: myfirst;*/
    /*animation-duration: 12s;*/
    /*!*变换时间*!*/
    /*animation-delay: 5s;*/
    /*!*动画开始时间*!*/
    /*animation-iteration-count: infinite;*/
    /*!*下一周期循环播放*!*/
    /*animation-play-state: running;*/
    /*!*动画开始运行*!*/
  }

  /*@keyframes myfirst {*/
    /*0% {*/
      /*background: url("../static/img/1.jpg");*/
    /*}*/
    /*34% {*/
      /*background: url("../static/img/2.jpg");*/
    /*}*/
    /*67% {*/
      /*background: url("../static/img/1.jpg");*/
    /*}*/
    /*100% {*/
      /*background: url("../static/img/1.jpg");*/
    /*}*/
  /*}*/

  .form {
    background: rgba(255, 255, 255, 0.2);
    width: 400px;
    margin: 290px auto;
  }

  /*!*阴影*!*/
  /*.fa {*/
    /*display: inline-block;*/
    /*top: 27px;*/
    /*left: 6px;*/
    /*position: relative;*/
    /*color: #ccc;*/
  /*}*/

  input[type="text"], input[type="password"] {
    padding-left: 26px;
  }

  .checkbox {
    padding-left: 21px;
  }

</style>
