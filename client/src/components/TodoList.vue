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
        <p class="Task_deadline">Deadline {{ todo.deadline_time }}</p>
      </div>
    </div>
  </div>
</template>
<style src="../static/css/TodoList.css"></style>

<script>
/* eslint-disable */
import axios from "axios";
import TodoAdd from "./TodoAdd";

export default {
  name: "TodoList",
  components: { TodoAdd },
  data: function () {
    return {
      todos: [],
      todoAddView: false,
    };
  },
  //TODO 401errorが出るたびにtokenを取得し直す機能を追加
  created: function () {
    let url = "http://127.0.0.1:8000/api/todo";
    let config = {
      headers: {
        Authorization:
          "jwt eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6IlJhaWthIiwiZXhwIjoxNjA2NzM4NzMxLCJlbWFpbCI6InJhaWthNDc4OUBnbWFpbC5jb20iLCJvcmlnX2lhdCI6MTYwNjY1MjMzMX0.GD1J9XIXLJmfSir_UbXNu9Co4ZwDZjyFIFYr5g0sTE4",
      },
    };
    axios.get(url, config).then((response) => {
      // todosのデータ整形
      let data = response.data;
      for (let i = 0; i < response.data.length; i++) {
        let splitDate = data[i].deadline_time.split("T");

        let yearMonthDay = splitDate[0].split("-");
        let year = yearMonthDay[0];
        let month = Number(yearMonthDay[1]);
        let day = Number(yearMonthDay[2]);

        let globalTime = splitDate[1].split("+");
        let localTime = globalTime[0].split(":");
        let hour = localTime[0];
        let minute = localTime[1];
        let second = localTime[2];

        data[i].deadline_time = month + "/" + day;
      }
      this.todos = data;
    });
  },
  methods: {
    todoAddViewChange() {
      this.todoAddView = true;
    },
    todoAddViewEvent(value) {
      this.todoAddView = value;
    },
    reGetTodo() {
      let url = "http://127.0.0.1:8000/api/todo";
      let config = {
        headers: {
          Authorization:
            "jwt eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6IlJhaWthIiwiZXhwIjoxNjA2NzM4NzMxLCJlbWFpbCI6InJhaWthNDc4OUBnbWFpbC5jb20iLCJvcmlnX2lhdCI6MTYwNjY1MjMzMX0.GD1J9XIXLJmfSir_UbXNu9Co4ZwDZjyFIFYr5g0sTE4",
        },
      };
      axios.get(url, config).then((response) => {
        // todosのデータ整形
        for (let i = 0; i < response.data.length; i++) {
          let data = response.data;
          let splitDate = data[i].deadline_time.split("T");

          let yearMonthDay = splitDate[0].split("-");
          let year = yearMonthDay[0];
          let month = Number(yearMonthDay[1]);
          let day = Number(yearMonthDay[2]);

          let globalTime = splitDate[1].split("+");
          let localTime = globalTime[0].split(":");
          let hour = localTime[0];
          let minute = localTime[1];
          let second = localTime[2];

          data[i].deadline_time = month + "/" + day;
        }
        this.todos = data;
        this.todoAddView = false;
      });
    },
  },
};
</script>
