import Vue from "vue";
import Vuex from "vuex";
import dAPP from "./modules/dApp";
import candidate from "./modules/candidate";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    dAPP,
    candidate
  }
});

export default store;
