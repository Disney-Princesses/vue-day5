<template>
  <header class="header">
    <h1>todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all"></label>
    <!-- label 可以关联一个表单标签 -->
    <input class="new-todo" placeholder="输入任务名称-回车确认" autofocus @keydown.enter="enter" v-model.trim="newList"/>
  </header>
</template>

<script>
export default {
  data() {
    return {
      newList:''
    }
  },
  methods:{
    enter() {
      if(this.newList.length===0) {
        return alert('请输入内容')
      }
      this.$emit('add',this.newList)
      // console.log(this.newList);
      this.newList=''
    }
  }
};
</script>