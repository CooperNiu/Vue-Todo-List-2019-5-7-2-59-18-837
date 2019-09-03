<template>
    <div class="item-list">
        <span v-if="(item.isSelected==false)&&(type=='All'||type=='Active')">
            {{index+1}}.
            <span class="color-zone" @dblclick="item.isEdited=true">
                <input
                    type="text"
                    v-if="item.isEdited"
                    v-model="item.value"
                    @blur="item.isEdited=false"
                />
                <span v-if="!item.isEdited">
                    <input type="checkbox" v-model="item.isSelected" />
                    {{item.value}}
                </span>
            </span>
        </span>
        <del v-if="(item.isSelected==true)&&(type=='All'||type=='Complete')">
            {{index+1}}.
            <span class="color-zone" @dblclick="item.isEdited=true">
                <input
                    type="text"
                    v-if="item.isEdited"
                    v-model="item.value"
                    @blur="item.isEdited=false"
                />
                <span v-if="!item.isEdited">
                    <input type="checkbox" v-model="item.isSelected" />
                    {{item.value}}
                </span>
            </span>
        </del>
    </div>
</template>

<script>
export default {
    props:["index","item","type"]
};
</script>

<style>
</style>
