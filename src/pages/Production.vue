<template>
  <div class="product">
    <div class="p-head">
      <a href=""><span class="el-icon-search"></span></a>
      <span class="head-name">保险产品</span>
      <span class="">筛选</span>
    </div>
    <div class="p-tab">
        <li v-for="item in pages" :key="item.name"><div class="active"><router-link :to="item.path"><span>{{item.title}}</span></router-link></div></li>
        <!-- <li><div><span>健康险</span></div></li>
        <li><div><span>旅行险</span></div></li>
        <li><div><span>意外险</span></div></li>
        <li><div><span>财产险</span></div></li>
        <li><div><span>责任险</span></div></li>
        <li><div><span>寿险</span></div></li> -->
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import Vue from "vue";
import { Tabs, TabPane, RadioGroup, RadioButton } from "element-ui";
import "../../node_modules/element-ui/lib/theme-chalk/icon.css";
import "../../static/scss/production.scss";
Vue.use(Tabs);
Vue.use(TabPane);
export default {
  name: "product",
  data() {
    return {
      pages: [
        {
          title: "特色",
          path: "/production/tese",
          name: "tese"
        },
        {
          title: "健康险",
          path: "/production/health",
          name: "health"
        },
        {
          title: "旅行险",
          path: "/production/trval",
          name: "trval"
        },
        {
          title: "意外险",
          path: "/production/trval",
          name: "trval"
        },
        {
          title: "财产险",
          path: "/production/trval",
          name: "trval"
        },
        {
          title: "责任险",
          path: "/production/trval",
          name: "trval"
        },
        {
          title: "寿险",
          path: "/production/trval",
          name: "trval"
        }
      ],
      active: true
    };
  }
};
</script>

<style lang="scss" scpoed>
</style>

