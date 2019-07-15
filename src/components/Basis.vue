<template>
  <div class="basis">
    <div class="item-one" v-for="item in list" :key="item.id" style="padding:0">
      <a href="javascript:void(0);">
        <h2>{{item.h2}}</h2>
        <p>{{item.p}}</p>
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
    <div class="infinite-list-wrapper">
      <ul class="list" v-infinite-scroll="load" infinite-scroll-disabled="disabled">
        <li v-for="item in goodslist" class="list-item" :key="item.id">
          <div class="item">
            <a href="javascript:void(0);">
              <div class="con clearfix">
                <div class="c-l fl">
                  <h2>{{item.h2}}</h2>
                  <p>{{item.p}}</p>
                </div>
                <div class="f-r fr">
                  <img :src="item.img" alt />
                </div>
              </div>
              <div class="icon clearfix">
                <div class="fl">
                  <span>{{item.span1}}</span>
                  <span>{{item.span2}}</span>
                </div>
                <div class="fr">
                  <em>
                    <i class="el-icon-view"></i>
                    {{item.view}}
                  </em>
                  <em>
                    <i class="el-icon-share"></i>
                    {{item.share}}
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
let goods = {
  Basis: [
    {
      id: 1,
      h2: "这些社保知识你都知道吗？",
      p: "在大部分人的认知里,社保就是用来看病的,但你真的懂它吗?",
      img1: require("../assets/discover-img/ia_10001.jpg"),
      img2: require("../assets/discover-img/ia_10002.jpg"),
      img3: require("../assets/discover-img/ia_10003.jpg"),
      view: 639,
      share: 1
    }
  ],
  Insurance: [
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
  Claims: [
    {
      id: 1,
      h2: "保险理赔的步骤是什么？",
      img1: require("../assets/discover-img/ia_10008.png"),
      img2: require("../assets/discover-img/ia_10009.jpg"),
      img3: require("../assets/discover-img/ia_10010.png"),
      view: 639,
      share: 1
    }
  ]
};
let goods2 = {
  Basis: [
    {
      id: 1,
      h2: "为什么大家都不喜欢保险呢?",
      p:
        "客观的说,保险的确是几千年以来,人类自然发明的应对风险最好的工具之一.但,为什么大家都不喜欢保险呢？",
      img: require("../assets/discover-img/item1.jpg"),
      span1: "保险配置",
      span2: "销售套路",
      view: 628,
      share: 16
    },
    {
      id: 2,
      h2: "复联4 | 如何用保险保护家庭的“超级英雄”?",
      p:
        "在前漫威时代，大银幕上的超级英雄们是正义的代表，惩恶扬善，无所不能。而在一个家庭中，超级英雄就是挑起一家重担的顶梁柱，他们没有金刚铁臂之身，也没有影片中英雄们的传奇色彩，他们就是一个个普通人，会倒下，会病倒，也可能会有意外。当这些变故和意外来临时，保险就是家庭最后的守护神。",
      img: require("../assets/discover-img/item2.png"),
      span1: "妇联4",
      span2: "家庭保险",
      view: 628,
      share: 16
    },
    {
      id: 3,
      h2: "如何才能买到一份“好保险”？",
      p:
        "市面上的保险产品千万种，买保险买哪种？哪款保险最好？哪款保险性价比高且保障齐全？",
      img: require("../assets/discover-img/item3.png"),
      span1: "保险搭配",
      span2: "健康险",
      view: 628,
      share: 16
    },
    {
      id: 4,
      h2: "看牙那么贵！医保能报多少？保险呢？",
      p:
        "提到“牙疼”是“疼起来真要命”，现在想到看牙费用，口袋都在颤抖，肉疼，灵魂疼······面对这令人望而生却的看牙费用，那么，有没有保险可以报销呢？",
      img: require("../assets/discover-img/item5.png"),
      span1: "牙医保险",
      span2: "医保报销",
      view: 628,
      share: 19
    },
    {
      id: 5,
      h2: "看牙那么贵！医保能报多少？保险呢？",
      p:
        "提到“牙疼”是“疼起来真要命”，现在想到看牙费用，口袋都在颤抖，肉疼，灵魂疼······面对这令人望而生却的看牙费用，那么，有没有保险可以报销呢？",
      img: require("../assets/discover-img/item5.png"),
      span1: "牙医保险",
      span2: "医保报销",
      view: 628,
      share: 19
    },
    {
      id: 6,
      h2: "看牙那么贵！医保能报多少？保险呢？",
      p:
        "提到“牙疼”是“疼起来真要命”，现在想到看牙费用，口袋都在颤抖，肉疼，灵魂疼······面对这令人望而生却的看牙费用，那么，有没有保险可以报销呢？",
      img: require("../assets/discover-img/item5.png"),
      span1: "牙医保险",
      span2: "医保报销",
      view: 628,
      share: 19
    }
  ],
  Insurance: [
    {
      id: 1,
      h2: "为什么大家都不喜欢保险呢?",
      p:
        "客观的说,保险的确是几千年以来,人类自然发明的应对风险最好的工具之一.但,为什么大家都不喜欢保险呢？",
      img: require("../assets/discover-img/item6.jpg"),
      span1: "保险配置",
      span2: "销售套路",
      view: 628,
      share: 16
    },
    {
      id: 2,
      h2: "复联4 | 如何用保险保护家庭的“超级英雄”?",
      p:
        "在前漫威时代，大银幕上的超级英雄们是正义的代表，惩恶扬善，无所不能。而在一个家庭中，超级英雄就是挑起一家重担的顶梁柱，他们没有金刚铁臂之身，也没有影片中英雄们的传奇色彩，他们就是一个个普通人，会倒下，会病倒，也可能会有意外。当这些变故和意外来临时，保险就是家庭最后的守护神。",
      img: require("../assets/discover-img/item7.jpg"),
      span1: "妇联4",
      span2: "家庭保险",
      view: 628,
      share: 16
    },
    {
      id: 3,
      h2: "如何才能买到一份“好保险”？",
      p:
        "市面上的保险产品千万种，买保险买哪种？哪款保险最好？哪款保险性价比高且保障齐全？",
      img: require("../assets/discover-img/item8.png"),
      span1: "保险搭配",
      span2: "健康险",
      view: 628,
      share: 16
    },
    {
      id: 4,
      h2: "看牙那么贵！医保能报多少？保险呢？",
      p:
        "提到“牙疼”是“疼起来真要命”，现在想到看牙费用，口袋都在颤抖，肉疼，灵魂疼······面对这令人望而生却的看牙费用，那么，有没有保险可以报销呢？",
      img: require("../assets/discover-img/item9.png"),
      span1: "牙医保险",
      span2: "医保报销",
      view: 628,
      share: 19
    },
    {
      id: 5,
      h2: "如何才能买到一份“好保险”？",
      p:
        "市面上的保险产品千万种，买保险买哪种？哪款保险最好？哪款保险性价比高且保障齐全？",
      img: require("../assets/discover-img/item8.png"),
      span1: "保险搭配",
      span2: "健康险",
      view: 628,
      share: 16
    },
    {
      id: 6,
      h2: "看牙那么贵！医保能报多少？保险呢？",
      p:
        "提到“牙疼”是“疼起来真要命”，现在想到看牙费用，口袋都在颤抖，肉疼，灵魂疼······面对这令人望而生却的看牙费用，那么，有没有保险可以报销呢？",
      img: require("../assets/discover-img/item9.png"),
      span1: "牙医保险",
      span2: "医保报销",
      view: 628,
      share: 19
    }
  ],
  Claims: [
    {
      id: 1,
      h2: "为什么大家都不喜欢保险呢?",
      p:
        "客观的说,保险的确是几千年以来,人类自然发明的应对风险最好的工具之一.但,为什么大家都不喜欢保险呢？",
      img: require("../assets/discover-img/item10.png"),
      span1: "保险配置",
      span2: "销售套路",
      view: 628,
      share: 16
    },
    {
      id: 2,
      h2: "复联4 | 如何用保险保护家庭的“超级英雄”?",
      p:
        "在前漫威时代，大银幕上的超级英雄们是正义的代表，惩恶扬善，无所不能。而在一个家庭中，超级英雄就是挑起一家重担的顶梁柱，他们没有金刚铁臂之身，也没有影片中英雄们的传奇色彩，他们就是一个个普通人，会倒下，会病倒，也可能会有意外。当这些变故和意外来临时，保险就是家庭最后的守护神。",
      img: require("../assets/discover-img/item11.png"),
      span1: "妇联4",
      span2: "家庭保险",
      view: 628,
      share: 16
    },
    {
      id: 3,
      h2: "如何才能买到一份“好保险”？",
      p:
        "市面上的保险产品千万种，买保险买哪种？哪款保险最好？哪款保险性价比高且保障齐全？",
      img: require("../assets/discover-img/item12.png"),
      span1: "保险搭配",
      span2: "健康险",
      view: 628,
      share: 16
    },
    {
      id: 4,
      h2: "看牙那么贵！医保能报多少？保险呢？",
      p:
        "提到“牙疼”是“疼起来真要命”，现在想到看牙费用，口袋都在颤抖，肉疼，灵魂疼······面对这令人望而生却的看牙费用，那么，有没有保险可以报销呢？",
      img: require("../assets/discover-img/item13.jpg"),
      span1: "牙医保险",
      span2: "医保报销",
      view: 628,
      share: 19
    },
    {
      id: 5,
      h2: "如何才能买到一份“好保险”？",
      p:
        "市面上的保险产品千万种，买保险买哪种？哪款保险最好？哪款保险性价比高且保障齐全？",
      img: require("../assets/discover-img/item12.png"),
      span1: "保险搭配",
      span2: "健康险",
      view: 628,
      share: 16
    },
    {
      id: 6,
      h2: "看牙那么贵！医保能报多少？保险呢？",
      p:
        "提到“牙疼”是“疼起来真要命”，现在想到看牙费用，口袋都在颤抖，肉疼，灵魂疼······面对这令人望而生却的看牙费用，那么，有没有保险可以报销呢？",
      img: require("../assets/discover-img/item13.jpg"),
      span1: "牙医保险",
      span2: "医保报销",
      view: 628,
      share: 19
    }
  ]
};

import { InfiniteScroll } from "element-ui";

export default {
  directives: { InfiniteScroll },
  data() {
    return {
      count: 4,
      goodslist: [],
      loading: false,
      list: [
        {
          id: 1,
          h2: "这些社保知识你都知道吗？",
          p: "在大部分人的认知里,社保就是用来看病的,但你真的懂它吗?",
          img1: require("../assets/discover-img/ia_10001.jpg"),
          img2: require("../assets/discover-img/ia_10002.jpg"),
          img3: require("../assets/discover-img/ia_10003.jpg"),
          view: 639,
          share: 1
        }
      ],
      data: {
        Basis: [
          {
            id: 1,
            h2: "为什么大家都不喜欢保险呢?",
            p:
              "客观的说,保险的确是几千年以来,人类自然发明的应对风险最好的工具之一.但,为什么大家都不喜欢保险呢？",
            img: require("../assets/discover-img/item1.jpg"),
            span1: "保险配置",
            span2: "销售套路",
            view: 628,
            share: 16
          },
          {
            id: 2,
            h2: "复联4 | 如何用保险保护家庭的“超级英雄”?",
            p:
              "在前漫威时代，大银幕上的超级英雄们是正义的代表，惩恶扬善，无所不能。而在一个家庭中，超级英雄就是挑起一家重担的顶梁柱，他们没有金刚铁臂之身，也没有影片中英雄们的传奇色彩，他们就是一个个普通人，会倒下，会病倒，也可能会有意外。当这些变故和意外来临时，保险就是家庭最后的守护神。",
            img: require("../assets/discover-img/item2.png"),
            span1: "妇联4",
            span2: "家庭保险",
            view: 628,
            share: 16
          },
          {
            id: 3,
            h2: "如何才能买到一份“好保险”？",
            p:
              "市面上的保险产品千万种，买保险买哪种？哪款保险最好？哪款保险性价比高且保障齐全？",
            img: require("../assets/discover-img/item3.png"),
            span1: "保险搭配",
            span2: "健康险",
            view: 628,
            share: 16
          },
          {
            id: 4,
            h2: "看牙那么贵！医保能报多少？保险呢？",
            p:
              "提到“牙疼”是“疼起来真要命”，现在想到看牙费用，口袋都在颤抖，肉疼，灵魂疼······面对这令人望而生却的看牙费用，那么，有没有保险可以报销呢？",
            img: require("../assets/discover-img/item5.png"),
            span1: "牙医保险",
            span2: "医保报销",
            view: 628,
            share: 19
          }
        ],
        Insurance: [
          {
            id: 1,
            h2: "为什么大家都不喜欢保险呢?",
            p:
              "客观的说,保险的确是几千年以来,人类自然发明的应对风险最好的工具之一.但,为什么大家都不喜欢保险呢？",
            img: require("../assets/discover-img/item6.jpg"),
            span1: "保险配置",
            span2: "销售套路",
            view: 628,
            share: 16
          },
          {
            id: 2,
            h2: "复联4 | 如何用保险保护家庭的“超级英雄”?",
            p:
              "在前漫威时代，大银幕上的超级英雄们是正义的代表，惩恶扬善，无所不能。而在一个家庭中，超级英雄就是挑起一家重担的顶梁柱，他们没有金刚铁臂之身，也没有影片中英雄们的传奇色彩，他们就是一个个普通人，会倒下，会病倒，也可能会有意外。当这些变故和意外来临时，保险就是家庭最后的守护神。",
            img: require("../assets/discover-img/item7.jpg"),
            span1: "妇联4",
            span2: "家庭保险",
            view: 628,
            share: 16
          },
          {
            id: 3,
            h2: "如何才能买到一份“好保险”？",
            p:
              "市面上的保险产品千万种，买保险买哪种？哪款保险最好？哪款保险性价比高且保障齐全？",
            img: require("../assets/discover-img/item8.png"),
            span1: "保险搭配",
            span2: "健康险",
            view: 628,
            share: 16
          },
          {
            id: 4,
            h2: "看牙那么贵！医保能报多少？保险呢？",
            p:
              "提到“牙疼”是“疼起来真要命”，现在想到看牙费用，口袋都在颤抖，肉疼，灵魂疼······面对这令人望而生却的看牙费用，那么，有没有保险可以报销呢？",
            img: require("../assets/discover-img/item9.png"),
            span1: "牙医保险",
            span2: "医保报销",
            view: 628,
            share: 19
          }
        ],
        Claims: [
          {
            id: 1,
            h2: "为什么大家都不喜欢保险呢?",
            p:
              "客观的说,保险的确是几千年以来,人类自然发明的应对风险最好的工具之一.但,为什么大家都不喜欢保险呢？",
            img: require("../assets/discover-img/item10.png"),
            span1: "保险配置",
            span2: "销售套路",
            view: 628,
            share: 16
          },
          {
            id: 2,
            h2: "复联4 | 如何用保险保护家庭的“超级英雄”?",
            p:
              "在前漫威时代，大银幕上的超级英雄们是正义的代表，惩恶扬善，无所不能。而在一个家庭中，超级英雄就是挑起一家重担的顶梁柱，他们没有金刚铁臂之身，也没有影片中英雄们的传奇色彩，他们就是一个个普通人，会倒下，会病倒，也可能会有意外。当这些变故和意外来临时，保险就是家庭最后的守护神。",
            img: require("../assets/discover-img/item11.png"),
            span1: "妇联4",
            span2: "家庭保险",
            view: 628,
            share: 16
          },
          {
            id: 3,
            h2: "如何才能买到一份“好保险”？",
            p:
              "市面上的保险产品千万种，买保险买哪种？哪款保险最好？哪款保险性价比高且保障齐全？",
            img: require("../assets/discover-img/item12.png"),
            span1: "保险搭配",
            span2: "健康险",
            view: 628,
            share: 16
          },
          {
            id: 4,
            h2: "看牙那么贵！医保能报多少？保险呢？",
            p:
              "提到“牙疼”是“疼起来真要命”，现在想到看牙费用，口袋都在颤抖，肉疼，灵魂疼······面对这令人望而生却的看牙费用，那么，有没有保险可以报销呢？",
            img: require("../assets/discover-img/item13.jpg"),
            span1: "牙医保险",
            span2: "医保报销",
            view: 628,
            share: 19
          }
        ]
      }
    };
  },
  computed: {
    noMore() {
      return this.count >= 10;
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
        // console.log(this.count);
        this.goodslist = goods2[this.$route.name];
        this.loading = false;
      }, 2000);
    }
  },
  created() {
    this.goodslist = this.data["Basis"];
    this.list = goods[this.$route.name];
    this.goodslist = this.data[this.$route.name];
  },
  watch: {
    $route() {
      // console.log(this.$route);
      this.list = goods[this.$route.name];
      this.goodslist = this.data[this.$route.name];
      this.count = 4;
    }
  }
};
</script>
