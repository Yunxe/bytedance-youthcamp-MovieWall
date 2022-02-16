<template>
  <div class="box">
  <div class="puzzle-5">
    <div v-for="film in films" :key="film.id" v-bind:title="film.title" v-bind:desc="film.desc">
      <img class="img" :src="film.src"><br>{{film.desc}}
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Home1',
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
  }
}
</script>

<style scoped>
.box{
  display: flex;
  flex-wrap: wrap;
  align-content:flex-start;
  flex-grow:1;
  width:100%;
  overflow:hidden;
  padding:10px 0px;
  /*height: 100px;*/
}
/*.puzzle-div div {*/
/*    float: left;*/
/*    overflow: hidden;*/
/*  }*/
/*.puzzle-div .vertical {*/
/*    background-repeat: no-repeat;*/
/*    background-size: 100% auto;*/
/*    background-position: center center;*/
/*  }*/
/*.puzzle-div .horizontal {*/
/*    background-repeat: no-repeat;*/
/*    background-size: auto 100%;*/
/*    background-position: center center;*/
/*  }*/
/*.puzzle-5{*/
/*  !*display: flex;*!*/
/*  width: 100%;*/
/*  !*flex-wrap: wrap;*!*/
/*  height:100px;*/
/*  float: left;*/
/*  overflow: hidden;*/
/*}*/
/*.puzzle-5:nth-child(1) {*/
/*  height: 100%;*/
/*}*/
/*.puzzle-5:nth-child(2),.puzzle-5:nth-child(3) {*/
/*  height: 50%;*/
/*  width: 33.3%;*/
/*}*/
/*.puzzle-5 :nth-child(3) {*/
/*    float:right;*/
/*}*/
/*.puzzle-5 :nth-child(4),.puzzle-5:nth-child(5){*/
/*  height: 33.3%;*/
/*  width: 33.3%;*/
/*}*/

</style>
