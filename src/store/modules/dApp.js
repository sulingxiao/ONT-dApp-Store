import axios from "axios/index";

const baseURL = process.env.VUE_APP_API_URL;

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

      let lists = {
        dApps: [],
        officials: [],
        wallets: [],
        comingSoon: []
      };
      if (ret.data.data) {
        let list = ret.data.data;
        for (let i in list) {
          if (list[i].schedule === "online") {
            switch (list[i].type) {
              case "dapp":
                lists.dApps.push(list[i]);
                break;
              case "official":
                lists.officials.push(list[i]);
                break;
              case "wallet":
                lists.wallets.push(list[i]);
                break;
              default:
                break;
            }
          } else {
            lists.comingSoon.push(list[i]);
          }
        }
      }

      commit("setDAppLists", lists);
    },
    async getDAppDetail({ commit }, params) {
      let url = baseURL + "dapp-info/" + params.id;
      let ret = await axios.get(url);
      commit("setDAppDetail", ret.data.data);
      return ret.data.data;
    },

    uploadDappLogo({ commit }, $payload) {
      let url = process.env.VUE_APP_API_URL + "dapp-info/upload";
      var formData = new window.FormData();
      formData.append("logo", $payload[0]);
      debugger;
      return axios
        .post(url, formData)
        .then(function(response) {
          console.log(response);
          let data = response.data;
          return data;
        })
        .catch(err => {
          console.log(err);
        });
    },

    uploadDappshot({ dispatch, commit }, $payload) {
      let url = process.env.VUE_APP_API_URL + "dapp-info/upload";
      var formData = new window.FormData();
      formData.append("screen", $payload[0]);
      debugger;
      return axios
        .post(url, formData)
        .then(function(response) {
          console.log(response);
          let data = response.data;
          return data;
        })
        .catch(err => {
          console.log(err);
        });
    },

    submitDApp({ commit }, $payload) {
      let url = process.env.VUE_APP_API_URL + "dapp-info/new";
      var formData = new window.FormData();
      formData.append("screen", $payload[0]);
      debugger;
      return axios
        .post(url, formData)
        .then(function(response) {
          console.log(response);
          let data = response.data;
          return data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
