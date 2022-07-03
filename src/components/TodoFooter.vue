<template>
  <footer class="footer">
    <span class="todo-count">剩余<strong>{{surplus}}</strong></span>
    <ul class="filters">
      <li>
        <a :class="{selected: isSel == 'all'}" @click="isSelFn('all')" href="javascript:;" >全部</a>
      </li>
      <li>
        <a :class="{selected: isSel == 'no'}" @click="isSelFn('no')" href="javascript:;">未完成</a>
      </li>
      <li>
        <a :class="{selected: isSel == 'yes'}" @click="isSelFn('yes')" href="javascript:;" >已完成</a>
      </li>
    </ul>
    <button class="clear-completed" @click="clear">清除已完成</button>
  </footer>
</template>

<script>
export default {
    data () {
        return {
            isSel: 'all'
        }
    },
    props: ['surplus'],
    methods: {
        isSelFn(val){
            this.isSel = val
            this.$emit('setSelected', val)
        },
        clear(){
            this.$emit('clear')
        }
    }

}
</script>