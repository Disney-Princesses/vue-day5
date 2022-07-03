<template>
  <header class="header">
    <h1>todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" v-model="isAll">
    <label for="toggle-all"></label> 
    <!-- label 可以关联一个表单标签 -->
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      @keyup.enter="add"
      v-model="task"
    />
  </header>
</template>

<script>
export default {
    methods: {
        add(){
            if(this.task.trim().length == 0){
                this.task=''
                return alert("Please enter a task")
            }
            this.$emit('add', this.task)
            this.task=''
        }
    },
    data () {
        return {
            task:''
        }
    },
    computed: {
        isAll:{
            get(){
                return this.$parent.list.every(ele => ele.isDone)
            },
            set(checked){
                this.$emit('isChecked', checked)
            }
        }
    }
}
</script>