<template>
  <div class="container-fluid">
    <banner></banner>
    <table-list></table-list>
    <third-party></third-party>
  </div>
</template>

<script>
import Banner from "./Banner";
import TableList from "./Table";
import ThirdParty from "./ThirdParty";

export default {
  components: { Banner, TableList, ThirdParty }
};
</script>
