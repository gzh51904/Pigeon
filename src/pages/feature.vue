<template>
  <div class="p-content clearfix">
    <ul>
      <li class="p-content-main" v-for="item in dataShow" :key="item.id">
        <a
          href
          :idex="item.id"
          :typeName="$route.name"
          @click.prevent="goDetail(item.type,item.id)"
        >
          <div class="p-content-main-top">
            <div class="free-mark" v-if="item.welfare">
              <!-- v-for="item in cc" -->
              <!-- v-if="item.walfare" -->
              <div class="tit">公益产品</div>
            </div>
            <template v-else></template>
            <img :src="item.imgUrl" alt />
            <!-- {{ cc.info.sales }} -->
            <span class="pbt-sales">
              销量：
              <i>{{item.info.sales}}</i>
            </span>
            <span class="pbt-price">
              ￥
              <i>{{item.info.price}}</i>
              <i class="pbt-price-up">起</i>
              <div class="free-mark1" v-if="item.donate">5颗爱心起捐</div>
              <template v-else></template>
            </span>
          </div>
          <div class="product-box-bot">
            <ul class="pbt-advantage">
              <li>{{item.info.discription1}}</li>
              <li>{{item.info.discription2}}</li>
              <li style="border-right:none">{{item.info.discription3}}</li>
            </ul>
            <div class="pbt-protect">
              <span>获取保障</span>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  // props: ["pType"],
  data() {
    return {
      data: {
        /* feature: [
          {
            id: 1,
            welfare: true,
            donate: true,
            imgUrl: require("../assets/cc-img/feature1.png"),
            info: {
              sales: 25775,
              price: "0.50",
              discription1: {
                d1: "覆盖人群",
                d2: "广泛"
              },
              discription2: {
                d1: "高危职业",
                d2: "可保"
              },
              discription3: {
                d1: "报销比例",
                d2: "100%"
              }
            }
          },
          {
            id: 2,
            welfare: false,
            imgUrl: require("../assets/cc-img/feature2.png"),
            info: {
              sales: 33675,
              price: 150,
              discription1: {
                d1: "孕妇",
                d2: "专属定制"
              },
              discription2: {
                d1: "妊娠疾病",
                d2: "补贴"
              },
              discription3: {
                d1: "新生儿",
                d2: "疾病保障"
              }
            }
          },
          {
            id: 3,
            welfare: false,
            imgUrl: require("../assets/cc-img/feature3.png"),
            info: {
              sales: 368,
              price: 10,
              discription1: {
                d1: "急性肠胃炎",
                d2: "保障"
              },
              discription2: {
                d1: "食物中毒",
                d2: "亦保障"
              },
              discription3: {
                d1: "十元便可",
                d2: "保一年"
              }
            }
          }
        ],
        health: [
          {
            id: 1,
            // welfare: true,
            imgUrl: require("../assets/cc-img/health1.png"),
            info: {
              sales: 34070,
              price: 8,
              discription1: {
                d1: "25种儿童高发重",
                d2: "疾"
              },
              discription2: {
                d1: "确诊即赔",
                d2: ""
              },
              discription3: {
                d1: "1年保障仅需8元",
                d2: ""
              }
            }
          },
          {
            id: 2,
            imgUrl: require("../assets/cc-img/health2.png"),
            info: {
              sales: 33944,
              price: 20,
              discription1: {
                d1: "涵盖男性高发疾",
                d2: "病"
              },
              discription2: {
                d1: "肾脏守护",
                d2: ""
              },
              discription3: {
                d1: "确诊即赔",
                d2: ""
              }
            }
          }
        ],
        travel: [
          {
            id: 1,
            // welfare: true,
            imgUrl: require("../assets/cc-img/travel1.png"),
            info: {
              sales: 18424,
              price: 10,
              discription1: {
                d1: "驾乘车",
                d2: "均有保障"
              },
              discription2: {
                d1: "节假日",
                d2: "额外补贴"
              },
              discription3: {
                d1: "尊享道路",
                d2: "救援服务"
              }
            }
          },
          {
            id: 2,
            imgUrl: require("../assets/cc-img/travel2.png"),
            info: {
              sales: 1670,
              price: 55,
              discription1: {
                d1: "财产损失保障",
                d2: ""
              },
              discription2: {
                d1: "医疗垫付",
                d2: ""
              },
              discription3: {
                d1: "保障自动延期",
                d2: ""
              }
            }
          }
        ],
        accident: [
          {
            id: 1,
            // welfare: true,
            imgUrl: require("../assets/cc-img/accident1.png"),
            info: {
              sales: 144205,
              price: "1.50",
              discription1: {
                d1: "各种意外都保",
                d2: ""
              },
              discription2: {
                d1: "1.5元保一年",
                d2: ""
              },
              discription3: {
                d1: "出生30天可买",
                d2: ""
              }
            }
          },
          {
            id: 2,
            imgUrl: require("../assets/cc-img/accident2.png"),
            info: {
              sales: 34086,
              price: 78,
              discription1: {
                d1: "海陆空",
                d2: "全面保障"
              },
              discription2: {
                d1: "一年500万",
                d2: "保额"
              },
              discription3: {
                d1: "住院",
                d2: "额外补贴"
              }
            }
          }
        ],
        wealth: [
          {
            id: 1,
            // welfare: true,
            imgUrl: require("../assets/cc-img/wealth1.png"),
            info: {
              sales: 50555,
              price: "1",
              discription1: {
                d1: "外出期间保障",
                d2: ""
              },
              discription2: {
                d1: "现金首饰",
                d2: ""
              },
              discription3: {
                d1: "保障随心选",
                d2: ""
              }
            }
          },
          {
            id: 2,
            imgUrl: require("../assets/cc-img/wealth2.png"),
            info: {
              sales: 278,
              price: 2,
              discription1: {
                d1: "2.0元保1年",
                d2: ""
              },
              discription2: {
                d1: "涵盖微信",
                d2: "支付宝"
              },
              discription3: {
                d1: "全年多次赔付",
                d2: ""
              }
            }
          }
        ],
        duty: [],
        lifetime: [
          {
            id: 1,
            // welfare: true,
            imgUrl: require("../assets/cc-img/lifetime1.png"),
            info: {
              sales: 33658,
              price: "51",
              discription1: {
                d1: "意外疾病",
                d2: "双重保障"
              },
              discription2: {
                d1: "续保保额",
                d2: "翻倍"
              },
              discription3: {
                d1: "可保至",
                d2: "80岁"
              }
            }
          }
        ] */
      },
      dataShow: []
    };
  },
  methods: {
    goDetail(type, id) {
      let token = localStorage.getItem("Authorization");
      if (token) {
        this.$router.push({
          name: "Yanxuan",
          query: { type, id }
        });
      } else {
        this.$router.push("/login");
      }
    }
  },
  created() {
    let type = this.$route.name;
    this.$axios
      .get("/production", {
        params: {
          type
        }
      })
      .then(res => {
        let { data, headers } = res;
        console.log(data.obj);

        this.dataShow = data.obj[0].production.map(item => {
          let imgUrl = require("../assets/cc-img/" + item.imgUrl);
          return (item = {
            ...item,
            imgUrl,
            type
          });
        });
        /* console.log(JSON.parse(JSON.stringify(this.dataShow)); */
      });
  },
  watch: {
    $route() {
      // this.type = this.pType; //这是去哪个子路由的name
      // console.log(this.type);
      //console.log(this.$route);
      this.dataShow = [];
      //this.data[type]=data1
      //axios.get('',query:{health}) //子路由的name通过字段查询mongodb
      //this.data.dataShow = data1  //data1是后端请求查询成功返回的数据

      // console.log(this.dataShow);

      //data1= [...]
      //this.dataShow = data1

      //组建复用时获取数据
      let type = this.$route.name;
      this.$axios
        .get("/production", {
          params: {
            type
          }
        })
        .then(res => {
          let { data, headers } = res;
          console.log(data.obj);

          this.dataShow = data.obj[0].production.map(item => {
            let imgUrl = require("../assets/cc-img/" + item.imgUrl);
            return (item = {
              ...item,
              imgUrl,
              type
            });
          });
        });
    }
  }
  // watch:{
  //   pType(){
  //     let type = this.pType;
  //   }
  // }
};
</script>

<style>
</style>
