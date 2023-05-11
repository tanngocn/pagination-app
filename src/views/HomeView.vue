<script setup>
import { watchEffect } from 'vue'
import { RouterLink } from 'vue-router'
const props = defineProps(['page'])
watchEffect(props.page, () => {})
</script>

<template>
  <main>
    <h1>this is homepage {{ props.page }}</h1>
    <router-link :to="{ name: 'home', query: { page: props.page + 1 } }">next</router-link>
  </main>
</template>
