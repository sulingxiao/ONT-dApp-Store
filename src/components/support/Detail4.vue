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
      <div class="spt-detail-txt">{{ txt2 }}</div>
      <div class="spt-detail-txt">{{ txt3 }}</div>

      <div class="spt-detail-example">
        <span
          ><img
            class="spt-d-e-img"
            src="./../../assets/support/detail/Rectangle.png"
            alt=""
        /></span>
        <span class="spt-d-e-tit">申请链接</span>
      </div>
      <div class="spt-detail-txt">
        <a :href="txt4" target="_blank">{{ txt4 }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tit: "技术和市场支持",
      txt1:
        "在为开发者提供开发和运维方面的资金支持后，我们希望通过技术和市场方面的支持为开发者提高开发效率和运营效果。 ",
      txt2:
        "DApp 开发者可以通过官网 dApp 页面进行项目申报，经过技术部门审核后，本体将指定负责人与开发者团队进行对接，并在 dApp 的开发周期中为开发者团队提供全程的对接支持和帮助。 ",
      txt3:
        "本支持方案与 dApp 借款计划相互独立，dApp 开发者可自由申请仅借款或仅需要技术与市场支持，对于既需要参与借款计划又需要技术和市场支持的开发者，须提交两份申请单。",
      txt4: "https://dapp.ont.io"
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
