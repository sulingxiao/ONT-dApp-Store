<template>
  <nav
    class="navbar navbar-expand-lg navbar-expand-md navbar-light container-fluid"
  >
    <router-link class="navbar-brand" :to="{ path: '/' }">
      <img class="navbar-logo" :src="'/static/logo/blue.png'" />
      <span class="ont-navbar-txt">Ontology dApps</span>
    </router-link>

    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#ontDappsNavbar"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="ontDappsNavbar">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0"></ul>

      <div>
        <router-link
          class="btn mr-sm-2 ont-navbar-txt"
          :to="{ name: 'Support' }"
          >{{ $t("navbar.plan") }}</router-link
        >
      </div>
      <a
        class="btn my-2 my-sm-0 support-btn"
        href="https://ont.io/dapp"
        target="_blank"
      >
        {{ $t("navbar.submit") }}
      </a>
      <ul class="navbar-nav">
        <li class="nav-item dropdown change-lang-btn">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbardrop"
            data-toggle="dropdown"
          >
            {{ $i18n.locale.toLocaleUpperCase() }}
          </a>
          <div class="dropdown-menu">
            <a class="dropdown-item" @click="$i18n.locale = 'en'">EN</a>
            <a class="dropdown-item" @click="$i18n.locale = 'zh'">ZH</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  max-width: 1440px;
  padding-right: 15px;
  padding-left: 15px;
}
.navbar-toggler {
  border: 0;
}
.navbar-logo {
  height: 22px;
  margin-right: 11px;
}
.ont-navbar-txt {
  font-size: 14px;
  color: rgba(70, 159, 219, 1);
}
.ont-navbar-txt:hover {
  text-decoration: underline;
}
.support-btn {
  width: 80px;
  background: linear-gradient(
    270deg,
    rgba(124, 205, 239, 1) 0%,
    rgba(70, 159, 219, 1) 100%
  );
  border: 0;
  border-radius: 4px;
  font-size: 14px;
  color: rgba(255, 255, 255, 1);
}
.change-lang-btn {
  font-size: 14px;
  color: rgba(70, 159, 219, 1);
  margin-left: 15px;

  a,
  div {
    font-size: 14px;
    color: rgba(70, 159, 219, 1);
  }
  .nav-link {
    padding-right: 0 !important;
    font-size: 14px !important;
    color: rgba(70, 159, 219, 1) !important;
  }
}
</style>
