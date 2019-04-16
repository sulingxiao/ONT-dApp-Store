import axios from "axios/index";

const expURL = process.env.VUE_APP_EXPLORER_API_URL;

export default {
  state: {
    totals: {},
    lists: {},
    listTotal: 0
  },
  getters: {
    dAppTotals: state => state.totals,
    dAppLists: state => state.lists,
    dAppListsTotal: state => state.listTotal
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
      let ret = await axios.get(url);

      commit("setDAppLists", ret.data.Result.ContractList);
      commit("setDAppListTotal", ret.data.Result.Total);
    }
  }
};
