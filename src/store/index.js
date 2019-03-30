import Vue from "vue";
import Vuex from "vuex";
import dAPP from "./modules/dApp";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    dAPP
  }
});

export default store;
