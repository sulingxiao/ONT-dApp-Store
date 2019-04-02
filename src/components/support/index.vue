<template>
  <div class="container support-container">
    <div class="support-tit">{{ $t("support.index.name") }}</div>

    <div class="row">
      <div
        class="col-xl-6 col-lg-6 col-12"
        v-for="(item, index) in supportList"
        :key="index"
      >
        <div class="spt-item">
          <div class="spt-nickname">{{ item.nickname }}</div>
          <div class="spt-line"></div>
          <div class="spt-name">{{ item.name }}</div>
          <div class="spt-img"><img :src="item.img" alt="" /></div>
          <div class="spt-desc">{{ item.desc }}</div>
          <div class="spt-btn-area">
            <button
              v-if="index < 2"
              type="button"
              class="spt-btn"
              @click="goToDetail(item.url)"
            >
              {{ $t("support.index.detail") }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    supportList() {
      return [
        {
          name: this.$t("support.index.detail1.name"),
          nickname: this.$t("support.index.detail1.nickname"),
          img: "/support/1.png",
          desc: this.$t("support.index.detail1.desc"),
          url: "SupportDetail1"
        },
        {
          name: this.$t("support.index.detail2.name"),
          nickname: this.$t("support.index.detail2.nickname"),
          img: "/support/2.png",
          desc: this.$t("support.index.detail2.desc"),
          url: "SupportDetail2"
        },
        {
          name: this.$t("support.index.detail3.name"),
          nickname: this.$t("support.index.detail3.nickname"),
          img: "/support/3.png",
          desc: this.$t("support.index.detail3.desc"),
          url: "SupportDetail3"
        },
        {
          name: this.$t("support.index.detail4.name"),
          nickname: this.$t("support.index.detail4.nickname"),
          img: "/support/4.png",
          desc: this.$t("support.index.detail4.desc"),
          url: "SupportDetail4"
        }
      ];
    }
  },
  methods: {
    goToDetail(routeName) {
      this.$router.push({ name: routeName });
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.support-container {
  padding-top: 32px;
  padding-bottom: 40px;

  .support-tit {
    text-align: center;
    background: linear-gradient(
      270deg,
      rgba(124, 205, 239, 1) 0%,
      rgba(70, 159, 219, 1) 100%
    );
    border-radius: 6px;
    opacity: 0.7994;
    margin-bottom: 90px;
    padding: 50px 24px;
    font-size: 32px;
    color: rgba(255, 255, 255, 1);
    text-shadow: 0 2px 5px rgba(70, 159, 219, 1);
  }

  .spt-item {
    background-color: white;
    padding: 32px;
    margin-bottom: 40px;

    .spt-nickname {
      font-size: 18px;
      color: rgba(70, 159, 219, 1);
    }
    .spt-line {
      width: 24px;
      height: 4px;
      background: rgba(70, 159, 219, 1);
      margin-top: 8px;
    }
    .spt-name {
      font-size: 40px;
      color: rgba(0, 0, 0, 1);
      margin-top: 36px;
      min-height: 120px;
    }
    .spt-img {
      margin-top: 49px;
      text-align: center;

      img {
        width: 65%;
      }
    }
    .spt-desc {
      font-size: 18px;
      color: rgba(89, 89, 89, 1);
      margin-top: 94px;
      min-height: 85px;
    }
    .spt-btn-area {
      margin-top: 20px;

      .spt-btn {
        border: 0;
        min-width: 80px;
        height: 34px;
        background: linear-gradient(
          270deg,
          rgba(124, 205, 239, 1) 0%,
          rgba(70, 159, 219, 1) 100%
        );
        border-radius: 4px;
        font-size: 14px;
        color: rgba(255, 255, 255, 1);
      }
    }
  }
}
</style>
