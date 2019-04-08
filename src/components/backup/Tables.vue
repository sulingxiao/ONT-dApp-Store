<template>
  <div class="row tables-container">
    <div class="col-xl-6 col-lg-6 col-12">
      <div class="tables-top tables-top-1">
        <span class="tables-top-tit">当日激励榜单</span>
        <router-link class="tables-top-link pull-right" to=""
          >查看更多 ></router-link
        >
      </div>
      <el-table :data="rankList1">
        <el-table-column label="Rank" prop="rank" align="center" />
        <el-table-column label="Name" prop="name" />
        <el-table-column label="Score" prop="score" />
        <el-table-column label="Reward" prop="reward" />
      </el-table>
    </div>

    <div class="col-xl-6 col-lg-6 col-12">
      <div class="tables-top tables-top-2">
        <span class="tables-top-tit">本周激励榜单</span>
        <router-link class="tables-top-link pull-right" to=""
          >查看更多 ></router-link
        >
      </div>
      <el-table :data="rankList2">
        <el-table-column label="Rank" prop="rank" align="center" />
        <el-table-column label="Name" prop="name" />
        <el-table-column label="Score" prop="score" />
        <el-table-column label="Reward" prop="reward" />
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rankList1: [
        { rank: "1", name: "test", score: "99", reward: "" },
        { rank: "2", name: "te123st", score: "999", reward: "" },
        { rank: "3", name: "te234st", score: "777", reward: "" },
        { rank: "4", name: "teasdst", score: "543", reward: "" }
      ],
      rankList2: [
        { rank: "11", name: "tedsfst", score: "234", reward: "" },
        { rank: "22", name: "tefsst", score: "567", reward: "" },
        { rank: "33", name: "teq3est", score: "8790", reward: "" },
        { rank: "44", name: "tecxvst", score: "423", reward: "" }
      ]
    };
  }
};
</script>

<style scoped>
.tables-top {
  margin-top: 40px;
  width: 100%;
  height: 60px;
  border-radius: 6px 6px 0 0;
}
.tables-top-1 {
  background: linear-gradient(
    270deg,
    rgba(124, 205, 239, 1) 0%,
    rgba(70, 159, 219, 1) 100%
  );
}
.tables-top-2 {
  background: linear-gradient(
    270deg,
    rgba(172, 188, 214, 1) 0%,
    rgba(98, 124, 170, 1) 100%
  );
}
.tables-top-tit,
.tables-top-link {
  padding-left: 24px;
  color: white;
  font-size: 16px;
  font-family: SourceSansPro-Regular;
  color: rgba(255, 255, 255, 1);
  line-height: 60px;
}
.tables-top-link {
  padding-right: 24px;
}
</style>
