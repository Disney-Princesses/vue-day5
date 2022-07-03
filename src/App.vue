<template>
  <div>
    <TodoHeader @add="addFn" @isAll="checkAll"></TodoHeader>
    <TodoMain :list="selectAll" @del="delFn"></TodoMain>
    <TodoFooter :count="count" @select="selectFn" @clear="clearFn"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader";
import TodoMain from "./components/TodoMain";
import TodoFooter from "./components/TodoFooter";
export default {
  data() {
    return {
      list: JSON.parse(localStorage.getItem("list")) || [],
      // [
      //   { id: 100, name: "吃饭", isDone: true },
      //   { id: 101, name: "睡觉", isDone: false },
      //   { id: 102, name: "打豆豆", isDone: true },
      // ],
      // 声明全局变量  选择的状态
      selAll: "",
    };
  },
  methods: {
    // 删除
    delFn(id) {
      const index = this.list.findIndex((ele) => ele.id == id);
      this.list.splice(index, 1);
    },
    // 添加
    addFn(val) {
      const id = this.list[this.list.length - 1]
        ? this.list[this.list.length - 1].id + 1
        : 100;
      this.list.push({
        name: val,
        isDone: false,
        id,
      });
    },
    // 点击高亮，切换页面
    selectFn(sel) {
      // 全局变量接受页面传来的状态
      this.selAll = sel;
    },
    // 清除选中
    clearFn() {
      this.list.forEach((ele) => (ele.isDone = false));
    },
    // 全选反选
    checkAll(checked) {
      this.list.forEach((ele) => (ele.isDone = checked));
    },
  },
  computed: {
    // 统计
    count() {
      return this.list.length;
    },
    // 判断状态,切换页面
    selectAll() {
      if (this.selAll == "no") {
        return this.list.filter((ele) => ele.isDone == false);
      } else if (this.selAll == "yes") {
        return this.list.filter((ele) => ele.isDone == true);
      } else {
        return this.list;
      }
    },
  },
  watch: {
    list: {
      handler(val) {
        localStorage.setItem("list", JSON.stringify(val) || []);
      },
      deep: true,
    },
  },
  components: {
    // 存放组件
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
};
</script>

<style></style>
