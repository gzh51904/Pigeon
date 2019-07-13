<template>
  <div class="product">
    <div class="p-head">
      <a href>
        <span class="el-icon-search"></span>
      </a>
      <span class="head-name">保险产品</span>
      <span class>筛选</span>
    </div>
    <div class="p-tab">
        <li v-for="(item,idx) in pages" :key="item.name">
          <router-link :to="item.path">
            <div v-bind:class="{active:activeIdx===idx}" @click="changeTab(idx)">
              <span>{{item.title}}</span>
            </div>
          </router-link>
        </li>
        <!-- <li><div><span>健康险</span></div></li>
        <li><div><span>旅行险</span></div></li>
        <li><div><span>意外险</span></div></li>
        <li><div><span>财产险</span></div></li>
        <li><div><span>责任险</span></div></li>
       <li><div><span>寿险</span></div></li>-->
    </div>    
    <div class="main">
      <router-view :pType="type"></router-view>
    </div>
    <slot></slot>
  </div>
</template>
<script>
import Vue from "vue";
import { Tabs, TabPane, RadioGroup, RadioButton } from "element-ui";
import "../../node_modules/element-ui/lib/theme-chalk/icon.css";
import "../../static/scss/production.scss";
import { log } from "util";
Vue.use(Tabs);
Vue.use(TabPane);
export default {
  name: "product",
  data() {
    return {
      type: "feature",
      pages: [
        {
          title: "特色",
          path: "/production/feature",
          name: "feature"
        },
        {
          title: "健康险",
          path: "/production/health",
          name: "health"
        },
        {
          title: "旅行险",
          path: "/production/travel",
          name: "travel"
        },
        {
          title: "意外险",
          path: "/production/accident",
          name: "accident"
        },
        {
          title: "财产险",
          path: "/production/wealth",
          name: "wealth"
        },
        {
          title: "责任险",
          path: "/production/duty",
          name: "duty"
        },
        {
          title: "寿险",
          path: "/production/lifetime",
          name: "lifetime"
        }
      ],
      activeIdx: 0
    };
  },
  methods: {
    changeTab(idx) {
      this.activeIdx = idx;
    }
  },
  // created() {
  //   this.$store.state.pType = "feature";
  // },
  beforeRouteUpdate(to, from, next) {
    // console.log(to.name, from.name);
    this.type = to.name;
    //this.$store.state.pType = to.name;
    next();
  }
  // beforeRouteUpdate(to,from,next){
  //   this.type = to.name;
  //   next()
  // }
};
</script>

<style lang="scss" scpoed>
</style>

