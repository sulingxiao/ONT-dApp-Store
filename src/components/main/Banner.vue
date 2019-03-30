<template>
  <div class="banner-container">
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in 3" :key="item">
        <img width="100%" :src="banners.img" @click="toUrl(banners.url)" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "MainPageBanner",
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

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
