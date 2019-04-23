import Vue from "vue";
import Router from "vue-router";
import Helper from "./../helpers/tools";

const _import = file => () => import("@/components/" + file + ".vue");
Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "DApp",
    component: _import("main/index")
  },
  {
    path: "/support",
    name: "Support",
    component: _import("support/index")
  },
  {
    path: "/support/1",
    name: "SupportDetail1",
    component: _import("support/Detail1")
  },
  {
    path: "/support/2",
    name: "SupportDetail2",
    component: _import("support/Detail2")
  },
  {
    path: "/support/3",
    name: "SupportDetail3",
    component: _import("support/Detail3")
  },
  {
    path: "/support/4",
    name: "SupportDetail4",
    component: _import("support/Detail4")
  },
  {
    path: "/bind/verify",
    name: "BindVerify",
    component: _import("bind/Verify")
  },
  {
    path: "/bind/node",
    name: "BindNode",
    component: _import("bind/Node")
  },
  {
    path: "/bind/search",
    name: "BindSearch",
    component: _import("bind/Search")
  },
  {
    path: "/dapp-details/:id",
    name: "DAppDetails",
    component: _import("dappDetails")
  }
];

const router = new Router({
  mode: "history",
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

// 有3个页面需要dApi，只能使用Chrome浏览器
router.beforeEach((to, from, next) => {
  if (
    to.name === "BindVerify" ||
    to.name === "BindNode" ||
    to.name === "BindSearch"
  ) {
    let sys = Helper.HelperTools.getSystemInfo();
    if (sys.browser !== "chrome" || sys.isMobile) {
      alert("该页面仅支持在电脑端使用Chrome浏览器打开。");
      next(false);
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
