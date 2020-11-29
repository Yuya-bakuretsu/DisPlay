<template>
  <div>
    <div id="chart"></div>
    <transition>
      <ScheduleDetail
        v-if="scheduleDetailView"
        @childEvent="scheduleDetailViewEvent"
        :task="task"
      />
    </transition>
  </div>
</template>
<style src="../static/css/Chart.css"></style>
<script>
/* eslint-disable */
import * as d3 from "d3";
import depiction from "../static/js/depictionChart";
import { changeFavicon } from "../static/js/changeFavicon";
import gradients from "../assets/gradients";
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
      task: [],
      scheduleDetailView: false,
    };
  },
  //TODO 401errorが出るたびにtokenを取得し直す機能を追加
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
    depiction.createGradient("#fbfbff", "#ebebec", "lightGradient");
    depiction.createGrooveShadow();
    depiction.createDropShadow();
    depiction.createGroove();
    depiction.createClock();
  },
  watch: {
    customs: function () {
      let _this = this; //vueインスタンスのthisを変数として格納
      let date = new Date();
      let dayOfWeek = date.getDay();

      // create task and set gradient
      for (let i = 0; i < this.customs.length; ++i) {
        // カスタムの曜日を判断
        let repeatFlag = this.customs[i].repeat_flag.split("");
        if (repeatFlag[dayOfWeek]) {
          let number = this.customs[i].title.charCodeAt(0);
          let code = number.toString().split("").pop();

          //start_timeとend_timeの型整形
          let start = this.customs[i].start_time.split(":");

          let end = this.customs[i].end_time.split(":");

          let startTime = (start[0] + start[1] * 0.166) * 0.1;

          let endTime = (end[0] + end[1] * 0.166) * 0.1;

          let displayStart = Number(start[0]) + ":" + start[1];
          let displayEnd = Number(end[0]) + ":" + end[1];
          this.customs[i].start_time = displayStart;
          this.customs[i].end_time = displayEnd;

          if (startTime > endTime) {
            startTime = 0;
          }

          depiction.createGradient(
            gradients[code].color,
            gradients[code].color1,
            "taskGradient" + code
          );

          let id = this.customs[i].id;

          depiction.createTask(startTime, endTime, code, id);

          document.getElementById(id).onclick = function () {
            let clickedNumber = this.id - 1;
            // console.log("クリックしたタスクは" + clickedNumber + "番でよ");
            _this.scheduleDetailView = true;
            _this.task = _this.customs[clickedNumber];
          };
        }
      }
      changeFavicon();
    },
  },
  methods: {
    scheduleDetailViewEvent(value) {
      this.scheduleDetailView = value;
    },
  },
};
</script>
