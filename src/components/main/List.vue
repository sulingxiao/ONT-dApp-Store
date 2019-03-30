<template>
  <div class="list-container">
    <div class="dapp-category" v-for="(dApps, key) in lists" :key="key">
      <div class="d-list-title">
        <div class="d-list-title-name">{{ key.toLocaleUpperCase() }}</div>
        <div class="d-list-line"></div>
      </div>

      <div class="row">
        <div
          class="col-xl-6 col-lg-6 col-12 d-list-item"
          v-for="(dApp, index) in dApps"
          :key="index"
        >
          <div class="d-list-project-info" @click="toDAppDetails(dApp.id)">
            <div class="d-list-project-logo">
              <div class="dapp-new" v-show="key === 'dApps' && index < 2">
                New
              </div>
              <img
                class="d-list-project-logo-img"
                :src="imgBaseURL + dApp.img_url"
              />
            </div>
            <div class="d-list-project-title">
              <div class="d-list-project-name">{{ dApp.title }}</div>
              <div class="d-list-project-summary">{{ dApp.summary }}</div>
            </div>
          </div>
          <div
            v-if="key !== 'comingSoon' && dApp.content"
            class="d-list-project-content"
          >
            {{
              dApp.content.length > 150
                ? dApp.content.substring(0, 150) + "..."
                : dApp.content
            }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgBaseURL: "https://cms.ont.io/uploads/"
    };
  },
  async created() {
    await this.$store.dispatch("getDAppLists");
  },
  computed: {
    lists() {
      return this.$store.getters.dappLists || {};
    }
  },
  methods: {
    toDAppDetails($id) {
      this.$router.push({ name: "DAppDetails", params: { id: $id } });
    },
    toDAppApplicaiton() {
      this.$router.push({ name: "DAppApplication" });
    }
  }
};
</script>

<style scoped>
.list-container {
  padding-bottom: 72px;
}
.d-list-item {
  margin-top: 20px;
}
.dapp-category {
  padding-top: 48px;
}
.d-list-title-name {
  font-size: 16px;
  font-family: SourceHanSansCN-Bold, sans-serif;
  font-weight: bold;
  color: rgba(43, 64, 69, 1);
  line-height: 24px;
}
.d-list-line {
  margin-top: 12px;
  height: 1px;
  border-top: 1px solid rgba(170, 179, 180, 1);
}
.d-list-project-info {
  display: inline-block;
}
.d-list-project-logo {
  float: left;
}
.d-list-project-logo-img {
  width: 72px;
  height: 72px;
  border-radius: 3px;
  border: 1px solid rgba(170, 179, 180, 1);
  cursor: pointer;
}
.d-list-project-content {
  margin-top: 16px;
  height: 88px;
  font-size: 16px;
  font-family: SourceHanSansCN-Regular, sans-serif;
  font-weight: 400;
  color: rgba(106, 121, 124, 1);
  line-height: 21px;
}
.d-list-project-title {
  padding-left: 32px;
  cursor: pointer;
  display: table-cell;
}
.d-list-project-name {
  font-size: 24px;
  font-family: SourceHanSansCN-Medium, sans-serif;
  font-weight: 500;
  color: rgba(43, 64, 69, 1);
  line-height: 24px;
}
.d-list-project-summary {
  font-size: 16px;
  font-family: SourceHanSansCN-Regular, sans-serif;
  font-weight: 400;
  color: rgba(106, 121, 124, 1);
  line-height: 16px;
  margin-top: 16px;
  word-wrap: break-word;
}
.dapp-new {
  font-size: 18px;
  font-family: SourceSansPro-BlackIt, sans-serif;
  color: red;
  line-height: 18px;
  font-style: oblique;
  font-weight: 600;
  position: absolute;
  margin-left: 50px;
  margin-top: -8px;
}
</style>
