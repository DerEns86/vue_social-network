<script setup>
import { ref, onMounted } from 'vue'
import { usePostsStore } from '@/stores/posts'
import PostList from '@/components/PostList.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.userId

const postsStore = usePostsStore()

onMounted(async () => {
  await postsStore.fetchPostsByUserId(id)
})
</script>

<template>
  <button @click="$router.go(-1)">Back</button>
  <div>
    <h2>My Posts</h2>
    <PostList :posts="postsStore.userPosts" />
  </div>
</template>

<style scoped></style>
