<template>
  <div id="app">
    <router-view :logined="logined">
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


