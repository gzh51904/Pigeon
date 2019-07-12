<template>
    <div class="p-content clearfix">
      <ul>
        <li class="p-content-main" v-for="item in dataShow" :key="item.id">
          <a href="">
          <div class="p-content-main-top">
            <div class="free-mark">
              <!-- v-for="item in cc" -->
              <!-- v-if="item.walfare" -->
              <div class="tit" v-if="item.walfare">公益产品</div>
              <template v-else></template>
            </div>
            <img src="../assets/cc-img/feature1.png" alt="">
            <!-- {{ cc.info.sales }} -->
            <span class="pbt-sales">销量：<i>25775</i></span>
            <span class="pbt-price">
              ￥
              <i>0.50</i>
              <i class="pbt-price-up">起</i>
              <div class="free-mark1">
                5颗爱心起捐
              </div>
            </span>
          </div>
          <div class="product-box-bot">
            <ul class="pbt-advantage">
              <li>覆盖人群<br><span>广泛</span></li>
              <li>高危职业<br><span>可保</span></li>
              <li style="border-right:none">报销比例<br><span>100%</span></li>
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
  props: ["pType"],
  data() {
    return {
      data: {
        feature: [
          {
            id: 1,
            welfare: true,
            imgUrl: "../assets/cc-img/feature1.png",
            info: {
              sales: 25775,
              price: 0.5,
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
            imgUrl: "../assets/cc-img/feature1.png",
            info: {
              sales: 25775,
              price: 0.5,
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
          }
        ],
        health: [
          {
            id: 1,
            welfare: true,
            imgUrl: "../assets/cc-img/feature1.png",
            info: {
              sales: 25775,
              price: 0.5,
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
            imgUrl: "../assets/cc-img/feature1.png",
            info: {
              sales: 25775,
              price: 0.5,
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
          }
        ]
      },
      dataShow: []
    };
  },
  watch: {
    pType() {
      // this.type = this.pType; //这是去哪个子路由的name
      // console.log(this.type);
         this.dataShow = [];
      //this.data[type]=data1
      //axios.get('',query:{health}) //子路由的name通过字段查询mongodb
      //this.data.dataShow = data1  //data1是后端请求查询成功返回的数据
    this.dataShow = this.data[this.pType];  
    console.log(this.dataShow);
    
    //data1= [...]   
    //this.dataShow = data1
    
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
