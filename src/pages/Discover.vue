<template>
  <div id="box">
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
          <el-menu-item :index="item.name" v-for="item in nav" :key="item.name" @click="goto(item)">
            <span>{{item.title}}</span>
          </el-menu-item>
        </el-menu>
      </div>
    </div>
    <router-view></router-view>
    <slot></slot>
  </div>
</template>
<script>
import "../../static/scss/discover1.scss";
import "../../static/scss/discover2.scss";
import "../../static/scss/discover3.scss";
import "../../node_modules/element-ui/lib/theme-chalk/icon.css";

import Vue from "vue";
import { Input, MenuItem, Menu } from "element-ui";
import { log } from "util";
Vue.use(Input);
Vue.use(MenuItem);
Vue.use(Menu);
export default {
  data() {
    return {
      input: "",
      type: "",
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
      active: "Recommend"
    };
  },
  methods: {
    handleSelect(index, indexPath) {
      this.active = index;
    },
    goto(item) {
      this.$router.push({ name: item.name });
    }
  },
  created() {
    this.active = this.$route.name;
  },
  updated() {
    if (this.$store.state.subState == "discover") {
      // console.log(this.$route);
      this.active = this.$route.name;
    }
    this.$store.state.subState = "";
    if (this.$store.state.subState == "") {
      this.active = this.$route.name;
    }
  }
};
</script>
  
<style>
</style>


