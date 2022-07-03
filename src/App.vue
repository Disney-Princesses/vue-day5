<template>
  <div>
    <TodoHeader ></TodoHeader>
    <TodoMain :list="list"></TodoMain>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoMain from "./components/TodoMain";
import TodoFooter from "./components/TodoFooter";
export default {
  data() {
    return {
      list: [
        { id: 100, name: "吃饭", isDone: true },
        { id: 101, name: "睡觉", isDone: false },
        { id: 102, name: "打豆豆", isDone: true },
      ],
    };
  },
components:{
  TodoHeader,
  TodoMain,
  TodoFooter
}
}
</script>

<style>

</style>