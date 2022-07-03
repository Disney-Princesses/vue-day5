<template>
  <footer class="footer">
    <span class="todo-count">剩余<strong>{{count}}</strong></span>
    <ul class="filters">
      <li>
        <a :class="{selected:isSel=='all'}" href="javascript:;" @click='clickFn("all")'>全部</a>
      </li>
      <li>
        <a :class="{selected:isSel=='no'}" href="javascript:;" @click='clickFn("no")'>未完成</a>
      </li>
      <li>
        <a :class="{selected:isSel=='yes'}" href="javascript:;" @click='clickFn("yes")'>已完成</a>
      </li>
    </ul>
    <button class="clear-completed" @click='clearFn'>清除已完成</button>
  </footer>
</template>

<script>
export default {
    props:['count'],
    data(){
        return {
           isSel:'all',
        }
    },
    methods:{
        clickFn(val){
            this.isSel=val;
            this.$emit('isSel',val);
        },
        clearFn(){
            this.$parent.list.forEach(ele=>ele.isDone=false)
        }
    }
}
</script>