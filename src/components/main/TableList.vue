<template>
  <div class="row table-list-container">
    <div class="col">
      <div class="tables-top">
        <span class="tl-table-tit">{{ $t("main.tl.name") }}</span>
        <div class="tl-table-line"></div>
      </div>

      <div class="row tl-total-info">
        <div class="col">
          {{ $t("main.tl.total.name") + (totals.Total || 0) }}
        </div>
        <div class="col">
          {{ $t("main.tl.total.txn") + (totals.DayTxCount || 0) }}
        </div>
        <div class="col">
          {{
            $t("main.tl.total.activeU") + (totals.DayActiveAddressCount || 0)
          }}
        </div>
        <div class="col">
          {{
            $t("main.tl.total.volume") +
              (totals.DayOnt || 0) +
              " ONT, " +
              (totals.DayOnt || 0) +
              " ONG"
          }}
        </div>
      </div>

      <div class="tl-total-info-line"></div>

      <div class="row justify-content-center">
        <div class="table-responsive">
          <table class="table table-hover tl-table">
            <thead>
              <tr>
                <th scope="col">{{ $t("main.tl.th.dApp") }}</th>
                <th scope="col">{{ $t("main.tl.th.c") }}</th>
                <th scope="col">{{ $t("main.tl.th.activeU") }}</th>
                <th scope="col">{{ $t("main.tl.th.txn") }}</th>
                <th scope="col">{{ $t("main.tl.th.volume") }}</th>
                <th scope="col">{{ $t("main.tl.th.reward") }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in lists" :key="index">
                <td>
                  <div class="row">
                    <div class="col-xl-3 col-lg-3 col-12">
                      <img class="tl-logo" :src="item.Logo" alt="" />
                    </div>
                    <div class="col-xl-9 col-lg-9 col-12">
                      <div class="td-name">
                        <router-link :to="{ name: '' }">{{
                          item.Name
                        }}</router-link>
                      </div>
                      <div class="td-desc">{{ item.Description }}</div>
                    </div>
                  </div>
                </td>
                <td>{{ item.Category }}</td>
                <td>
                  <div>
                    {{ $t("main.tl.td.hour") + item.DayActiveAddressCount }}
                  </div>
                  <div>
                    {{ $t("main.tl.td.days") + item.WeekActiveAddressCount }}
                  </div>
                </td>
                <td>
                  <div>{{ $t("main.tl.td.hour") + item.DayTxCount }}</div>
                  <div>{{ $t("main.tl.td.days") + item.WeekTxCount }}</div>
                </td>
                <td>
                  <div>
                    {{
                      $t("main.tl.td.hour") +
                        item.DayOnt +
                        " ONT, " +
                        item.DayOng +
                        " ONG"
                    }}
                  </div>
                  <div>
                    {{
                      $t("main.tl.td.days") +
                        item.WeekOnt +
                        " ONT, " +
                        item.WeekOng +
                        " ONG"
                    }}
                  </div>
                </td>
                <td>
                  <div class="td-reward">
                    {{ $t("main.tl.td.hour") + item.DayRewardOng }}
                  </div>
                  <div class="td-reward">
                    {{ $t("main.tl.td.days") + item.WeekRewardOnt }}
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

  .col {
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
  .tl-logo {
    width: 60px;
  }
  .td-name {
    font-size: 14px;
    color: rgba(36, 114, 204, 1);

    a {
      color: rgba(70, 159, 219, 1);
    }
  }
  .td-desc {
    font-size: 14px;
    font-weight: 300;
    color: rgba(74, 74, 74, 1);
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
