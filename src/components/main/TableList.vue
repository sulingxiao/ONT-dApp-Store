<template>
  <div class="row table-list-container">
    <div class="col">
      <div class="tables-top">
        <span class="tl-table-tit">{{ $t("main.tl.name") }}</span>
        <div class="tl-table-line"></div>
      </div>

      <div class="row tl-total-info">
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
          {{ $t("main.tl.total.name") + (totals.Total || 0) }}
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
          {{ $t("main.tl.total.txn") + (totals.DayTxCount || 0) }}
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
          {{
            $t("main.tl.total.activeU") + (totals.DayActiveAddressCount || 0)
          }}
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
          {{
            $t("main.tl.total.volume") +
              (totals.DayOng ? parseFloat(totals.DayOng).toFixed(2) : 0) +
              " ONG, " +
              (totals.DayOnt || 0) +
              " ONT"
          }}
        </div>
      </div>

      <div class="tl-total-info-line"></div>

      <div class="row justify-content-center">
        <div class="table-responsive">
          <table class="table table-hover tl-table">
            <thead>
              <tr>
                <th class="first-th-td" scope="col">
                  {{ $t("main.tl.th.dApp") }}
                </th>
                <th scope="col">{{ $t("main.tl.th.c") }}</th>
                <th scope="col">{{ $t("main.tl.th.activeU") }}</th>
                <th scope="col">{{ $t("main.tl.th.txn") }}</th>
                <th scope="col">{{ $t("main.tl.th.volume") }}</th>
                <th scope="col">{{ $t("main.tl.th.reward") }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in lists" :key="index">
                <td class="first-th-td">
                  <div class="flex-row">
                    <div class="flex-col">
                      <img
                        v-if="item.Logo"
                        class="tl-logo"
                        :src="item.Logo"
                        alt=""
                      />
                      <div v-else class="backup-logo">
                        {{ item.Name.substring(0, 1) }}
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
                          {{
                            item.Description.length > 50
                              ? item.Description.substring(0, 50) + "..."
                              : item.Description
                          }}</a
                        >
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {{
                    item.Category.substring(0, 1).toUpperCase() +
                      item.Category.substring(1)
                  }}
                </td>
                <td>
                  <div class="flex-row">
                    <div class="flex-td-tit">
                      <div>{{ $t("main.tl.td.hour") }}</div>
                      <div>{{ $t("main.tl.td.days") }}</div>
                    </div>
                    <div class="flex-td-txt">
                      <div>{{ item.DayActiveAddressCount }}</div>
                      <div>{{ item.WeekActiveAddressCount }}</div>
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
                      <div>{{ item.DayTxCount }}</div>
                      <div>{{ item.WeekTxCount }}</div>
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
                        {{ item.DayOng.toFixed(2) + " ONG, " }}
                      </div>
                      <div>
                        {{ item.WeekOng.toFixed(2) + " ONG, " }}
                      </div>
                    </div>
                    <div class="flex-td-txt">
                      <div>
                        {{ item.DayOnt + " ONT" }}
                      </div>
                      <div>
                        {{ item.WeekOnt + " ONT" }}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="flex-row td-reward">
                    <div class="flex-td-tit">
                      <div>{{ $t("main.tl.td.hour") }}</div>
                      <div>{{ $t("main.tl.td.days") }}</div>
                    </div>
                    <div class="flex-td-txt">
                      <div>{{ item.DayRewardOng.toFixed(2) + " ONG" }}</div>
                      <div>{{ item.WeekRewardOnt + " ONT" }}</div>
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
          :total="tlTotal"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageSize: 10
    };
  },
  created() {
    this.$store.dispatch("getDAppTotals").then();
    this.$store.dispatch("getDAppLists", { page: 1 }).then();
  },
  computed: {
    totals() {
      return this.$store.getters.dAppTotals || {};
    },
    lists() {
      return this.$store.getters.dAppLists || {};
    },
    tlTotal() {
      return this.$store.getters.dAppListsTotal || 0;
    }
  },
  methods: {
    async handleCurrentChange(val) {
      await this.$store.dispatch("getDAppLists", { page: val });
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.table-list-container {
  background-color: white;
  margin: 48px 0 32px;
}
.tables-top {
  margin-top: 14px;
}
.tl-table-tit {
  font-size: 16px;
  color: rgba(70, 159, 219, 1);
}
.tl-total-info {
  margin-top: 15px;
  margin-bottom: 15px;

  div {
    font-size: 14px;
    color: rgba(74, 74, 74, 1);
  }
}
.tl-total-info-line {
  background-color: #e0e0e0;
  height: 1px;
}
.tl-table {
  th {
    font-size: 14px;
    font-weight: 500;
    color: rgba(0, 0, 0, 1);
    margin-left: 0;
    border: 0;
  }
  td {
    font-size: 14px;
    color: rgba(74, 74, 74, 1);
    border-top: 0;
    border-bottom: 1px solid #dee2e6;
    min-width: 120px;

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
  .td-name-desc {
    margin-left: 12px;
    width: 200px;
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
  .td-desc,
  .td-desc > a {
    font-size: 14px;
    font-weight: 300;
    color: rgba(74, 74, 74, 1);
    line-height: 18px;
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
  margin: 24px 0;
}
/deep/ .el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #469fdb;
}
</style>
