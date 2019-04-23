<template>
  <div class="container-fluid bind-node-container">
    <div class="row b-n-tit">
      <div class="col text-center">{{ $t("bind.node.tit") }}</div>
    </div>

    <div class="row b-n-txt">{{ $t("bind.node.txt") }}</div>

    <div class="row b-n-form">
      <el-form
        label-position="top"
        :model="bindNodeForm"
        :rules="bindNodeRules"
        ref="bindNodeForm"
      >
        <el-form-item prop="scHash" :label="$t('bind.node.scHash')">
          <el-input v-model="bindNodeForm.scHash"></el-input>
        </el-form-item>
        <el-form-item prop="optionIndex" :label="$t('bind.node.nodeName')">
          <el-select
            v-model="bindNodeForm.optionIndex"
            :placeholder="$t('bind.node.placeholder.nodeName')"
          >
            <el-option
              v-for="(item, index) in nodeOption"
              :key="index"
              :label="item.nodename.substring(0, 48)"
              :value="index"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('bind.node.nodePublicKey')">
          <el-input
            v-model="bindNodeForm.nodePublicKey"
            type="textarea"
            autosize
            resize="none"
            :disabled="true"
          ></el-input>
        </el-form-item>

        <div class="b-n-note">{{ $t("bind.node.note") }}</div>

        <el-form-item class="text-center">
          <el-button class="submit-btn" type="primary" @click="handleBinding">{{
            $t("bind.node.submit")
          }}</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { client } from "ontology-dapi";
import { NODE_LIST } from "@/utils/const";

export default {
  data() {
    return {
      nodeOption: NODE_LIST,
      bindNodeForm: {
        scHash: "",
        optionIndex: "",
        nodeName: "",
        nodePublicKey: ""
      },
      users: {
        account: "",
        ontId: ""
      },
      contract: {
        nodeBind: "skdfjka"
      }
    };
  },
  computed: {
    bindNodeRules() {
      return {
        scHash: [
          {
            required: true,
            trigger: "blur",
            message: this.$t("bind.ruleMsg.required")
          }
        ],
        optionIndex: [
          {
            required: true,
            trigger: "change",
            message: this.$t("bind.ruleMsg.required")
          }
        ]
      };
    }
  },
  created() {
    this.initClient();
    this.nodeOption = this.$HelperTools.sortArrList(
      this.nodeOption,
      "nodename"
    );
  },
  watch: {
    "bindNodeForm.optionIndex": function(newV, oldV) {
      this.bindNodeForm.nodeName = this.nodeOption[newV].nodename;
      this.bindNodeForm.nodePublicKey = this.nodeOption[newV].publickey;
    }
  },
  methods: {
    async initClient() {
      try {
        await client.registerClient({});
        this.users.ontId = await client.api.identity.getIdentity();
        this.users.account = await client.api.asset.getAccount();
      } catch (e) {
        if (e === "NO_IDENTITY") {
          this.alert(this.$t("bind.noIdentity"));
        } else {
          console.log(e);
        }
      }
    },
    async handleBinding() {
      await this.$refs.bindNodeForm.validate();
      let params = {
        contract: this.contract.nodeBind,
        method: "node_bind",
        parameters: [
          // contract_hash、node_name、node_pubkey
          {
            type: "String",
            value: this.bindNodeForm.scHash
          },
          { type: "String", value: this.bindNodeForm.nodeName },
          {
            type: "String",
            value: this.bindNodeForm.nodePublicKey
          }
        ],
        gasPrice: "500",
        gasLimit: "20000",
        requireIdentity: false
      };
      console.log(params);

      try {
        // let result = await client.api.smartContract.invokeRead(params);
        // console.log(result);
        this.$message({ message: "Success", type: "success" });

        this.$alert(
          this.$t("bind.node.confirmAlert.txt"),
          this.$t("bind.node.confirmAlert.tit"),
          {
            confirmButtonText: this.$t("bind.node.confirmAlert.btn"),
            callback: () => {
              this.$router.push({ name: "Support" });
            }
          }
        );
      } catch (e) {
        let err = this.$HelperTools.strToJson(e);
        this.$message.error(err.Result);
      }
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.bind-node-container {
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
    .el-select {
      width: 100%;
    }
  }

  .b-n-tit {
    font-size: 20px;
    font-weight: 500;
    color: rgba(74, 74, 74, 1);
    line-height: 30px;
  }
  .b-n-txt {
    font-size: 14px;
    color: rgba(110, 111, 112, 1);
    line-height: 20px;
    margin-top: 30px !important;
  }
  .b-n-form {
    margin-top: 32px !important;
  }
  .b-n-note {
    font-size: 14px;
    color: rgba(110, 111, 112, 1);
    line-height: 21px;
    margin-top: 60px !important;
  }
  .submit-btn {
    width: 220px;
    background: rgba(70, 159, 219, 1);
    border-radius: 3px;
    margin-top: 40px;
  }
}
</style>
