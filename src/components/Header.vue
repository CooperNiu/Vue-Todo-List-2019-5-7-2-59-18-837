<template>
    <div class>
        <p>Todo List</p>
        <div>
            <i>Simple Todo List with adding and filter by diff isSelected.</i>
        </div>
        <div class="item-list-input-container">
            <input v-model="content.value" type="text" @keyup.enter="addItem" />
            <Button @click="addItem">Add</Button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            content: { value: "", isSelected: false, isEdited: false }
        };
    },
    methods: {
        addItem() {
            this.$store.dispatch("addTodo", this.content)
            this.content = {
                value: "",
                isSelected: false,
                isEdited: false
            };
        }
    }
};
</script>

<style lang="" scoped>
</style>