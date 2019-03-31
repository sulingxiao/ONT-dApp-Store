<template>
  <div class="banner-container">
    <el-carousel type="card" height="210px">
      <el-carousel-item v-for="(banner, index) in banners" :key="index">
        <a :href="banner.url" target="_blank"
          ><img height="100%" :src="banner.img" alt=""
        /></a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banners: [
        {
          url: "https://hyd-go.alfakingdom.com/",
          img: "/banner/dragon.jpeg"
        },
        {
          url: "https://candy.ont.io/#/",
          img: "/banner/candy-box.jpg"
        },
        {
          url: "https://candy.ont.io/#/",
          img: "/banner/candy-box.jpg"
        }
      ]
    };
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.banner-container {
  margin-top: 30px;
}
</style>
