<template>
  <div class="todoAdd">
    <div class="wrap">
      <div class="detailHeader">
        <div class="headerLeft">
          <h3 class="captionText">Title</h3>
          <img src="../assets/img/stick.svg" class="first stick" alt="stick" />
        </div>
        <div class="link">
          <div class="editText" @click="postTodo">Add</div>
          <img
            src="../assets/img/X.svg"
            alt="X"
            class="X"
            @click="sendTodoAddView"
          />
        </div>
      </div>
      <div class="field">
        <input
          class="titleInputArea"
          type="text"
          v-model="title"
          placeholder="enter title"
        />
        <img src="../assets/img/Pen.svg" alt="pen" class="Pen" />
      </div>
    </div>
    <div class="wrap">
      <h3 class="captionText">Deadline</h3>
      <img src="../assets/img/stick.svg" class="stick" alt="stick" />
      <div class="field">
        <input
          type="number"
          min="1"
          max="12"
          class="dateInputArea"
          v-model="month"
        />
        <h2 class="dateText">/</h2>
        <input
          type="number"
          min="1"
          max="31"
          class="dateInputArea"
          v-model="date"
        />
        <img src="../assets/img/Pen.svg" alt="pen" class="Pen" />
      </div>
    </div>
  </div>
</template>
<style src="../static/css/TodoAdd.css"></style>
<script>
import axios from "axios";
export default {
  name: "TodoAdd",
  data: function () {
    return {
      title: "",
      month: 11,
      date: 24,
    };
  },
  methods: {
    sendTodoAddView() {
      this.$emit("childEvent", false);
    },
    postTodo() {
      let url = "http://127.0.0.1:8000/api/todo/";
      let config = {
        headers: {
          Authorization:
            "jwt eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6IlJhaWthIiwiZXhwIjoxNjA2NDg0MTE5LCJlbWFpbCI6InJhaWthNDc4OUBnbWFpbC5jb20iLCJvcmlnX2lhdCI6MTYwNjM5NzcxOX0.65S5gbkmN87O3dGM8DydZe5XDHygeyG1mMCwHkGP-F4",
        },
      };
      let data = {
        author: 1,
        title: this.title,
        deadline_time:
          "2020-" + this.month + "-" + this.date + "T11:15:00+09:00",
      };
      axios.post(url, data, config).then((response) => {
        console.log(response);
      });
      this.$emit("notificationPost");
    },
  },
};
</script>
