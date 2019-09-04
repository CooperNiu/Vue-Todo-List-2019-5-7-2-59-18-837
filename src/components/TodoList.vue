<template>
    <div class="todo-list-container">
        <div class="item-list-container">
            <todo-item
                v-for="(item,index) in $store.state.itemList"
                :key="index"
                :index="index"
                :item="item"
                :type="$store.state.type"
            />
        </div>
    </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
    components: {
        TodoItem
    },
    mounted() {
        this.$store.dispatch('getTodoList')
    }
};
</script>
