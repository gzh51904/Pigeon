<template>
  <div class="insurance">
    <div class="item-two">
      <a href="javascript:void(0);">
        <h2>五一小长假，旅游保险怎么挑？</h2>
        <p>"每逢假期必堵"似乎已经成了铁一样的规律了，那我们如何才能在这人山人海的假期中保障自身的安全呢？</p>
        <div class="img">
          <img src="../assets/discover-img/ia_10004.jpg" alt />
          <img src="../assets/discover-img/ia_10005.jpg" alt />
          <img src="../assets/discover-img/ia_10006.jpg" alt />
        </div>
        <div class="icon clearfix">
          <div class="fl">
            <span>五一</span>
            <span>旅游保险</span>
          </div>
          <div class="fr">
            <em>
              <i class="el-icon-view"></i>
              682
            </em>
            <em>
              <i class="el-icon-share"></i>
              16
            </em>
          </div>
        </div>
      </a>
    </div>
    <div class="infinite-list-wrapper">
      <ul class="list" v-infinite-scroll="load" infinite-scroll-disabled="disabled">
        <li v-for="i in count" class="list-item">
          <div class="item">
            <a href="javascript:void(0);">
              <div class="con clearfix">
                <div class="c-l fl">
                  <h2>生育险和医保合并，对我们有哪些影响呢?</h2>
                  <p>生育险和医保合并，对我们有哪些影响呢？</p>
                </div>
                <div class="f-r fr">
                  <img src="../assets/discover-img/item1.jpg" alt />
                </div>
              </div>
              <div class="icon clearfix">
                <div class="fl">
                  <span>保险配置</span>
                  <span>销售套路</span>
                </div>
                <div class="fr">
                  <em>
                    <i class="el-icon-view"></i>
                    682
                  </em>
                  <em>
                    <i class="el-icon-share"></i>
                    16
                  </em>
                </div>
              </div>
            </a>
          </div>
        </li>
      </ul>
      <p v-if="loading">加载中...</p>
      <p v-if="noMore">没有更多了</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 10,
      loading: false
    };
  },
  computed: {
    noMore() {
      return this.count >= 20;
    },
    disabled() {
      return this.loading || this.noMore;
    }
  },
  methods: {
    load() {
      this.loading = true;
      setTimeout(() => {
        this.count += 2;
        this.loading = false;
      }, 2000);
    }
  }
};
</script>