import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter);


import Discover from '../pages/Discover.vue';
import Production from '../pages/Production.vue';
import Mine from '../pages/Mine.vue';


let Recommend = {
  template: `<div class="recommend">
    <div class="item-one">
      <a href="javascript:void(0);">
        <h2>这些社保知识你都知道吗？</h2>
        <p>在大部分人的认知里,社保就是用来看病的,但你真的懂它吗?</p>
        <div class="img">
          <img src="../assets/discover-img/ia_10001.jpg" alt />
          <img src="../assets/discover-img/ia_10002.jpg" alt />
          <img src="../assets/discover-img/ia_10003.jpg" alt />
        </div>
        <div class="icon">
          <span>
            <i class="el-icon-view"></i>
            682
          </span>
          <span>
            <i class="el-icon-share"></i>
            16
          </span>
        </div>
      </a>
    </div>
    <div class="item-two">
      <a href="javascript:void(0);">
        <h2>五一小长假，旅游保险怎么挑？</h2>
        <div class="img">
          <img src="../assets/discover-img/ia_10004.jpg" alt />
          <img src="../assets/discover-img/ia_10005.jpg" alt />
          <img src="../assets/discover-img/ia_10006.jpg" alt />
        </div>
        <div class="icon">
          <span>
            <i class="el-icon-view"></i>
            451
          </span>
          <span>
            <i class="el-icon-share"></i>
            9
          </span>
        </div>
      </a>
    </div>
    <div class="item-three">
      <a href="javascript:void(0);">
        <div>
          <h2 class="fl">专题推荐</h2>
          <span class="fr">
            更多
            <i class="el-icon-arrow-right"></i>
          </span>
        </div>
        <img src="../assets/discover-img/ia_10007.png" alt />
      </a>
    </div>
    <div class="item-four">
      <a href="javascript:void(0);">
        <h2>保险理赔的步骤是什么？</h2>
        <div class="img">
          <img src="../assets/discover-img/ia_10008.png" alt />
          <img src="../assets/discover-img/ia_10009.jpg" alt />
          <img src="../assets/discover-img/ia_10010.png" alt />
        </div>
        <div class="icon">
          <span>
            <i class="el-icon-view"></i>
            639
          </span>
          <span>
            <i class="el-icon-share"></i>
            1
          </span>
        </div>
      </a>
    </div>
  </div>`
}
let Features = {
  template: `<div class="features">
    <div class="item">
      <a href="javascript:void(0)">
        <img src="../assets/discover-img/z1.png" alt />
      </a>
    </div>
    <div class="item">
      <a href="javascript:void(0)">
        <img src="../assets/discover-img/z2.png" alt />
      </a>
    </div>
    <div class="item">
      <a href="javascript:void(0)">
        <img src="../assets/discover-img/z3.png" alt />
      </a>
    </div>
    <div class="item">
      <a href="javascript:void(0)">
        <img src="../assets/discover-img/z4.png" alt />
      </a>
    </div>
    <div class="item">
      <a href="javascript:void(0)">
        <img src="../assets/discover-img/z5.png" alt />
      </a>
    </div>
    <div class="item">
      <a href="javascript:void(0)">
        <img src="../assets/discover-img/z6.png" alt />
      </a>
    </div>
    <div class="item">
      <a href="javascript:void(0)">
        <img src="../assets/discover-img/z7.png" alt />
      </a>
    </div>
  </div>`
}
let Basis = {
  template: `<div class="basis">
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
</div>`

}

let Insurance = {
  template: `<div></div>`
}
let Claims = {
  template: `<div></div>`
}


let router = new VueRouter({
  routes: [{
    name: 'Production',
    path: '/production',
    component: Production,
  }, {
    name: 'Discover',
    path: '/discover',
    component: Discover,
    // 嵌套路由
    children: [
      {
        name: 'Recommend',
        path: 'recommend',
        component: Recommend
      }, {
        name: 'Features',
        path: 'reatures',
        component: Features
      }, {
        name: 'Basis',
        path: 'basis',
        component: Basis
      }, {
        name: 'Insurance',
        path: 'insurance',
        component: Insurance
      }, {
        name: 'Claims',
        path: 'claims',
        component: Claims
      }
    ]
  }, {
    name: 'Mine',
    path: '/mine',
    component: Mine,
  }]
});


export default router;