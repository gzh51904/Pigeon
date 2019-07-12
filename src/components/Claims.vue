<template>
  <div class="claims">
    <div class="item-four">
      <a href="javascript:void(0);">
        <h2>保险理赔的步骤是什么？</h2>
        <p>有人会觉得，买一份适合自己的保险已经是"跋山涉水"了，到了理赔，又是一场“硬战”。但是，保险理赔真的有这么难吗？</p>
        <div class="img">
          <img src="../assets/discover-img/ia_10008.png" alt />
          <img src="../assets/discover-img/ia_10009.jpg" alt />
          <img src="../assets/discover-img/ia_10010.png" alt />
        </div>
        <div class="icon clearfix">
          <div class="fl">
            <span>维权</span>
            <span>保险理赔</span>
            <span>保险公司</span>
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
                  <h2>如何防止保险公司拒赔？?</h2>
                  <p>
                    相互宝是支付宝推出的互助计划，由于其庞大的用户基数，
                    所以此次的拒赔事件，才会引起这么多的关注。然而，在商业保险中，
                    拒赔事件，几乎每天都在上演。在白鸽君看来，
                    保险公司之所以会拒赔主要有两点原因：
                  </p>
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