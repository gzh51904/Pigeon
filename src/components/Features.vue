<template>
  <div class="features">
    <div class="item" v-for="item in list" :key="item.id">
      <a href="javascript:void(0)">
        <img :src="item.img" alt />
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
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
        }
      ]
    };
  }
};
</script>

