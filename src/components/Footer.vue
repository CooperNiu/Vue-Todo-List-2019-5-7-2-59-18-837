<template>
    <div class="item-list-button-container">
        <button @click="$store.commit('changeType','All')">All</button>
        <button @click="$store.commit('changeType','Active')">Active</button>
        <button @click="$store.commit('changeType','Complete')">Complete</button>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>
