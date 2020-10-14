<template>
  <div>
    <div class="Todo_menu">
      <div class="Menu_right">
        <h3>Todolist</h3>
      </div>
      <div class="Menu_left">
        <button class="Landscape_button">
          <div class="button_text">Add</div></button
        ><img class="Trashcan" src="../assets/Trashcan.svg" alt="trashcan" />
      </div>
    </div>
    <div class="Task_list">
      <div class="Task">
        <h4>郵便局に荷物出す</h4>
        <button class="Circle_button Play">
          <img class="Play_img" src="../assets/Play.svg" alt="Play" /></button
        ><button class="Circle_button Check">
          <img src="../assets/Check.svg" alt="check" />
        </button>
        <p>Deadline 8/20</p>
      </div>
    </div>
  </div>
</template>
<style src="../static/TodoList.css"></style>
<script>
export default {
  name: "TodoList",
};
</script>
