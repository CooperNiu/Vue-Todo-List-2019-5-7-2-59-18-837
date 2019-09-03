<template>
    <div class="todo-list-container">
        <p>Todo List</p>
        
        <div class="item-list-input-container">
            <input v-model="content.value" type="text" @keyup.enter="addItem" />
            <Button @click="addItem">Add</Button>
        </div>
        <div class="item-list-container">
            <todo-item v-for="(item,index) in itemList" :key="index" :index="index" :item="item" :type="type"/>
        </div>
        <div class="item-list-button-container">
            <button @click="type='All'">All</button>
            <button @click="type='Active'">Active</button>
            <button @click="type='Complete'">Complete</button>
        </div>
    </div>
</template>

<script>
import TodoItem from './TodoItem.vue'

export default {
    components:{
        TodoItem
    },
    data() {
        return {
            content: { value: "", isSelected: false, isEdited: false },
            itemList: [],
            type: "All"
        };
    },
    methods: {
        addItem() {
            if (this.content.value != "") {
                this.itemList.push(this.content);
                this.content = {
                    value: "",
                    isSelected: false,
                    isEdited: false
                };
            }
        }
    }
};
</script>
