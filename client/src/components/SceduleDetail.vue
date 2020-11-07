<template>
  <div id="scheduleDetail-js" class="scheduleDetail">
    <div class="wrap">
      <div class="detailHeader">
        <div class="headerLeft">
          <h3 class="captionText">Title</h3>
          <img src="../assets/img/stick.svg" class="first stick" alt="stick" />
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
</template>
<style src="../static/css/scheduleDetail.css"></style>
<script>
export default {
  name: "ScheduleDetail",
  methods: {
    addVisible: function () {
      // var scheduleDetail = document.getElementById("scheduleDetail-js");
      // scheduleDetail.classList.add("visible");
    },
    removeVisible: function () {
      // var scheduleDetail = document.getElementById("scheduleDetail-js");
      // scheduleDetail.classList.remove("visible");
    },
  },
};
</script>
