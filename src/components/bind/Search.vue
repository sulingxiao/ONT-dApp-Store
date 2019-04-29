<template>
  <div class="container-fluid bind-search-container">
    <div class="row b-s-tit">
      <div class="col text-center">{{ $t("bind.search.tit") }}</div>
    </div>

    <div class="row b-s-form">
      <el-form
        label-position="top"
        :model="searchForm"
        :rules="searchRules"
        ref="searchForm"
      >
        <el-form-item prop="scHash" :label="$t('bind.search.scHash')">
          <el-input
            :placeholder="$t('bind.search.placeholder.scHash')"
            v-model="searchForm.scHash"
          ></el-input>
        </el-form-item>

        <el-form-item class="text-center">
          <el-button class="submit-btn" type="primary" @click="handleBinding">{{
            $t("bind.search.submit")
          }}</el-button>
        </el-form-item>
      </el-form>
    </div>

    <div>
      <div class="row-line"></div>
      <div class="search-result">{{ $t("bind.search.result.name") }}</div>
      <div class="">
        <div class="row s-r-tit">{{ $t("bind.search.result.ontId") }}</div>
        <div class="row s-r-txt">{{ bindSearchResult.ontId }}</div>
      </div>
      <div class="">
        <div class="row s-r-tit">{{ $t("bind.search.result.address") }}</div>
        <div class="row s-r-txt">{{ bindSearchResult.address }}</div>
      </div>
      <div class="">
        <div class="row s-r-tit">{{ $t("bind.search.result.nodeName") }}</div>
        <div class="row s-r-txt">{{ bindSearchResult.nodeName }}</div>
      </div>
      <div>
        <div class="row s-r-tit">
          {{ $t("bind.search.result.nodePublicKey") }}
        </div>
        <div class="row s-r-txt">{{ bindSearchResult.nodePublicKey }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { client } from "ontology-dapi";

export default {
  data() {
    return {
      searchForm: {
        scHash: "cae215265a5e348bfd603b8db22893aa74b42417"
      },
      users: {
        account: "",
        ontId: ""
      }
    };
  },
  computed: {
    searchRules() {
      return {
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
        ]
      };
    },
    bindSearchResult() {
      return {
        ontId: this.$store.getters.bindedDApp.ontId || "None",
        address: this.$store.getters.bindedDApp.address || "None",
        nodeName: this.$store.getters.bindedNode.nodeName || "None",
        nodePublicKey: this.$store.getters.bindedNode.nodePublicKey || "None"
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
        this.users.ontId = await client.api.identity.getIdentity();
        this.users.account = await client.api.asset.getAccount();
      } catch (e) {
        if (e === "NO_IDENTITY") {
          this.alert(this.$t("bind.noIdentity"));
        } else {
          this.$message.error(e.toString());
        }
      }
    },
    async handleBinding() {
      await this.$refs.searchForm.validate();

      try {
        await this.$store.dispatch("getBindedDApp", this.searchForm.scHash);
        await this.$store.dispatch("getBindedNode", this.searchForm.scHash);

        this.$message({ message: "Success", type: "success" });
      } catch (e) {
        let err = this.$HelperTools.strToJson(e);
        this.$message.error(err.Result || err.toString());
      }
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.bind-search-container {
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

  .b-s-tit {
    font-size: 20px;
    font-weight: 500;
    color: rgba(74, 74, 74, 1);
    line-height: 30px;
  }
  .b-s-txt {
    font-size: 14px;
    color: rgba(110, 111, 112, 1);
    line-height: 20px;
    margin-top: 30px !important;
  }
  .b-s-form {
    margin-top: 32px !important;
  }
  .b-s-note {
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

  .row-line {
    width: 100%;
    height: 1px;
    background-color: #e4e6e9;
    margin: 40px auto;
  }
  .search-result {
    font-size: 16px;
    font-weight: 400;
    color: rgba(74, 74, 74, 1);
    text-align: center;
    margin-bottom: 24px;
  }
  .s-r-tit {
    font-size: 14px;
    color: rgba(155, 155, 155, 1);
    margin-top: 20px !important;
  }
  .s-r-txt {
    font-size: 14px;
    color: rgba(74, 74, 74, 1);
    margin-top: 10px !important;
    word-break: break-all;
  }
}
</style>
