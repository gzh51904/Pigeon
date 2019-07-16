<template>
  <div class="yanxuan">
    <van-nav-bar
      :title="dataShow.name"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="topimg">
      <img :src="dataShow.topimg" alt />
    </div>
    <div class="basicinfo">
      <p>
        <span>保险公司：</span>
        <span>{{dataShow.timelimit.company}}</span>
      </p>
      <p>
        <span>承保年龄：</span>
        <span>{{dataShow.timelimit.age}}</span>
      </p>
      <p>
        <span>保障期限：</span>
        <span>{{dataShow.timelimit.time}}</span>
      </p>
    </div>

    <van-tabs v-model="active" line-height="0" class="vantabs1">
      <van-tab v-for="(item2,idx) of dataShow.version" :key="idx" title="经典版 300元起">
        <van-collapse v-model="activeNames">
          <van-collapse-item
            :title="dataShow.version.version1.baozhangone.cont"
            name="1"
            value="dataShow.version.version1.baozhangone.baoe"
          >留学期间，因遭遇意外或突发疾病留学期间，因遭遇意外或突发疾病留学期间，因遭遇意外或突发疾病留学期间，因遭遇意外或突发疾病</van-collapse-item>
          <van-collapse-item
            :title="dataShow.version.version1.baozhangone.cont"
            name="2"
            :value="dataShow.version.version1.baozhangone.baoe"
          >留学期间，因遭遇意外或突发疾病留学期间，因遭遇意外或突发疾病留学期间，因遭遇意外或突发疾病留学期间，因遭遇意外或突发疾病</van-collapse-item>
        </van-collapse>
      </van-tab>
      <van-tab title="升级版 460元起">
        <van-collapse v-model="activeNames">
          <van-collapse-item
            :title="dataShow.version.version2.baozhangone.cont"
            name="3"
            :value="dataShow.version.version2.baozhangone.baoe"
          >留学期间，因遭遇意外或突发疾病留学期间，因遭遇意外或突发疾病留学期间，因遭遇意外或突发疾病留学期间，因遭遇意外或突发疾病</van-collapse-item>
          <van-collapse-item
            :title="dataShow.version.version2.baozhangone.cont"
            name="4"
            :value="dataShow.version.version2.baozhangone.baoe"
          >留学期间，因遭遇意外或突发疾病留学期间，因遭遇意外或突发疾病留学期间，因遭遇意外或突发疾病留学期间，因遭遇意外或突发疾病</van-collapse-item>
        </van-collapse>
      </van-tab>
      <van-tab title="尊享版 860元起">
        <van-collapse v-model="activeNames">
          <van-collapse-item
            :title="dataShow.version.version3.baozhangone.cont"
            name="5"
            :value="dataShow.version.version3.baozhangone.baoe"
          >留学期间，因遭遇意外或突发疾病留学期间，因遭遇意外或突发疾病留学期间，因遭遇意外或突发疾病留学期间，因遭遇意外或突发疾病</van-collapse-item>
          <van-collapse-item
            :title="dataShow.version.version3.baozhangone.cont"
            name="6"
            :value="dataShow.version.version3.baozhangone.baoe"
          >留学期间，因遭遇意外或突发疾病留学期间，因遭遇意外或突发疾病留学期间，因遭遇意外或突发疾病留学期间，因遭遇意外或突发疾病</van-collapse-item>
        </van-collapse>
      </van-tab>
    </van-tabs>

    <div class="introduction">
      <van-tabs v-model="active1" sticky title-active-color="#4d72e2" line-height="0">
        <van-tab title="产品介绍">
          <div>
            <img :src="dataShow.introductionImg" alt width="100%" />
          </div>
        </van-tab>
        <van-tab title="理赔解析">
          <div>
            <img src="../assets/appimg/lipei.png" alt width="100%" />
          </div>
        </van-tab>
        <van-tab title="常见问题">
          <div>
            <img src="../assets/appimg/wenti.png" alt width="100%" />
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <span>
        <span>{{dataShow.bottomPrice}}</span>
        <span>起</span>
      </span>
      <van-goods-action-button type="danger" text="立即投保" @click.native="buy()" />
    </van-goods-action>
  </div>
