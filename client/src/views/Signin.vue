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
        id="name"
      />
      <label for="name">
        <div class="inputLine" />
      </label>
      <input
        class="passwordInputArea"
        type="password"
        v-model="Password"
        placeholder="Password"
        id="password"
      />
      <label for="password">
        <div class="inputLine" />
      </label>
      <button class="LandscapeButton Login" @click="sendSignIn">Login</button>
      <h4 class="signinCaption">Don't have account?<a> Sing up now</a></h4>
    </div>
  </div>
</template>
<style scoped src="../static/css/Signin.css"></style>
<script>
import { store,actions } from "../store/store";

export default {
  name: "Signin",
  data: function () {
    return {
      Username: "",
      Password: "",
    };
  },
  computed: {
    token(){
      return store.token
    }
  },
  created() {
    actions.updateToken();
    console.log(this.token);
  },
  methods: {
    sendSignIn() {
      console.log("test")
      actions.postAuth(this.Username,this.Password);
      actions.updateToken();
      console.log(this.token);
      this.$router.push('/')
    },
  },
};
</script>
