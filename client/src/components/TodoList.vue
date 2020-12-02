<template>
  <div>
    <transition>
      <TodoAdd
        v-if="todoAddView"
        @childEvent="todoAddViewEvent"
        @notificationPost="reGetTodo"
      />
    </transition>
    <div class="Todo_menu">
      <div class="Menu_right">
        <h3>Todolist</h3>
      </div>
      <div class="Menu_left">
        <button class="Landscape_button" @click="todoAddViewChange">
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
        <h4 class="Task_title">{{ todo.title }}</h4>
        <button class="Circle_button Play">
          <img
            class="Play_img"
            src="../assets/img/Play.svg"
            alt="Play"
          /></button
        ><button class="Circle_button Check">
          <img src="../assets/img/Check.svg" alt="check" />
        </button>
        <p class="Task_deadline">Deadline {{ todo.displayDate }}</p>
      </div>
    </div>
  </div>
</template>
<style src="../static/css/TodoList.css"></style>

<script>
/* eslint-disable */
import axios from "axios";
import TodoAdd from "./TodoAdd";
import { store, actions } from "../store/store";

export default {
  name: "TodoList",
  components: { TodoAdd },
  data: function () {
    return {
      todoAddView: false,
    };
  },
  computed: {
    todos() {
      return store.todos;
    },
  },
  //TODO 401errorが出るたびにtokenを取得し直す機能を追加
  mounted() {
    actions.getTodo();
  },
  methods: {
    todoAddViewChange() {
      this.todoAddView = true;
    },
    todoAddViewEvent(value) {
      this.todoAddView = value;
    },
    reGetTodo() {
      actions.getTodo();
      this.todoAddView = false;
    },
  },
};
</script>
