<script setup>
import { onMounted } from 'vue'
import { usePostsStore } from '@/stores/posts'
import PostList from '@/components/PostList.vue'

const postsStore = usePostsStore()

// onMounted(async () => {
//   await postsStore.likedPosts
//   console.log(postsStore.likedPosts)
// })
</script>

<template>
  <PostList :posts="postsStore.likedPosts" />

  <!-- <p v-for="post of postsStore.likedPosts" :key="post">test</p> -->
</template>

<style scoped></style>
