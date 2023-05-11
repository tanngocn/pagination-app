<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style >
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
a {
  display: inline-block;
  margin: 0 10px;
  color: green;
  font-weight: bold;
}
</style>
