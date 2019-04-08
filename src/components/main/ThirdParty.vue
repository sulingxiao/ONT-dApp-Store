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
          url: "https://dapp.review/",
          img: "/static/tp/1.png"
        },
        {
          url: "https://dapptotal.com/",
          img: "/static/tp/2.png"
        },
        {
          url: "http://dappbirds.com",
          img: "/static/tp/3.png"
        }
      ],
      logos2: [
        {
          url: "http://www.dapp.cc/",
          img: "/static/tp/4.png"
        },
        {
          url: "https://www.spider.store/",
          img: "/static/tp/5.png"
        },
        {
          url: "https://dappstore.tokenview.com/cn/ont/all",
          img: "/static/tp/6.png"
        }
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
