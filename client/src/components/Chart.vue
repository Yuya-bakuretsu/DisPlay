<template>
  <div>
    <div id="chart"></div>

    <ScheduleDetail v-if="currentView"></ScheduleDetail>
  </div>
</template>
<style src="../static/css/Chart.css"></style>
<script>
/* eslint-disable */
import * as d3 from "d3";
import depiction from "../static/js/depiction";
import gradients from "../assets/gradients";
import customs from "../store/customs";
import axios from "axios";
import ScheduleDetail from "./SceduleDetail";

export default {
  name: "Chart",
  components: {
    ScheduleDetail,
  },
  data: function () {
    return {
      customs: [],
      currentView: 0,
    };
  },
  //TODO 401errorが出るたびにtokenを取得し直す機能を追加
  created() {
    let url = "http://127.0.0.1:8000/api/customs";
    let config = {
      headers: {
        Authorization:
          "jwt eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6IlJhaWthIiwiZXhwIjoxNjA0ODM5MDA0LCJlbWFpbCI6InJhaWthNDc4OUBnbWFpbC5jb20iLCJvcmlnX2lhdCI6MTYwNDc1MjYwNH0.NzWxvS5ZB2pXvLpEyPFFzlhqxgmk7he64hSVTwWxVm0",
      },
    };
    axios.get(url, config).then((response) => {
      this.customs = response.data;
    });
  },
  mounted() {
    depiction.svg();
    depiction.createGradient("#fbfbff", "#ebebec", "lightGradient");
    depiction.createGrooveShadow();
    depiction.createDropShadow();
    depiction.createGroove();
    depiction.createClock();
  },
  watch: {
    customs: function () {
      // data test
      // console.log(this.customs);
      // create task and set gradient
      for (var i = 0; i < this.customs.length; ++i) {
        // for test
        // console.log("for is ok");

        var number = this.customs[i].title.charCodeAt(0);
        var code = number.toString().split("").pop();

        var start = this.customs[i].start_time.split(":");

        var end = this.customs[i].end_time.split(":");

        var startTime = (start[0] + start[1] * 0.166) * 0.1;

        var endTime = (end[0] + end[1] * 0.166) * 0.1;

        if (startTime > endTime) {
          startTime = 0;
          //if test
          // console.log("if is ok");
        }

        depiction.createGradient(
          gradients[code].color,
          gradients[code].color1,
          "taskGradient" + code
        );
        var id = i;
        console.log(id);
        depiction.createTask(startTime, endTime, code, id);

        
      }
    },
  },
};
</script>
