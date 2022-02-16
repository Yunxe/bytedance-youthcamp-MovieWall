<template>
  <div>
    <div class="main">
      <div class="nav-box">
        <div class="logo"><img src="../assets/movieWallLogo.svg" alt=""/></div>
      </div>
      <div class="bg-poster">
        <div class="back-icon"><img src="../assets/returnicon.svg" @click="goBack()"></div>
      </div>
      <div class="detail-mes-box">
        <div class="movie-name">
          {{ movie.title }}
          <el-button type="primary" className="collection-btn" @click="like()">
            <div class="like">收藏</div>
            <div class="like"><img src="../assets/dislikeIcon.svg"></div>
          </el-button>
        </div>
        <div class="time-mes">
          <div class="create-time">
            <div class="time-text">创建时间</div>
            <div class="create-mes">{{ movie.createAt }}</div>
          </div>
          <div class="update-time">
            <div class="time-text">更新时间</div>
            <div class="update-mes">{{ movie.updateAt }}</div>
          </div>
        </div>
        <div class="big-poster"><img :src="movie.posterUrl"></div>
        <div>
          <div class="de">
            <div class="time-text">导演</div>
            <div class="create-mes">{{ movie.director }}</div>
          </div>
          <div class="dou">
            <div class="time-text">豆瓣评分</div>
            <div class="update-mes">{{ movie.dbScore }}</div>
          </div>
        </div>
        <div class="movie-description">
          {{ movie.detail }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as axios from 'axios'

export default {
  name: 'Des',
  data () {
    return {
      param:{},
      dbID: '',
      imgArr: ['dislikeIcon.svg', 'likeIcon.svg'],
      imgIndex: '0',
      movie: {
        dbID: '',
        title: '肖申克的救赎',
        director: '弗兰克·德拉邦特',
        dbScore: '999',
        detail: '《肖申克的救赎》（英语：The Shawshank\n' +
          '          Redemption）是1994年的美国剧情片，由弗兰克·德拉邦特编剧并导演，根据斯蒂芬·金1982年中篇小说《丽塔海华丝与肖申克监狱的救赎》改编。影片讲述银行家安迪·杜弗伦（蒂姆·罗宾斯）因涉嫌谋杀夫人及其情夫被判无期徒刑，进入肖申克州立监狱服刑后，他与能为狱友走私各种违禁商品的埃利斯·“瑞德”·雷丁（摩根·弗里曼）成为朋友，同时利用金融才能为典狱长塞缪尔·诺顿（鲍勃·冈顿）等监狱官员和看守洗钱逃税的故事。其他演员包括威廉·托马斯·桑德勒、克兰西·布朗、吉尔·贝罗斯和詹姆斯·惠特摩。\n' +
          '          德拉邦特早在1987年便买下小说的电影改编版权，但直到五年后才利用八星期时间改写成电影剧本，拉开本片发展序幕。他把剧本呈送城堡石娱乐公司，并在两周后取得2500万美元预算，《肖申克的救赎》于1993年初开始前期制作。片中情节发生在缅因州，但1993年六至八月的主体拍摄几乎都是在俄亥俄州曼斯菲尔德完成，俄亥俄州立感化院便是片中的肖申克监狱。许多明星有意出演男主角安迪，包括汤姆·汉克斯、汤姆·克鲁斯和凯文·科斯特纳。托马斯·纽曼为本片配乐。\n' +
          '          《肖申克的救赎》上映后获得普遍好评，特别是剧情及罗宾斯与弗里曼的表演，但票房表现不佳，首轮放映仅入账1600万美元。影片商业失利的原因很多，如《低俗小说》和《阿甘正传》的竞争、监狱题材电影普遍不受公众待见、片中几乎没有女角色等，甚至许多观众对片名感到摸不着头脑。不过这都不影响本片获得众多奖项肯定，其中包括七项奥斯卡金像奖提名。经过院线加映和海外发行，电影票房最终提升到5830万美元。\n' +
          '          美国各地共投入32万余份本片的VHS录像带，凭借各大奖项提名及口耳相传的良好口碑，《肖申克的救赎》在1995年录像带出租版创下佳绩。透纳广播公司收购城堡石娱乐公司后获得影片电视播映权，从1997年开始在特纳电视网定期播映，进一步提升作品知名度。如今，《肖申克的救赎》已被普遍视为20世纪90年代的电影杰作。数十年后，影片仍在定期播放，而且跨越国界乃至洲界限制，普通观众和名流都称本片是灵感的来源，电影也在大量民意调查结果中名列前茅。2015年，本片因“文化、历史和美学领域的显著成就”，入选美国国会图书馆国家影片登记表。\n' +
          '        ',
        posterUrl: require('../assets/pic/p(20).jpg'),
        createAt: '2021/02/02',
        updateAt: '2021/02/02'
      }
    }
  },
  created () {
    // this.param = new FormData();
    console.log(this.$route.params.dbID)
    const _this = this;
    // this.param.append('dbID', _this.$route.params.dbID);
    // console.log(_this.param)
    _this.param = _this.$route.params
    _this.dbID = _this.$route.params.dbID
    console.log(_this.param)
    axios.post('http://106.55.103.151:8080/api/movie/show-one', _this.param,{
      headers:{
        authorization:localStorage.getItem('token')
      }
    })
  .then(function (resp) {
        console.log(resp);
        _this.movie = resp.data;
      })
  },
  computed: {
    imgUrl: function () {
      return require("../assets/" + this.imgArr[this.imgIndex]);
    }
  },
  methods : {
    like() {
      this.param = new FormData();
      this.param.append('user',this.$store.getters.getUser.username);
      this.param.append('dbID', this.dbID);
      console.log(this.param.get('user'));
      console.log(this.param.get('dbID'));
      console.log(this.param)
      const _this = this;
      axios.post('http://106.55.103.151:8080/api/movie/collect', _this.param,{
        headers:{
          authorization:localStorage.getItem('token')
        }
      })
        .then(function (resp) {
          console.log(resp);
          if (resp.data.code === 1) {
            if (this.imgIndex === '0') {
              this.imgIndex = '1';
            } else {
              this.imgIndex = '0';
            }
          }
        })
    },
    goBack(){
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped>
.nav-box {
  width: 100%;
  height: 50px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.09);
  display: flex;
}

.logo {
  width: 100%;
  height: 50px;
}

.logo img {
  height: 100%;
  width: 100%;
}

.nav-box div:nth-child(1) {
  /*background-color: pink;*/
  height: 50px;
  width: 200px;
}

.nav-box div:nth-child(2) {
  flex: 1;
  background-color: white;
}

.nav-box div:nth-child(3) {
  height: 50px;
  width: 150px;
}

.bg-poster {
  position: relative;
  width: 100%;
  height: 200px;
  /*background-color: skyblue;*/
  background: url("../assets/moviebj.jpg") no-repeat;
  background-size: cover;
}

.back-icon {
  top: 30px;
  left: 30px;
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: #FFC0CB00;
}

.back-icon img {
  width: 100%;
}

.detail-mes-box {
  position: relative;
  margin: 0 auto;
  height: 800px;
  width: 1100px;
}

.movie-name {
  height: 50px;
  line-height: 50px;
  width: 200px;
  left: 80px;
  top: 60px;
  font-size: 30px;
  font-weight: 900;
  position: absolute;
}

.collection-btn {
  margin-top: 10px;
  width: 160px;
  background-color: #8DDDFDFF;
  color: black;
  height: 40px;
}

.collection-btn:hover {
  background-color: #FFA9A9FF;
}

.like {
  padding-left: 10px;
  width: 40px;
  height: 20px;
  line-height: 20px;
  float: left;
  display: inline-block;
}

.create-time {
  display: flex;
  right: 400px;
  top: 82px;
  position: absolute;
  align-items: center;
}

.big-poster {
  width: 160px;
  height: 180px;
  right: 30px;
  top: 30px;
  position: absolute;
  /*background: url("../assets/pic/p(20).jpg") no-repeat;*/
  background-size: cover;
  overflow: hidden;
  border-radius: 5%;
}

.big-poster img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.update-time {
  display: flex;
  right: 200px;
  top: 82px;
  position: absolute;
  align-items: center;
}

.de {
  display: flex;
  right: 400px;
  top: 132px;
  position: absolute;
  align-items: center;
}

.dou {
  display: flex;
  right: 200px;
  top: 132px;
  position: absolute;
  align-items: center;
}

.time-text {
  font-weight: 600;
  margin-right: 15px;
  font-family: Poppins;
}

.create-mes {
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  margin-right: 15px;
  width: 100px;
  height: 30px;
  background-color: rgba(236, 245, 255, 1);
  border-radius: 43.5429px;
}

.update-mes {
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  margin-right: 15px;
  width: 100px;
  height: 30px;
  background-color: rgba(236, 245, 255, 1);
  border-radius: 43.5429px;
}

.movie-description {
  width: 966px;
  left: 67px;
  top: 220px;
  position: absolute;
  font-weight: 500;
  line-height: 43px;
  letter-spacing: -0.0276px;
  padding-bottom: 100px;
}
</style>
