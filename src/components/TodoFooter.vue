<template>
  <footer class="footer">
    <span class="todo-count"
      >剩余<strong>{{ count }}</strong></span
    >
    <ul class="filters">
      <li>
        <a
          :class="{ selected: select == 'all' }"
          href="javascript:;"
          @click="selectFn('all')"
          >全部</a
        >
      </li>
      <li>
        <a
          :class="{ selected: select == 'no' }"
          href="javascript:;"
          @click="selectFn('no')"
          >未完成</a
        >
      </li>
      <li>
        <a
          :class="{ selected: select == 'yes' }"
          href="javascript:;"
          @click="selectFn('yes')"
          >已完成</a
        >
      </li>
    </ul>
    <button class="clear-completed" @click="clearFn">清除已完成</button>
  </footer>
</template>

<script>
export default {
  props: ["count"],
  data() {
    return {
        select: "all"
    }
  },
  methods: {
    // 点击高亮,切换页面
    selectFn(sel) {
        // val 点击的状态
      this.select = sel;
      this.$emit('select',sel)
    },
    // 清除选中
    clearFn() {
        this.$emit('clear')
    }
  },
};
</script>
