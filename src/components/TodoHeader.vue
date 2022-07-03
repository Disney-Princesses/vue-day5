<template>
    <header class="header">
        <h1>todos</h1>
        <input id="toggle-all" class="toggle-all" type="checkbox" v-model="msg">
        <label for="toggle-all"></label>
        <!-- label 可以关联一个表单标签 -->
        <input class="new-todo" placeholder="输入任务名称-回车确认" autofocus @keyup.enter="enterFn" v-model="newData" />
    </header>
</template>

<script>
export default {
    data() {
        return {
            newData: '',

        }
    },
    methods: {
        // 添加数据
        enterFn() {
            if (this.newData.trim() == '') return alert('内容不能为空')
            this.$emit('addFn', this.newData)
            this.newData = ''
        }
    },
    computed: {
        msg: {
            set(val) {
                console.log(this.$parent.list);
                this.$parent.list.forEach((item) => item.isDone = val)
            },
            get() {
                return this.$parent.list.every((item) => item.isDone == true)
            }
        }
    }
}
</script>