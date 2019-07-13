<template>
  <div class="recommend">
    <div class="item-one" v-for="item in list1" :key="item.id">
      <a href="javascript:void(0);">
        <h2>{{item.h2}}</h2>
        <p v-if="item.exist">{{item.p}}</p>
        <template v-else></template>
        <div class="img">
          <img :src="item.img1" alt />
          <img :src="item.img2" alt />
          <img :src="item.img3" alt />
        </div>
        <div class="icon">
          <span>
            <i class="el-icon-view"></i>
            {{item.view}}
          </span>
          <span>
            <i class="el-icon-share"></i>
            {{item.share}}
          </span>
        </div>
      </a>
    </div>
    <div class="item-three" v-for="item in list2" :key="item.id">
      <a href="javascript:void(0);">
        <div>
          <h2 class="fl">{{item.h2}}</h2>
          <span class="fr">
            {{item.p}}
            <i class="el-icon-arrow-right"></i>
          </span>
        </div>
        <img :src="item.img" alt />
      </a>
    </div>
    <div class="item-one item-four" v-for="item in list3" :key="item.id">
      <a href="javascript:void(0);">
        <h2>{{item.h2}}</h2>
        <div class="img">
          <img :src="item.img1" alt />
          <img :src="item.img2" alt />
          <img :src="item.img3" alt />
        </div>
        <div class="icon">
          <span>
            <i class="el-icon-view"></i>
            {{item.view}}
          </span>
          <span>
            <i class="el-icon-share"></i>
            {{item.share}}
          </span>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list1: [
        {
          id: 1,
          h2: "这些社保知识你都知道吗？",
          p: "在大部分人的认知里,社保就是用来看病的,但你真的懂它吗?",
          img1: require("../assets/discover-img/ia_10001.jpg"),
          img2: require("../assets/discover-img/ia_10002.jpg"),
          img3: require("../assets/discover-img/ia_10003.jpg"),
          view: 639,
          share: 1,
          exist: true
        },
        {
          id: 2,
          h2: "五一小长假，旅游保险怎么挑？",
          img1: require("../assets/discover-img/ia_10004.jpg"),
          img2: require("../assets/discover-img/ia_10005.jpg"),
          img3: require("../assets/discover-img/ia_10006.jpg"),
          view: 451,
          share: 9,
          exist: false
        }
      ],
      list2: [
        {
          id: 3,
          h2: "专题推荐",
          p: "更多",
          img: require("../assets/discover-img/ia_10007.png"),
          view: 639,
          share: 1
        }
      ],
      list3: [
        {
          id: 4,
          h2: "保险理赔的步骤是什么？",
          img1: require("../assets/discover-img/ia_10008.png"),
          img2: require("../assets/discover-img/ia_10009.jpg"),
          img3: require("../assets/discover-img/ia_10010.png"),
          view: 639,
          share: 1
        }
      ]
    };
  }
};
</script>
