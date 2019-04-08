<template>
  <div class="container-fluid">
    <banner></banner>
    <table-list></table-list>
  </div>
</template>

<script>
import Banner from "./Banner";
import TableList from "./Table";

export default {
  components: { Banner, TableList }
};
</script>
