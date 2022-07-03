<template>
  <div>
    <TodoHeader @add="addFn" @isChecked="isCheckedFn"></TodoHeader>
    <TodoMain :list="selectList" @del="delFn"></TodoMain>
    <TodoFooter :surplus="surplus" @setSelected="setSelectedFn" @clear="clearFn"></TodoFooter>
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
      list: JSON.parse(localStorage.getItem('list')),
      setSel: 'all'
    };
  },  
  methods: {
    addFn(val){
      let id = this.list[this.list.length - 1] ? this.list[this.list.length - 1].id + 1 : 100
      this.list.push({
        id,
        name: val,
        isDone: false,
      })
    },
    delFn(id){
      let index = this.list.findIndex(ele => ele.id == id)
      this.list.splice(index, 1)
    },
    setSelectedFn(val){
      this.setSel = val
    },
    clearFn(){
      this.list = this.list.filter(ele => !ele.isDone)
    },
    isCheckedFn(val){
      this.list.forEach(ele => ele.isDone = val)
    }
  },
  computed: {
    surplus(){
      return this.list.filter(ele => !ele.isDone).length
    },
    selectList(){
      if (this.setSel == 'no'){
        return this.list.filter(ele => !ele.isDone)
      }else if (this.setSel == 'yes'){
        return this.list.filter(ele => ele.isDone)
      }else {
        return this.list
      }
    }
  },
  watch: {
    list: {
      deep: true,
      handler(val){
        localStorage.setItem('list', JSON.stringify(val))
      }
    }
  }
};
</script>

<style></style>
