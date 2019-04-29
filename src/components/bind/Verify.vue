<template>
  <div class="container-fluid bind-verify-container">
    <div class="row b-v-tit">
      <div class="col text-center">{{ $t("bind.verify.tit") }}</div>
    </div>

    <div class="row b-v-txt">{{ $t("bind.verify.txt") }}</div>
    <div class="row b-v-txt2">
      {{ $t("bind.verify.txt2.1")
      }}<a
        href="https://chrome.google.com/webstore/detail/cyano-wallet/dkdedlpgdmmkkfjabffeganieamfklkm"
        target="_blank"
        >{{ $t("bind.verify.txt2.2") }}</a
      >
    </div>

    <div class="row b-v-form">
      <el-form
        label-position="top"
        :model="verifyForm"
        :rules="verifyRules"
        ref="verifyForm"
      >
        <el-form-item prop="ontId" :label="$t('bind.verify.ontId')">
          <el-input v-model="verifyForm.ontId"></el-input>
        </el-form-item>
        <el-form-item prop="scHash" :label="$t('bind.verify.scHash')">
          <el-input v-model="verifyForm.scHash"></el-input>
        </el-form-item>
        <el-form-item prop="scAddress" :label="$t('bind.verify.scAddress')">
          <el-input v-model="verifyForm.scAddress"></el-input>
          <div class="sub-title">{{ $t("bind.verify.scAddressDesc") }}</div>
        </el-form-item>
        <el-form-item prop="address" :label="$t('bind.verify.address')">
          <el-input v-model="verifyForm.address"></el-input>
        </el-form-item>

        <div class="b-v-note">{{ $t("bind.verify.note") }}</div>

        <!-- Dialog -->
        <div class="bind-verify-dialog">
          <el-form-item class="text-center">
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
            <div v-show="bindList.length > 0">
              <div>
                <b>{{ $t("bind.verify.bindList") }}</b>
              </div>
              <div v-for="(addr, index) in bindList" :key="index">
                {{ ++index + ": " + addr }}
              </div>
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

            <div
              v-if="this.bindId"
              style="margin-top: 80px;word-break: break-all;color: red;"
            >
              <p><b>Approve所需的dapp_bind_id（提供测试使用）：</b></p>
              <div>{{ this.bindId }}</div>
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
import { CONTRACT_HASH } from "@/utils/const";
import { client } from "ontology-dapi";
import { Crypto, ScriptBuilder, utils } from "ontology-ts-sdk";

