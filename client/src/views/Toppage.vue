<template>
  <div>
    <Header></Header>
    <Chart></Chart>
    <TodoList></TodoList>
  </div>
</template>
<style></style>
<script>
import Header from "../components/Header";
import Chart from "../components/Chart";
import TodoList from "../components/TodoList";

export default {
  name: "toppage",
  components: {
    Header,
    Chart,
    TodoList,
  },
};
</script>
