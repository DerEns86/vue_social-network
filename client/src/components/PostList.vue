<script setup>
import { defineProps } from 'vue'
import SinglePost from '@/components/SinglePost.vue'

const props = defineProps(['posts'])
</script>

<template>
  <SinglePost v-for="post of props.posts" :key="post.id" :post="post" />
</template>

<style scoped></style>
