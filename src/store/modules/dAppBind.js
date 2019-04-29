import { CONTRACT_HASH } from "@/utils/const";
import { client } from "ontology-dapi";
import { Crypto, ScriptBuilder, utils } from "ontology-ts-sdk";
import Tools from "@/utils/tools";

export default {
  state: {
    bindedDAppInfo: {},
    bindedNodeInfo: {}
  },
  getters: {
    bindedDApp: state => state.bindedDAppInfo,
    bindedNode: state => state.bindedNodeInfo
  },
  mutations: {
    setBindedDApp(state, payload) {
      state.bindedDAppInfo = payload;
    },
    setBindedNode(state, payload) {
      state.bindedNodeInfo = payload;
    }
  },
  actions: {
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
    },
    /**
     * 查询该合约已经绑定的节点信息
     *
     * @param commit
     * @param scHash
     * @return {Promise<void>}
     */
    async getBindedNode({ commit }, scHash) {
      let data = {};
      let params = {
        contract: CONTRACT_HASH.bindDApp,
        method: "get_binded_node",
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
        ret = Tools.HelperTools.strMapToObj(ret);

        data.nodeName = utils.hexstr2str(ret.node_name);
        data.nodePublicKey = ret.node_pubkey;
      }

      commit("setBindedNode", data);
    }
  }
};
