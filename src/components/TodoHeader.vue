<template>
  <header class="header">
    <h1>todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" v-model='isAll'>
    <label for="toggle-all"></label> 
    <!-- label 可以关联一个表单标签 -->
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      @keydown.enter="addFn"
      v-model.trim='tesk'
    />
  </header>
</template>

<script>
export default {
    data(){
        return {
            tesk:'',
        }
    },
    // 添加任务
    methods:{
        addFn(){
            // 子->父
            if(this.tesk.length==0){
                return alert("请输入任务后再提交！");
            }
            this.$emit('add',this.tesk);
            this.tesk='';
        }
    },
    computed:{
        isAll:{
            get(){
                return this.$parent.list.every(ele=>ele.isDone);
            },
            set(val){
                this.$parent.list.forEach(ele=>ele.isDone=val);
            }
        }
    }
}
</script>