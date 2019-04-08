<template>
  <div id="app">
    <top-nav></top-nav>
    <router-view></router-view>
    <footer-nav></footer-nav>
  </div>
</template>

<script>
import TopNav from "./components/common/TopNav";
import FooterNav from "./components/common/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

export default {
  components: {
    FooterNav,
    TopNav
  }
};
</script>

<style>
#app {
  font-family: Nunito, sans-serif;
  color: #2c3e50;
  background: #fafafa;
}

/* 自定义container宽度为1280px */
.container-fluid {
  padding-right: 0;
  padding-left: 0;
}
.row {
  max-width: 1440px;
  margin: 0 auto !important;
}
</style>
