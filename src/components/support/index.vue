<template>
  <div class="container-fluid support-container">
    <div class="row">
      <div class="col">
        <div class="support-tit">{{ $t("support.index.name") }}</div>
      </div>
    </div>

    <div class="row">
      <div class="col" v-for="item in bindList" :key="item.name">
        <router-link :to="{ name: item.routerName }">
          <div class="bind-div">
            <div class="bind-tit">{{ item.name }}</div>
            <div class="bind-txt" v-if="viewDesc">{{ item.desc }}</div>
          </div>
        </router-link>
      </div>
    </div>

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
            <button type="button" class="spt-btn" @click="goToDetail(item.url)">
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
    viewDesc() {
      return window.innerWidth > 768;
    },
    bindList() {
      return [
        {
          name: this.$t("support.index.bindBtn.verify.tit"),
          desc: this.$t("support.index.bindBtn.verify.txt"),
          routerName: "BindVerify"
        },
        {
          name: this.$t("support.index.bindBtn.node.tit"),
          desc: this.$t("support.index.bindBtn.node.txt"),
          routerName: "BindNode"
        },
        {
          name: this.$t("support.index.bindBtn.search.tit"),
          desc: this.$t("support.index.bindBtn.search.txt"),
          routerName: "BindSearch"
        }
      ];
    },
    supportList() {
      return [
        {
          name: this.$t("support.index.detail1.name"),
          nickname: this.$t("support.index.detail1.nickname"),
          img: "/static/support/1.png",
          desc: this.$t("support.index.detail1.desc"),
          url: "SupportDetail1"
        },
        {
          name: this.$t("support.index.detail2.name"),
          nickname: this.$t("support.index.detail2.nickname"),
          img: "/static/support/2.png",
          desc: this.$t("support.index.detail2.desc"),
          url: "SupportDetail2"
        },
        {
          name: this.$t("support.index.detail3.name"),
          nickname: this.$t("support.index.detail3.nickname"),
          img: "/static/support/3.png",
          desc: this.$t("support.index.detail3.desc"),
          url: "SupportDetail3"
        },
        {
          name: this.$t("support.index.detail4.name"),
          nickname: this.$t("support.index.detail4.nickname"),
          img: "/static/support/4.png",
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
    margin-bottom: 24px;
    padding: 50px 24px;
    font-size: 32px;
    color: rgba(255, 255, 255, 1);
    text-shadow: 0 2px 5px rgba(70, 159, 219, 1);
  }

  .bind-div {
    background-color: white;
    padding: 16px;
    height: 100%;

    .bind-tit {
      font-size: 16px;
      font-weight: 500;
      color: rgba(70, 159, 219, 1);
    }
    .bind-txt {
      margin-top: 12px;
      font-size: 12px;
      color: rgba(183, 200, 206, 1);
    }
  }

  .spt-item {
    background-color: white;
    padding: 32px;
    margin-top: 24px;
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
        cursor: pointer;
      }
    }
  }
}
</style>
