import axios from "axios/index";

const baseURL = process.env.CMS_API_URL;

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
    lists: {},
    detail: {}
  },
  getters: {
    dappLists: state => state.lists,
    dappDetail: state => state.detail
  },
  mutations: {
    setDAppLists(state, payload) {
      state.lists = payload;
    },
    setDAppDetail(state, payload) {
      state.detail = payload.info;
    }
  },
  actions: {
    async getDAppLists({ commit }) {
      let url = baseURL + "dapp-info/list";
      let ret = await axios.get(url);
      let lists = dAppGroupBy(ret.data.data);
      commit("setDAppLists", lists);
    },
    async getDAppDetail({ commit }, params) {
      let url = baseURL + "dapp-info/" + params.id;
      let ret = await axios.get(url);
      commit("setDAppDetail", ret.data.data);
      return ret.data.data;
    }
  }
};
