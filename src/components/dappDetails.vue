<template>
  <div class="dapp-detail-background">
    <div class="dapp-detail-container">
      <div class="dapp-detail-back" @click="toBack">{{ backBtnName }}</div>

      <div class="dapp-detail-content">
        <div class="dapp-detail-content-info">
          <img
            class="dapp-detail-project-logo-img"
            :src="'https://cms.ont.io/uploads/' + detail.img_url"
          />
          <div>
            <button
              class="dapp-detail-project-logo-link"
              @click="toUrl(detail.url)"
            >
              link
              <img class="dapp-detail-project-logo-link-img" src="" />
            </button>
          </div>
        </div>

        <div
          class="dapp-detail-content-info dapp-detail-content-info-introduce"
        >
          <div class="dapp-detail-content-info-introduce-title">
            {{ detail.title }}
          </div>
          <div class="dapp-detail-content-info-introduce-summary">
            {{ detail.summary }}
          </div>
          <div class="dapp-detail-content-info-introduce-content">
            {{ detail.content }}
          </div>
        </div>

        <div class="dapp-detail-content-info dapp-detail-content-info-url">
          <div class="dapp-detail-content-url-line"></div>
          <div
            class="dapp-detail-content-url-text"
            style="cursor: pointer"
            @click="toUrl(detail.url)"
          >
            Developer Website
          </div>
          <div class="dapp-detail-content-url-line"></div>
          <div
            class="dapp-detail-content-url-text"
            style="cursor: pointer"
            @click="toUrl(detail.github_url)"
          >
            GitHub
          </div>
          <div class="dapp-detail-content-url-line"></div>
          <div class="dapp-detail-content-url-text">Contract:</div>
          <div
            class="dapp-detail-content-url-text-contract"
            @click="toContractHash(detail.contract_hash)"
          >
            {{ detail.contract_hash }}
          </div>
          <div class="dapp-detail-content-url-line"></div>
        </div>
      </div>

      <div
        class="dapp-detail-chart"
        id="transaction-chart"
        v-show="detail.ont_id"
      ></div>

      <div
        class="dapp-detail-chart dapp-detail-chart-right"
        id="address-chart"
        v-show="detail.ont_id"
      ></div>
    </div>
  </div>
</template>

<script>
import axios from "axios/index";

const echarts = require("echarts");

