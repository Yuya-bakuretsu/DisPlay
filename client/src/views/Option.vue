<template>
  <div class="optionWrapper">
    <header>
      <router-link to="/">
        <img src="../assets/img/arrow.svg" class="arrow" alt="arrow" />
      </router-link>
      <h1 class="headerTitle">Option</h1>
    </header>
    <div class="customOptionHeader">
      <h3 class="customOptionTitle">Custom</h3>
      <button class="LandscapeButton RessetingButton">Resseting</button>
    </div>
    <CustomTable />
    <div class="logoutSection">
      <h3 class="logoutTitle">Logout</h3>
      <button class="Logout LandscapeButton">Logout</button>
    </div>
  </div>
</template>
<style scoped src="../static/css/Option.css"></style>
<script>
import CustomTable from "../components/CustomTable";
export default {
  name: "Option",
  components: { CustomTable },
};
</script>
