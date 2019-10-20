<template>
  <div id="home">
    <!-- <div class="loading" v-if="isLoading"> -->
    <!-- </div> -->
    <div class="header">
      <a class="search-btn" @click.prevent="goSearch('Search')">
        <i class="el-icon-search"></i>
        <span>保险</span>
      </a>
      <a href>
        <i class="el-icon-user"></i>
      </a>
    </div>
    <main>
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item, index) in swipeList" :key="index">
          <img :src="item.imgsrc" :alt="item.name" style="width:368px;height:200px;" />
        </mt-swipe-item>
      </mt-swipe>
      <div class="item-list-wrapper">
        <router-link to="/consultant">
          <img src="../assets/appimg/it1.gif" alt />
          <p>智能顾问</p>
        </router-link>
        <a href>
          <img src="../assets/appimg/it2.png" alt />
          <p>风险管理</p>
        </a>
        <a href>
          <img src="../assets/appimg/it3.png" alt />
          <p>员福保</p>
        </a>
        <a href>
          <img src="../assets/appimg/it4.png" alt />
          <p>白鸽公益</p>
        </a>
      </div>
      <div class="zixun">
        <span>资讯</span>
        <span>资讯</span>
        <div class="marquee">
          <marquee direction="up" scrollamount="2">
            <a href>
              <p>
                中华财险三款产品下线通知
                <span>13天前</span>
              </p>
            </a>
            <a href>
              <p>
                君临天下旅行保险产品下线通知
                <span>20天前</span>
              </p>
            </a>
          </marquee>
        </div>
      </div>
      <div class="title-remen">
        <span class="title">热门活动</span>
        <span class="content">点击有惊喜，参与赢好礼</span>
        <a href class="more">更多</a>
      </div>
      <div class="list-remen">
        <img src="../assets/appimg/remen1.png" alt />
        <img src="../assets/appimg/remen2.png" alt />
      </div>
      <div class="title-yanxuan">
        <span class="title">白鸽严选</span>
        <span class="content">只因更懂你，量身定制化</span>
        <a href class="refresh">
          <i class="el-icon-refresh"></i>
          换一换
        </a>
        <a href class="more">更多</a>
      </div>
      <div class="yanxuan-wrapper">
        <a
          href="#"
          v-for="item in yanxuanList"
          :key="item.id"
          :typeName="item.sym"
          @click.prevent.stop="goto(item.id,item.sym)"
        >
          <div>
            <h3>
              <!-- {{item.name}} -->
            </h3>
            <p>{{item.content}}</p>
            <p>
              {{item.price}}
              <!-- <span>起</span> -->
            </p>
          </div>
          <img :src="item.imgUrl" :alt="item.name" />
        </a>
      </div>
      <div class="title-yongche">
        <span class="title">轻松用车</span>
        <span class="content">一键式报价，全流程指引</span>
      </div>
      <div class="list-yongche">
        <a href>
          <img src="../assets/appimg/chexian.png" alt />
        </a>
        <a href>
          <p>平安驾乘险</p>
          <p>
            ￥266
            <span>起</span>
          </p>
          <img src="../assets/appimg/car.png" alt />
        </a>
      </div>
      <div class="title-pinpai">
        <span class="title">活动品牌</span>
        <span class="content">强实力品牌，高品质保险</span>
        <a href class="more">更多</a>
      </div>
      <div class="product-brand">
        <a href="###">
          <img src="../assets/appimg/brand1.png" alt />
        </a>
        <a href="###">
          <img src="../assets/appimg/brand2.png" alt />
        </a>
        <a href="###">
          <img src="../assets/appimg/brand3.png" alt />
        </a>
        <a href="###">
          <img src="../assets/appimg/brand4.png" alt />
        </a>
      </div>
      <div class="bottomlist">
        <a href>
          <i class="el-icon-office-building"></i>
          <span>关于我们</span>
        </a>
        <a href>
          <i class="el-icon-collection"></i>
          <span>资质牌照</span>
        </a>
        <a href>
          <i class="el-icon-phone-outline"></i>
          <span>电话咨询</span>
        </a>
        <div class="telbox">
          <img src="../assets/appimg/tel.png" alt />
        </div>
      </div>
    </main>
    <slot></slot>
    <!-- 下拉刷新 -->
    <!-- <van-pull-refresh
      v-model="isLoading"
      @refresh="onRefresh"
    >
      <p>刷新次数: {{ count }}</p>
    </van-pull-refresh>-->
    <router-view></router-view>
  </div>
</template>
<script>
import Vue from "vue";
import "../../static/css/app.scss";
import "../../node_modules/mint-ui/lib/swipe/style.css";
import "../../node_modules/mint-ui/lib/swipe-item/style.css";
import "../../node_modules/element-ui/lib/theme-chalk/icon.css";
import { Search } from "mint-ui";
import { Swipe, SwipeItem } from "mint-ui";
import "../../static/css/reset.css";
// import { PullRefresh } from "vant";
// Vue.use(PullRefresh);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Search.name, Search);

export default {
  name: "Home",
  data() {
    return {
      yanxuanList: [],
      swipeList: [
        {
          name: "邻趣",
          imgsrc: require("../assets/home/banner1.png")
        },
        {
          name: "飞常准",
          imgsrc: require("../assets/home/banner2.png")
        },
        {
          name: "赚金币",
          imgsrc: require("../assets/home/banner3.png")
        },
        {
          name: "车轮",
          imgsrc: require("../assets/home/banner4.png")
        }
      ]
      // isLoading: false,
    };
  },
  components: {},
  beforeRouteUpdate(to, from, next) {
    next();
  },
  created() {
    if (this.$store.state.num) {
      this.$axios.get("/production").then(res => {
        let { data, headers } = res;

        let num = this.$store.state.num;

        this.yanxuanList = data.obj[num].production.map(item => {
          let imgUrl = require("../assets/cc-img/" + item.imgUrl);
          let sym = data.obj[num].type;
          return (item = {
            ...item,
            imgUrl,
            sym
          });
        });

        console.log(this.yanxuanList);
      });
    } else {
      this.$axios.get("/production").then(res => {
        let { data, headers } = res;

        let num = (Math.random() * 5) | 0;

        this.$store.state.num = num;

        this.yanxuanList = data.obj[num].production.map(item => {
          let imgUrl = require("../assets/cc-img/" + item.imgUrl);
          let sym = data.obj[num].type;
          return (item = {
            ...item,
            imgUrl,
            sym
          });
        });

        console.log(this.yanxuanList);

        /* this.dataShow = data.obj[0].production.map(item => {
          let imgUrl = require("../assets/cc-img/" + item.imgUrl);
          return (item = {
            ...item,
            imgUrl
          });
        }); */
      });
    }
  },
  methods: {
    goto(id, type) {
      console.log(type);
      console.log(id);

      /* this.$router.push({
        name: "Yanxuan",
        params: { type, id }
      }); */
      this.$router.push({
        name: "Yanxuan",
        query: { type, id }
      });
    },
    goSearch(str) {
      let name = str;
      let pathFrom = this.$route.path;
      this.$router.push({
        name,
        params: { pathFrom }
      });
    }
    // onRefresh() {//下拉刷新
    //   setTimeout(() => {
    //     this.$toast("刷新成功");
    //     this.isLoading = false;
    //     this.count++;
    //   }, 500);
    // }
  }
};
</script>
<style lang="sass" scoped>

</style>


