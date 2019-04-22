<template>
  <div class="container-fluid bind-verify-container">
    <div class="row b-v-tit">
      <div class="col text-center">{{ $t("bind.verify.tit") }}</div>
    </div>

    <div class="row b-v-txt">{{ $t("bind.verify.txt") }}</div>

    <div class="row b-v-form">
      <el-form
        label-position="left"
        label-width="150px"
        :model="bindVerifyForm"
      >
        <el-form-item :label="$t('bind.verify.ontId')">
          <el-input v-model="bindVerifyForm.ontId"></el-input>
        </el-form-item>
        <el-form-item :label="$t('bind.verify.scHash')">
          <el-input v-model="bindVerifyForm.scHash"></el-input>
        </el-form-item>
        <el-form-item :label="$t('bind.verify.scAddress')">
          <el-input v-model="bindVerifyForm.scAddress"></el-input>
          <div class="sub-title">{{ $t("bind.verify.scAddressDesc") }}</div>
        </el-form-item>
        <el-form-item :label="$t('bind.verify.address')">
          <el-input v-model="bindVerifyForm.address"></el-input>
        </el-form-item>

        <div class="b-v-note">{{ $t("bind.verify.note") }}</div>

        <verify-dialog :bindVerifyForm="bindVerifyForm"></verify-dialog>
      </el-form>
    </div>
  </div>
</template>

<script>
import VerifyDialog from "./VerifyDialog";

export default {
  components: { VerifyDialog },
  data() {
    return {
      bindVerifyForm: {
        ontId: "",
        scHash: "",
        scAddress: "",
        address: ""
      }
    };
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.bind-verify-container {
  width: 660px;
  margin: 64px auto;
  padding: 44px 100px;
  background-color: white;

  /deep/ .el-form-item {
    width: 100%;
    margin-bottom: 6px;
  }
  /deep/ .el-form-item__label {
    font-size: 14px;
    color: rgba(74, 74, 74, 1);
  }
  /deep/ .el-form-item__content {
    font-size: 12px;
    color: rgba(110, 111, 112, 1);
    line-height: 16px;
  }

  .b-v-tit {
    font-size: 20px;
    font-weight: 500;
    color: rgba(74, 74, 74, 1);
    line-height: 30px;
  }
  .b-v-txt {
    font-size: 14px;
    color: rgba(110, 111, 112, 1);
    line-height: 20px;
    margin-top: 44px !important;
  }
  .b-v-form {
    margin-top: 32px !important;
  }
  .b-v-note {
    font-size: 14px;
    color: rgba(110, 111, 112, 1);
    line-height: 21px;
    margin-top: 60px !important;
  }
}
</style>
