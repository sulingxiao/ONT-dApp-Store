<template>
  <div class="row table-list-container">
    <div class="col">
      <div class="tables-top">
        <span class="tl-table-tit">DApp List</span>
        <div class="tl-table-line"></div>
      </div>

      <div class="row tl-total-info">
        <div class="col">Total:</div>
        <div class="col">24h Transaction:</div>
        <div class="col">24h Active Users:</div>
        <div class="col">24h Volume:</div>
      </div>

      <div class="tl-total-info-line"></div>

      <div class="row justify-content-center">
        <div class="table-responsive">
          <table class="table table-hover tl-table">
            <thead>
              <tr>
                <th scope="col">DApp</th>
                <th scope="col">Category</th>
                <th scope="col">Active user</th>
                <th scope="col">Transactions</th>
                <th scope="col">Volume</th>
                <th scope="col">Reward</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in lists" :key="index">
                <td>
                  <div class="row">
                    <div class="col-xl-3 col-lg-3 col-12">
                      <img class="tl-logo" :src="item.logo" alt="" />
                    </div>
                    <div class="col-xl-9 col-lg-9 col-12">
                      <div class="td-name">
                        <router-link :to="{ name: '' }">{{
                          item.name
                        }}</router-link>
                      </div>
                      <div class="td-desc">{{ item.desc }}</div>
                    </div>
                  </div>
                </td>
                <td>{{ item.category }}</td>
                <td>
                  <div>24h: {{ item.activeUser.day }}</div>
                  <div>7day: {{ item.activeUser.week }}</div>
                </td>
                <td>
                  <div>24h: {{ item.txn.day }}</div>
                  <div>7day: {{ item.txn.week }}</div>
                </td>
                <td>
                  <div>24h: {{ item.volume.day }}</div>
                  <div>7day: {{ item.volume.week }}</div>
                </td>
                <td>
                  <div class="td-reward">24h: {{ item.reward.day }}</div>
                  <div class="td-reward">7day: {{ item.reward.week }}</div>
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
          :current-page="currentPage"
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
      tlTotal: 50,
      currentPage: 3,
      pageSize: 5,
      lists: [
        {
          name: "1111111112",
          logo:
            "https://cms.ont.io/uploads/images/dapp/1ac27db1899bae0a037f7ce9aa8737f6.jpg",
          desc: "我是描述",
          category: "1",
          activeUser: {
            day: 123,
            week: 123
          },
          txn: {
            day: 123,
            week: 123
          },
          volume: {
            day: 123,
            week: 123
          },
          reward: {
            day: "123ONG",
            week: "123ONT"
          }
        },
        {
          name: "222222223",
          logo:
            "https://cms.ont.io/uploads/images/dapp/1ac27db1899bae0a037f7ce9aa8737f6.jpg",
          desc: "我是描述",
          category: "1",
          activeUser: {
            day: 123,
            week: 123
          },
          txn: {
            day: 123,
            week: 123
          },
          volume: {
            day: 123,
            week: 123
          },
          reward: {
            day: "123ONG",
            week: "123ONT"
          }
        },
        {
          name: "333333444444",
          logo:
            "https://cms.ont.io/uploads/images/dapp/1ac27db1899bae0a037f7ce9aa8737f6.jpg",
          desc: "我是描述",
          category: "1",
          activeUser: {
            day: 123,
            week: 123
          },
          txn: {
            day: 123,
            week: 123
          },
          volume: {
            day: 123,
            week: 123
          },
          reward: {
            day: "123ONG",
            week: "123ONT"
          }
        },
        {
          name: "4344444444",
          logo:
            "https://cms.ont.io/uploads/images/dapp/1ac27db1899bae0a037f7ce9aa8737f6.jpg",
          desc: "我是描述",
          category: "1",
          activeUser: {
            day: 123,
            week: 123
          },
          txn: {
            day: 123,
            week: 123
          },
          volume: {
            day: 123,
            week: 123
          },
          reward: {
            day: "123ONG",
            week: "123ONT"
          }
        },
        {
          name: "55555556",
          logo:
            "https://cms.ont.io/uploads/images/dapp/1ac27db1899bae0a037f7ce9aa8737f6.jpg",
          desc: "我是描述",
          category: "1",
          activeUser: {
            day: 123,
            week: 123
          },
          txn: {
            day: 123,
            week: 123
          },
          volume: {
            day: 123,
            week: 123
          },
          reward: {
            day: "123ONG",
            week: "123ONT"
          }
        }
      ]
    };
  },
  methods: {
    handleCurrentChange(val) {
      let params = { pageSize: this.$route.params.pageSize, pageNumber: val };
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
