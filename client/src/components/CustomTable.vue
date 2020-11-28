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
          "jwt eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6IlJhaWthIiwiZXhwIjoxNjA2NjQ4MjM2LCJlbWFpbCI6InJhaWthNDc4OUBnbWFpbC5jb20iLCJvcmlnX2lhdCI6MTYwNjU2MTgzNn0.HVfje0Xj2XZ5KpGPxBhwC9gBMIM2ZKJP9zwXSmFMSnA",
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
    // data for test
    var custom = [
      {
        name: "sleep",
        start_time: "23:00:00",
        end_time: "05:00:00",
        repeat_flug: 1111111,
      },
    ];
    var number = custom[0].name.charCodeAt(0);
    var code = number.toString().split("").pop();
    depiction.createGradient(
      gradients[code].color,
      gradients[code].color1,
      "customGradient" + code
    );
    depiction.custom(code);
  },
};
</script>
