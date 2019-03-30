<template>
  <div id="app">
    <top-nav-d-app></top-nav-d-app>
    <router-view></router-view>
    <footer-nav></footer-nav>
  </div>
</template>

<script>
import TopNavDApp from "./components/common/TopNav";
import FooterNav from "./components/common/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

export default {
  components: {
    FooterNav,
    TopNavDApp
  }
};
</script>

<style>
#app {
  font-family: Nunito, sans-serif;
  color: #2c3e50;
  background: #fafafa;
}
</style>
