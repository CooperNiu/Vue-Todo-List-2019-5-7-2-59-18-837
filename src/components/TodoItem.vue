<template>
    <div class="item-list">
        <span v-if="!item.isSelected&&(type=='All'||type=='Active')">
            {{index+1}}.
            <span class="color-zone" @dblclick="doubleClickEdit(item)">
                <input
                    type="text"
                    v-if="item.isEdited"
                    v-model="item.value"
                    ref="temp"
                    @keyup.enter="$store.dispatch('updateTodo',item)"
                    @blur="item.isEdited=false"
                />
                <span v-if="!item.isEdited">
                    <input type="checkbox" v-model="item.isSelected" @click="clickSelected(item)" />
                    {{item.value}}
                </span>
            </span>
            <button @click="$store.dispatch('deleteTodo',item.id)" class="delete-button">X</button>
        </span>
        <del v-if="item.isSelected&&(type=='All'||type=='Complete')">
            {{index+1}}.
            <del class="color-zone" @dblclick="doubleClickEdit(item)">
                <input
                    type="text"
                    v-if="item.isEdited"
                    v-model="item.value"
                    ref="temp"
                    @keyup.enter="$store.dispatch('updateTodo',item)"
                    @blur="item.isEdited=false"
                />
                <del v-if="!item.isEdited">
                    <input type="checkbox" v-model="item.isSelected" @click="clickSelected(item)" />
                    {{item.value}}
                </del>
            </del>
            <button @click="$store.dispatch('deleteTodo',item.id)" class="delete-button">X</button>
        </del>
    </div>
</template>

<script>
export default {
    props:["index","item","type"],
    methods: {
        clickSelected(item){
            item.isSelected=!item.isSelected
            this.$store.dispatch('updateTodo',item)
        },
        doubleClickEdit(item){
            item.isEdited=true
            console.log('this.$refs :', this.$refs.input);
            this.$refs.temp.focus()
        }
    },
};
</script>

<style>
</style>
