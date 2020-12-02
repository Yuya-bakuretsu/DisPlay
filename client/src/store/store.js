/* eslint-disable */
import Vue from "vue";
import axios from "axios";
const store = Vue.observable({ customs: {}, todos: {} });

const actions = {
  getTodo() {
    let url = "http://127.0.0.1:8000/api/todo";
    let config = {
      headers: {
        Authorization:
          "jwt eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6IlJhaWthIiwiZXhwIjoxNjA2OTg0NDU2LCJlbWFpbCI6InJhaWthNDc4OUBnbWFpbC5jb20iLCJvcmlnX2lhdCI6MTYwNjg5ODA1Nn0.meTh4-bDYqUsyx_tzrcTX5fSAyuosJGk7jf_DWU6_Xc",
      },
    };
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
  postTodo() {},
  getCustoms() {
    let url = "http://127.0.0.1:8000/api/customs";
    let config = {
      headers: {
        Authorization:
          "jwt eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6IlJhaWthIiwiZXhwIjoxNjA2OTg0NDU2LCJlbWFpbCI6InJhaWthNDc4OUBnbWFpbC5jb20iLCJvcmlnX2lhdCI6MTYwNjg5ODA1Nn0.meTh4-bDYqUsyx_tzrcTX5fSAyuosJGk7jf_DWU6_Xc",
      },
    };
    axios.get(url, config).then((response) => {
      store.customs = response.data;
    });
  },
};
export { store, actions };
