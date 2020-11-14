<template>
  <div class="todoAdd">
    <div class="wrap">
      <div class="detailHeader">
        <div class="headerLeft">
          <h3 class="captionText">Title</h3>
          <img src="../assets/img/stick.svg" class="first stick" alt="stick" />
        </div>
        <div class="link">
          <div class="editText">Add</div>
          <img src="../assets/img/X.svg" alt="X" class="X" id="X-js" />
        </div>
      </div>
      <div class="field">
        <h2 class="titleText">title</h2>
        <img src="../assets/img/Pen.svg" alt="pen" class="Pen" />
      </div>
    </div>
    <div class="wrap">
      <h3 class="captionText">Deadline</h3>
      <img src="../assets/img/stick.svg" class="stick" alt="stick" />
      <div class="field">
        <h2 class="dateText">test</h2>
        <img src="../assets/img/Pen.svg" alt="pen" class="Pen" />
      </div>
    </div>
  </div>
</template>
<style src="../static/css/TodoAdd.css"></style>
<script>
export default {
  name: "TodoAdd",
};
</script>
