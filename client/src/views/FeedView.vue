<script setup>
import { onMounted } from 'vue'
import SinglePost from '@/components/SinglePost.vue'
import { usePostsStore } from '@/stores/posts'

const postsStore = usePostsStore()

onMounted(async () => {
  await postsStore.fetchPosts()
})
</script>

<template>
  <SinglePost v-for="post of postsStore.posts" :key="post.id" :post="post" />
</template>

<style scoped></style>