export default {
  data() {
    return {
      verifyForm: {
        ontId: "",
        scHash: "",
        scAddress: "",
        address: ""
      },
      dialogVisible: false,
      bindActive: 0,
      cyanoReady: false,
      bindId: ""
    };
  },
  computed: {
    title() {
      return this.$t("bind.verify.tit");
    },
    verifyRules() {
      return {
        ontId: [
          {
            required: true,
            trigger: "blur",
            message: this.$t("bind.ruleMsg.required")
          },
          {
            min: 42,
            max: 42,
            trigger: "blur",
            message: this.$t("bind.ruleMsg.length") + "42"
          }
        ],
        scHash: [
          {
            required: true,
            trigger: "blur",
            message: this.$t("bind.ruleMsg.required")
          },
          {
            min: 40,
            max: 40,
            trigger: "blur",
            message: this.$t("bind.ruleMsg.length") + "40"
          }
        ],
        scAddress: [
          {
            required: true,
            trigger: "blur",
            message: this.$t("bind.ruleMsg.required")
          },
          {
            min: 34,
            max: 34,
            trigger: "blur",
            message: this.$t("bind.ruleMsg.length") + "34"
          }
        ],
        address: [
          {
            required: true,
            trigger: "blur",
            message: this.$t("bind.ruleMsg.required")
          },
          {
            min: 34,
            max: 34,
            trigger: "blur",
            message: this.$t("bind.ruleMsg.length") + "34"
          }
        ]
      };
    },
    bindList() {
      return this.$store.getters.bindedWallet || [];
    },
    bindSearchResult() {
      return this.$store.getters.bindedDApp || {};
    }
  },
  created() {
    this.initClient();
  },
  methods: {
    async initClient() {
      try {
        await client.registerClient({});
        this.verifyForm.ontId = await client.api.identity.getIdentity();
        this.verifyForm.scAddress = await client.api.asset.getAccount();
        this.cyanoReady = true; // Cyano已经登录好ont id和wallet了
        this.$message({
          message: this.$t("message.getCyanoInfoSuccess"),
          type: "success"
        });
        await this.$store.dispatch("getBindedWallet", this.verifyForm.ontId);
      } catch (e) {
        if (e === "NO_IDENTITY") {
          this.$alert(this.$t("bind.noIdentity"));
        } else {
          console.log(e);
        }
      }
    },
    async bindNext() {
      if (this.cyanoReady) {
        switch (this.bindActive) {
          case 0:
            if (
              this.bindList[this.bindList.length - 1] ===
                this.verifyForm.scAddress ||
              (await this.bindWallet())
            ) {
              this.bindActive = 1;
            }
            break;
          case 1:
            await this.$store.dispatch("getBindedDApp", this.verifyForm.scHash);
            if (await this.bindDApp()) {
              this.bindActive = 2;
            }
            break;
          default:
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
            break;
        }
      } else {
        await this.initClient();
      }
    },
    /**
     * 【ONT ID】绑定【发布合约的Address】
     *
     * @return {Promise<boolean>}
     */
    async bindWallet() {
      try {
        let params = {
          contract: CONTRACT_HASH.bindWallet,
          method: "bind",
          parameters: [
            // ontid、account
            {
              type: "String",
              value: this.verifyForm.ontId
            },
            {
              type: "ByteArray",
              value: new Crypto.Address(this.verifyForm.scAddress).serialize()
            }
          ],
          gasPrice: "500",
          gasLimit: "20000",
          requireIdentity: false
        };

        await client.api.smartContract.invoke(params);

        this.$message({ message: "Success", type: "success" });
        return true;
      } catch (e) {
        let err = this.$HelperTools.strToJson(e);
        if (err.Result.indexOf("vm execute state fault") !== -1) {
          this.$message.error(this.$t("message.bindWalletErr"));
          return true;
        } else {
          this.$message.error(err.Result);
        }
        return false;
      }
    },
    /**
     * 【ONT ID】（已绑【发布合约的Address】）、【奖励领取Address】、【合约】互相绑定
     *
     * @return {Promise<boolean>}
     */
    async bindDApp() {
      // 根据返回内容判断是否已经绑定和更新
      let method = "dapp_bind";
      if (this.bindSearchResult.ontId === this.verifyForm.ontId) {
        if (this.bindSearchResult.address === this.verifyForm.address) {
          return true;
        } else {
          method = "update_dapp_bind";
        }
      }

      try {
        let params = {
          contract: CONTRACT_HASH.bindDApp,
          method: method,
          parameters: [
            // contract_hash、ontid、receive_account(or new_receive_account)
            {
              type: "ByteArray",
              value: new Crypto.Address(this.verifyForm.scHash).serialize()
            },
            { type: "String", value: this.verifyForm.ontId },
            {
              type: "ByteArray",
              value: new Crypto.Address(this.verifyForm.address).serialize()
            }
          ],
          gasPrice: "500",
          gasLimit: "20000",
          requireIdentity: true
        };

        let ret = await client.api.smartContract.invoke(params);
        if (ret) {
          this.bindId = ret.result[0][2];
        }

        this.$message({ message: "Success", type: "success" });
        return true;
      } catch (e) {
        let err = this.$HelperTools.strToJson(e);
        console.log(err);
        this.$message.error(err.Result || err.toString());
        return false;
      }
    },
    async handleSubmit() {
      await this.$refs.verifyForm.validate();
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
  padding: 20px 90px;
  background-color: white;

  /deep/ .el-form {
    width: 100%;

    .el-form-item {
      width: 100%;
    }
    .el-form-item__label {
      font-size: 14px;
      color: rgba(74, 74, 74, 1);
      margin-bottom: 0 !important;
      padding-bottom: 0;
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
  .b-v-txt,
  .b-v-txt2 {
    font-size: 14px;
    color: rgba(110, 111, 112, 1);
    line-height: 20px;
    margin-top: 30px !important;
  }
  .b-v-txt2 {
    margin-top: 10px !important;
    display: -webkit-box;
  }
  .b-v-txt2 > a {
    font-size: 14px;
    color: rgba(70, 159, 219, 1);
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
      margin: 80px 0 0;
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
