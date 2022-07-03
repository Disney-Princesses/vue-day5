<template>
  <footer class="footer">
    <span class="todo-count">
      剩余
      <strong>{{count}}</strong>
    </span>
    <ul class="filters">
      <li>
        <a :class="{selected:isSel='all'}" href="javascript:;" @click="sclected('all')">全部</a>
      </li>
      <li>
        <a :class="{selected:isSel='no'}" href="javascript:;" @click="sclected('no')">未完成</a>
      </li>
      <li>
        <a :class="{selected:isSel='yes'}" href="javascript:;" @click="sclected('yes')">已完成</a>
      </li>
    </ul>
    <button class="clear-completed">清除已完成</button>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      isSel: "all"
    };
  },
  props: ["count"],
  methods:{
    sclected(val) {
        this.isSel=val
        this.$emit('filterList',val)
    }
  },
  computed: {}
};
</script>