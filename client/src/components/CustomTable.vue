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
<style scoped>
.CustomTables {
  display: flex;
  justify-content: center;
  margin: 35px 0 0 0;
}
#CustomTable {
  margin: 0 3px 0 3px;
}
</style>
<script>
/* eslint-disable */
import depiction from "../static/js/depictionCustomTable";
import gradients from "../assets/gradients";
import { store, actions } from "../store/store";

export default {
  name: "CustomTable",
  computed: {
    customs() {
      return store.customs;
    },
    token() {
      return store.token;
    },
  },
  mounted() {
    actions.getCustoms(this.token);
    depiction.svg();
    depiction.createGradient("#FFFFFF", "#F8F8F8", "baseGradient");
    depiction.base();
  },
  watch: {
    customs() {
      let i;
      for (i = 0; i < this.customs.length; i++) {
        for (let j = 0; j < this.customs[i].repeat_flag.length; j++) {
          if (this.customs[i].repeat_flag[j]) {
            let number = this.customs[i].title.charCodeAt(0);
            let code = number.toString().split("").pop();
            let startTime = this.customs[i].start_time.split(":");
            startTime.pop();
            let endTime = this.customs[i].end_time.split(":");
            endTime.pop();
            // console.log("Starttime is " + startTime);
            // console.log("End time is " + endTime);
            depiction.createGradient(
              gradients[code].color,
              gradients[code].color1,
              "customGradient" + code
            );
            depiction.custom(
              j + 1,
              startTime,
              endTime,
              this.customs[i].title,
              code
            );
          }
        }
      }
    },
  },
};
</script>
