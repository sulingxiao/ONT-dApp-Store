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
        :rules="bindVerifyRules"
        ref="bindVerifyForm"
      >
        <el-form-item prop="ontId" :label="$t('bind.verify.ontId')">
          <el-input v-model="bindVerifyForm.ontId"></el-input>
        </el-form-item>
        <el-form-item prop="scHash" :label="$t('bind.verify.scHash')">
          <el-input v-model="bindVerifyForm.scHash"></el-input>
        </el-form-item>
        <el-form-item prop="scAddress" :label="$t('bind.verify.scAddress')">
          <el-input v-model="bindVerifyForm.scAddress"></el-input>
          <div class="sub-title">{{ $t("bind.verify.scAddressDesc") }}</div>
        </el-form-item>
        <el-form-item prop="address" :label="$t('bind.verify.address')">
          <el-input v-model="bindVerifyForm.address"></el-input>
        </el-form-item>

        <div class="b-v-note">{{ $t("bind.verify.note") }}</div>

        <!-- Dialog -->
        <div class="bind-verify-dialog">
          <el-form-item>
            <el-button
              class="submit-btn"
              type="primary"
              @click="handleSubmit"
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
            <div class="bind-verify-steps">
              <el-steps
                :active="bindActive"
                finish-status="success"
                align-center
              >
                <el-step :title="$t('bind.verify.active.tit1')"></el-step>
                <el-step :title="$t('bind.verify.active.tit2')"></el-step>
                <el-step :title="$t('bind.verify.active.tit3')"></el-step>
              </el-steps>
            </div>
            <span slot="footer" class="dialog-footer">
              <el-button class="submit-btn" type="primary" @click="bindNext">{{
                $t("bind.verify.next")
              }}</el-button>
            </span>
          </el-dialog>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import { client } from "ontology-dapi";

export default {
  data() {
    return {
      bindVerifyForm: {
        ontId: "",
        scHash: "",
        scAddress: "",
        address: ""
      },
      dialogVisible: false,
      bindActive: 0,
      contract: {
        bind: "123123",
        dAppBind: "skdfjka"
      }
    };
  },
  computed: {
    title() {
      return this.$t("bind.verify.tit");
    },
    bindVerifyRules() {
      return {
        ontId: [
          {
            required: true,
            trigger: "blur",
            message: this.$t("bind.ruleMsg.required")
          }
        ],
        scHash: [
          {
            required: true,
            trigger: "blur",
            message: this.$t("bind.ruleMsg.required")
          }
        ],
        scAddress: [
          {
            required: true,
            trigger: "blur",
            message: this.$t("bind.ruleMsg.required")
          }
        ],
        address: [
          {
            required: true,
            trigger: "blur",
            message: this.$t("bind.ruleMsg.required")
          }
        ]
      };
    }
  },
  created() {
    this.initClient();
  },
  methods: {
    async initClient() {
      try {
        await client.registerClient({});
        this.bindVerifyForm.ontId = await client.api.identity.getIdentity();
        this.bindVerifyForm.scAddress = await client.api.asset.getAccount();
      } catch (e) {
        if (e === "NO_IDENTITY") {
          this.alert(this.$t("bind.noIdentity"));
        } else {
          console.log(e);
        }
      }
    },
    async bindNext() {
      if (this.bindActive === 0) {
        let params = {
          contract: this.contract.bind,
          method: "bind",
          parameters: {
            ontid: this.bindVerifyForm.ontId,
            account: this.bindVerifyForm.scAddress
          }
        };
        console.log(params);

        // let result = await client.api.smartContract.invokeRead(params);
        // console.log(result);
        this.bindActive = 1;
      } else if (this.bindActive === 1) {
        let params = {
          contract: this.contract.dAppBind,
          method: "dapp_bind",
          parameters: {
            contract_hash: this.bindVerifyForm.scHash,
            ontid: this.bindVerifyForm.ontId,
            receive_account: this.bindVerifyForm.address
          }
        };
        console.log(params);

        // let result = await client.api.smartContract.invokeRead(params);
        // console.log(result);
        this.bindActive = 2;
      } else {
        this.$alert(
          this.$t("bind.verify.confirmAlert.txt"),
          this.$t("bind.verify.confirmAlert.tit"),
          {
            confirmButtonText: this.$t("bind.verify.confirmAlert.btn"),
            callback: () => {
              this.dialogVisible = false;
              this.$router.push({ name: "Support" });
            }
          }
        );
      }
    },
    async handleSubmit() {
      await this.$refs.bindVerifyForm.validate();
      this.dialogVisible = true;
    },
    handleClose(done) {
      this.$confirm(this.$t("bind.verify.confirmQuit"))
        .then(() => {
          done();
        })
        .catch(() => {});
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.bind-verify-container {
  width: 720px;
  margin: 64px auto;
  padding: 90px;
  background-color: white;

  /deep/ .el-form {
    width: 100%;

    .el-form-item {
      width: 100%;
    }
    .el-form-item__label {
      font-size: 14px;
      color: rgba(74, 74, 74, 1);
      /*line-height: 14px;*/
    }
    .el-form-item__error {
      padding-top: 0;
    }
    .el-form-item__content {
      font-size: 12px;
      color: rgba(110, 111, 112, 1);
      line-height: 16px;
    }
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

    .sub-title {
      margin-top: 4px;
    }
  }
  .b-v-note {
    font-size: 14px;
    color: rgba(110, 111, 112, 1);
    line-height: 21px;
    margin-top: 60px !important;
  }

  .bind-verify-dialog {
    .bind-verify-steps {
      margin: 80px 0;
    }
    .submit-btn {
      width: 220px;
      background: rgba(70, 159, 219, 1);
      border-radius: 3px;
      margin-top: 40px;
    }
  }
}
</style>
