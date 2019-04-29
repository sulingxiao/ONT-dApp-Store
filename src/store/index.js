import Vue from "vue";
import Vuex from "vuex";
import dAPP from "./modules/dApp";
import bindOntIdWallet from "./modules/bindOntIdWallet";
import bindDApp from "./modules/bindDApp";
import bindNode from "./modules/bindNode";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    dAPP,
    bindOntIdWallet,
    bindDApp,
    bindNode
  }
});

export default store;
