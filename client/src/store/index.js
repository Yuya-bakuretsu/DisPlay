// /* eslint-disable */
// import Vue from "vue";

// var store = new Vue({
//   data: {
//     todosData: [],
//   },
//   methods: {
//     getData: function (name) {
//       return this.$data[name];
//     },
//     todoGet: function () {
//       console.log("store");
//       todoApi.todoApiGet();
//       todoApi.$on("GET_TODO_COMPLETE", () => {
//         console.log("data is" + this.todosData + "in store");
//         this.$emit("STORE_GET_TODO_COMPLETE");
//         this.todosData = todoApi.gottenTodos;
//       });
//     },
//     test: function () {
//       console.log("test");
//     },
//   },
// });

// export default { store }
