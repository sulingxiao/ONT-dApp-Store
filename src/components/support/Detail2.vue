<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <div class="breadcrumb-area">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ name: 'DApp' }">{{
              $t("support.breadcrumb.home")
            }}</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ name: 'Support' }"
              >{{ $t("support.breadcrumb.plan") }}
            </el-breadcrumb-item>
            <el-breadcrumb-item>{{
              $t("support.breadcrumb.detail")
            }}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>

        <div class="detail-content-area">
          <div class="spt-detail-tit">{{ $t("support.detail2.tit") }}</div>

          <div class="spt-detail-txt">
            <a href="https://ont.io/#/dapp" target="_blank">{{
              $t("support.detail.submit")
            }}</a>
          </div>

          <div class="spt-detail-txt">
            {{ $t("support.detail2.txt1") }}
            <a :href="$t('support.detail2.txt2')" target="_blank">{{
              $t("support.detail2.txt2")
            }}</a>
          </div>

          <div class="spt-detail-example">
            <span
              ><img
                class="spt-d-e-img"
                src="../../../public/static/support/Rectangle.png"
                alt=""
            /></span>
            <span class="spt-d-e-tit">{{ $t("support.detail2.tit1") }}</span>
          </div>
          <div class="spt-detail-txt">
            <div>{{ $t("support.detail2.txt3") }}</div>
            <div>{{ $t("support.detail2.txt4") }}</div>
            <div>{{ $t("support.detail2.txt5") }}</div>
          </div>

          <div class="spt-detail-example">
            <span
              ><img
                class="spt-d-e-img"
                src="../../../public/static/support/Rectangle.png"
                alt=""
            /></span>
            <span class="spt-d-e-tit">{{ $t("support.detail2.tit2") }}</span>
          </div>
          <div class="spt-detail-txt">
            <div>{{ $t("support.detail2.txt6") }}</div>
            <div>{{ $t("support.detail2.txt7") }}</div>
          </div>
          <div class="spt-detail-txt">
            <div>{{ $t("support.detail2.txt8") }}</div>
            <div>{{ $t("support.detail2.txt9") }}</div>
            <div>{{ $t("support.detail2.txt10") }}</div>
            <div>{{ $t("support.detail2.txt11") }}</div>
            <div>{{ $t("support.detail2.txt12") }}</div>
          </div>
          <div class="spt-detail-txt">
            <div>{{ $t("support.detail2.txt13") }}</div>
          </div>

          <div class="spt-detail-example">
            <span
              ><img
                class="spt-d-e-img"
                src="../../../public/static/support/Rectangle.png"
                alt=""
            /></span>
            <span class="spt-d-e-tit">{{ $t("support.detail2.tit3") }}</span>
          </div>
          <div class="spt-detail-txt">
            {{ $t("support.detail2.txt14") }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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
      max-height: 100%;
      max-width: 100%;
    }
  }
}
</style>
