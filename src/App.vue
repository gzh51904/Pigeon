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
  name: "app",
  data: {},
  components: {
    subNav
  },
  beforeRouteUpdate(to, from, next) {
    console.log(to, from);
    next();
  },
  created() {
    console.log(1);
  }
};
</script>

<style>
</style>
