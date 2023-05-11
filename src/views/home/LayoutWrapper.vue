
<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <home-view />
  <router-link :to="{ name: 'register' }"> register</router-link>
  <router-link :to="{ name: 'update' }"> update</router-link>

  <router-view></router-view>
</template>

<style>
</style>