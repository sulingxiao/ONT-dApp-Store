import Vue from "vue";
import router from "./router";
import store from "./store/index";
import App from "./App.vue";
import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import $ from "jquery";
import "font-awesome/css/font-awesome.css";
import VueI18n from "vue-i18n";
import LangStorage from "./helpers/lang";
import VueCookies from "vue-cookies";
import VeeValidate from "vee-validate";
import zh from "./common/lang/zh";
import en from "./common/lang/en";
import jp from "./common/lang/jp";
import ko from "./common/lang/ko";

Vue.use(Element);
Vue.use(VeeValidate);

Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: LangStorage.getLang("en"), // 语言标识
  messages: {
    zh: zh,
    en: en,
    jp: jp,
    ko: ko
  }
});

Vue.use(VueCookies);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
