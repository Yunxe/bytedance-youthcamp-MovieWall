<template>
  <div>
    <div class="main">
      <div class="nav-box"></div>
      <!-- 电影墙最大盒子 -->
      <div class="max-box">
<!--        <div v-for="film in films" :key="film.id" v-bind:title="film.title" v-bind:desc="film.desc">-->
          <div v-for="film of films">
          <!--        <br>{{film.desc}}-->

          <div class="row">
            <div class="middle-box">
<!--              <img src="" alt="" />-->
              <router-link to="/test"><img class="img" v-bind:src="film[0].src"></router-link>
            </div>
            <div class="middle-box middle-box-mult">
              <div class="middle-box-mult-min">
                <div class="min-box">
<!--                  <img src="" alt="" />-->
                  <router-link to="/test"><img class="img" :src="film[1].src"></router-link>
                </div>
                <div class="min-box">
<!--                  <img src="" alt="" />-->
                  <router-link to="/test"><img class="img" :src="film[2].src"></router-link>
                </div>
              </div>
              <div class="middle-box-mult-min">
                <div class="min-box">
<!--                  <img src="" alt="" />-->
                  <router-link to="/test"><img class="img" :src="film[3].src"></router-link>
                </div>
                <div class="min-box">
<!--                  <img src="" alt="" />-->
                  <router-link to="/test"><img class="img" :src="film[4].src"></router-link>
                </div>
              </div>
            </div>
            <div class="middle-box">
<!--              <img src="" alt="" />-->
              <router-link to="/test"><img class="img" :src="film[5].src"></router-link>
            </div>
            <div class="middle-box middle-box-mult">
              <div class="middle-box-mult-min">
                <div class="min-box">
<!--                  <img src="" alt="" />-->
                  <router-link to="/test"><img class="img" :src="film[6].src"></router-link>
                </div>
                <div class="min-box">
<!--                  <img src="" alt="" />-->
                  <router-link to="/test"><img class="img" :src="film[7].src"></router-link>
                </div>
              </div>
              <div class="middle-box-mult-min">
                <div class="min-box">
<!--                  <img src="" alt="" />-->
                  <router-link to="/test"><img class="img" :src="film[8].src"></router-link>
                </div>
                <div class="min-box">
<!--                  <img src="" alt="" />-->
                  <router-link to="/test"><img class="img" :src="film[9].src"></router-link>
                </div>
              </div>
            </div>
            <div class="middle-box">
<!--              <img src="" alt="" />-->
              <router-link to="/test"><img class="img" :src="film[10].src"></router-link>
            </div>
            <div class="middle-box middle-box-mult">
              <div class="middle-box-mult-min">
                <div class="min-box">
<!--                  <img src="" alt="" />-->
                  <router-link to="/test"><img class="img" :src="film[11].src"></router-link>
                </div>
                <div class="min-box">
<!--                  <img src="" alt="" />-->
                  <router-link to="/test"><img class="img" :src="film[12].src"></router-link>
                </div>
              </div>
              <div class="middle-box-mult-min">
                <div class="min-box">
<!--                  <img src="" alt="" />-->
                  <router-link to="/test"><img class="img" :src="film[13].src"></router-link>
                </div>
                <div class="min-box">
<!--                  <img src="" alt="" />-->
                  <router-link to="/test"><img class="img" :src="film[14].src"></router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      films: [
        {
          id: '1',
          title: 'yiyiyi',
          desc: '1',
          src: require('../assets/pic/p(1).jpg')
        },
        {
          id: '2',
          title: 'ererer',
          desc: '22222222222',
          src: require('../assets/pic/p(2).jpg')
        },
        {
          id: '3',
          title: 'sansansan',
          desc: '333333',
          src: require('../assets/pic/p(3).jpg')
        },
        {
          id: '4',
          title: 'sisisi',
          desc: '44444444444444444',
          src: require('../assets/pic/p(4).jpg')
        },
        {
          id: '5',
          title: 'yiyiyi',
          desc: '1',
          src: require('../assets/pic/p(5).jpg')
        },
        {
          id: '2',
          title: 'ererer',
          desc: '22222222222',
          src: require('../assets/pic/p(6).jpg')
        },
        {
          id: '3',
          title: 'sansansan',
          desc: '333333',
          src: require('../assets/pic/p(7).jpg')
        },
        {
          id: '4',
          title: 'sisisi',
          desc: '44444444444444444',
          src: require('../assets/pic/p(8).jpg')
        },
        {
          id: '1',
          title: 'yiyiyi',
          desc: '1',
          src: require('../assets/pic/p(9).jpg')
        },
        {
          id: '2',
          title: 'ererer',
          desc: '22222222222',
          src: require('../assets/pic/p(10).jpg')
        },
        {
          id: '3',
          title: 'sansansan',
          desc: '333333',
          src: require('../assets/pic/p(11).jpg')
        },
        {
          id: '4',
          title: 'sisisi',
          desc: '44444444444444444',
          src: require('../assets/pic/p(12).jpg')
        },
        {
          id: '1',
          title: 'yiyiyi',
          desc: '1',
          src: require('D:/film/src/assets/pic/p(1).jpg')
        },
        {
          id: '2',
          title: 'ererer',
          desc: '22222222222',
          src: require('../assets/pic/p(2).jpg')
        },
        {
          id: '3',
          title: 'sansansan',
          desc: '333333',
          src: require('../assets/pic/p(3).jpg')
        },
        {
          id: '4',
          title: 'sisisi',
          desc: '44444444444444444',
          src: require('../assets/pic/p(4).jpg')
        },
        {
          id: '5',
          title: 'yiyiyi',
          desc: '1',
          src: require('../assets/pic/p(5).jpg')
        },
        {
          id: '2',
          title: 'ererer',
          desc: '22222222222',
          src: require('../assets/pic/p(6).jpg')
        },
        {
          id: '3',
          title: 'sansansan',
          desc: '333333',
          src: require('../assets/pic/p(7).jpg')
        },
        {
          id: '4',
          title: 'sisisi',
          desc: '44444444444444444',
          src: require('../assets/pic/p(8).jpg')
        },
        {
          id: '1',
          title: 'yiyiyi',
          desc: '1',
          src: require('../assets/pic/p(9).jpg')
        },
        {
          id: '2',
          title: 'ererer',
          desc: '22222222222',
          src: require('../assets/pic/p(10).jpg')
        },
        {
          id: '3',
          title: 'sansansan',
          desc: '333333',
          src: require('../assets/pic/p(11).jpg')
        },
        {
          id: '4',
          title: 'sisisi',
          desc: '44444444444444444',
          src: require('../assets/pic/p(12).jpg')
        }
      ]
    }
  }
}
</script>

<style scoped>
.nav-box {
  height: 50px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.09);
}
/*电影墙盒子*/
   .max-box {
     width: 100%;
     background-color: black;
     flex-wrap: wrap;
   }
/*行盒子*/
  .row {
    height: 200px;
    width: 100%;
    background-color: purple;
    display: flex;
  }
/*大图片盒子*/
   .middle-box {
     flex: 1;
     height: 200px;
     background-color: pink;
     background-repeat: no-repeat;
     background-size: cover;
     background-position: center;
     overflow: hidden;
   }
/*有多个小图片盒子的中盒子*/
  .middle-box-mult-min {
    width: 100%;
    height: 100px;
    background-color: skyblue;
    display: flex;
  }
 /*小图片盒子*/
  .min-box {
    flex: 1;
    height: 100px;

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    overflow: hidden;

  }
  img{
    width: 100%;
    min-width: 100px;
    min-height: 100px;
  }
</style>
