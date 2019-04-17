<template>
  <div class="row table-list-container">
    <div class="col">
      <div class="table-area">
        <total-area></total-area>

        <div class="row justify-content-center">
          <div class="table-responsive">
            <table class="table table-hover tl-table" v-loading="loading">
              <thead>
                <tr>
                  <th class="first-th-td" scope="col">#</th>
                  <th scope="col">{{ $t("main.tl.th.dApp") }}</th>
                  <th scope="col">{{ $t("main.tl.th.activeU") }}</th>
                  <th scope="col">{{ $t("main.tl.th.txn") }}</th>
                  <th scope="col">{{ $t("main.tl.th.volume") }}</th>
                  <th scope="col">{{ $t("main.tl.th.reward") }}</th>
                  <th scope="col">{{ $t("main.tl.th.totalReward") }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in lists" :key="index">
                  <td class="first-th-td td-text-justify">
                    {{ rankIndex + index + 1 }}
                  </td>
                  <td>
                    <div class="flex-row">
                      <div class="flex-col">
                        <img
                          v-if="item.Logo"
                          class="tl-logo"
                          :src="item.Logo"
                          alt=""
                        />
                        <div v-else class="backup-logo">
                          {{
                            item.Name !== "" ? item.Name.substring(0, 1) : ""
                          }}
                        </div>
                      </div>
                      <div class="flex-col td-name-desc">
                        <div class="td-name">
                          <a
                            :href="
                              'https://explorer.ont.io/contract/' +
                                item.ContractHash +
                                '/10/1'
                            "
                            target="_blank"
                            >{{ item.Name }}</a
                          >
                          <span class="category-span pull-right">{{
                            item.Category
                          }}</span>
                        </div>
                        <div class="td-desc">
                          <a
                            :href="
                              'https://explorer.ont.io/contract/' +
                                item.ContractHash +
                                '/10/1'
                            "
                            target="_blank"
                          >
                            {{ item.Description }}</a
                          >
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="flex-row">
                      <div class="flex-td-tit">
                        <div>{{ $t("main.tl.td.hour") }}</div>
                        <div>{{ $t("main.tl.td.days") }}</div>
                      </div>
                      <div class="flex-td-txt">
                        <div>
                          {{
                            $HelperTools.toFinancialVal(
                              item.DayActiveAddressCount
                            )
                          }}
                        </div>
                        <div>
                          {{
                            $HelperTools.toFinancialVal(
                              item.WeekActiveAddressCount
                            )
                          }}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="flex-row">
                      <div class="flex-td-tit">
                        <div>{{ $t("main.tl.td.hour") }}</div>
                        <div>{{ $t("main.tl.td.days") }}</div>
                      </div>
                      <div class="flex-td-txt">
                        <div>
                          {{ $HelperTools.toFinancialVal(item.DayTxCount) }}
                        </div>
                        <div>
                          {{ $HelperTools.toFinancialVal(item.WeekTxCount) }}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="flex-row">
                      <div class="flex-td-tit">
                        <div>{{ $t("main.tl.td.hour") }}</div>
                        <div>{{ $t("main.tl.td.days") }}</div>
                      </div>
                      <div class="flex-td-txt">
                        <div>
                          {{
                            $HelperTools.toFinancialVal(
                              item.DayOng.toFixed(2)
                            ) + " ONG, "
                          }}
                        </div>
                        <div>
                          {{
                            $HelperTools.toFinancialVal(
                              item.WeekOng.toFixed(2)
                            ) + " ONG, "
                          }}
                        </div>
                      </div>
                      <div class="flex-td-txt">
                        <div>
                          {{
                            $HelperTools.toFinancialVal(item.DayOnt) + " ONT"
                          }}
                        </div>
                        <div>
                          {{
                            $HelperTools.toFinancialVal(item.WeekOnt) + " ONT"
                          }}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="flex-row td-reward">
                      <div class="flex-td-txt-center td-text-justify">
                        {{ $HelperTools.toFinancialVal(item.Reward) }}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="flex-row td-reward">
                      <div class="flex-td-txt-center td-text-justify">
                        {{ $HelperTools.toFinancialVal(item.TotalReward) }}
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="row justify-content-center tl-pagination">
          <el-pagination
            @current-change="handleCurrentChange"
            background
            layout="prev, pager, next"
            :page-size="pageSize"
            :current-page="currentPage"
            :total="tlTotal"
          >
          </el-pagination>
        </div>

        <div class="row note-txt">{{ $t("main.note") }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import TotalArea from "./Total";

export default {
  components: { TotalArea },
  data() {
    return {
      currentPage: 1,
      pageSize: 5,
      loading: true
    };
  },
  created() {
    this.$store
      .dispatch("getDAppLists", { size: this.pageSize, page: 1 })
      .then(() => {
        this.loading = false;
      });
  },
  computed: {
    lists() {
      if (this.$store.getters.dAppLists) {
        let tmpList = this.$store.getters.dAppLists;
        for (let i in tmpList) {
          switch (tmpList[i].ContractHash) {
            case "cae215265a5e348bfd603b8db22893aa74b42417":
              tmpList[i].Reward = 13454.4;
              tmpList[i].TotalReward = 33454.4;
              break;
            case "81e9ad4bdcc91e439ef167cacb6da919f73842f6":
              tmpList[i].Reward = 5306.06;
              tmpList[i].TotalReward = 5306.06;
              break;
            case "573dd44ca1c691e6d224119ebdd762960089d826":
              tmpList[i].Reward = 752.71;
              tmpList[i].TotalReward = 752.71;
              break;
            case "aa0547aac7b9822167e2576f5c921ea0eb5ada7f":
              tmpList[i].Reward = 486.83;
              tmpList[i].TotalReward = 486.83;
              break;
            default:
              tmpList[i].Reward = 0;
              tmpList[i].TotalReward = 0;
              break;
          }
        }
        return tmpList;
      } else {
        return {};
      }

      // return this.$store.getters.dAppLists || {};
    },
    tlTotal() {
      return this.$store.getters.dAppListsTotal || 0;
    },
    rankIndex() {
      return (this.currentPage - 1) * this.pageSize;
    }
  },
  methods: {
    async handleCurrentChange(val) {
      this.loading = true;
      this.currentPage = val;
      let params = { size: this.pageSize, page: val };
      await this.$store.dispatch("getDAppLists", params);
      this.loading = false;
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.table-list-container {
  margin: 48px auto 32px !important;

  .table-area {
    background-color: white;
    padding: 15px;
  }
}
.tl-table {
  th {
    font-size: 14px;
    font-weight: 500;
    color: rgba(0, 0, 0, 1);
    margin-left: 0;
    border: 0;
    white-space: nowrap; /* 强制不换行 */
    padding: 15px 30px 15px 15px;
  }
  td {
    font-size: 14px;
    color: rgba(74, 74, 74, 1);
    border-top: 0;
    border-bottom: 1px solid #dee2e6;
    padding: 15px 30px 15px 15px;

    div {
      line-height: 28px;
    }
  }
  .first-th-td {
    padding-left: 15px;
  }
  .flex-row {
    display: flex;
  }
  .flex-td-tit {
    text-align: right;
  }
  .flex-td-txt {
    text-align: right;
    margin-left: 3px;
    white-space: nowrap;
  }
  .flex-td-txt-center {
    width: 100%;
    text-align: center;
  }
  .td-name-desc {
    margin-left: 12px;
    width: 270px;
    word-wrap: break-word;
  }
  .tl-logo {
    width: 60px;
    height: 60px;
  }
  .backup-logo {
    width: 60px;
    height: 60px;
    background-color: rgba(70, 159, 219, 1);
    color: white;
    line-height: 60px;
    text-align: center;
    font-size: 24px;
  }
  .td-name {
    font-size: 14px;
    color: rgba(36, 114, 204, 1);

    a {
      color: rgba(70, 159, 219, 1);
    }
  }
  .category-span {
    background: rgba(70, 159, 219, 1);
    color: white;
    padding: 0 6px;
    border-radius: 8px;
    font-size: 14px;
  }
  .td-desc,
  .td-desc > a {
    margin-top: 8px;
    font-size: 14px;
    font-weight: 300;
    color: rgba(74, 74, 74, 1);
    line-height: 18px;
    white-space: nowrap; /* 强制不换行 */
    overflow: hidden;
    text-overflow: ellipsis; /* 超出末尾用...替代 */
  }
  .td-text-justify {
    line-height: 55px;
  }
  .td-reward {
    font-size: 14px;
    font-weight: 500;
    color: rgba(46, 130, 11, 1);
  }
}
.tl-table-line {
  margin: 8px 0;
  width: 40px;
  height: 4px;
  background: rgba(70, 159, 219, 1);
}
.tl-pagination {
  margin: 24px auto !important;
}
.note-txt {
  margin: 8px 0 17px !important;
  font-size: 14px;
  font-weight: 300;
  color: rgba(74, 74, 74, 1);
}
/deep/ .el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #469fdb;
}
</style>
