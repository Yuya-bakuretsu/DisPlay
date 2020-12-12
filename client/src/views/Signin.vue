<template>
  <div>
    <h1 class="DisPlayTitle">DisPlay</h1>
    <div class="signinForm">
      <h1 class="signinTitle">Sign in</h1>
      <input
        class="usernameInputArea"
        type="text"
        v-model="Username"
        placeholder="Username"
      />
      <div class="inputLine"></div>
      <input
        class="passwordInputArea"
        type="password"
        v-model="Password"
        placeholder="Password"
      />
      <div class="inputLine"></div>
      <button class="LandscapeButton Login">Login</button>
      <h4 class="signinCaption">Don't have account? <a>Sing up now</a></h4>
    </div>
  </div>
</template>
<style scoped src="../static/css/Signin.css"></style>
<script>
export default {
  name: "Signin",
  data: function () {
    return {
      Username: "",
      Password: "",
    };
  },
};
</script>
