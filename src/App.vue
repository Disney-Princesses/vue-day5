<template>
  <div>
    <TodoHeader @add="addFn"></TodoHeader>
    <TodoMain :list="shownList" @delList="delFn"></TodoMain>
    <TodoFooter :count='count' @filterList='filterListFn' @clearList='clearFn'></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoMain from "./components/TodoMain";
import TodoFooter from "./components/TodoFooter";
export default {
  data() {
    return {
      list:JSON.parse(localStorage.getItem('list'))||[],
      getSel:'all'
    };
  },
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
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
    },
    filterListFn(val) {
      this.getSel = val
    },
    clearFn() {
      return this.list.forEach(ele => ele.isDone =false)
    }
  },
  computed:{
    count(){
      return this.list.filter(ele => !ele.isDone).length
    },
    shownList() {
      if(this.getSel=='yes') {
        return this.list.filter(ele => ele.isDone)
      } else if(this.getSel=='no') {
        return this.list.filter(ele => !ele.isDone)
      } else {
        return this.list
      }
    }
  },
  watch:{
    list:{
      deep:true,
      handler(newArr) {
        localStorage.setItem('list',JSON.stringify(newArr)||[])
      }
    }
  }
};
</script>

<style>
</style>