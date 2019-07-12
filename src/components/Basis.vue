<template>
  <div class="basis">
    <div class="item-one">
      <a href="javascript:void(0);">
        <h2>这些社保知识你都知道吗？</h2>
        <p>在大部分人的认知里,社保就是用来看病的,但你真的懂它吗?</p>
        <div class="img">
          <img src="../assets/discover-img/ia_10001.jpg" alt />
          <img src="../assets/discover-img/ia_10002.jpg" alt />
          <img src="../assets/discover-img/ia_10003.jpg" alt />
        </div>
        <div class="icon clearfix">
          <div class="fl">
            <span>社保</span>
            <span>养老险</span>
            <span>医疗险</span>
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
                  <h2>为什么大家都不喜欢保险呢?</h2>
                  <p>客观的说，保险的确是几千年以来，人...</p>
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
