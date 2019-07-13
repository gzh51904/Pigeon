<template>
  <div id="app">
    <router-view>
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
  }
};
</script>

<style lang="scss" scoped>
#app {
  height: 100%;
}
</style>


