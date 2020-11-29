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
import axios from "axios";

export default {
  name: "CustomTable",
  data: function () {
    return {
      customs: [],
    };
  },
  created() {
    let url = "http://127.0.0.1:8000/api/customs";
    let config = {
      headers: {
        Authorization:
          "jwt eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6IlJhaWthIiwiZXhwIjoxNjA2NzM4NzMxLCJlbWFpbCI6InJhaWthNDc4OUBnbWFpbC5jb20iLCJvcmlnX2lhdCI6MTYwNjY1MjMzMX0.GD1J9XIXLJmfSir_UbXNu9Co4ZwDZjyFIFYr5g0sTE4",
      },
    };
    axios.get(url, config).then((response) => {
      this.customs = response.data;
    });
  },
  mounted() {
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
