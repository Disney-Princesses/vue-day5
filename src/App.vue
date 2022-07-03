<template>
  <div>
    <TodoHeader @addFn="addList"></TodoHeader>
    <TodoMain :list="showList" @delList="delFn"></TodoMain>
    <TodoFooter :count="count" @change="changeFn" @clear="clearFn"></TodoFooter>
  </div>
</template>

<script>
import './assets/style/base.css'
import './assets/style/index.css'

// 引入组件
import TodoHeader from './components/TodoHeader.vue'
import TodoFooter from './components/TodoFooter.vue'
import TodoMain from './components/TodoMain.vue'

export default {
  components: {
    TodoHeader,
    TodoFooter,
    TodoMain
  },
  data() {
    return {
      list: JSON.parse(localStorage.getItem('list')) || [],
      getSet: '',
      num: ""
    }
  },
  methods: {
    // 添加
    addList(val) {
      const id = this.list[this.list.length - 1] ? this.list[this.list.length - 1].id + 1 : 100
      this.list.push({
        id,
        name: val,
        isDone: false
      })
    },
    // 删除
    delFn(id) {
      console.log(id);
      const index = this.list.findIndex((item) => item.id == id)
      this.list.splice(index, 1)
    },
    // 切换
    changeFn(val) {
      this.getSet = val
    },
    // 清空
    clearFn() {
      this.list.forEach((item) => item.isDone = false)
    }
  },
  computed: {
    count() {
      return this.list.filter(item=>!item.isDone).length
    },
    showList() {
      if (this.getSet == 'no') {
        return this.list.filter((item) => !item.isDone)
      } else if (this.getSet == 'yes') {
        return this.list.filter((item) => item.isDone)
      } else {
        return this.list
      }
    }
  },
  watch: {
    list: {
      deep: true,
      handler(val) {
        localStorage.setItem('list', JSON.stringify(val || []))
      }
    }
  }
}
</script>

<style>
</style>>