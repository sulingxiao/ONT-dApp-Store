<template>
  <div class="container">
    <div class="breadcrumb-area">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ name: 'DApp' }">Home</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ name: 'Support' }"
          >Incentive plan
        </el-breadcrumb-item>
        <el-breadcrumb-item>Incentive plan details </el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="detail-content-area">
      <div class="spt-detail-tit">{{ tit }}</div>

      <div class="spt-detail-txt">{{ txt1 }}</div>

      <div class="spt-detail-example">
        <span
          ><img
            class="spt-d-e-img"
            src="./../../assets/support/detail/Rectangle.png"
            alt=""
        /></span>
        <span class="spt-d-e-tit">举例</span>
      </div>
      <div class="spt-detail-txt">{{ txt2 }}</div>
      <div class="spt-detail-example-img">
        <img src="./../../assets/support/detail/detail1-1.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tit: "交易费五五比例返还",
      txt1:
        "所有在本体主网上运行 dApp 所产生的底层平台交易手续费（gas），开发者将按比例直接返还。 本体拟设置为五五比例，即所有在 dApp 中产生的用户交易手续费，将会有50%直接分配给开发者。本体将在收集完社区所有反馈后公布最终决定。 2019年4月1日-6月30日近3个月的时间为“早鸟期”，在此期间 dApp 开发者将享受特别待遇，获得交易手续费的60%。以此鼓励用于探索，敢为人先的开发者们大胆设想，共同繁荣本体 dApp 生态。",
      txt2:
        "开发者基于本体上开发了一个 dApp，用户在这个 dApp 上进行一笔交易产生了0.01 ONG 的手续费，就会有50%即 0.005 ONG 直接返还给开发者。 随着 dApp 的规模越来越大，产生的交易量也会越来越多，dApp 开发者将会获得交易手续费收入也就越多。本体以开放共赢的心态，愿意把这部分的收益返还给 dApp 开发者，为 dApp 开发者带来最直观有效的激励。"
    };
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.breadcrumb-area {
  margin-top: 24px;
}
.detail-content-area {
  background-color: white;
  margin-top: 24px;
  margin-bottom: 80px;
  padding: 48px;

  .spt-detail-tit {
    font-size: 24px;
    color: rgba(0, 0, 0, 1);
    text-align: center;
  }
  .spt-detail-txt {
    margin-top: 32px;
    font-size: 18px;
    color: rgba(74, 74, 74, 1);
    line-height: 32px;
  }
  .spt-detail-example {
    margin-top: 32px;
    line-height: 21px;
    position: relative;

    .spt-d-e-img {
      width: 24px;
      position: absolute;
      top: -2px;
    }
    .spt-d-e-tit {
      margin-left: 36px;
      font-size: 18px;
      color: rgba(47, 163, 241, 1);
    }
  }
  .spt-detail-example-img {
    text-align: center;
    margin-top: 32px;

    img {
      width: 80%;
    }
  }
}
</style>
