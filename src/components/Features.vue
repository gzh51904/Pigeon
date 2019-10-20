<template>
  <div class="features">
    <div class="item" v-for="item in list" :key="item.id">
      <a href="javascript:void(0)">
        <img :src="item.imgUrl" alt />
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        /*  {
          id: 1,
          img: require("../assets/discover-img/z1.png")
        },
        {
          id: 2,
          img: require("../assets/discover-img/z2.png")
        },
        {
          id: 3,
          img: require("../assets/discover-img/z3.png")
        },
        {
          id: 4,
          img: require("../assets/discover-img/z4.png")
        },
        {
          id: 5,
          img: require("../assets/discover-img/z5.png")
        },
        {
          id: 6,
          img: require("../assets/discover-img/z6.png")
        },
        {
          id: 7,
          img: require("../assets/discover-img/z7.png")
        } */
      ]
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
        console.log(data.obj);
        if (data.obj.length) {
          this.list = data.obj.map(item => {
            let imgUrl = require("../assets/discover-img/" + item.img);
            return (item = {
              ...item,
              imgUrl
            });
          });
        }
      });
  },
  watch: {
    $route() {
      let type = this.$route.name.toLowerCase();
      this.$axios
        .get("/discover", {
          params: {
            type
          }
        })
        .then(res => {
          let { data, headers } = res;
          if (data.obj.length) {
            this.list = data.obj.map(item => {
              let imgUrl = require("../assets/discover-img/" + item.img);
              return (item = {
                ...item,
                imgUrl
              });
            });
          }
        });
    }
  }
};
</script>

