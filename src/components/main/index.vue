<template>
  <div class="container">
    <banner></banner>
    <table-list></table-list>
<!--    <tables></tables>-->
<!--    <list></list>-->
  </div>
</template>

<script>
import Banner from "./Banner";
import TableList from "./TableList";
import Tables from "./Tables";
import List from "./List";

export default {
  components: { Tables, List, Banner, TableList }
};
</script>

<style scoped>
</style>
