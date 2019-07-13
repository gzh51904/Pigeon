<template>
  <div id="app">
<<<<<<< HEAD
    <router-view :logined="logined">
=======
    <router-view>
>>>>>>> e551ff491d0db93cb9831ada5d363d321195d1e3
      <sub-nav></sub-nav>
    </router-view>
  </div>
</template>

<script>
import "../static/css/reset.css";
import subNav from "./components/Subnav.vue";
export default {
  data() {
    return {
      logined: false
    };
  },
  components: {
    subNav
  },
  created() {
    let token = localStorage.getItem("Authorization");
    this.logined = token ? true : false;
  }
};
</script>

<style lang="scss" scoped>
#app {
  height: 100%;
}
</style>


