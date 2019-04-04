import axios from "axios/index";

const cmsURL = process.env.VUE_APP_CMS_API_URL;
const expURL = process.env.VUE_APP_EXPLORER_API_URL;

/**
 * 分组dApp数据
 *
 * @param $list
 * @return {{comingSoon: Array, dApps: Array, officials: Array, wallets: Array}}
 */
function dAppGroupBy($list) {
  let lists = {
    dApps: [],
    officials: [],
    wallets: [],
    comingSoon: []
  };
  if ($list) {
    for (let i in $list) {
      if ($list[i].schedule === "online") {
        switch ($list[i].type) {
          case "dapp":
            lists.dApps.push($list[i]);
            break;
          case "official":
            lists.officials.push($list[i]);
            break;
          case "wallet":
            lists.wallets.push($list[i]);
            break;
          default:
            break;
        }
      } else {
        lists.comingSoon.push($list[i]);
      }
    }
  }

  return lists;
}

export default {
  state: {
    totals: {},
    lists: {},
    listTotal: 0,
    detail: {}
  },
  getters: {
    dAppTotals: state => state.totals,
    dAppLists: state => state.lists,
    dAppListsTotal: state => state.listTotal,
    dAppDetail: state => state.detail
  },
  mutations: {
    setDAppTotals(state, payload) {
      state.totals = payload;
    },
    setDAppLists(state, payload) {
      state.lists = payload;
    },
    setDAppListTotal(state, payload) {
      state.listTotal = payload;
    },
    setDAppDetail(state, payload) {
      state.detail = payload.info;
    }
  },
  actions: {
    async getDAppTotals({ commit }) {
      let url = expURL + "explorer/contract/dappstore/24h/summary";
      let ret = await axios.get(url);
      commit("setDAppTotals", ret.data.Result);
    },
    async getDAppLists({ commit }, params) {
      let url =
        expURL +
        "explorer/contract/dappstore/" +
        params.size +
        "/" +
        params.page;
      // let url = cmsURL + "dapp-info/list";
      let ret = await axios.get(url);
      // let lists = dAppGroupBy(ret.data.data);
      // commit("setDAppLists", lists);
      commit("setDAppLists", ret.data.Result.ContractList);
      commit("setDAppListTotal", ret.data.Result.Total);
    },
    async getDAppDetail({ commit }, params) {
      let url = cmsURL + "dapp-info/" + params.id;
      let ret = await axios.get(url);
      commit("setDAppDetail", ret.data.data);
      return ret.data.data;
    }
  }
};
