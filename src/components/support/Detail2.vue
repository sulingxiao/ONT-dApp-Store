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

      <div class="spt-detail-txt">
        {{ txt1 }}
        <span class="spt-detail-txt-focus">{{ txt2 }}</span>
        {{ txt3}}
      </div>

      <div class="spt-detail-example">
        <span><img class="spt-d-e-img" src="./../../assets/support/detail/Rectangle.png" alt=""></span>
        <span class="spt-d-e-tit">活动应用激励细则</span>
      </div>
      <div class="spt-detail-txt">
        {{ txt4 }}
        <div class="spt-detail-txt-focus">{{ txt5 }}</div>
        <div>{{ txt6 }}</div>
        <div class="spt-detail-txt-focus">{{ txt7 }}</div>
        <div>{{ txt8 }}</div>
        <div class="spt-detail-txt-focus">{{ txt9 }}</div>
        <div>{{ txt10 }}</div>
        <div class="spt-detail-txt-focus">{{ txt11 }}</div>
        <div>{{ txt12 }}</div>
        <div>{{ txt13 }}</div>
        <div>{{ txt14 }}</div>
        <div>{{ txt15 }}</div>
      </div>

      <div class="spt-detail-example">
        <span><img class="spt-d-e-img" src="./../../assets/support/detail/Rectangle.png" alt=""></span>
        <span class="spt-d-e-tit">举例</span>
      </div>
      <div class="spt-detail-txt">
        {{ txt16 }}
      </div>
      <div class="spt-detail-example-img">
        <img src="./../../assets/support/detail/detail2-1.png" alt="" />
      </div>

      <div class="spt-detail-example">
        <span><img class="spt-d-e-img" src="./../../assets/support/detail/Rectangle.png" alt=""></span>
        <span class="spt-d-e-tit">激励收益模拟曲线</span>
      </div>
      <div class="spt-detail-txt">
        {{ txt17 }}
      </div>
      <div class="spt-detail-example-img">
        <img src="./../../assets/support/detail/detail2-2.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tit: "活跃DApp额外激励",
      txt1:
        "针对活跃度名前列的去中心化应用，本体基金会创新提出活跃 dApp 激励模式。凡是周期活跃度排名前50位的 dApp，都有机会获得来自",
      txt2: "本体基金会",
      txt3: "的额外激励。",
      txt4:
        "本体基金会接受社区委托，启动文艺复兴计划并试运行一年，时间为2019年4月1日-2020年4月1日，在此期间规则不变。2019年1月至3月为生态应用开发与准备阶段。计划内容包括： ",
      txt5: "1. 激励规模为 ONT 和 ONG 各1亿 ",
      txt6:
        "本体基金会将拿出1亿个 ONT 和1亿个 ONG（各自总量的10%） 奖励给活跃 dApp 的开发者，以有利于开发者为原则的情况下定期定额发放。 ",
      txt7: "2. 激励排名由 dApp 活跃用户数和交易量决定",
      txt8:
        " 将根据 dApp 活跃度进行阶段性排名并公示排名前50名 dApp，后期将公示在官方浏览器上。 活跃度由 dApp 的活跃用户数和交易量两个因素决定。活跃度达到一定数值可进入排名区，若排名区 dApp 数量不足50，当期奖金总额按实际进入排名 dApp 数量按比例进行调整。 ",
      txt9: "3. dApp 活跃度排名越高，激励越大",
      txt10:
        " 激励分为每日激励排名和每周激励排名。日排行榜将用 ONG 作为奖励，初始每日激励总额为20,000 ONG，周排行榜将以 ONT 为奖励，初始每周激励总额为90,000 ONT，排名越高获得的激励越多。同一 dApp 若同时出现在日周排行榜，将同时获得日激励和周激励。 ",
      txt11: "4. 本体基金会关于此激励机制的声明",
      txt12:
        "1） 本计划试运行一年后，基金会将根据社区反馈确定是否调整激励方案；",
      txt13: "2） 如发现因人为因素导致的 dApp 活跃度异常，将进行除名； ",
      txt14: "3） 博彩类 dApp 暂不在此次激励范围内；",
      txt15:
        "4） 如对本激励方案存有疑问，可以轻扫文章下方二维码联系我们，本体基金会保留对此方案的最终解释权。",
      txt16:
        "假设某段时间内本体 dApp Store 共有4个 dApp，具有日或周排名资格的应用都只有两个，那么日和周激励总额将在20,000 ONG 和90,000 ONT 的基础上按2/50的比例进行调整。 如图所示 D 应用在日排名中第二，在日奖池缩减后将获得263 ONG；同时，D 应用在周排名中第一，则可再次分得周奖池中的2,770 ONT；D 应用当期总收入为263 ONG 和2,770 ONT。",
      txt17:
        "从单个应用的角度来看，我们为开发者模拟出了一个预期的收益曲线。总体来说，本体激励将帮助开发者度过早期的运维难关，在用户交易量还未达到能带来理想收益的时候为开发者提供足够的激励以保证长期运营。"
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
  .spt-detail-txt-focus {
    color: #2fa3f1;
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
