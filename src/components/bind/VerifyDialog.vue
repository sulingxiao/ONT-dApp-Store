<template>
  <div class="bind-verify-dialog">
    <el-form-item>
      <el-button
        class="submit-btn"
        type="primary"
        @click="dialogVisible = true"
        >{{ $t("bind.verify.submit") }}</el-button
      >
    </el-form-item>

    <el-dialog
      :title="title"
      :visible.sync="dialogVisible"
      width="60%"
      :center="true"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :before-close="handleClose"
    >
      <div>
        {{ bindVerifyForm }}
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Close</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { client } from "ontology-dapi";

export default {
  props: ["bindVerifyForm"],
  created() {
    this.initClient();
  },
  data() {
    return {
      title: "dApp 绑定验证",
      content: "d",
      dialogVisible: false
    };
  },
  methods: {
    async initClient() {
      console.log("Start");
      await client.registerClient({});

      let account = await client.api.asset.getAccount();
      let res = await client.api.identity.getIdentity();

      console.log(account);
      console.log(res);

      console.log("End");
    },
    handleClose(done) {
      this.$confirm(
        "您的验证信息尚未提交给管理员审核，退出验证流程后需重新进行DApp绑定验证。确认退出？"
      )
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.submit-btn {
  width: 220px;
  background: rgba(70, 159, 219, 1);
  border-radius: 3px;
  opacity: 0.39990000000000003;
  margin-top: 40px;
}
</style>
