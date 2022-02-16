<template>
  <div class="bg">
    <div class="box">
      <p>MovieWall</p>
      <p>欢迎您的到来!</p>

      <div>
        <el-form ref="form" :model="form" :rules="rules" label-width="80px;" class="login-box">
          <!--  用户名-->
          <el-form-item label="账号" prop="userName">
            <el-input type="text" placeholder="Please enter your account number" v-model="form.userName"/>
          </el-form-item>
          <!--  密码-->
          <div class="login">
            <el-form-item label="密码" prop="password">
              <el-input type="password" id="psw" placeholder="Please enter your password" v-model="form.password"/>
            </el-form-item>
          </div>
          <el-form-item class="login-button">
            <button @click="submitForm('form')" type="button" class="styled-button"> <span class="styled-button__real-text-holder"> <span
              class="styled-button__real-text">立即注册</span> <span class="styled-button__moving-block face"> <span
              class="styled-button__text-holder"> <span class="styled-button__text">立即注册</span> </span> </span><span
              class="styled-button__moving-block back"> <span class="styled-button__text-holder"> <span
              class="styled-button__text">立即注册</span> </span> </span> </span> </button>
            <div class="zc">
              <el-button type="primary" plain @click="gotolink()">账号登录</el-button>
<!--              <el-button type="primary" plain @click="submit()">刷新</el-button>-->
            </div>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Register',
  inject: ['reload'],
  data: function () {
    return {
      form: {
        userName: '',
        password: '',
        rememberMe: false
      },
      rules: {
        userName: [
          {required: true, message: '请输入账号', trigger: 'blur'},
          {min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    gotolink () {
      // 指定跳转地址
      this.$router.replace('/login')
    },
    submit: function (formName) {
      const _this = this
      _this.reload()
    },
    submitForm: function (formName) {
      const _this = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          axios.post('http://106.55.103.151:8080/user/register', this.form)
            .then(function (resp) {
              console.log(resp)
              if (resp.data.code === 1) {
                _this.$alert('注册成功！', 'OK', {
                  confirmButtonText: '确定',
                  callback: action => {
                    _this.$router.push('/login')
                  }
                })
              } else if (resp.msg === '用户名已存在') {
                _this.$message({
                  message: '用户名已注册!',
                  type: 'warning'
                })
              } else {
                _this.$message({
                  message: '出错啦，请重新输入!',
                  type: 'warning'
                })
                _this.reload()
              }
            })
          console.log(this.form)
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
.bg{
  width: 100%;
  height: 100%;
  position:fixed;
  /*min-width: 1000px;*/
  z-index:-10;
  zoom: 1;
  background-image: url("../assets/bg/registerbg.svg");
  background-repeat: no-repeat;
  background-size: cover;
  /*-webkit-background-size: cover;*/
  /*-o-background-size: cover;*/
  /*background-position: center 0;*/
  top:0;
  overflow: auto;
}
.box{
  width: 30%;
  float: left;
  margin-left: 15%;
  margin-top: 180px;
  background-color: rgba(255, 255, 255, 0);
}
p{
  line-height: 30px;
  font-size: 30px ;
  font-family: "Microsoft YaHei","微软雅黑",Arial,sans-serif;
  font-weight: 900;
  text-align: left;
  letter-spacing: .05em;
  margin: 0;
}

.login-box{
  position: relative;
  width: 400px;
  margin-top: 10px;
}

.login{
  margin-bottom: 30px;
}
.styled-button {
  -webkit-appearance: none;
  -webkit-user-select: none;
  cursor: pointer;
  font-size: 14px;
  width: 60%;
  padding: 12px;
  outline: none;
  background: none;
  position: relative;
  color: #ffffff;
  border-radius: 3px;
  margin-bottom: 25px;
  margin-left: 10px;
  border: none;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.1em;
  background: rgba(34, 129, 226, 0.83);
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  overflow: hidden;
  float:left;
  display:inline-block;
}
.styled-button__real-text-holder {
  position: relative;
}
.styled-button__real-text {
  color: transparent;
  display: inline-block;
}
.styled-button__text-holder {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.styled-button__moving-block {
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
.styled-button__moving-block.back {
  color: white;
  -webkit-transform: translateX(-100%);
  transform: translateX(-100%);
}
.styled-button__moving-block.back .styled-button__text-holder {
  -webkit-transform: translateX(100%);
  transform: translateX(100%);
}
.styled-button:hover,
.styled-button:active {
  box-shadow: 0 8px 20px rgba(39, 73, 132, 0.6);
  background: #03268c;
}
.styled-button:hover .face,
.styled-button:active .face {
  -webkit-transform: translateX(100%);
  transform: translateX(100%);
}
.styled-button:hover .face .styled-button__text-holder,
.styled-button:active .face .styled-button__text-holder {
  -webkit-transform: translateX(-100%);
  transform: translateX(-100%);
}
.styled-button:hover .back,
.styled-button:active .back {
  -webkit-transform: translateX(0);
  transform: translateX(0);
}
.styled-button:hover .back .styled-button__text-holder,
.styled-button:active .back .styled-button__text-holder {
  -webkit-transform: translateX(0);
  transform: translateX(0);
}
.styled-button:active {
  box-shadow: 0 0 5px #031FFAA8;
}
.zc{
  margin-left: 20px;
  float: left;
  display: inline-block;
}
</style>
