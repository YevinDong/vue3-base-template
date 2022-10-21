<script setup lang="ts">
import { computed, ref } from 'vue';
import { userInfoStore } from '../store/index';
defineProps<{ msg: string }>();
const ui = userInfoStore();
const count = ref(0);
const val = import.meta.env;
</script>

<template>
    <h1>{{ msg }}</h1>
    <button type="button" @click="count++">count is: {{ count }}</button>
    <button type="button" @click="ui.count++">store userInfo{{ ui.count }}</button>
    <button type="button" @click="ui.$reset">ui reset</button>
</template>

<style scoped>
a {
    color: #42b983;
}

label {
    margin: 0 0.5em;
    font-weight: bold;
}

code {
    background-color: #eee;
    padding: 2px 4px;
    border-radius: 4px;
    color: #304455;
}
</style>
