<template>
  <div class="container support-container">
    <div class="support-tit">"文艺复兴"激励计划</div>

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
              详情
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      supportList: [
        {
          name: "节点大让利",
          nickname: "收入六四分成",
          img: "/support/1.png",
          desc: "用户行为付出的手续费，开发者和节点各分50%",
          url: "SupportDetail1"
        },
        {
          name: "日激励 周激励",
          nickname: "节点大让利",
          img: "/support/2.png",
          desc: "ONG AND ONG 活跃度前50，通通奖励",
          url: "SupportDetail2"
        },
        {
          name: "我出钱 你开发",
          nickname: "贷款计划",
          img: "/support/3.png",
          desc: "帮开发者度过前期开发经费不足的问题 无利率",
          url: "SupportDetail3"
        },
        {
          name: "不懂就要问",
          nickname: "开发者支持",
          img: "/support/4.png",
          desc: "本体技术支持人员欢迎您的骚扰",
          url: "SupportDetail4"
        }
      ]
    };
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
    height: 140px;
    line-height: 140px;
    background: linear-gradient(
      270deg,
      rgba(124, 205, 239, 1) 0%,
      rgba(70, 159, 219, 1) 100%
    );
    border-radius: 6px;
    opacity: 0.7994;
    margin-bottom: 90px;
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
    }
    .spt-btn-area {
      margin-top: 20px;

      .spt-btn {
        width: 80px;
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
