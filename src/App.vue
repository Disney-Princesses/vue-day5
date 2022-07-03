<template>
  <div>
    <TodoHeader @add="addFn"></TodoHeader>
    <TodoMain :list="list" @delList="delFn"></TodoMain>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoMain from "./components/TodoMain";
import TodoFooter from "./components/TodoFooter";
export default {
  data() {
    return {
      list: [
        { id: 100, name: "吃饭", isDone: true },
        { id: 101, name: "睡觉", isDone: false },
        { id: 102, name: "打豆豆", isDone: true }
      ]
    };
  },
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter
  },
  methods: {
    addFn(val) {
      const id = this.list[this.list.length - 1]
        ? this.list[this.list.length - 1].id + 1
        : 100;
      this.list.push({
        id,
        name: val,
        isDone: false
      });
    },
    delFn(id) {
      const index = this.list.findIndex(ele => ele.id === id);
      this.list.splice(index, 1);
    }
  }
};
</script>

<style>
</style>