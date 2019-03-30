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
        <span class="spt-d-e-tit">借款方式</span>
      </div>
      <div class="spt-detail-txt">{{ txt2 }}</div>

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
        <a :href="txt3" target="_blank">{{ txt3 }}</a>
      </div>

      <div class="spt-detail-example">
        <span
          ><img
            class="spt-d-e-img"
            src="./../../assets/support/detail/Rectangle.png"
            alt=""
        /></span>
        <span class="spt-d-e-tit">借款流程</span>
      </div>
      <div class="spt-detail-txt">{{ txt4 }}</div>
      <div class="spt-detail-example-img">
        <img src="./../../assets/support/detail/detail3-1.png" alt="" />
      </div>
      <div class="spt-detail-txt">
        <div>{{ txt5 }}</div>
        <div>{{ txt6 }}</div>
        <div>{{ txt7 }}</div>
        <div>{{ txt8 }}</div>
      </div>

      <div class="spt-detail-example">
        <span
          ><img
            class="spt-d-e-img"
            src="./../../assets/support/detail/Rectangle.png"
            alt=""
        /></span>
        <span class="spt-d-e-tit">还款方式</span>
      </div>
      <div class="spt-detail-txt">{{ txt9 }}</div>
      <div class="spt-detail-txt">
        <div>{{ txt10 }}</div>
        <div>{{ txt11 }}</div>
        <div>{{ txt12 }}</div>
        <div class="spt-detail-txt-tips">{{ txt13 }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tit: "DApp 开发借款计划",
      txt1:
        "为帮助 dApp 开发者更顺利地在本体上进行应用开发和运营，本体专为开发者们制定了dApp 开发借款计划，为优秀项目提供开发和运营经费，并提供选择性还款方案。",
      txt2:
        "本体官网（ont.io） dApp 版块增设借款计划申请入口，开发者申请内容需包括：申请团队名称、申请团队邮箱、申请团队介绍、现有github地址、所要开发的 dApp 功能点。（说明和详细计划、预计开发所需天数以及预计借款周期与额度）",
      txt3: "https://goo.gl/forms/Jk8NQp0CD0ijuiLV2",
      txt4: "标准借款流程：",
      txt5:
        "第一阶段：开发者提交 dApp 的相关计划和功能介绍，经由本体技术委员会审核，确定借款额度，并设置内部项目负责人全程跟踪项目进展； ",
      txt6:
        "第二阶段：dApp 开发完成70%时，本体技术委员会组织第一次评审并发放第一期借款，发放额为总额度的50%； ",
      txt7: "第三阶段：dApp 上线运行后，发放剩余50%借款额度； ",
      txt8: "第四阶段：运营期满，回收借款，开发者可自主选择还款方式。",
      txt9: "选择性还款方案：",
      txt10:
        "借款以 ONT 形式发放，并记录借款当时的等值 USDT 数量（如10,000 ONT = 7,000 USDT）。还款时根据当时 ONT 价格，开发者可以选择对自主选择还款方式： ",
      txt11: "1) 选择归还借款当时的等值 USDT 量； ",
      txt12: "2) 选择归还借款当时的 ONT 数量。 ",
      txt13:
        "* 博彩类应用暂不纳入本激励细则的适用范围。所有 dApp 版权、运营都属于开发者。"
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
  .spt-detail-txt-tips {
    color: #d0021b;
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
