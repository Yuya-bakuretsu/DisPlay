<template>
  <div class="TodoPut">
    <div class="wrap">
      <div class="detailHeader">
          <h2 class="putCaption">Add schedule</h2>
        <div class="link">
          <div class="editText">Add</div>
          <img
            src="../assets/img/X.svg"
            alt="X"
            class="X"
            @click="sendTodoPutView"
          />
        </div>
      </div>
    <div class="wrap">
      <h3 class="putCaptionText">Date</h3>
      <img src="../assets/img/stick.svg" class="putStick" alt="stick" />
      <div class="field">
        <h2 class="dateText">11:25~14:00</h2>
      </div>
    </div>
  </div>
  </div>
</template>
<style scoped src="../static/css/TodoPut.css"></style>
<script>
export default {
  name: "TodoPut",
    methods: {
    sendTodoPutView() {
      this.$emit("childEvent");
    },
  },
}
</script>