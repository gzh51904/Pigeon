<template>
  <div class="mine-container">
    <div class="my-header">
      <a href="#">
        <i class="my-icon-setting"></i>
      </a>
      <span class="header-name">我的</span>
      <a href="#">
        <i class="my-icon-news"></i>
      </a>
    </div>
    <div class="mine-content">
      <div class="login-reg">
        <a href="#" class="head-img">
          <img src="../assets/mine/head-img.png" alt />
        </a>
        <div class="login-text">
          <div class="user-name" v-if="logined">
            <span id="nickName">{{ userName }}</span>
          </div>
          <a v-else href="#" class="login" @click.prevent.stop="goto('login')">登陆/注册</a>
        </div>
      </div>
      <div class="domain">
        <a @click="link" v-for="item in domain" :key="item.name">
          <div class="domain-icon">
            <img :class="'icon-'+ item.enName " :src="item.imgUrl" />
          </div>
          <span>{{item.name}}</span>
        </a>
      </div>
      <div class="member service">
        <div class="member-title">
          <h2>会员专区</h2>
        </div>
        <div class="member-item">
          <a href="#" v-for="item in member" :key="item.name">
            <div class="com-icon">
              <img :class="'icon-'+ item.enName " :src="item.imgUrl" />
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
              <img :class="'icon-'+ item.enName " :src="item.imgUrl" />
            </div>
            <span>{{item.name}}</span>
          </a>
        </div>
      </div>
    </div>
    <slot></slot>
  </div>
</template>
<script>
/* import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI); */
import "../../static/scss/mine.scss";

export default {
  props: ["logined"],
  data() {
    return {
      domain: [
        {
          id: 1,
          name: "保单",
          enName: "warranty",
          icon: "warranty.png",
        },
        {
          id: 2,
          name: "钱包",
          enName: "wallet",
          icon: "wallet.png"
        },
        {
          id: 3,
          name: "卡券",
          enName: "CardVouche",
          icon: "CardVouche.png"
        }
      ],
      member: [
        {
          name: "白鸽币",
          enName: "pigeon-money",
          icon: "pigeon-money.png"
        },
        {
          name: "勋章墙",
          enName: "medal",
          icon: "medal.png"
        },
        {
          name: "白鸽赠险",
          enName: "riskGift",
          icon: "riskGift.png"
        }
      ],
      commonly: [
        {
          name: "智能顾问",
          enName: "intelligent-security",
          icon: "intelligent-security.png"
        },
        {
          name: "理赔中心",
          enName: "claim-centre",
          icon: "claim-centre.png"
        },
        {
          name: "企业福利",
          enName: "rmport",
          icon: "rmport.png"
        },
        {
          name: "延保手册",
          enName: "handbook",
          icon: "handbook.png"
        },
        {
          name: "驾考服务",
          enName: "driving-insurance",
          icon: "driving-insurance.png"
        },
        {
          name: "客服",
          enName: "kefu",
          icon: "kefu.png"
        },
        {
          name: "售后保全",
          enName: "sale-after",
          icon: "sale-after.png"
        }
      ],
      userName: ""
    };
  },
<<<<<<< HEAD
  created() {},
  components: {},
  beforeRouteUpdate(to, from, next) {
    console.log(to, from);
    next();
  },
  methods:{
    link(){
        this.$router.push('/Myorder');      
    }
=======
  methods: {
    goto(path) {
      this.$router.push(path);
    }
  },
  computed: {},
  created() {
    let phoneNum = localStorage.getItem("phoneNum");
    phoneNum ? (this.userName = phoneNum) : "";

    this.domain = this.domain.map(item => {
      let imgUrl = require("../assets/mine/" + item.icon);
      return (item = {
        ...item,
        imgUrl
      });
    });
    this.member = this.member.map(item => {
      let imgUrl = require("../assets/mine/" + item.icon);
      return (item = {
        ...item,
        imgUrl
      });
    });
    this.commonly = this.commonly.map(item => {
      let imgUrl = require("../assets/mine/" + item.icon);
      return (item = {
        ...item,
        imgUrl
      });
    });
>>>>>>> d7c1f261e5b14b380abd38f20fa71bf10816aaab
  }
};
</script>

<style lang="scss" scoped>
</style>


