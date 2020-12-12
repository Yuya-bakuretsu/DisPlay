/* eslint-disable */
import Vue from "vue";
import axios from "axios";

let config = {
  headers: {
    Authorization:
      "jwt eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6IlJhaWthIiwiZXhwIjoxNjA3NzQ1NDIyLCJlbWFpbCI6InJhaWthNDc4OUBnbWFpbC5jb20iLCJvcmlnX2lhdCI6MTYwNzY1OTAyMn0.SZCrIs7T8FLjotzYJwYocBJPLsssoapLe-LjvUVdfVA",
  },
};

const store = Vue.observable({ customs: {}, todos: {} });

const actions = {
  getTodo() {
    let url = "http://127.0.0.1:8000/api/todo";
    axios.get(url, config).then((response) => {
      // arrange todos data
      let data;
      for (let i = 0; i < response.data.length; i++) {
        data = response.data;
        let splitDate = data[i].d_date.split("-");
        let month = Number(splitDate[1]);
        let day = Number(splitDate[2]);

        data[i].displayDate = month + "/" + day;
      }
      store.todos = data;
    });
  },
  postTodo(data) {
    let url = "http://127.0.0.1:8000/api/todo/";
    axios.post(url, data, config).then((response) => {
      console.log(response);
    });
  },
  putTodo(id) {
    let url = "http://127.0.0.1:8000/api/todo/" + id;
    axios.put(url, data, config).then((response) => {
      console.log(response);
    });
  },
  deleteTodo(id) {
    let url = "http://127.0.0.1:8000/api/todo/" + id;
    axios.delete(url, config).then((response) => {
      console.log(response);
    });
  },
  getCustoms() {
    let url = "http://127.0.0.1:8000/api/customs";
    axios.get(url, config).then((response) => {
      store.customs = response.data;
    });
  },
};

export { store, actions };
