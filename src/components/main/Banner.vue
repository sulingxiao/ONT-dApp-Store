<template>
  <div class="banner-container">
    <el-carousel
      :type="type"
      :height="carouselHeight"
      indicator-position="outside"
    >
      <el-carousel-item v-for="(banner, index) in banners" :key="index">
        <a v-if="banner.url" :href="banner.url" target="_blank"
          ><img :src="banner.img" alt=""
        /></a>
        <img v-else :src="banner.img" alt="" />
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
          img: "/static/banner/dragon.jpeg"
        },
        {
          url: "https://candy.ont.io/#/",
          img: "/static/banner/candy-box.jpg"
        },
        {
          url: "",
          img: "/static/banner/block-war.png"
        }
      ]
    };
  },
  computed: {
    type() {
      return window.innerWidth > 768 ? "card" : "";
    },
    carouselHeight() {
      if (window.innerWidth >= 1100) {
        return "210px";
      } else if (window.innerWidth < 1100 && window.innerWidth > 768) {
        return (window.innerWidth / 5.8).toString() + "px";
      } else {
        return "125px";
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