export default {
  data() {
    return {
      backBtnName: "< Back"
    };
  },
  computed: {
    detail() {
      return this.$store.getters.dappDetail || {};
    }
  },
  created() {
    this.$store
      .dispatch("getDAppDetail", { id: this.$route.params.id })
      .then(res => {
        this.getChartData(res.ont_id.substring(8));
      })
      .catch();
  },
  methods: {
    toUrl($url) {
      if ($url) {
        window.location.href = $url;
      }
    },
    toContractHash($contractHash) {
      window.location.href =
        "https://explorer.ont.io/contract/" + $contractHash + "/20/1";
    },
    toBack() {
      this.$router.go(-1);
    },
    getChartData($ontid) {
      let _self = this;

      let endTime = new Date(new Date().toLocaleDateString()).getTime() / 1000;
      let startTime = endTime - 60 * 60 * 24 * 14;

      let url =
        process.env.EXPLORER_API_URL +
        "explorer/summary/project/" +
        $ontid +
        "/daily/" +
        startTime +
        "/" +
        endTime;

      axios
        .get(url)
        .then(function(response) {
          let SummaryList = response.data.Result.SummaryList;
          let transactionData = [];
          let addressData = [];
          let data = [];

          for (let i = 0; i < SummaryList.length; i++) {
            transactionData[i] = SummaryList[i].TxnCount;
            addressData[i] = SummaryList[i].NewAddress;
            data[i] = SummaryList[i].Time;
          }

          _self.createChart(transactionData, data);
          _self.createChart2(addressData, data);
        })
        .catch();
    },
    getData() {
      var now = new Date();
      var year = now.getFullYear(); //得到年份
      var month = now.getMonth(); //得到月份
      var date = now.getDate(); //得到日期
      month = month + 1;
      if (month < 10) month = "0" + month;
      if (date < 10) date = "0" + date;

      var time = [];
      for (let i = 0; i < 14; i++) {
        time[i] = year + "-" + month + "-" + (date - (13 - i));
      }

      return time;
    },
    createChart($transactionData, $data) {
      let myChart = echarts.init(document.getElementById("transaction-chart"));

      myChart.setOption({
        title: {
          text: "Transaction history in 14 days",
          textStyle: {
            color: "rgba(89,87,87,1)",
            fontWeight: "600",
            fontFamily: "SourceSansPro-Regular,sans-serif",
            fontSize: "14"
          },
          x: "center"
        },
        tooltip: {
          trigger: "axis"
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: $data,
            axisLabel: {
              formatter: "{value}",
              color: "rgba(175,172,172,1)",
              fontWeight: "400",
              fontFamily: "SourceSansPro-Regular,sans-serif"
            },
            axisLine: {
              lineStyle: {
                color: "#D8D8D8"
              }
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            axisLabel: {
              formatter: "{value}",
              color: "rgba(175,172,172,1)",
              fontWeight: "400",
              fontFamily: "SourceSansPro-Regular,sans-serif"
            },
            axisLine: {
              lineStyle: {
                width: "0"
              }
            },
            axisTick: {
              show: false
            }
          }
        ],
        series: [
          {
            name: "",
            type: "line",
            data: $transactionData,

            itemStyle: {
              normal: {
                color: "#32A4BE",
                lineStyle: {
                  color: "#32A4BE"
                }
              }
            }
          }
        ]
      });
    },
    createChart2($addressData, $data) {
      let myChart = echarts.init(document.getElementById("address-chart"));

      myChart.setOption({
        title: {
          text: "14 Days New Address",
          textStyle: {
            color: "rgba(89,87,87,1)",
            fontWeight: "600",
            fontFamily: "SourceSansPro-Regular,sans-serif",
            fontSize: "14"
          },
          x: "center"
        },
        tooltip: {
          trigger: "axis"
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: $data,
            axisLabel: {
              formatter: "{value}",
              color: "rgba(175,172,172,1)",
              fontWeight: "400",
              fontFamily: "SourceSansPro-Regular,sans-serif"
            },
            axisLine: {
              lineStyle: {
                color: "#D8D8D8"
              }
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            axisLabel: {
              formatter: "{value}",
              color: "rgba(175,172,172,1)",
              fontWeight: "400",
              fontFamily: "SourceSansPro-Regular,sans-serif"
            },
            axisLine: {
              lineStyle: {
                width: "0"
              }
            },
            axisTick: {
              show: false
            }
          }
        ],
        series: [
          {
            name: "",
            type: "line",
            data: $addressData,

            itemStyle: {
              normal: {
                color: "#32A4BE",
                lineStyle: {
                  color: "#32A4BE"
                }
              }
            }
          }
        ]
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dapp-detail-background {
  padding-top: 80px;
  padding-bottom: 173px;
  background: #fafafa;
}
.dapp-detail-container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.dapp-detail-back {
  margin-bottom: 24px;
  font-size: 16px;
  font-family: SourceSansPro-Regular, sans-serif;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  line-height: 20px;
  cursor: pointer;
}
.dapp-detail-content {
  background: rgba(255, 255, 255, 1);
  padding: 25px;
}
.dapp-detail-content-info {
  display: inline-block;
  vertical-align: top;
}
.dapp-detail-project-logo-img {
  width: 118px;
  border: 1px solid rgba(170, 179, 180, 1);
}
.dapp-detail-project-logo-link {
  margin-top: 17px;
  width: 120px;
  height: 28px;
  background: rgba(106, 121, 124, 1);
  border-radius: 3px;
  font-size: 14px;
  font-family: SourceHanSansCN-Bold, sans-serif;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  line-height: 21px;
  cursor: pointer;
}
.dapp-detail-project-logo-link:hover {
  box-shadow: none !important;
  outline: none !important;
  background: rgba(106, 121, 124, 1);
  border-radius: 3px;
  opacity: 0.8;
}
.dapp-detail-project-logo-link:active {
  box-shadow: none !important;
  outline: none !important;
  background: rgba(43, 64, 69, 1);
  border-radius: 3px;
  opacity: 0.8;
}
.dapp-detail-project-logo-link:focus {
  box-shadow: none !important;
  outline: none !important;
}
.dapp-detail-project-logo-link-img {
  width: 7px;
  height: 10px;
}
.dapp-detail-content-info-introduce {
  margin-left: 32px;
}
.dapp-detail-content-info-introduce-title {
  font-size: 24px;
  font-family: SourceSansPro-Regular, sans-serif;
  font-weight: 400;
  color: rgba(43, 64, 69, 1);
  line-height: 24px;
  margin-bottom: 15px;
}
.dapp-detail-content-info-introduce-summary {
  font-size: 16px;
  font-family: SourceSansPro-Regular, sans-serif;
  font-weight: 400;
  color: rgba(106, 121, 124, 1);
  line-height: 16px;
  margin-bottom: 47px;
}
.dapp-detail-content-info-introduce-content {
  font-size: 16px;
  font-family: SourceSansPro-Regular, sans-serif;
  font-weight: 400;
  color: rgba(106, 121, 124, 1);
  line-height: 21px;
  width: 508px;
}
.dapp-detail-content-info-url {
  float: right;
}
.dapp-detail-content-url-line {
  width: 195px;
  height: 1px;
  border-top: 1px solid #aab3b4;
}
.dapp-detail-content-url-text {
  font-size: 14px;
  font-family: SourceSansPro-Semibold, sans-serif;
  font-weight: 600;
  color: rgba(0, 0, 0, 1);
  line-height: 18px;
  margin: 8px 6px;
}
.dapp-detail-content-url-text-contract {
  font-size: 14px;
  font-family: SourceSansPro-Regular, sans-serif;
  font-weight: 400;
  color: rgba(50, 164, 190, 1);
  line-height: 18px;
  margin-left: 31px;
  margin-bottom: 10px;
  word-wrap: break-word;
  width: 164px;
  cursor: pointer;
}
.dapp-detail-content-url-text-contract:hover,
.dapp-detail-content-url-text-contract:active,
.dapp-detail-content-url-text-contract:focus {
  text-decoration: underline;
}
.dapp-detail-chart {
  width: 509px;
  height: 268px;
  margin-top: 19px;
  background: rgba(255, 255, 255, 1);
  padding: 16px 0 0 16px;
  display: inline-block;
}
.dapp-detail-chart-right {
  margin-left: 20px;
}
@media screen and (max-width: 482px) {
  .dapp-detail-container {
    max-width: 100%;
  }
  .dapp-detail-content-info {
    display: inherit;
    vertical-align: unset;
  }
  .dapp-detail-content-info-introduce {
    margin-left: 0;
    margin-top: 32px;
  }
  .dapp-detail-content-info-introduce-content {
    width: 100%;
  }
  .dapp-detail-content-info-url {
    float: unset;
    margin-top: 32px;
  }
  .dapp-detail-content-info-introduce-summary {
    margin-bottom: 28px;
  }
  .dapp-detail-chart {
    width: 100%;
  }
  .dapp-detail-chart-right {
    margin-left: 0;
  }
}
@media screen and (min-width: 482px) and (max-width: 768px) {
  .dapp-detail-container {
    max-width: 450px;
  }
  .dapp-detail-content-info {
    display: inherit;
    vertical-align: unset;
  }
  .dapp-detail-content-info-introduce {
    margin-left: 0;
    margin-top: 32px;
  }
  .dapp-detail-content-info-introduce-content {
    width: 100%;
  }
  .dapp-detail-content-info-url {
    float: unset;
    margin-top: 32px;
  }
  .dapp-detail-content-info-introduce-summary {
    margin-bottom: 28px;
  }
  .dapp-detail-chart {
    width: 100%;
  }
  .dapp-detail-chart-right {
    margin-left: 0;
  }
}
@media screen and (min-width: 768px) and (max-width: 1100px) {
  .dapp-detail-container {
    max-width: 736px;
  }
  .dapp-detail-content-info-introduce-content {
    width: 280px;
  }
  .dapp-detail-content-info-introduce-summary {
    margin-bottom: 27px;
  }
  .dapp-detail-chart {
    width: 343px;
  }
}
@media screen and (min-width: 1100px) and (max-width: 1444px) {
  .dapp-detail-container {
    max-width: 1068px;
  }
}
@media screen and (min-width: 1444px) {
  .dapp-detail-container {
    max-width: 1068px;
  }
}
</style>
