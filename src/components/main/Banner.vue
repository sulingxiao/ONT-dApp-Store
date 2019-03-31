<template>
  <div class="banner-container">
    <el-carousel :type="type" :height="carouselHeight">
      <el-carousel-item v-for="(banner, index) in banners" :key="index">
        <a :href="banner.url" target="_blank"
          ><img :height="imgHeight" :width="imgWidth" :src="banner.img" alt=""
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
  },
  computed: {
    // 可以通过空字符串使用普通样式的走马灯，即小于768为""
    type() {
      return window.screen.width < 768 ? "card" : "card";
    },
    // 如果上面的type有使用""或"card"形式，第一个配合""type需要更高一点
    carouselHeight() {
      return window.screen.width < 768 ? "75px" : "210px";
    },
    imgHeight() {
      return window.screen.width < 768 ? "auto" : "100%";
    },
    imgWidth() {
      return window.screen.width < 768 ? "100%" : "auto";
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.banner-container {
  margin-top: 30px;
}
</style>
