<template>
  <div>
    <div class="Header">
      <!-- TODO:Headertitleを今のページによって変える -->
      <h1 class="Headertitle">DisPlay</h1>
      <router-link to="/option">
      <img src="../assets/img/Gear.svg" alt="gear" class="Gear" />
      </router-link>
    </div>
  </div>
</template>
<style src="../static/css/Header.css"></style>
<script>
export default {
  name: "Header",
};
</script>

