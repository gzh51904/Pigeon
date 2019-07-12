<template>
  <div class="mine-container">
    <div class="mine-content">
      <div class="login-reg">
        <a href="#" class="head-img">
          <img src="../assets/mine/head-img.png" alt />
        </a>
        <a href="#" class="login">登陆/注册</a>
      </div>
      <div class="domain">
        <a href="#" v-for="item in domain" :key="item.name">
          <div class="domain-icon">
            <img :class="'icon-'+ item.enName " :src="'../assets/mine/' + item.icon" />
          </div>
          <span>{{item.name}}</span>
        </a>
      </div>
      <div class="member service">
        <div class="member-title">
          <h2>会员专区</h2>
        </div>
        <div class="member-item">
          <a v-for="item in member" :key="item.name">
            <div class="com-icon">
              <img :class="'icon-'+ item.enName " :src="'../assets/mine/' + item.icon" />
            </div>
            <span>{{item.name}}</span>
          </a>
        </div>
      </div>
      <div class="commonly service">
        <div class="member-title">
          <h2>常用服务</h2>
        </div>
        <div class="member-item">
          <a href="#" v-for="item in commonly" :key="item.name">
            <div class="com-icon">
              <img :class="'icon-'+ item.enName " :src="'../assets/mine/' + item.icon" />
            </div>
            <span>{{item.name}}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import Vue from "vue";
// import ElementUI from "element-ui";
// import "element-ui/lib/theme-chalk/index.css";
// Vue.use(ElementUI);
import "../../static/scss/mine.scss";

export default {
  data() {
    return {
      domain: [
        {
          name: "保单",
          enName: "warranty",
          icon: "warranty.png"
        },
        {
          name: "钱包",
          enName: "wallet",
          icon: "wallet.png"
        },
        {
          name: "卡券",
          enName: "CardVouche",
          icon: "CardVouche.png"
        }
      ],
      member: [
        {
          name: "白鸽币",
          icon: ""
        },
        {
          name: "勋章墙",
          icon: ""
        },
        {
          name: "白鸽赠险",
          icon: ""
        }
      ],
      commonly: [
        {
          name: "智能顾问",
          icon: ""
        },
        {
          name: "理赔中心",
          icon: ""
        },
        {
          name: "企业福利",
          icon: ""
        },
        {
          name: "延保手册",
          icon: ""
        },
        {
          name: "驾考服务",
          icon: ""
        },
        {
          name: "客服",
          icon: ""
        },
        {
          name: "售后保全",
          icon: ""
        },
        {},
        {}
      ]
    };
  },
  created() {},
  components: {},
  beforeRouteUpdate(to, from, next) {
    console.log(to, from);
    next();
  }
};
</script>

<style lang="scss" scoped>
</style>


