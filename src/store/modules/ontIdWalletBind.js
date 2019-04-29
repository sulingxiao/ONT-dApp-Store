import { CONTRACT_HASH } from "@/utils/const";
import { client } from "ontology-dapi";
import { Crypto, ScriptBuilder, utils } from "ontology-ts-sdk";
import Tools from "@/utils/tools";

export default {
  state: {
    bindedWalletInfo: {}
  },
  getters: {
    bindedWallet: state => state.bindedWalletInfo
  },
  mutations: {
    setBindedWallet(state, payload) {
      state.bindedWalletInfo = payload;
    }
  },
  actions: {
    /**
     * 查询该ONT ID已经绑定的Wallet列表
     *
     * @param commit
     * @param ontId
     * @return {Promise<void>}
     */
    async getBindedWallet({ commit }, ontId) {
      let retArr = [];
      let params = {
        contract: CONTRACT_HASH.bindWallet,
        method: "get_binded_wallet",
        parameters: [{ type: "String", value: ontId }]
      };

      let ret = await client.api.smartContract.invokeRead(params);
      if (ret) {
        ret = ScriptBuilder.deserializeItem(new utils.StringReader(ret));
        ret = Tools.HelperTools.strMapToObj(ret);
        for (let retKey in ret) {
          retArr.push(new Crypto.Address(utils.str2hexstr(retKey)).toBase58()); // 将KEY值转换成地址
        }
      }

      commit("setBindedWallet", retArr);
    }
  }
};
