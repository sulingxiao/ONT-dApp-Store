<template>
  <div class="banner-container">
    <el-carousel type="card" height="210px">
      <el-carousel-item v-for="item in 3" :key="item">
        <img height="100%" :src="banners.img" @click="toUrl(banners.url)" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banners: {
        url: "https://hyd-go.alfakingdom.com/",
        img: "/dApp/dapp-dragon-big.jpeg"
      }
    };
  },
  methods: {
    toUrl($url) {
      if ($url) {
        window.location.href = $url;
      }
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.banner-container {
  margin-top: 30px;
}
</style>
