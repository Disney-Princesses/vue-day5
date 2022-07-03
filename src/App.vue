<template>
  <div>
    <TodoHeader></TodoHeader>
    <TodoMain></TodoMain>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoMain from "./components/TodoMain";
import TodoFooter from "./components/TodoFooter";
export default {
components:{
  TodoHeader,
  TodoMain,
  TodoFooter
}
}
</script>

<style>

</style>