</template>
<script>
import Vue from "vue";
import { NavBar } from "vant";
import { Tab, Tabs } from "vant";
import { Collapse, CollapseItem } from "vant";
import { Loading } from "vant";
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from "vant";
Vue.use(NavBar);
Vue.use(Tab).use(Tabs);
Vue.use(Collapse).use(CollapseItem);
Vue.use(Loading);
Vue.use(GoodsAction)
  .use(GoodsActionIcon)
  .use(GoodsActionButton);
export default {
  data() {
    return {
      active: 0,
      active1: 0,
      activeNames: [""],
      isLoading: true,
      dataShow: []
    };
  },
  methods: {
    onClickLeft() {
      this.$router.replace("home");
    },
    onClickRight() {},
    onClickIcon() {},
    onClickButton() {},
    buy() {
      let token = localStorage.getItem("Authorization");
      if (token) {
        this.$router.push({
          name: "Myorder"
        });
      } else {
        this.$router.push("/login");
      }
    }
  },
  created() {
    let { type, id } = this.$route.query;
    console.log(this.$route.query);

    this.$axios
      .get("/production", {
        params: {
          type
        }
      })
      .then(res => {
        let { data, headers } = res;

        this.dataShow = data.obj[0].production.map(item => {
          item = JSON.parse(JSON.stringify(item));
          let imgUrl = require("../assets/cc-img/" + item.imgUrl);
          let sym = data.obj[0].type;
          let topimg = require("../assets/cc-img/" + item.topimg);
          let introductionImg = require("../assets/cc-img/" +
            item.introductionImg);
          return (item = {
            ...item,
            imgUrl,
            sym,
            topimg,
            introductionImg
          });
        })[id - 1];
        console.log("this.dataShow", this.dataShow.timelimit.company);
      });
  }
};
</script>
<style lang="scss">
.yanxuan {
  background: #f7f7f7;
  .van-nav-bar {
    padding-bottom: 68px;
    .van-nav-bar__left {
      i {
        line-height: 94px;
      }
    }
    .van-nav-bar__title {
      font-size: 38px;
      margin-top: 28px;
    }
  }

  .topimg {
    img {
      width: 100%;
    }
  }
  .basicinfo {
    margin-bottom: 37px;
    margin-top: 33px;
    p {
      height: 102px;
      line-height: 102px;
      border-bottom: 1px solid #f0f0f0;
      background: white;
      padding-left: 20px;
      span:nth-of-type(1) {
        color: #999999;
      }
    }
  }
  .van-tabs--line .van-tabs__wrap {
    height: 150px;
    span {
      font-size: 32px;
      line-height: 150px;
    }
  }
  .van-cell__title {
    span {
      display: inline-block;
      height: 103px;
      font-size: 36px;
      line-height: 103px;
    }
  }
  .van-cell__value {
    span {
      display: inline-block;
      height: 103px;
      font-size: 36px;
      line-height: 103px;
    }
  }
  .van-cell__right-icon {
    margin-top: 45px;
  }
  .introduction {
    .van-tabs--line .van-tabs__wrap {
      height: 103px;
      .van-tab {
        span {
          font-size: 35px;
          line-height: 103px;
        }
      }
    }
    .van-tabs__content {
      img {
        margin-top: 70px;
      }
    }
  }
  .van-goods-action {
    height: 100px;
    font-size: 33px;
    line-height: 100px;
    z-index: 999;
    .van-goods-action-icon {
      width: 118px;
      font-size: 33px;
      padding-top: 50px;
    }
    span {
      color: red;
      display: inline-block;
      margin-right: 30px;
      font-size: 38px;
    }
    .van-goods-action-button {
      background: #4d72e2;
      height: 100%;
      font-size: 40px;
      border: none;
      span {
        color: white;
      }
    }
  }
}
</style>


