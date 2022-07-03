<template>
    <footer class="footer">
        <span class="todo-count">剩余<strong>{{ count }}</strong></span>
        <ul class="filters">
            <li>
                <a :class="{ selected: isSet == 'all' }" href="javascript:;" @click="change('all')">全部</a>
            </li>
            <li>
                <a :class="{ selected: isSet == 'no' }" href="javascript:;" @click="change('no')">未完成</a>
            </li>
            <li>
                <a :class="{ selected: isSet == 'yes' }" href="javascript:;" @click="change('yes')">已完成</a>
            </li>
        </ul>
        <button class="clear-completed" @click="clear">清除已完成</button>
    </footer>
</template>

<script>
export default {
    props: ['count'],
    data() {
        return {
            isSet: 'all'   //all 全部，no 未完成，yes已完成
        }
    },
    methods: {
        change(val) {
            this.isSet = val
            this.$emit('change', val)
        },
        clear() {
            this.$emit('clear')
        }
    }
}
</script>