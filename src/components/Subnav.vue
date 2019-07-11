<template>
  <div class="sub-nav">
    <!-- <a v-for="item in nav" :key="item.title" @click="goto(item.path)" class="active-router">
      <i class="nav-icon" :class="item.title"></i>
      <span class="text">{{item.cnName}}</span>
    </a>-->
    <router-link v-for="item in nav" :key="item.title" :to="{path:item.path}">
      <i v-if="activeRouter == item.name" class="nav-icon" :class="activeRouter"></i>
      <i v-else class="nav-icon" :class="item.title"></i>
      <span class="text">{{item.cnName}}</span>
    </router-link>
    <!-- <el-col :span="20">
      <el-menu
        default-active="activeRouter"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        router
      >
        <el-menu-item :index="item.path" v-for="item in nav" :key="item.title">
          <i class="nav-icon" :class="item.title"></i>
          <span slot="title">{{item.cnName}}</span>
        </el-menu-item>
      </el-menu>
    </el-col>-->
  </div>
</template>
<script>
import Vue from "vue";
import { Col, Menu, MenuItem } from "element-ui";
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Col);
export default {
  data() {
    return {
      activeRouter: "Home",
      nav: [
        {
          name: "Home",
          cnName: "首页",
          title: "home",
          path: "/home"
        },
        {
          name: "Production",
          cnName: "产品",
          title: "production",
          path: "/production"
        },
        {
          name: "Discover",
          cnName: "发现",
          title: "discover",
          path: "/discover"
        },
        {
          name: "Mine",
          cnName: "我的",
          title: "mine",
          path: "/mine"
        }
      ]
    };
  },
  methods: {},
  beforeRouteUpdate(to, from, next) {
    console.log(to, from);
    next();
  },
  created() {
    this.activeRouter = window.location.hash.slice(2).split("/")[0];
  }
};
</script>

<style lang="scss">
.sub-nav {
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 98px;
  box-shadow: 0 0 6px #e9e8ec;
  display: flex;
  justify-content: space-around;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .nav-icon {
      width: 48px;
      height: 48px;
      margin-bottom: 10px;
    }

    .nav-icon.home {
      background: url(../assets/mine/new-home.png) no-repeat;
      background-size: 100% 100%;
    }
    .nav-icon.production {
      background: url(../assets/mine/new-product.png) no-repeat;
      background-size: 100% 100%;
    }
    .nav-icon.discover {
      background: url(../assets/mine/new-find.png) no-repeat;
      background-size: 100% 100%;
    }
    .nav-icon.mine {
      background: url(../assets/mine/new-mine.png) no-repeat;
      background-size: 100% 100%;
    }
    .text {
      line-height: 26px;
      font-size: 26px;
      color: #333;
    }
    .active-router {
      span {
        color: #4d72e2;
      }
    }
  }
}
</style>



