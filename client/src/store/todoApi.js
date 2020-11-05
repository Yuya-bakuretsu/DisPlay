/* eslint-disable */
import axios from "axios";
import Vue from "vue";

export default {
  name: "todoApi",
  data: {
    gottenTodos: [],
  },
  methods: {
    todoApiGet: function () {
      console.log("todoApi")
      let url = "http://127.0.0.1:8000/api/todo";
      let config = {
        headers: {
          Authorization:
            "jwt eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6IlJhaWthIiwiZXhwIjoxNjA0NDU0Mzg3LCJlbWFpbCI6InJhaWthNDc4OUBnbWFpbC5jb20iLCJvcmlnX2lhdCI6MTYwNDM2Nzk4N30.-3b8X1YDp2Tc7N0z7Sp6MhRtULEQ1PwlkD5eFMwnfN0",
        },
      };
      axios.get(url, config).then((response) => {
        for (var i = 0; i < response.data.length; i++) {
          var data = response.data[i];
          var splitDate = data.deadline_time.split("T");

          var yearMonthDay = splitDate[0].split("-");
          var year = yearMonthDay[0];
          var month = Number(yearMonthDay[1]);
          var day = Number(yearMonthDay[2]);

          var globalTime = splitDate[1].split("+");
          var localTime = globalTime[0].split(":");
          var hour = localTime[0];
          var minute = localTime[1];
          var second = localTime[2];

          data.deadline_time = month + "/" + day;
        }
        Vue.set(this, gottenTodos, response.data);
        this.$emit("GET_TODO_COMPLETE");
      });
    },
  },
};
