<template>
  <div id="app">
<<<<<<< HEAD
    <router-view>
=======
    <router-view :logined="logined">
>>>>>>> d7c1f261e5b14b380abd38f20fa71bf10816aaab
      <sub-nav></sub-nav>
    </router-view>
  </div>
</template>

<script>
import "../static/css/reset.css";
import subNav from "./components/Subnav.vue";
export default {
  data() {
    return {};
  },
  components: {
    subNav
  },
  created() {
    let token = localStorage.getItem("Authorization");
<<<<<<< HEAD
=======
    this.logined = token ? true : false;
  },
  watch: {
    $route() {}
>>>>>>> d7c1f261e5b14b380abd38f20fa71bf10816aaab
  }
};
</script>

<style lang="scss" scoped>
#app {
  height: 100%;
}
</style>


