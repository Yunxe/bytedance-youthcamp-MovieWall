<template>
  <div class="box">
  <div class="max-box">
    <div v-for="(row,index) in sliceList(films,6)" :key="index" class="row">
<!--      <router-link to="/test"><img class="img" :src="film.src"></router-link>-->
<!--        <br>{{film.desc}}-->
      <div v-for="(item,i) in row" :key="i" class="middle-box">
        <div @click="goTo(item)"><img class="img" :src="item.posterUrl" referrerpolicy="no-referrer"></div>
      </div>
    </div>
  </div>
    <el-tooltip placement="top" content="回到顶部">
      <back-to-top :custom-style="myBackToTopStyle"
                   :visibility-height="300" :back-position="0" transition-name="fade"/>
    </el-tooltip>
  </div>
</template>

<script>
import  BackToTop from '../../node_modules/element-ui/packages/backtop/index'
import * as axios from 'axios'
export default {
  name: 'Home1',
  components: { BackToTop},
  data () {
    return {
      input: "",
      myBackToTopStyle: {
        right: '50px',
        bottom: '50px',
        width: '40px',
        height: '40px',
        borderRadius: '4px',
        lineHeight: '45px', // 请保持与高度一致以垂直居中
        background: '#e7eaf1'// 按钮的背景颜色
      },
      films: [
        {
          id: '1',
          title: 'yiyiyi',
          desc: '1',
          posterUrl: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"
        },
        {
          id: '1',
          title: 'yiyiyi',
          desc: '1',
          posterUrl: "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2219011938.jpg"
        },{
          id: '1',
          title: 'yiyiyi',
          desc: '1',
          posterUrl: "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2219011938.jpg"
        },{
          id: '1',
          title: 'yiyiyi',
          desc: '1',
          posterUrl: "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2219011938.jpg"
        },{
          id: '1',
          title: 'yiyiyi',
          desc: '1',
          posterUrl: "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2219011938.jpg"
        },{
          id: '1',
          title: 'yiyiyi',
          desc: '1',
          posterUrl: "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2219011938.jpg"
        },{
          id: '1',
          title: 'yiyiyi',
          desc: '1',
          posterUrl: "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2219011938.jpg"
        },{
          id: '1',
          title: 'yiyiyi',
          desc: '1',
          posterUrl: "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2219011938.jpg"
        },{
          id: '1',
          title: 'yiyiyi',
          desc: '1',
          posterUrl: "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2219011938.jpg"
        },{
          id: '1',
          title: 'yiyiyi',
          desc: '1',
          posterUrl: "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2219011938.jpg"
        },{
          id: '1',
          title: 'yiyiyi',
          desc: '1',
          posterUrl: "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2219011938.jpg"
        },{
          id: '1',
          title: 'yiyiyi',
          desc: '1',
          posterUrl: "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2219011938.jpg"
        }
      ]
      // urls: [
      //   '../assets/bg/loginbg.svg',
      //   'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
      //   'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
      //   'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
      //   'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
      //   'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
      //   'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
      //   'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
      // ]
    }
  },
  created() {
    const _this = this;
    axios.get('http://106.55.103.151:8080/api/movie/show-all')
      .then(function (resp) {
        console.log(resp);
        _this.films = resp.data.data;
      })
  },
  computed: {
    sliceList() {
      return function (data,count) {
        if (data != undefined) {
          let index = 0;
          let arrTemp = [];
          for (let i = 0; i < data.length; i++) {
            index = parseInt(i / count);
            if (arrTemp.length <= index) {
              arrTemp.push([]);
            }
            arrTemp[index].push(data[i])
          }
          return arrTemp
        }
      }
    }
  },
  methods: {
    goTo (item)
    {
      console.log(item)
      this.$router.push({name:'Des', params:{dbID:item.dbID}})
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
/*.middle-box img:nth-child(1){*/
/*  flex: 1;*/
/*  height: 200px;*/
/*  background-color: pink;*/
/*  background-repeat: no-repeat;*/
/*  background-size: cover;*/
/*  background-position: center;*/
/*  overflow: hidden;*/
/*}*/
/*.middle-box img:nth-child(n+2):nth-child(-n+5){*/
/*  flex: 1;*/
/*  height: 100px;*/

/*  background-repeat: no-repeat;*/
/*  background-size: cover;*/
/*  background-position: center;*/
/*  overflow: hidden;*/
/*}*/

/*有多个小图片盒子的中盒子*/
.middle-box-mult-min {
  /*width: 100%;*/
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
  /*height: 100%;*/
  width: 100%;
  min-width: 100px;
  min-height: 100px;
}
img:hover{
  -webkit-transform: scale(1.05);
  -moz-transform: scale(1.05);
  -ms-transform: scale(1.05);
  -o-transform: scale(1.05);
  transform: scale(1.05);
}
</style>
