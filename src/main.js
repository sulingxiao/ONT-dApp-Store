import Vue from "vue";
import router from "./router";
import store from "./store/index";
import App from "./App.vue";
import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import elementEnLocale from "element-ui/lib/locale/lang/en"; // element-ui lang
import elementZhLocale from "element-ui/lib/locale/lang/zh-CN"; // element-ui lang
import $ from "jquery";
import "font-awesome/css/font-awesome.css";
import i18n from "./lang";
import VueCookies from "vue-cookies";
import VeeValidate from "vee-validate";
import Helper from "./helpers/tools";

// 解决【The computed property "fields" is already defined in data.】的冲突
const VVConfig = {
  errorBagName: "errorBags", // change if property conflicts.
  fieldsBagName: "fieldBags"
};

Vue.use(Helper);
Vue.use(VeeValidate, VVConfig);
Vue.use(VueCookies);
Vue.use(Element, {
  i18n: (key, value) => i18n.t(key, value)
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
