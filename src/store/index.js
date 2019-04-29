import Vue from "vue";
import Vuex from "vuex";
import dAPP from "./modules/dApp";
import dAppBind from "./modules/dAppBind";
import ontIdWalletBind from "./modules/ontIdWalletBind";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    dAPP,
    dAppBind,
    ontIdWalletBind
  }
});

export default store;
