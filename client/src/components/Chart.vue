<template>
  <div>
    <div id="chart"></div>
    <transition>
      <ScheduleDetail
        v-if="currentView"
        @childEvent="currentViewEvent"
        :task="task"
      ></ScheduleDetail>
    </transition>
  </div>
</template>
<style src="../static/css/Chart.css"></style>
<script>
/* eslint-disable */
import * as d3 from "d3";
import depiction from "../static/js/depiction";
import changeFavicon from "../static/js/changeFavicon"
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
      currentView: false,
    };
  },
  //TODO 401errorが出るたびにtokenを取得し直す機能を追加
  created() {
    let url = "http://127.0.0.1:8000/api/customs";
    let config = {
      headers: {
        Authorization:
          "jwt eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6IlJhaWthIiwiZXhwIjoxNjA1MzE5NjMwLCJlbWFpbCI6InJhaWthNDc4OUBnbWFpbC5jb20iLCJvcmlnX2lhdCI6MTYwNTIzMzIzMH0.4oXyoyfkZ5kTsTt_fS5ZD0n7v05CFAzORzz52DZ9lbI",
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
      var _this = this; //vueインスタンスのthisを変数として格納
      var date = new Date();
      var dayOfWeek = date.getDay();


      // create task and set gradient
      for (var i = 0; i < this.customs.length; ++i) {
        // カスタムの曜日を判断
        var repeatFlag = this.customs[i].repeat_flag.split("");
        if (repeatFlag[dayOfWeek]) {
          var number = this.customs[i].title.charCodeAt(0);
          var code = number.toString().split("").pop();

          //start_timeとend_timeの型整形
          var start = this.customs[i].start_time.split(":");

          var end = this.customs[i].end_time.split(":");

          var startTime = (start[0] + start[1] * 0.166) * 0.1;

          var endTime = (end[0] + end[1] * 0.166) * 0.1;

          var displayStart = Number(start[0]) + ":" + start[1];
          var displayEnd = Number(end[0]) + ":" + end[1];
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

          var id = this.customs[i].id;

          depiction.createTask(startTime, endTime, code, id);

          document.getElementById(id).onclick = function () {
            var clickedNumber = this.id - 1;
            // console.log("クリックしたタスクは" + clickedNumber + "番でよ");
            _this.currentView = "true";
            _this.task = _this.customs[clickedNumber];
          };
        }
      }
      changeFavicon.changeFavicon();
    },
  },
  methods: {
    currentViewEvent(value) {
      this.currentView = value;
    },
  },
};
</script>
