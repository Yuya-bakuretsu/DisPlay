<template>
  <div>
    <div class="CustomTables">
      <div id="CustomTable" />
      <div id="CustomTable" />
      <div id="CustomTable" />
      <div id="CustomTable" />
      <div id="CustomTable" />
      <div id="CustomTable" />
      <div id="CustomTable" />
    </div>
  </div>
</template>
<style>
.CustomTables{
  display: flex;
  justify-content: center;
  margin: 35px 0 0 0;
}
#CustomTable{
  margin: 0 3px 0 3px;
}
</style>
<script>
import depiction from "../static/js/depictionCustomTable";

export default {
  name: "CustomTable",
  mounted() {
    depiction.svg();
    depiction.createGradient("#FFFFFF", "#F8F8F8","baseGradient" );
    depiction.base();
  },
};
</script>
