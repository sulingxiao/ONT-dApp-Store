import { CONTRACT_HASH } from "@/utils/const";
import { client } from "ontology-dapi";
import { Crypto, ScriptBuilder, utils } from "ontology-ts-sdk";
import Tools from "@/utils/tools";

export default {
  state: {
    bindedDAppInfo: {}
  },
  getters: {
    bindedDApp: state => state.bindedDAppInfo
  },
  mutations: {
    setBindedDApp(state, payload) {
      state.bindedDAppInfo = payload;
    }
  },
  actions: {
    /**
     *【ONT ID】（已绑【发布合约的Address】）、【奖励领取Address】、【合约】互相绑定
     *
     * @param commit
     * @param data: contract_hash、ontid、receive_account(or new_receive_account)
     * @return {Promise<*|string>}
     */
    async setBindDApp({ commit }, data) {
      let params = {
        contract: CONTRACT_HASH.bindDApp,
        method: "dapp_bind",
        parameters: [
          {
            type: "ByteArray",
            value: new Crypto.Address(data.scHash).serialize()
          },
          { type: "String", value: data.ontId },
          {
            type: "ByteArray",
            value: new Crypto.Address(data.address).serialize()
          }
        ],
        gasPrice: "500",
        gasLimit: "20000",
        requireIdentity: true
      };

      let ret = await client.api.smartContract.invoke(params);

      return ret.result[0][2] || "";
    },
    /**
     * 更新【ONT ID】（已绑【发布合约的Address】）、【奖励领取Address】、【合约】互相绑定
     *
     * @param commit
     * @param data: contract_hash、ontid、receive_account(or new_receive_account)
     * @return {Promise<*|string>}
     */
    async putBindDApp({ commit }, data) {
      let params = {
        contract: CONTRACT_HASH.bindDApp,
        method: "update_dapp_bind",
        parameters: [
          {
            type: "ByteArray",
            value: new Crypto.Address(data.scHash).serialize()
          },
          { type: "String", value: data.ontId },
          {
            type: "ByteArray",
            value: new Crypto.Address(data.address).serialize()
          }
        ],
        gasPrice: "500",
        gasLimit: "20000",
        requireIdentity: true
      };

      let ret = await client.api.smartContract.invoke(params);

      return ret.result[0][2] || "";
    },
    /**
     * 查询该合约已经绑定的dApp信息
     *
     * @param commit
     * @param scHash
     * @return {Promise<void>}
     */
    async getBindedDApp({ commit }, scHash) {
      let data = {};
      let params = {
        contract: CONTRACT_HASH.bindDApp,
        method: "get_binded_dapp",
        parameters: [
          {
            type: "ByteArray",
            value: new Crypto.Address(scHash).serialize()
          }
        ]
      };

      let ret = await client.api.smartContract.invokeRead(params);
      if (ret) {
        ret = ScriptBuilder.deserializeItem(new utils.StringReader(ret));
        ret = Tools.$HelperTools.strMapToObj(ret);

        data.ontId = utils.hexstr2str(ret.ontid);
        data.address = new Crypto.Address(ret.receive_account).toBase58();
      }

      commit("setBindedDApp", data);
    }
  }
};
