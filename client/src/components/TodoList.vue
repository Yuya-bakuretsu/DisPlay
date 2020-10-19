<template>
  <div>
    <div class="Todo_menu">
      <div class="Menu_right">
        <h3>Todolist</h3>
      </div>
      <div class="Menu_left">
        <button class="Landscape_button">
          <div class="button_text">Add</div></button
        ><img
          class="Trashcan"
          src="../assets/img/Trashcan.svg"
          alt="trashcan"
        />
      </div>
    </div>
    <div class="Task_list">
      <div class="Task" v-for="todo in todos" :key="todo.id">
        <h4 class="Task_title">{{ todo.name }}</h4>
        <button class="Circle_button Play" v-on:click="addSchedule">
          <img
            class="Play_img"
            src="../assets/img/Play.svg"
            alt="Play"
          /></button
        ><button class="Circle_button Check">
          <img src="../assets/img/Check.svg" alt="check" />
        </button>
        <p class="Task_deadline">Deadline 8/20</p>
      </div>
    </div>
  </div>
</template>
<style src="../static/css/TodoList.css"></style>

<script>
import todos from "../store/todos";

export default {
  name: "TodoList",
  data() {
    return {
      todos: todos,
    };
  },
  methods: {
    addSchedule: function() {
      alert("テストでよ");
    },
  },
  // mounted: function() {
  //   this.axios.get("http://localhost:8080/src/store/todos.json").then((response) => {
  //     console.log(response);
  //   });
  // },
};
</script>
