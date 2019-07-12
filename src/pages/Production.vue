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
      <li v-for="(item,idx) in pages" :key="item.name" @click="active">
        <div class="active">
          <router-link :to="item.path">
            <span>{{item.title}}</span>
          </router-link>
        </div>
      </li>
      <!-- <li><div><span>健康险</span></div></li>
        <li><div><span>旅行险</span></div></li>
        <li><div><span>意外险</span></div></li>
        <li><div><span>财产险</span></div></li>
        <li><div><span>责任险</span></div></li>
      <li><div><span>寿险</span></div></li>-->
    </div>
    <router-view></router-view>
    <slot></slot>
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
      active: true
    };
  }
};
</script>

<style lang="scss" scpoed>
</style>

