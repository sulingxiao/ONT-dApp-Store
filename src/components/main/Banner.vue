<template>
  <div class="banner-container">
    <el-carousel :height="carouselHeight" indicator-position="outside">
      <el-carousel-item v-for="(banner, index) in banners" :key="index">
        <a :href="banner.url" target="_blank"
          ><img :src="banner.img" alt=""
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
        }
      ]
    };
  },
  computed: {
    carouselHeight() {
      if (window.innerWidth > 1100) {
        return "410px";
      } else {
        return (window.innerWidth / 2.6).toString() + "px";
      }
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.banner-container {
  margin-top: 30px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
