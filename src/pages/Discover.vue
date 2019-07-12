<template>
  <div class="container">
    <div class="head">
      <div class="search">
        <i class="el-icon-search"></i>
        <el-input placeholder="输入搜索关键字" v-model="input" clearable></el-input>
      </div>
      <div class="nav">
        <el-menu
          :default-active="active"
          text-color="#CECECE"
          active-text-color="#7692E8"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item :index="item.name" v-for="item in nav" :key="item.name">{{item.title}}</el-menu-item>
        </el-menu>
      </div>
    </div>
    <div class="main">
      <div class="item-one">
        <a href="javascript:void(0);">
          <h2>这些社保知识你都知道吗？</h2>
          <p>在大部分人的认知里,社保就是用来看病的,但你真的懂它吗?</p>
          <div class="img">
            <img src="../assets/discover-img/ia_10001.jpg" alt />
            <img src="../assets/discover-img/ia_10002.jpg" alt />
            <img src="../assets/discover-img/ia_10003.jpg" alt />
          </div>
          <div class="icon">
            <span>
              <i class="el-icon-view"></i>
              682
            </span>
            <span>
              <i class="el-icon-share"></i>
              16
            </span>
          </div>
        </a>
      </div>
      <div class="item-two">
        <a href="javascript:void(0);">
          <h2>五一小长假，旅游保险怎么挑？</h2>
          <div class="img">
            <img src="../assets/discover-img/ia_10004.jpg" alt />
            <img src="../assets/discover-img/ia_10005.jpg" alt />
            <img src="../assets/discover-img/ia_10006.jpg" alt />
          </div>
          <div class="icon">
            <span>
              <i class="el-icon-view"></i>
              451
            </span>
            <span>
              <i class="el-icon-share"></i>
              9
            </span>
          </div>
        </a>
      </div>
      <div class="item-three">
        <a href="javascript:void(0);">
          <div>
            <h2 class="fl">专题推荐</h2>
            <span class="fr">
              更多
              <i class="el-icon-arrow-right"></i>
            </span>
          </div>
          <img src="../assets/discover-img/ia_10007.png" alt />
        </a>
      </div>
      <div class="item-four">
        <a href="javascript:void(0);">
          <h2>保险理赔的步骤是什么？</h2>
          <div class="img">
            <img src="../assets/discover-img/ia_10008.png" alt />
            <img src="../assets/discover-img/ia_10009.jpg" alt />
            <img src="../assets/discover-img/ia_10010.png" alt />
          </div>
          <div class="icon">
            <span>
              <i class="el-icon-view"></i>
              639
            </span>
            <span>
              <i class="el-icon-share"></i>
              1
            </span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import "../../static/scss/discover.scss";
import "../../node_modules/element-ui/lib/theme-chalk/icon.css";

import Vue from "vue";
import { Input, MenuItem, Menu } from "element-ui";
Vue.use(Input);
Vue.use(MenuItem);
Vue.use(Menu);
export default {
  data() {
    return {
      input: "",
      nav: [
        {
          title: "推荐",
          name: "Recommend"
        },
        {
          title: "专题推荐",
          name: "Features"
        },
        {
          title: "基础知识",
          name: "Basis"
        },
        {
          title: "保险搭配",
          name: "Insurance"
        },
        {
          title: "理赔相关",
          name: "Claims"
        }
      ],
      active: "/discover/recommend"
    };
  },
  methods: {
    handleSelect(index, indexPath) {
      this.active = index;
    }
  }
};
</script>
  
<style>
</style>


