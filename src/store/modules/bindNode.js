import { CONTRACT_HASH } from "@/utils/const";
import { client } from "ontology-dapi";
import { Crypto, ScriptBuilder, utils } from "ontology-ts-sdk";
import Tools from "@/utils/tools";

export default {
  state: {
    bindedNodeInfo: {}
  },
  getters: {
    bindedNode: state => state.bindedNodeInfo
  },
  mutations: {
    setBindedNode(state, payload) {
      state.bindedNodeInfo = payload;
    }
  },
  actions: {
    /**
     * 绑定节点信息：将合约hash、节点名称、节点公钥绑定
     *
     * @param commit
     * @param data: contract_hash、node_name、node_pubkey
     * @return {Promise<void>}
     */
    async setBindNode({ commit }, data) {
      let params = {
        contract: CONTRACT_HASH.bindDApp,
        method: "node_bind",
        parameters: [
          {
            type: "ByteArray",
            value: new Crypto.Address(data.scHash).serialize()
          },
          { type: "String", value: data.nodeName },
          {
            type: "ByteArray",
            value: new Crypto.PublicKey(data.nodePublicKey).serializeHex()
          }
        ],
        gasPrice: "500",
        gasLimit: "20000",
        requireIdentity: true
      };

      await client.api.smartContract.invoke(params);
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
