<template>
  <div>
    <ul class="menu">
      <li class="logo"><img src="../assets/movieWallLogo.svg"></li>
      <li class="left1"></li>
      <li><router-link to="/home1">主页</router-link></li>
      <li>|</li>
      <li><router-link to="/home2">我的电影墙</router-link></li>
      <li class="right"><el-dropdown>
  <span class="el-dropdown-link">
    <i class="el-icon-arrow-down el-icon--right"></i>
  </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item><router-link to="/login">登录</router-link></el-dropdown-item>
            <el-dropdown-item><router-link to="/logout">退出登陆</router-link></el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      </li>
      <li class="right"><div class="im"><img class="cover" src="../assets/p.jpg"></div>
      </li>
      <li class="right">
                <span>{{$store.getters.getUser.userName}}</span>
<!--        <span>{{userName}}</span>-->
      </li>
    </ul>
    <div class="clear"></div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      userName: '游客'
    }
  },
  methods: {}
}
</script>

<style scoped>
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
}
img{
  height: 100%;
}
.menu{
  top: 0;
  margin: 0;
  height: 65px;
  line-height: 40px;
  width: 100%;
  border-bottom: 2px solid white;
}
ul{
  list-style-type: none;
}
li{
  height: 50px;
  line-height: 50px;
  float: left;
  margin: 7px 2px 0 2px;
  padding: 0 10px 0 10px;
  color: grey;
  cursor: pointer;
  font-size: 15px;
  font-family: Arial, Helvetica, sans-serif;
}
.logo{
  float: left;
  position: fixed;
}
.left1{
  margin-left: 42%;
}
.right{
  float: right;
}
a{
  color: gray;
  text-decoration: none;
}
a:hover{
  color:black;
}
.clear{
  clear: both;
}
.im{
  margin-top: 8px;
  height: 34px;
  width: 34px;
  border-radius:50%;
  overflow: hidden;
}
.im img{
  object-fit: cover;
}

</style>
