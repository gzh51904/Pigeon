<template>
  <div class="search">
    <form action="/">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <div class="search-title">
        <p>热门搜索</p>
    </div>
    <div class="hotsearch-list">
        <a href="##">
            平安
        </a>
           <a href="##">
            驾驶
        </a>
           <a href="##">
            车
        </a>
           <a href="##">
            驾考
        </a>
           <a href="##">
            吃货
        </a>
           <a href="##">
            安心
        </a>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Search } from "vant";
Vue.use(Search);
export default {
  //引入UI组件后报错说未定义却使用，解决方法：根据报错信息填写methods和data，内容为空
  data() {
    return {
      value: ""
    };
  },
  methods: {
    onSearch() {},
    onCancel() {}
  }
};
</script>
<style lang="scss">
.search {
    form{
        border-bottom: 1px solid #dedede;
.van-search--show-action {
    
    .van-search__content {
      border-radius: 20px;
      height: 65px;
      font-size: 30px;
      line-height: 65px;
      .van-field__left-icon .van-icon{
        padding-top: 15px;
        font-size: 40px;
        color: #B3B3B3;
      }
      .van-field__body{
          input{
              font-size: 30px;
              line-height: 55px;
          }
      }
    }
    .van-search__action {
      div {
        color: #4d72e2;
        font-size: 25px;
      }
    }
  }
    }
  .search-title{
      margin-bottom: 45px;
      p{
          margin-top: 54px;
          font-size: 28px;
          font-weight: bold;
          color: #999999;
      }
  }
  .hotsearch-list{
      a{
          display: inline-block;
          width: 107px;
          height: 64px;
          background: #F4F4F4;
          color: #373737;
          font-size: 30px;
          text-align: center;
          line-height: 64px;
          margin-right: 20px;
          margin-bottom: 20px;
      }
  }
}
</style>


