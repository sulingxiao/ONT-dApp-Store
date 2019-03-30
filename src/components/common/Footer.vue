<template>
  <div class="footer-background">
    <div class="container footer-container mobile-container">
      <div class="footer-logo-title">
        <img
          class="footer-logo-img"
          src="../../assets/logo/logo-footer@2x.png"
        />
        <label class="footer-logo-label">></label>
        <label class="footer-logo-text">{{
          $t("footer.dApps")
        }}</label>
      </div>

      <div class="row">
        <div class="col" v-for="(fItem, index) in footerList" :key="index">
          <div class="footer-content-title">{{ fItem.name }}</div>
          <div
            class="footer-content-div"
            v-for="(item, indexI) in fItem.list"
            :key="indexI"
          >
            <a class="footer-content-text" :href="item.url">{{ item.name }}</a>
          </div>
        </div>
      </div>

      <div class="footer-line"></div>

      <div class="footer-copyright">
        <span class="copyright-txt">Copyright © 2019 The Ontology Team</span>
        <el-select class="pull-right" v-model="$i18n.locale" size="mini">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
    </div>
  </div>
</template>

<script>
import LangStorage from "./../../helpers/lang";

export default {
  data() {
    return {
      options: [
        {
          value: "en",
          label: "English"
        },
        {
          value: "zh",
          label: "中文（简体）"
        }
      ],
      footerList: [
        {
          name: "Developer",
          list: [
            {
              name: "Developer Center",
              url: ""
            },
            {
              name: "Bounty Program",
              url: ""
            },
            {
              name: "Documentation",
              url: ""
            },
            {
              name: "GitHub",
              url: ""
            }
          ]
        },
        {
          name: "dApps",
          list: [
            { name: "dApps List", url: "" },
            { name: "Submit a dApp", url: "" }
          ]
        },
        {
          name: "Business",
          list: [
            { name: "Gaming Industry", url: "" },
            { name: "Creative Industry", url: "" }
          ]
        },
        {
          name: "Trust Ecosystem",
          list: [{ name: "Trust Anchor", url: "" }, { name: "Node", url: "" }]
        },
        {
          name: "About",
          list: [
            { name: "About Us", url: "" },
            { name: "Resources", url: "" },
            { name: "Events", url: "" },
            { name: "FAQ", url: "" },
            { name: "White Paper", url: "" },
            { name: "Explorer", url: "" }
          ]
        }
      ]
    };
  },
  watch: {
    "$i18n.locale": function(newV, oldV) {
      LangStorage.setLang(newV);
    }
  },
  methods: {
    toTechNews() {
      let lang = LangStorage.getLang("en");
      let url;
      switch (lang) {
        case "en":
          url = "https://medium.com/ontologynetwork/tagged/tech";
          break;
        case "zh":
          url = "https://ontfans.io/?/";
          break;
        case "jp":
          url = "https://medium.com/ontologynetwork/tagged/tech";
          break;
        case "ko":
          url = "https://medium.com/ontologynetwork/tagged/tech";
          break;
        default:
          url = "https://medium.com/ontologynetwork/tagged/tech";
          break;
      }
      window.location.href = url;
    }
  }
};
</script>

<style scoped>
.footer-background {
  background: rgba(238, 244, 247, 1);
  padding-top: 40px;
}
.footer-logo-title {
  margin-bottom: 25px;
}
.footer-logo-img {
  height: 18px;
  margin-bottom: 0.4rem;
}
.footer-logo-text {
  font-size: 18px;
  font-family: SourceSansPro-Regular, sans-serif;
}
.footer-logo-label {
  opacity: 0.2;
  color: #aeaeae;
  margin-left: 16px;
  margin-right: 16px;
}
.footer-content-title {
  font-size: 16px;
  font-family: SourceSansPro-Semibold, sans-serif;
  font-weight: 600;
  line-height: 20px;
  color: #02101c;
}
.footer-content-div {
  margin-top: 14px;
}
.footer-content-text {
  font-size: 14px;
  font-family: SourceSansPro-Regular, sans-serif;
  font-weight: 400;
  line-height: 18px;
  cursor: pointer;
  color: #595959;
}
.footer-content-text:hover {
  text-decoration: underline !important;
}
.footer-content-text:active {
  color: rgba(50, 164, 190, 1) !important;
  text-decoration: underline !important;
}
.footer-line {
  height: 1px;
  margin: 25px 0;
  background-color: #d0dde5;
}
.footer-copyright {
  font-size: 14px;
  font-family: SourceSansPro-Regular, sans-serif;
  font-weight: 400;
  color: rgba(170, 179, 180, 1);
  line-height: 18px;
  text-align: center;
  padding-bottom: 40px;
}
.copyright-txt {
  line-height: 28px;
}
</style>
