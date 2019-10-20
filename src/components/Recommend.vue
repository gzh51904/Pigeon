<template>
  <div class="recommend">
    <div class="item-one" v-for="item in list1" :key="item.id">
      <a href="javascript:void(0);">
        <h2>{{item.h2}}</h2>
        <p v-if="item.exist">{{item.p}}</p>
        <template v-else></template>
        <div class="img">
          <img :src="item.imgUrl" alt />
          <img :src="item.imgUrl2" alt />
          <img :src="item.imgUrl3" alt />
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
        <img :src="item.imgUrl" alt />
      </a>
    </div>
    <div class="item-one item-four" v-for="item in list3" :key="item.id">
      <a href="javascript:void(0);">
        <h2>{{item.h2}}</h2>
        <div class="img">
          <img :src="item.imgUrl" alt />
          <img :src="item.imgUrl2" alt />
          <img :src="item.imgUrl3" alt />
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
      list1: [],
      list2: [],
      list3: []
    };
  },
  created() {
    let type = this.$route.name.toLowerCase();
    this.$axios
      .get("/discover", {
        params: {
          type
        }
      })
      .then(res => {
        let { data, headers } = res;
        // console.log(data.obj);
        if (data.obj.length) {
          this.data = data.obj.map(item => {
            let imgUrl = require("../assets/discover-img/" + item.img1);
            let imgUrl2 = require("../assets/discover-img/" + item.img2);
            let imgUrl3 = require("../assets/discover-img/" + item.img3);
            return (item = {
              ...item,
              imgUrl,
              imgUrl2,
              imgUrl3
            });
          });

          this.list1 = this.data.slice(0, 2);
          this.list2 = this.data.slice(2, 3);
          this.list3 = this.data.slice(3, 4);
          // console.log(this.list1);
        }
      });
  }
};
</script>
