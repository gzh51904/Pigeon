<template>
  <div id="app">
    <div class="header">
      <a class="search-btn">
        <i class="el-icon-search"></i>
        <span>保险</span>
      </a>
      <a href>
        <i class="el-icon-user"></i>
      </a>
    </div>
    <mt-swipe :auto="4000">
      <mt-swipe-item>
        <img src="./assets/appimg/slide1.png" alt />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="./assets/appimg/slide2.png" alt />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="./assets/appimg/slide1.png" alt />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="./assets/appimg/slide2.png" alt />
      </mt-swipe-item>
    </mt-swipe>
    <div class="item-list-wrapper">
      <a href>
        <img src="./assets/appimg/it1.gif" alt />
        <p>智能顾问</p>
      </a>
      <a href>
        <img src="./assets/appimg/it2.png" alt />
        <p>风险管理</p>
      </a>
      <a href>
        <img src="./assets/appimg/it3.png" alt />
        <p>员福保</p>
      </a>
      <a href>
        <img src="./assets/appimg/it4.png" alt />
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
      <img src="./assets/appimg/remen1.png" alt />
      <img src="./assets/appimg/remen2.png" alt />
    </div>
    <div class="title-yanxuan">
      <span class="title">白鸽严选</span>
      <span class="content">只因更懂你，量身定制化</span>
      <a href class="more">更多</a>
    </div>
    <div class="yanxuan-wrapper">
      <a href>
        <div>
          <h3>白鸽航空意外保险</h3>
          <p>全球航空飞行，保障不间断！</p>
          <p>
            ￥30.00
            <span>起</span>
          </p>
        </div>
        <img src="./assets/appimg/yanxuan1.png" alt />
      </a>
      <a href>
        <div>
          <h3>白鸽航空意外保险</h3>
          <p>全球航空飞行，保障不间断！</p>
          <p>
            ￥30.00
            <span>起</span>
          </p>
        </div>
        <img src="./assets/appimg/yanxuan1.png" alt />
      </a>
      <a href>
        <div>
          <h3>白鸽航空意外保险</h3>
          <p>全球航空飞行，保障不间断！</p>
          <p>
            ￥30.00
            <span>起</span>
          </p>
        </div>
        <img src="./assets/appimg/yanxuan1.png" alt />
      </a>
      <a href>
        <div>
          <h3>白鸽航空意外保险</h3>
          <p>全球航空飞行，保障不间断！</p>
          <p>
            ￥30.00
            <span>起</span>
          </p>
        </div>
        <img src="./assets/appimg/yanxuan1.png" alt />
      </a>
    </div>
    <div class="title-yongche">
      <span class="title">轻松用车</span>
      <span class="content">一键式报价，全流程指引</span>
    </div>
    <div class="list-yongche">
      <a href>
        <img src="./assets/appimg/chexian.png" alt />
      </a>
      <a href>
        <p>平安驾乘险</p>
        <p>
          ￥266
          <span>起</span>
        </p>
        <img src="./assets/appimg/car.png" alt />
      </a>
    </div>
    <div class="title-pinpai">
      <span class="title">活动品牌</span>
      <span class="content">强实力品牌，高品质保险</span>
      <a href class="more">更多</a>
    </div>
    <div class="product-brand">
      <a href="###">
        <img src="./assets/appimg/brand1.png" alt />
      </a>
      <a href="###">
        <img src="./assets/appimg/brand2.png" alt />
      </a>
      <a href="###">
        <img src="./assets/appimg/brand3.png" alt />
      </a>
      <a href="###">
        <img src="./assets/appimg/brand4.png" alt />
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
        <img src="./assets/appimg/tel.png" alt />
      </div>
    </div>
    <router-view></router-view>
    <sub-nav></sub-nav>
  </div>
</template>

<script>
import Vue from "vue";
import "../static/css/reset.css";
import "../static/css/app.scss";
import "../node_modules/mint-ui/lib/swipe/style.css";
import "../node_modules/mint-ui/lib/swipe-item/style.css";
import "../node_modules/element-ui/lib/theme-chalk/icon.css";
import { Search } from "mint-ui";
import { Swipe, SwipeItem } from "mint-ui";
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Search.name, Search);

import "../static/css/reset.css";

import subNav from "./components/Subnav.vue";

export default {
  name: "app",
  data: {},
  components: {
    subNav
  },
  beforeRouteUpdate(to, from, next) {
    console.log(to, from);
    next();
  },
  created() {}
};
</script>

<style lang="scss" scoped>
</style>
