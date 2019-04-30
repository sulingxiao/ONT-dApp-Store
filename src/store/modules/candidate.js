import axios from "axios/index";

const expURL = process.env.VUE_APP_ONT_API_URL;

export default {
  state: {
    candidates: {}
  },
  getters: {
    candidateList: state => state.candidates
  },
  mutations: {
    setCandidateList(state, payload) {
      state.candidates = payload;
    }
  },
  actions: {
    async getCandidates({ commit }) {
      let url = expURL + "candidate/info/All";
      let ret = await axios.get(url);
      commit("setCandidateList", ret.data.Result);
    }
  }
};
