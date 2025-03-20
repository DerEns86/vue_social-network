<script setup>
import { RouterLink } from 'vue-router'
</script>

<template class="flex justify-between items-center">
  <menu>
    <ul>
      <li>
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/posts">Posts</RouterLink>
      </li>
    </ul>
  </menu>
</template>

<style scoped></style>
