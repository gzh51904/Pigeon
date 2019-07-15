<template>
  <div class="myorder">
    <van-nav-bar
      title="全部保单 v"
      right-text="我上传的保单"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-tabs v-model="active" line-height="0">
      <van-tab title="有效">
        <div class="youxiao">
          <p>您还未选保单，快去选购吧~</p>
          <p>去看看</p>
        </div>
      </van-tab>
      <van-tab title="可续保">内容 2</van-tab>
      <van-tab title="已失效">内容 3</van-tab>
      <van-tab title="待处理">内容 4</van-tab>
    </van-tabs>
  </div>
</template>
<script>
import Vue from "vue";
import { NavBar } from "vant";
import { Tab, Tabs } from "vant";
Vue.use(NavBar);
Vue.use(Tab).use(Tabs);
export default {
  methods: {
    onClickLeft() {},
    onClickRight() {}
  },
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style lang="scss">
#app {
  .myorder {
background: url(../assets/appimg/baodan.png) center center no-repeat;
background-size: 100%;
height: 100%;
background-color: #f7f7f7;
    .van-nav-bar{
         height: 92px;
         line-height: 92px;
        .van-nav-bar__left{
            .van-nav-bar.van-icon{
                font-size: 30px;
            }
        }
        .van-nav-bar__title{
            font-size: 35px;
        }
        .van-nav-bar__right{
            .van-nav-bar__text{
                font-size: 30px;
                color: #4D72E2;
            }
        }
    }
    .van-tabs--line .van-tabs__wrap{
        height:100px;
        .van-tab{
            span{
                font-size: 33px;
                line-height: 100px;
                
            }
        }
        .van-tab--active{
            color: #4D72E2;
            border-bottom: 3px solid #4D72E2;
        }
    }
    .youxiao {
        margin-top: 690px;
        p:nth-of-type(1){
            font-size: 30px;
            color: #999999;
            text-align: center;
        }
        p:nth-of-type(2){
            width: 246px;
            height: 74px;
            border: 1px solid #4D72E2;
            border-radius: 30px;
            font-size: 30px;
            text-align: center;
            line-height: 74px;
            color: #4D72E2;
            margin: 20px auto;
        }
    }
  }
}
</style>

