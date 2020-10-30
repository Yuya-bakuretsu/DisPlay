<template>
  <div>
    <div id="chart" v-on:click="addVisible()"></div>

    <div id="scheduleDetail-js" class="scheduleDetail">
      <div class="wrap">
        <div class="detailHeader">
          <div class="headerLeft">
            <h3 class="captionText">Title</h3>
            <img
              src="../assets/img/stick.svg"
              class="first stick"
              alt="stick"
            />
          </div>
          <div class="link">
            <div class="editText">Edit</div>
            <img
              src="../assets/img/X.svg"
              alt="X"
              class="X"
              id="X-js"
              v-on:click="removeVisible()"
            />
          </div>
        </div>
        <div class="field">
          <h2 class="titleText">Class</h2>
        </div>
      </div>
      <div class="wrap">
        <h3 class="captionText">Date</h3>
        <img src="../assets/img/stick.svg" class="stick" alt="stick" />
        <div class="field">
          <h2 class="dateText">8/10 14:35~16:30</h2>
        </div>
      </div>
      <div class="wrap">
        <h3 class="date captionText">Memo</h3>
        <img src="../assets/img/stick.svg" class="stick" alt="stick" />
        <div class="field">
          <h2 class="memoText">I have to do my homework.</h2>
        </div>
      </div>
    </div>
  </div>
</template>
<style src="../static/css/Chart.css"></style>
<script>
/* eslint-disable */
import * as d3 from "d3";
import depiction from "../static/js/depiction";
// import savesvg from '../static/js/savesvg';
import gradients from "../store/gradients";
import customs from "../store/customs";

export default {
  name: "Chart",
  mounted() {
    depiction.svg();

    depiction.createGradient("#fbfbff", "#ebebec", "lightGradient");
    depiction.createGrooveShadow();
    depiction.createDropShadow();
    depiction.createGroove();

    // create task and set gradient
    for (var i = 0; i < customs.length; ++i) {
      // for test
      console.log("for is ok");

      var number = customs[i].name.charCodeAt(0);
      var code = number
        .toString()
        .split("")
        .pop();

      var start = customs[i].startTime.split(":");

      var end = customs[i].endTime.split(":");

      var startTime = (start[0] + start[1] * 0.166) * 0.1;

      var endTime = (end[0] + end[1] * 0.166) * 0.1;

      if (startTime > endTime) {
        startTime = 0;
        //if test
        console.log("if is ok");
      }

      depiction.createGradient(
        gradients[code].color,
        gradients[code].color1,
        "taskGradient" + code + ""
      );

      depiction.createTask(startTime, endTime, code);
    }

    depiction.createClock();

    // window.onload = savesvg.save();
  },
  methods: {
    addVisible: function() {
      var scheduleDetail = document.getElementById("scheduleDetail-js");
      scheduleDetail.classList.add("visible");
    },
    removeVisible: function() {
      var scheduleDetail = document.getElementById("scheduleDetail-js");
      scheduleDetail.classList.remove("visible");
    },
  },
};
</script>
