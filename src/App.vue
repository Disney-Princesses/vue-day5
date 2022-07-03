<template>
  <div>
    <TodoHeader @add="addFn"></TodoHeader>
    <TodoMain :list="showSel" @del="delFn" ></TodoMain>
    <TodoFooter :count="count" @isSel='isSelFn'></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoMain from "./components/TodoMain.vue";
import TodoFooter from "./components/TodoFooter.vue";
export default {
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
  data() {
    return {
      list:JSON.parse(localStorage.getItem('list'))||[],
      getSel:'',
    };
  },
  methods: {
    addFn(val) {
      const id = this.list[this.list.length - 1]
        ? this.list[this.list.length - 1].id + 1
        : 100;
      this.list.push({
        id: this.list[this.list.length - 1].id + 1,
        name: val,
        isDone: false,
      });
    },
    delFn(val) {
      const index = this.list.findIndex((ele) => ele.id == val);
      this.list.splice(index, 1);
    },
    isSelFn(val){
      this.getSel=val;
    }

  },
  computed:{
    count(){//为什么count一定要用computed
      return this.list.filter(ele=>!ele.isDone).length;
    },
    showSel(){//为什么要用computed
      if(this.getSel=='no'){
        return this.list.filter(ele=>!ele.isDone)
      }else if(this.getSel=='yes'){
        return this.list.filter(ele=>ele.isDone)
      }else{
        return this.list;
      }
    }
  },
  watch:{
    list:{
      deep:true,
      handler(newList){
        localStorage.setItem("list",JSON.stringify(newList||[]));
      }
    }
  }
};
</script>

<style>
</style>