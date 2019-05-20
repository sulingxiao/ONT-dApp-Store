<template>
  <div class="tp-container">
    <div class="row">
      <div class="col text-center tp-tit">{{ $t("tp.tit") }}</div>
    </div>
    <div class="row">
      <div class="col text-center" v-for="(logo, index) in logos1" :key="index">
        <a :href="logo.url" target="_blank"
          ><img class="tp-img" :src="logo.img" alt=""
        /></a>
      </div>
    </div>
    <div class="row">
      <div class="col text-center" v-for="(logo, index) in logos2" :key="index">
        <a :href="logo.url" target="_blank"
          ><img class="tp-img" :src="logo.img" alt=""
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logos1: [
        {
          url: "https://dappstore.tokenview.com/cn/ont/all",
          img: "/static/tp/6.png"
        },
        {
          url: "https://dapp.review/explore/ont",
          img: "/static/tp/1.png"
        },
        {
          url: "https://www.spider.store/en/ranking/ont/hot",
          img: "/static/tp/5.png"
        }
      ],
      logos2: [
        {
          url: "http://www.dapp.cc/dapp/index/mc_id/9/cate_id/0/type/0.html",
          img: "/static/tp/4.png"
        },
        {
          url: "http://dappbirds.com/explore",
          img: "/static/tp/3.png"
        },
        { url: "https://dapptotal.com/ont", img: "/static/tp/2.png" }
      ]
    };
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.tp-container {
  background-color: white;
  padding: 30px 0;
  margin-bottom: 60px;

  .tp-tit {
    font-size: 28px;
    font-weight: 500;
    line-height: 40px;
  }
  .tp-img {
    margin: 30px auto;
  }
}
</style>
