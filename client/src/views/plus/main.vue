<template>
  <div class="main">
    <div class="nav-box"></div>
    <!-- 电影墙最大盒子 -->
    <div class="max-box">
      <div class="row">
        <div class="middle-box">
          <img src="" alt="" />
        </div>
        <div class="middle-box middle-box-mult">
          <div class="middle-box-mult-min">
            <div class="min-box"><img src="" alt="" /></div>
            <div class="min-box"><img src="" alt="" /></div>
          </div>
          <div class="middle-box-mult-min">
            <div class="min-box"><img src="" alt="" /></div>
            <div class="min-box"><img src="" alt="" /></div>
          </div>
        </div>
        <div class="middle-box">
          <img src="" alt="" />
        </div>
        <div class="middle-box middle-box-mult">
          <div class="middle-box-mult-min">
            <div class="min-box"><img src="" alt="" /></div>
            <div class="min-box"><img src="" alt="" /></div>
          </div>
          <div class="middle-box-mult-min">
            <div class="min-box"><img src="" alt="" /></div>
            <div class="min-box"><img src="" alt="" /></div>
          </div>
        </div>
        <div class="middle-box">
          <img src="" alt="" />
        </div>
        <div class="middle-box middle-box-mult">
          <div class="middle-box-mult-min">
            <div class="min-box"><img src="" alt="" /></div>
            <div class="min-box"><img src="" alt="" /></div>
          </div>
          <div class="middle-box-mult-min">
            <div class="min-box"><img src="" alt="" /></div>
            <div class="min-box"><img src="" alt="" /></div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="middle-box middle-box-mult">
          <div class="middle-box-mult-min">
            <div class="min-box"><img src="" alt="" /></div>
            <div class="min-box"><img src="" alt="" /></div>
          </div>
          <div class="middle-box-mult-min">
            <div class="min-box"><img src="" alt="" /></div>
            <div class="min-box"><img src="" alt="" /></div>
          </div>
        </div>
        <div class="middle-box">
          <img src="" alt="" />
        </div>
        <div class="middle-box middle-box-mult">
          <div class="middle-box-mult-min">
            <div class="min-box"><img src="" alt="" /></div>
            <div class="min-box"><img src="" alt="" /></div>
          </div>
          <div class="middle-box-mult-min">
            <div class="min-box"><img src="" alt="" /></div>
            <div class="min-box"><img src="" alt="" /></div>
          </div>
        </div>
        <div class="middle-box">
          <img src="" alt="" />
        </div>
        <div class="middle-box middle-box-mult">
          <div class="middle-box-mult-min">
            <div class="min-box"><img src="" alt="" /></div>
            <div class="min-box"><img src="" alt="" /></div>
          </div>
          <div class="middle-box-mult-min">
            <div class="min-box"><img src="" alt="" /></div>
            <div class="min-box"><img src="" alt="" /></div>
          </div>
        </div>
        <div class="middle-box">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  components: {},
  setup() {
    return {};
  },
});
</script>

<style scoped lang="less">
.nav-box {
  height: 50px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.09);
}
// 电影墙盒子
.max-box {
  width: 100%;
  height: 1920px;
  background-color: black;
  flex-wrap: wrap;
}
//行盒子
.row {
  height: 200px;
  width: 100%;
  background-color: purple;
  display: flex;
}
// 大图片盒子
.middle-box {
  flex: 1;
  height: 200px;
  background-color: pink;
}
//有多个小图片盒子的中盒子
.middle-box-mult-min {
  width: 100%;
  height: 100px;
  background-color: skyblue;
  display: flex;
}
//小图片盒子
.min-box {
  flex: 1;
  height: 100px;
}
</style>
